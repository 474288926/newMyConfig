<template>
  <div
    class="shadow-md overflow-auto"
    :style="{ height: `calc(100vh - ${height + 1}px)` }"
  >
    <NavItem :list="modifiedList" />
  </div>
</template>

<script setup lang="ts">
import { ref, toRefs, watch } from 'vue'
import NavItem, { NavItemTypes } from '@/layouts/NavItem.vue'

const props = defineProps<{
  list: Array<NavItemTypes>
  height: number
}>()
const { list, height } = toRefs(props)
// 使用 ref 创建 modifiedList
const modifiedList = ref<Array<NavItemTypes>>([])

watch(list, (newVal) => {
  // 在每个具有 children 属性的项上添加 toggle 属性
  const updatedList = newVal.map((item) => {
    if (item.children && item.children.length > 0) {
      return {
        ...item,
        toggle: false
      }
    }
    return item
  })
  // 更新 modifiedList
  modifiedList.value = updatedList
})
</script>

<style scoped></style>
