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
    // 在这里添加自定义的更新逻辑
    registration.installing?.addEventListener('statechange', (event: any) => {
      if (event.target?.state === 'installed') {
        // 新 Service Worker 安装完成，触发更新
        console.log('有新文件，触发更新')
        event.target.postMessage({ action: 'skipWaiting' })
      }
    })
  },
  onRegisterError() {
    console.log('注册sw失败')
  },
  immediate: true
})
const app: any = createApp(App)
// 在应用程序挂载之前调用初始化函数
app.provide('router', router)
app.provide('Cookies', Cookies)
// eslint-disable-next-line no-restricted-syntax
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.use(ElementPlus)

app.use(router).use(pinia).use(importAll).mount('#app')
