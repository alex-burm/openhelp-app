<template>
    <header>
        <a href="#" class="back-link">← Back</a>
        <h1>OpenHelp</h1>
    </header>
    <h2>Live chat {{ connectionStore.isConnected ? 'yes' : 'no' }}</h2>
</template>

<script setup>
import {useConnectionStore} from '@public/stores/ConnectionStore'

const connectionStore = useConnectionStore()
</script>

<style scoped>
header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
}

.back-link {
    text-decoration: none;
    color: #333;
}

h1 {
    margin: 0;
    font-size: 24px;
}
</style>
