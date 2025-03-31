import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
    const name = ref('')
    const email = ref('')

    function init({name: n, email: e}) {
        name.value = n || ''
        email.value = e || ''
    }

    return {name, email, init}
})
