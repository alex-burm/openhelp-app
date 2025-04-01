<template>
    <UserMessage
        v-if="item.type === 'message'"
        :content="item.content"
        :time="item.time"
        :type="item.subtype"
    />
    <SystemMessage
        v-else-if="item.type === 'system'"
        :text="item.text"
    />
    <UserForm
        v-else-if="item.type === 'form'"
    />
</template>

<script setup>
import UserMessage from './UserMessage.vue'
import UserForm from './UserForm.vue'
import SystemMessage from './SystemMessage.vue'

defineProps({ item: Object })
defineEmits(['submit-user-info'])
</script>
