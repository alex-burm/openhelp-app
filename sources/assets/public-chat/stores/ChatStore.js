import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useChatStore = defineStore('chat', () => {
    const isLoading = ref(true);
    const items = ref([])

    function init({ history = [] } = {}) {
        items.value = history;
    }

    function add(message) {
        const index = items.value.findIndex(item => item.clientId === message.clientId);

        if (index !== -1) {
            items.value[index] = {
                ...items.value[index],
                ...message,
            }
        } else {
            items.value.push({
                ...message,
            })
        }
    }

    return {
        isLoading,
        items,
        init,
        add,
    }
})
