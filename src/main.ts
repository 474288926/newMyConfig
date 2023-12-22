import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import VueVerifyCode from 'vue-verify-code'
import App from '@/App.vue'
import router from '@/router/index'
import pinia from '@/store/index'
import '@/assets/css/index.css'
import 'element-plus/dist/index.css'
import importAll from '@/components/importAll'

const app = createApp(App)
app.component('VueVerifyCode', VueVerifyCode)
app.provide('router', router)
// eslint-disable-next-line no-restricted-syntax
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.use(ElementPlus)

app.use(router).use(pinia).use(importAll).mount('#app')
