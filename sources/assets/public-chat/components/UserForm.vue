<template>
    <form @submit.prevent="handleSubmit">
        <input v-model="name" placeholder="Ваше имя" required/>
        <input v-model="email" placeholder="Email (необязательно)" type="email"/>
        <button type="submit">Начать</button>
    </form>
</template>

<script setup>
import {ref} from 'vue'

const name = ref('')
const email = ref('')

const emit = defineEmits(['submit'])

function handleSubmit() {
    emit('submit', {name: name.value, email: email.value})
}
</script>
