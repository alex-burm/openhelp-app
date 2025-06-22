<script setup>
import DefaultHeader from './components/DefaultHeader.vue';
import ChatItemList from './components/ChatItemList.vue'
import ConnectionError from './components/ConnectionError.vue'
import MessageInput from './components/MessageInput.vue';
import Loading from './components/Loading.vue'
import { ref, onMounted, inject, watch, nextTick } from 'vue';

const customHeaderHtml = inject('customHeaderHtml', '')
const customHeaderElement = inject('customHeaderElement', null)
const container = ref(null)

import { useChatStore } from '@public/stores/ChatStore.js'
const chatStore = useChatStore()

watch(() => chatStore.isLoading, async (isLoading) => {
    if (!isLoading && chatStore.isStarted) {
        await nextTick()

        setTimeout(() => window.dispatchEvent(new CustomEvent('chat:ready')), 500)
    }
})

watch(container, () => {
    if (container.value) {
        container.value.appendChild(customHeaderElement);
        console.log('Header moved into container')
    }
})
</script>

<template>
    <template v-if="chatStore.isStarted">
        <div :class="{ 'chat__loading': chatStore.isLoading }">
            <Loading class="chat__loading" />

            <div class="chat__body">
                <div v-if="customHeaderElement" ref="container" />
                <div v-else-if="customHeaderHtml" v-html="customHeaderHtml" />
                <DefaultHeader v-else />

                <ChatItemList />
                <ConnectionError />
                <MessageInput />
            </div>
        </div>
    </template>
</template>
