<script setup>
defineProps({
    item: Object
})
</script>

<template>
    <li class="date">{{ item.date }}</li>
</template>
