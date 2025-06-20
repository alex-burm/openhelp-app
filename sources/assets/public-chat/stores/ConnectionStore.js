import { defineStore } from 'pinia'
import { reactive } from 'vue'
import { Centrifuge } from 'centrifuge'
import { useChatStore } from '@public/stores/ChatStore'
import { USER_MESSAGE_STATUSES } from "@public/constants";
import { createOutgoingMessage } from "@public/helpers";

export const useConnectionStore = defineStore('connection', () => {
    const state = reactive({
        isConnected: false,
        isReconnected: false,
        centrifuge: null,
        subscription: null,
        sendUrl: null,
        tokenUrl: null,
        historyUrl: null,
        channelUrl: null,
        channel: null,
        token: null,
    })

    const chat = useChatStore()

    function init(defaults = {}) {
        Object.assign(state, {
            socketUrl: defaults.socketUrl,
            sendUrl: defaults.sendUrl,
            historyUrl: defaults.historyUrl,
            tokenUrl: defaults.tokenUrl,
            channelUrl: defaults.channelUrl,
            channel: defaults.channel,
        })
    }

    async function connect(channel) {
        chat.isStarted = true;
        state.channel = channel ?? state.channel ?? await getChannel();

        state.centrifuge = new Centrifuge(state.socketUrl, {
            getToken: createGetTokenFunction(),
        })

        state.centrifuge.on('connecting', () => {
            state.isConnected = false
            chat.isLoading = true
        });
        state.centrifuge.on('connected', async () => {
            //chat.items = await getHistory();
            chat.isLoading = false;
            state.isConnected = true
        })
        state.centrifuge.on('disconnected', () => {
            state.isConnected = false;
            state.isReconnected = true;
        })

        state.centrifuge.on('subscribed', () => {
            console.log('subscribed')
            chat.isLoading = false;
        })

        state.centrifuge.on('state', (state) => {
            console.log('state', state)
            // chat.isLoading = false;
        })

        state.centrifuge.connect()

        // state.subscription = state.centrifuge.newSubscription(state.channel);
        // state.subscription.on('publication', ctx => {
        //     chat.add(ctx.data)
        // })
    }

    function createGetTokenFunction()
    {
        return async () => {
            const response = await fetch(state.tokenUrl + '?channel=' + state.channel, {
                headers: { 'Content-Type': 'application/json' },
            });
            const data = await response.json();

            // store token to use it in the next requests
            state.token = data.token;

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

        const response = await fetch(state.channelUrl, {
            headers: { 'Content-Type': 'application/json' },
        });

        const data = await response.json();
        channel = data.channel;

        localStorage.setItem(key, JSON.stringify({ channel }));
        return channel;
    }

    async function getHistory()
    {
        const response = await fetch(state.historyUrl + '?channel=' + state.channel, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + state.token,
            },
        });

        const { history } = await response.json();
        return history;
    }

    function sendMessage(message)
    {
        chat.add(message)

        setTimeout(() => {
            if (message.status === USER_MESSAGE_STATUSES.SENDING) {
                message.status = USER_MESSAGE_STATUSES.WAITING;
                chat.add(message)
            }
        }, 2000);

        fetch(state.sendUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + state.token,
            },
            body: JSON.stringify({
                id: message.id,
                text: message.text,
                channel: state.channel,
                datetime: new Date().toISOString(),
            })
        }).then(async response => {
            const json = await response.json();
            if (!response.ok) {
                throw new Error(json?.message)
            }

            message.status = USER_MESSAGE_STATUSES.SENT;
            chat.add(message)
        }).catch(e => {
            message.status = USER_MESSAGE_STATUSES.FAILED;
            chat.add(message)
        });
    }

    async function subscribe(value) {
        state.centrifuge ?? await connect();

        chat.isLoading = true;
        if (state.subscription) {
            state.subscription.unsubscribe()
            state.centrifuge.removeSubscription(state.subscription)
            state.subscription = null
        }

        state.channel = value ?? state.channel;

        const history = await getHistory()

        chat.init({ history })

        state.subscription = state.centrifuge.newSubscription(state.channel);
        state.subscription.on('publication', ctx => {
            chat.add(ctx.data)
        })

        state.subscription.subscribe()
        chat.isLoading = false;
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
        if (state.centrifuge) {
            state.centrifuge.disconnect()
        }
        state.isConnected = false
    }

    return {
        isConnected: state.isConnected,
        isReconnected: state.isReconnected,
        init,
        send,
        resend,
        subscribe,
        disconnect,
    }
})
