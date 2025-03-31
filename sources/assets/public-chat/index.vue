<script setup>
import Header from './components/Header.vue';
import ChatItem from './components/ChatItem.vue'
import Loading from './components/Loading.vue'
import { ref, onMounted } from 'vue';

import MessageInput from './components/MessageInput.vue';
import { useChatStore } from '@public/stores/ChatStore'
import { useConnectionStore } from '@public/stores/ConnectionStore'

const isLoading = ref(true);

onMounted(() => {
    setTimeout(() => {
        isLoading.value = false;
    }, 2000);
});

const chat = useChatStore()

</script>

<template>
    <div class="chat-container">
        <Header/>
        <template v-if="isLoading">
            <Loading/>
        </template>
        <template v-else>
            <div class="messages">
                <ChatItem
                    v-for="(item, index) in chat.items"
                    :key="index"
                    :item="item"
                />
            </div>
            <MessageInput/>
        </template>
    </div>
</template>

<style scoped>
.chat-container {
    max-width: 600px;
    margin: 20px auto;
    padding: 20px;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.loading-container {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 16px;
    background: #F5F5F5;
}

.loading-spinner {
    width: 40px;
    height: 40px;
    border: 3px solid #eee;
    border-radius: 50%;
    border-top-color: #666;
    animation: spin 1s linear infinite;
}

.loading-text {
    color: #666;
    font-size: 14px;
}

@keyframes spin {
    to {
        transform: rotate(360deg);
    }
}

h1 {
    margin: 0 0 20px;
    font-size: 20px;
    color: red;
}

.messages {
    max-height: 300px;
    overflow-y: auto;
    margin-bottom: 10px;
    border: 1px solid #eee;
    padding: 10px;
    border-radius: 4px;
    background-color: #f1f1f1;
    display: flex;
    flex-direction: column;
}
</style>
