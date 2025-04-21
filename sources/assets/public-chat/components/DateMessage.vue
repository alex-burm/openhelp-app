<script setup>
defineProps({
    item: Object
})
</script>

<template>
    <li class="system">{{ item.date }}</li>
</template>
