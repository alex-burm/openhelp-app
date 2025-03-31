import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { useUserStore } from "@public/stores/UserStore";
import { useChatStore } from "@public/stores/ChatStore";
import { useConnectionStore } from "@public/stores/ConnectionStore";
import index from './index.vue'

function init(config) {
    const app = createApp(index)

    app.use(createPinia())

    const user = useUserStore()
    const chat = useChatStore()
    const conn = useConnectionStore()

    user.init(config.user)
    chat.init(config.chat)
    conn.init(config.connection)

    app.mount(document.querySelector(config?.target || '#app'))
}

window.OpenHelpChat = {
    init,
}

//
// import {createApp} from 'vue';
// import {createPinia} from 'pinia'
// import app from './index.vue';
//
// createApp(app)
//     .use(createPinia())
//     .mount('#app')
