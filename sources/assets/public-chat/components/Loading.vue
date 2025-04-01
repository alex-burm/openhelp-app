<template>
    <div class="loading-container">
        <div class="loading-spinner"></div>
        <p class="loading-text">Please wait, we are loading the chat...</p>
    </div>
</template>

<style scoped>
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
</style>
