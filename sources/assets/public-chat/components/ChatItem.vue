<script setup>
import UserMessage from './UserMessage.vue'
import UserForm from './UserForm.vue'
import SystemMessage from './SystemMessage.vue'
import { CHAT_ITEM_TYPES } from '@public/constants/chatItemTypes'
import DateMessage from "@public/components/DateMessage.vue";

defineProps({ item: Object })
</script>

<template>
    <UserMessage
        v-if="item.type === CHAT_ITEM_TYPES.MESSAGE"
        :text="item.text"
        :time="item.time"
        :type="item.subtype"
        :showAvatar="item.showAvatar"
    />
    <SystemMessage
        v-else-if="item.type === CHAT_ITEM_TYPES.SYSTEM"
        :text="item.text"
    />
    <DateMessage
        v-else-if="item.type === CHAT_ITEM_TYPES.DATE"
        :text="item.date"
    />
    <UserForm
        v-else-if="item.type === CHAT_ITEM_TYPES.FORM"
    />
</template>
