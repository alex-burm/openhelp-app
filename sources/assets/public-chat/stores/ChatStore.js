import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useChatStore = defineStore('chat', () => {
    const items = ref([
        // { type: 'form' },
        // {type: 'system', text: 'Request #00000-0000-0000-00000'},
        // {type: 'message', content: 'Привет!', time: '12:00', subtype: 'incoming'},
        // {type: 'message', content: 'Здравствуйте!', time: '12:01', subtype: 'outgoing'},
        // {type: 'system', text: 'The request was resolved.'}
    ])

    function init({ history = [] } = {}) {
        // console.log(history)
        items.value = history;
    }

    function add(content, subtype = 'outgoing') {
        items.value.push({
            content,
            type: "message",
            time: new Date().toLocaleTimeString(),
            subtype
        })
    }

    return {
        items,
        init,
        add,
    }
})
