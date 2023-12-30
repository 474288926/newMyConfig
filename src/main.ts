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
  onRegisteredSW(swScriptUrl, registration: any) {
    console.log('注册sw成功')
    console.log('Service Worker 脚本 URL:', swScriptUrl)
    console.log('Service Worker 注册信息:', registration)
    // 检测是否有新版本
    registration
      .update()
      .then(() => {
        console.log('Service Worker 更新检查完成')
      })
      .catch((error: any) => {
        console.error('Service Worker 更新检查失败:', error)
      })
  },
  onRegisterError() {
    console.log('注册sw失败')
  },
  immediate: true
})
