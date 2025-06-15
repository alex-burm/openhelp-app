import { defineStore } from 'pinia'
import { ref } from 'vue'
import { Centrifuge } from 'centrifuge'
import { useChatStore } from '@public/stores/ChatStore'
import { USER_MESSAGE_STATUSES } from "@public/constants";
import { createOutgoingMessage } from "@public/helpers";

export const useConnectionStore = defineStore('connection', () => {
    const isConnected = ref(false)
    const isReconnected = ref(false)
    const centrifuge = ref(null)
    const subscription = ref(null)
    const sendUrl = ref(null)
    const tokenUrl = ref(null)
    const historyUrl = ref(null)
    const channelUrl = ref(null)
    const channel = ref(null)
    const token = ref(null)

    async function init(defaults = {}) {
        let options = {
            socketUrl: null,
            sendUrl: null,
            tokenUrl: null,
            historyUrl: null,
            channelUrl: null,
            ...defaults,
        }

        sendUrl.value = options.sendUrl
        tokenUrl.value = options.tokenUrl
        historyUrl.value = options.historyUrl
        channelUrl.value = options.channelUrl

        channel.value = await getChannel();

        centrifuge.value = new Centrifuge(options.socketUrl, {
            getToken: createGetTokenFunction(),
        })

        centrifuge.value.on('connecting', () => isConnected.value = false);
        centrifuge.value.on('connected', async () => {
            useChatStore().items = await getHistory();

            isConnected.value = true
            useChatStore().isLoading = false;
        })
        centrifuge.value.on('disconnected', () => {
            isConnected.value = false;
            isReconnected.value = true;
        })

        /*
        centrifuge.value.on('state', (ctx) => {
            console.log('[state]', ctx)
        })
        */

        centrifuge.value.connect()

        subscription.value = centrifuge.value.newSubscription(channel.value);
        subscription.value.on('publication', ctx => {
            useChatStore().add(ctx.data)
        })
    }

    function createGetTokenFunction()
    {
        return async () => {
            const response = await fetch(tokenUrl.value + '?channel=' + channel.value, {
                headers: { 'Content-Type': 'application/json' },
            });
            const data = await response.json();

            // store token to use it in the next requests
            token.value = data.token;

            return data.token;
        }
    }

    async function getChannel()
    {
        const key = '__OPEN-HELP__';
        let { channel } = JSON.parse(localStorage.getItem(key) || '{}');
        if (channel) {
            return channel;
        }

        const response = await fetch(channelUrl.value, {
            headers: { 'Content-Type': 'application/json' },
        });

        const data = await response.json();
        channel = data.channel;

        localStorage.setItem(key, JSON.stringify({ channel }));
        return channel;
    }

    async function getHistory()
    {
        const response = await fetch(historyUrl.value + '?channel=' + channel.value, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token.value,
            },
        });

        const { history } = await response.json();
        return history;
    }

    function sendMessage(message)
    {
        useChatStore().add(message)

        setTimeout(() => {
            if (message.status === USER_MESSAGE_STATUSES.SENDING) {
                message.status = USER_MESSAGE_STATUSES.WAITING;
                useChatStore().add(message)
            }
        }, 2000);

        fetch(sendUrl.value, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token.value,
            },
            body: JSON.stringify({
                id: message.id,
                text: message.text,
                channel: channel.value,
                datetime: new Date().toISOString(),
            })
        }).then(async response => {
            const json = await response.json();
            if (!response.ok) {
                throw new Error(json?.message)
            }

            message.status = USER_MESSAGE_STATUSES.SENT;
            useChatStore().add(message)
        }).catch(e => {
            message.status = USER_MESSAGE_STATUSES.FAILED;
            useChatStore().add(message)
        });
    }

    async function switchChannel(value) {
        if (subscription.value) {
            subscription.value.unsubscribe()
            subscription.value = null
        }

        channel.value = value

        const chatStore = useChatStore()
        const history = await getHistory()

        chatStore.init({ history })

        subscription.value = centrifuge.value.newSubscription(channel.value);
        subscription.value.on('publication', ctx => {
            useChatStore().add(ctx.data)
        })

        subscription.value.subscribe()
    }

    function send(text) {
        const message = createOutgoingMessage(text);
        sendMessage(message);
    }

    function resend(message) {
        message.status = USER_MESSAGE_STATUSES.SENDING;
        sendMessage(message);
    }

    function disconnect() {
        if (centrifuge.value) {
            centrifuge.value.disconnect()
        }
        isConnected.value = false
    }

    return {
        isConnected,
        isReconnected,
        init,
        send,
        resend,
        switchChannel,
        disconnect,
    }
})
