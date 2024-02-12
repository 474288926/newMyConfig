import { inject } from 'vue'

// inject 工具
export const useInject = () => {
  const cookies: any = inject('cookies')
  const router: any = inject('router')
  const gsap: any = inject('gsap')
  const nprogress: any = inject('nprogress')
  const request: any = inject('request')
  const introJs: any = inject('introJs')
  const echarts: any = inject('echarts')
  return {
    cookies,
    router,
    gsap,
    nprogress,
    request,
    introJs,
    echarts
  }
}

export default {
  useInject
}
