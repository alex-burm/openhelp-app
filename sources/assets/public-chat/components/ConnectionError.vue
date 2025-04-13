<script setup>
import { computed } from 'vue'
import { useConnectionStore } from '@public/stores/ConnectionStore'
import { useChatStore } from '@public/stores/ChatStore.js'
const connectionStore = useConnectionStore()
const chatStore = useChatStore()

const shouldShowLostConnection = computed(() =>
    false === chatStore.isLoading
    && (
        false === connectionStore.isConnected
        && true === connectionStore.isReconnected
    )
)
</script>

<template>
    <div v-if="shouldShowLostConnection" class="lost-connection">
        <i class="icon-weak-connection"></i>
        The internet connection was lost.
    </div>
</template>

