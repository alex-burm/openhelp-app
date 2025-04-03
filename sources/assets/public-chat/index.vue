<script setup>
import DefaultHeader from './components/DefaultHeader.vue';
import ChatItemList from './components/ChatItemList.vue'
import ConnectionError from './components/ConnectionError.vue'
import MessageInput from './components/MessageInput.vue';
import Loading from './components/Loading.vue'
import { ref, onMounted, inject } from 'vue';

const customHeaderHtml = inject('customHeaderHtml', '')

import { useChatStore } from '@public/stores/ChatStore.js'
const chatStore = useChatStore()
</script>


<template>
    <template v-if="chatStore.isLoading">
        <Loading/>
    </template>

    <template v-else>
        <div v-if="customHeaderHtml" v-html="customHeaderHtml" />
        <template v-else>
            <DefaultHeader />
        </template>
        <ChatItemList />
        <ConnectionError />
        <MessageInput/>
    </template>
</template>
