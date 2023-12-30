import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import Cookies from 'js-cookie'
import { registerSW } from 'virtual:pwa-register'
import App from '@/App.vue'
import router from '@/router/index'
import pinia from '@/store/index'
import '@/assets/css/index.css'
import 'element-plus/dist/index.css'
import importAll from '@/components/importAll'

const app = createApp(App)
app.provide('router', router)
app.provide('Cookies', Cookies)
// eslint-disable-next-line no-restricted-syntax
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.use(ElementPlus)

app.use(router).use(pinia).use(importAll).mount('#app')
registerSW({
  onNeedRefresh() {
    console.log('检测到新版本')
  },
  onOfflineReady() {
    console.log('处于离线状态')
  },
  onRegisteredSW() {
    console.log('注册sw成功')
  },
  onRegisterError() {
    console.log('注册sw失败')
  },
  immediate: true
})
