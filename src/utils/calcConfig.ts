import { computed } from 'vue'

const calcConfig = computed(() => (configList: any[], obj: any) => {
  const newConfig = configList.reduce((per, cur) => {
    if (cur.vif && cur.vif.length > 0) {
      const is = cur.vif.every((p: any) => p.value === obj[p.key])
      if (is) {
        return per.concat(cur)
      }
      return per
    }
    return per.concat(cur)
  }, [])
  return newConfig
})

export default calcConfig
