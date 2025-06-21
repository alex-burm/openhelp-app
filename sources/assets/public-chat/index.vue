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
    if (!isLoading) {
        await nextTick()
        const event = new CustomEvent('chat:ready')
        window.dispatchEvent(event)
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
        <template v-if="chatStore.isLoading">
            <Loading/>
        </template>

        <template v-else>
            <div v-if="customHeaderElement" ref="container" />
            <div v-else-if="customHeaderHtml" v-html="customHeaderHtml" />
            <DefaultHeader v-else />

            <ChatItemList />
            <ConnectionError />
            <MessageInput />
        </template>
<!--        -->
<!--        <template v-else>-->
<!--            <div v-if="customHeaderHtml" v-html="customHeaderHtml" />-->
<!--            <template v-else>-->
<!--                <DefaultHeader />-->
<!--            </template>-->
<!--            <ChatItemList />-->
<!--            <ConnectionError />-->
<!--            <MessageInput/>-->
<!--        </template>-->
    </template>
</template>
