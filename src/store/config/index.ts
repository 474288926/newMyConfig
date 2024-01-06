import { defineStore } from 'pinia'
import { ref } from 'vue'

const useConfigStore = defineStore('config', () => {
  const isLoading = ref(false) // 全局loading

  const setLoading = (val: boolean) => {
    isLoading.value = val
  }
  const isCollapse = ref(false) // 控制nav
  const toggleCollapse = (val?: boolean) => {
    if (val) {
      isCollapse.value = val
    } else {
      isCollapse.value = !isCollapse.value
    }
  }
  return {
    isLoading,
    setLoading,
    isCollapse,
    toggleCollapse
  }
})

export default useConfigStore
