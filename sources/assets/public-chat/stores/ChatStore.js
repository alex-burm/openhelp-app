import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import { USER_MESSAGE_STATUSES } from "@public/constants";

export const useChatStore = defineStore('chat', () => {
    const isLoading = ref(false);
    const isStarted = ref(false);
    const items = ref([])

    function init({ history = [] } = {}) {
        items.value = history;
    }

    function add(message) {
        let index = -1;

        const clientId = message.clientId || message.id || null;
        const serverId = message.serverId || null;

        if (clientId) {
            index = items.value.findIndex(
                item => item.id === clientId || item.clientId === clientId
            );
        }

        if (index === -1 && serverId) {
            index = items.value.findIndex(item => item.id === serverId);
        }

        if (index !== -1) {
            const existing = items.value[index];

            items.value[index] = {
                ...existing,
                ...message,
                clientId: clientId,
                id: serverId || clientId,
            };
        } else {
            items.value.push({
                ...message,
                clientId: clientId,
                id: serverId || clientId,
            });
        }
    }

    return {
        isStarted,
        isLoading,
        items,
        init,
        add,
    }
})
