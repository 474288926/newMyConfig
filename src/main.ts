import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/router/index'
import pinia from '@/store/index'
import '@/style/index.css'

const app = createApp(App)
app.provide('router', router)
app.use(router).use(pinia).mount('#app')
