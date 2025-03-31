import { defineStore } from 'pinia'
import { ref } from 'vue'
import { USER_MESSAGE_TYPES } from "@public/constants/UserMessageTypes";
import { CHAT_ITEM_TYPES } from "@public/constants/ChatItemTypes";

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

    function add(text, subtype = USER_MESSAGE_TYPES.OUTGOING) {
        items.value.push({
            text,
            type: CHAT_ITEM_TYPES.MESSAGE,
            time: new Date().toLocaleTimeString([], {
                hour: '2-digit',
                minute: '2-digit'
            }),
            subtype
        })
    }

    return {
        items,
        init,
        add,
    }
})
