import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import VueVerifyCode from 'vue-verify-code'
import Cookies from 'js-cookie'
import { useRegisterSW } from 'virtual:pwa-register/vue'
import App from '@/App.vue'
import router from '@/router/index'
import pinia from '@/store/index'
import '@/assets/css/index.css'
import 'element-plus/dist/index.css'
import importAll from '@/components/importAll'

const { updateServiceWorker } = useRegisterSW({
  onRegistered(registration: any) {
    if (registration) {
      registration.addEventListener('updatefound', () => {
        registration.installing.addEventListener('statechange', () => {
          if (
            registration.installing.state === 'installed' &&
            navigator.serviceWorker.controller
          ) {
            navigator.serviceWorker.controller.dispatchEvent(
              new Event('controllerchange')
            )
          }
        })
      })

      navigator.serviceWorker.addEventListener('controllerchange', () => {
        window.location.reload()
      })
    }
  }
})

const app = createApp(App)
app.component('VueVerifyCode', VueVerifyCode)
app.provide('router', router)
app.provide('Cookies', Cookies)
// eslint-disable-next-line no-restricted-syntax
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.use(ElementPlus)

app.use(router).use(pinia).use(importAll).mount('#app')

// 手动执行 Service Worker 更新
updateServiceWorker()
