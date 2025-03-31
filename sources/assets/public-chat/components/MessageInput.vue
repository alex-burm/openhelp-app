<script setup>
import { ref } from 'vue'
import { useChatStore } from '@public/stores/ChatStore'

const textarea = ref(null)
const message = ref('')
const chat = useChatStore()

function sendMessage() {
    if (message.value.trim().length > 0) {
        chat.add(message.value)
        message.value = ''
    }

    autoResize();
}

function handleKeyDown(e) {
    if (13 !== e.keyCode) {
        return
    }

    const isMeta = e.metaKey || e.ctrlKey
    if (!isMeta && !e.shiftKey) {
        e.preventDefault()
        sendMessage()
    }
}

function autoResize() {
    textarea.value.parentNode.dataset.replicatedValue = message.value
}
</script>

<template>
    <div class="send">
        <div class="send__left">
            <div class="send__left-inner">
                <div class="autoresizable" data-replicated-value="">
                    <textarea
                        ref="textarea"
                        v-model="message"
                        rows="1"
                        name="text"
                        @keydown="handleKeyDown"
                        @input="autoResize"
                        placeholder="Write your message..."
                    ></textarea>
                </div>
            </div>
        </div>
        <div class="send__actions">
            <!--
            <button type="button" class="btn__attach">
                <i class="icon-attach"></i>
            </button>
            -->
            <button type="button" class="btn__send" @click="sendMessage" :disabled="!message.trim()">
                <i class="icon-send"></i>
            </button>
        </div>
    </div>
</template>
