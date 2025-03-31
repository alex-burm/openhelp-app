<script setup>
import { onMounted, onUpdated, ref, nextTick } from 'vue'
import ChatItem from './ChatItem.vue'
import { useChatStore } from '@public/stores/chatStore'
import { CHAT_ITEM_TYPES } from "@public/constants/ChatItemTypes";

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
        const messageDate = new Date(item.time).toDateString()

        if (messageDate !== lastDate) {
            result.push({
                type: CHAT_ITEM_TYPES.DATE,
                date: formatDateForDivider(item.time)
            })
            lastDate = messageDate
        }

        const showAvatar = item.subtype !== lastAuthor
        result.push({
            ...item,
            showAvatar
        })
        lastAuthor = item.subtype
    }

    return result
}

function formatDateForDivider(dateStr) {
    const date = new Date(dateStr)
    return date.toLocaleDateString(undefined, {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    })
}
</script>

<template>
    <ul class="users" ref="container">
        <ChatItem
            v-for="(item, index) in computeItems(chat.items)"
            :key="index"
            :item="item"
        />
    </ul>
</template>
