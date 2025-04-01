<template>
    <div class="chat-input">
        <input v-model="message" @keyup.enter="sendMessage" placeholder="Write your message..."/>
        <button @click="sendMessage" :disabled="!message.trim()">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" stroke-width="2">
                <path d="M22 2L11 13"/>
                <path d="M22 2L15 22L11 13L2 9L22 2Z"/>
            </svg>
        </button>
    </div>
</template>

<script setup>
import {ref} from 'vue'
import {useChatStore} from '@public/stores/ChatStore'

const message = ref('')
const chat = useChatStore()

function sendMessage() {
    if (message.value.trim().length > 0) {
        chat.addMessage(message.value)
        message.value = ''
    }
}
</script>

<style scoped>
.chat-input {
    display: flex;
    gap: 12px;
    padding: 0px;
    background: white;
    border-top: 1px solid #eee;
}

input {
    flex: 1;
    padding: 12px;
    border: 1px solid #eee;
    border-radius: 8px;
    outline: none;
    font-size: 14px;
    color: #1A1A1A;
}

input::placeholder {
    color: #666;
}

input:focus {
    border-color: #0066FF;
}

button {
    background: none;
    border: none;
    color: #0066FF;
    cursor: pointer;
    padding: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
}

button:disabled {
    color: #ccc;
    cursor: not-allowed;
}
</style>
