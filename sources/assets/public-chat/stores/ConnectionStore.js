import { defineStore } from 'pinia'
import { ref } from 'vue'
import { Centrifuge } from 'centrifuge'
import { useChatStore } from '@public/stores/ChatStore'

export const useConnectionStore = defineStore('connection', () => {
    const isConnected = ref(false)
    const centrifuge = ref(null)
    const subscription = ref(null)

    function init({url, channel, token, getToken}) {

        const options = {
            ...(token && { token }),
            ...(getToken && { getToken })
        }

        centrifuge.value = new Centrifuge(url, options)

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

        subscription.value = centrifuge.value.newSubscription(channel);
        subscription.value.on('publication', ctx => {
            // const { content, subtype } = ctx.data
            // console.log('chat', ctx)
            useChatStore().add(ctx.data.text, 'outgoing')
        })
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
        disconnect,
    }
})
