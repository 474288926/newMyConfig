import { defineStore } from 'pinia'
import { ref } from 'vue'
import { useInject } from '@/composables/useInject'

const useConfigStore = defineStore('config', () => {
  const { cookies } = useInject()
  const isLoading = ref(false) // 全局loading

  const setLoading = (val: boolean) => {
    isLoading.value = val
  }
  const isCollapse = ref<boolean>(
    !!(cookies.get('isCollapse') && cookies.get('isCollapse') === 'true')
  ) // 控制nav
  const toggleCollapse = (val?: boolean) => {
    if (val) {
      isCollapse.value = val
    } else {
      isCollapse.value = !isCollapse.value
    }
    cookies.set('isCollapse', isCollapse.value)
  }

  const isIntro = ref<boolean>(
    !!(cookies.get('isIntro') && cookies.get('isIntro') === 'true')
  )
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
