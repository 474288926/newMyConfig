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

const setListToggle = (lis: any, level: number = 0) =>
  lis.reduce((per: any, cur: any) => {
    if (cur.children && cur.children.length > 0) {
      return [
        ...per,
        {
          ...cur,
          toggle: false,
          level,
          children: setListToggle(cur.children, level + 1)
        }
      ]
    }
    return [...per, { ...cur, level }]
  }, [])

watch(
  list,
  (newVal) => {
    // 在每个具有 children 属性的项上添加 toggle 属性
    const updatedList = setListToggle(newVal)
    // 更新 modifiedList
    modifiedList.value = updatedList
    console.log(modifiedList.value)
  },
  { deep: true, immediate: true }
)
</script>

<style scoped></style>
