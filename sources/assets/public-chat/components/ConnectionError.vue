<script setup>
import { useConnectionStore } from '@public/stores/ConnectionStore'
import { useChatStore } from '@public/stores/ChatStore.js'
const connectionStore = useConnectionStore()
const chatStore = useChatStore()
</script>

<template>
    <div v-if="false === chatStore.isLoading && false === connectionStore.isConnected" class="lost-connection">
        <i class="icon-weak-connection"></i>
        The internet connection was lost.
    </div>
</template>

