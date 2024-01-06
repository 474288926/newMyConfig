import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import cookies from 'js-cookie'
import { registerSW } from 'virtual:pwa-register'
import { gsap } from 'gsap'
import NProgress from 'nprogress'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import introJs from 'intro.js'
import App from '@/App.vue'
import router from '@/router/index'
import pinia from '@/store/index'
import '@/assets/css/index.css'
import 'element-plus/dist/index.css'
import '@/assets/css/index.scss'
import importAll from '@/components/importAll'
import 'nprogress/nprogress.css'
import request from '@/api/requiest'
import 'intro.js/introjs.css'

NProgress.configure({ showSpinner: false })
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
app.provide('cookies', cookies)
app.provide('gsap', gsap)
app.provide('nprogress', NProgress)
app.provide('request', request)
app.provide('introJs', introJs)
// eslint-disable-next-line no-restricted-syntax
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.use(ElementPlus, {
  locale: zhCn
})

app.use(router).use(pinia).use(importAll).mount('#app')
