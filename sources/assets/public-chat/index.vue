<script setup>
import DefaultHeader from './components/DefaultHeader.vue';
import ChatItemList from './components/ChatItemList.vue'
import Loading from './components/Loading.vue'
import { ref, onMounted, inject } from 'vue';

import MessageInput from './components/MessageInput.vue';

const customHeaderHtml = inject('customHeaderHtml', '')

// const props = defineProps({
//     customHeaderHtml: String
// })

console.log('[index.vue] customHeaderHtml:', customHeaderHtml)


// console.log(customHeaderHtml.value)
//const isLoading = ref(true);
// onMounted(() => {
//     setTimeout(() => {
//         isLoading.value = false;
//     }, 2000);
// });

const isLoading = ref(false);
</script>

<template>
    <div class="chat">

        <div v-if="customHeaderHtml" v-html="customHeaderHtml" />
        <template v-else>
            <DefaultHeader />
        </template>

        <!--
        <template v-if="$slots.header">
            <slot name="header" />
        </template>
        <template v-else>
            <DefaultHeader />
        </template>
        -->
        <!--
        <Header/>
        -->
        <template v-if="isLoading">
            <Loading/>
        </template>

        <template v-else>
            <ChatItemList />
            <MessageInput/>
        </template>
    </div>
</template>
