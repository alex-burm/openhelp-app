<script setup>
import { onMounted, onUpdated, ref, nextTick } from 'vue'
import ChatItem from './ChatItem.vue'
import { useChatStore } from '@public/stores/chatStore'
import { CHAT_ITEM_TYPES } from "@public/constants";

const container = ref(null)
const chat = useChatStore()

onUpdated(() => {
    nextTick(() => scrollToBottom())
})
onMounted(() => {
    nextTick(() => scrollToBottom())
})

function scrollToBottom() {
    if (container.value) {
        container.value.scrollTop = container.value.scrollHeight
    }
}

function computeItems(chatItems) {
    const result = []
    let lastAuthor = null
    let lastDate = null

    for (let i = 0; i < chatItems.length; i++) {
        const item = chatItems[i]
        const messageDate = new Date(item.datetime).toDateString()

        if (messageDate !== lastDate) {
            result.push({
                type: CHAT_ITEM_TYPES.DATE,
                date: formatDate(item.datetime)
            })
            lastDate = messageDate
        }

        const showAvatar = item.direction !== lastAuthor
        result.push({
            ...item,
            showAvatar,
            time: formatTime(item.datetime)
        })
        lastAuthor = item.direction
    }

    return result
}

function formatDate(datetime) {
    const date = new Date(datetime)
    return date.toLocaleDateString(undefined, {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    })
}

function formatTime(datetime) {
    const date = new Date(datetime)
    return date.toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit'
    })
}

</script>

<template>
    <ul class="messages" ref="container">
        <ChatItem
            v-for="(item, index) in computeItems(chat.items)"
            :key="index"
            :item="item"
        />
    </ul>
</template>
