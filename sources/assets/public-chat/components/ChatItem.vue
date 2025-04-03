<script setup>
import UserMessage from './UserMessage.vue'
import UserForm from './UserForm.vue'
import SystemMessage from './SystemMessage.vue'
import { CHAT_ITEM_TYPES } from '@public/constants'
import DateMessage from "@public/components/DateMessage.vue";

defineProps({
    item: {
        type: Object,
        required: true,
    }
})
</script>

<template>
    <UserMessage
        v-if="CHAT_ITEM_TYPES.MESSAGE === item.type"
        :item="item"
    />
    <SystemMessage
        v-if="CHAT_ITEM_TYPES.SYSTEM === item.type"
        :item="item"
    />
    <!--
    <DateMessage
        v-else-if="item.type === CHAT_ITEM_TYPES.DATE"
        :item="item"
    />
    <UserForm
        v-else-if="item.type === CHAT_ITEM_TYPES.FORM"
        :item="item"
    />
    -->
</template>
