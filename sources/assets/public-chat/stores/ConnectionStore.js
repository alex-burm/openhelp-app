import { defineStore } from 'pinia'
import { ref } from 'vue'
import { Centrifuge } from 'centrifuge'
import { useChatStore } from '@public/stores/ChatStore'
import { USER_MESSAGE_DIRECTION, USER_MESSAGE_STATUSES } from "@public/constants";
import { createOutgoingMessage } from "@public/helpers";

export const useConnectionStore = defineStore('connection', () => {
    const isConnected = ref(false)
    const centrifuge = ref(null)
    const subscription = ref(null)
    const sendUrl = ref(null)

    function init(options = {}) {
        options = {
            socketUrl: null,
            sendUrl: null,
            channel: null,
            token: null,
            getToken: null,
            ...options,
        }

        const centrifugoOptions = {
            ...(options.token && { token: options.token }),
            ...(options.getToken && { getToken: options.getToken })
        }

        sendUrl.value = options.sendUrl
        centrifuge.value = new Centrifuge(options.socketUrl, centrifugoOptions)

        centrifuge.value.on('connecting', () => isConnected.value = false);
        centrifuge.value.on('connected', () => {
            console.log('connected')
            isConnected.value = true
        })
        centrifuge.value.on('disconnected', () => {
            console.log('disconnected');
            isConnected.value = false;
        })

        centrifuge.value.on('state', (ctx) => {
            console.log('[state]', ctx)
        })

        centrifuge.value.connect()

        subscription.value = centrifuge.value.newSubscription(options.channel);
        subscription.value.on('publication', ctx => {

            console.log('publication', ctx)
            // const { content, direction } = ctx.data
            // console.log('chat', ctx)
            // useChatStore().add({
            //     text: ctx.data.text,
            //     direction: USER_MESSAGE_DIRECTION.INCOMING
            // })
        })
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
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(message)
        })
            .then(async response => {
                const json = await response.json();
                if (!response.ok) {
                    throw new Error(json?.message)
                }

                message.status = USER_MESSAGE_STATUSES.SENT;
                useChatStore().add(message)
            })
            .catch(e => {
                message.status = USER_MESSAGE_STATUSES.FAILED;
                useChatStore().add(message)
            });
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
        init,
        send,
        resend,
        disconnect,
    }
})
