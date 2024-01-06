import { defineStore } from 'pinia'
import { inject, ref } from 'vue'

const useConfigStore = defineStore('config', () => {
  const cookies: any = inject('cookies')
  const isLoading = ref(false) // 全局loading

  const setLoading = (val: boolean) => {
    isLoading.value = val
  }
  const isCollapse = ref<boolean>(Boolean(cookies.get('isCollapse'))) // 控制nav
  const toggleCollapse = (val?: boolean) => {
    if (val) {
      isCollapse.value = val
    } else {
      isCollapse.value = !isCollapse.value
    }
    cookies.set('isCollapse', isCollapse.value)
  }

  const isIntro = ref<boolean>(Boolean(cookies.get('isIntro')))
  const setIntro = () => {
    isIntro.value = true
    cookies.set('isIntro', isIntro.value)
  }
  return {
    isLoading,
    setLoading,
    isCollapse,
    toggleCollapse,
    isIntro,
    setIntro
  }
})

export default useConfigStore
