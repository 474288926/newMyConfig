import { defineStore } from 'pinia'
import { ref } from 'vue'

const useConfigStore = defineStore('config', () => {
  const isLoading = ref(false)
  const setLoading = (val: boolean) => {
    isLoading.value = val
  }
  return {
    isLoading,
    setLoading
  }
})

export default useConfigStore
