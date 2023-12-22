/// <reference types="vite/client" />

declare module 'vue-verify-code' {
  const VueVerifyCode: any
  export default VueVerifyCode
}
// 声明 importAll.js 模块的类型
declare module '@/components/importAll' {
  // 导入的模块类型
  import { App } from 'vue'

  // importAll 函数的类型声明
  // eslint-disable-next-line no-unused-vars
  export default function importAll(app: App): void
}
