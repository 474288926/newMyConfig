<template>
  <div
    class="shadow-md overflow-y-auto overflow-x-hidden"
    :style="{ height: `calc(100vh - ${height + 1}px)` }"
  >
    <el-menu
      :default-active="router.currentRoute.value.path || ''"
      :collapse="isCollapse"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
    >
      <NavItem :list="list" />
    </el-menu>
  </div>
</template>

<script setup lang="ts">
import { inject, toRefs } from 'vue'
import NavItem, { NavItemTypes } from '@/layouts/NavItem.vue'

const props = defineProps<{
  list: Array<NavItemTypes>
  height: number
  isCollapse: boolean
}>()
const router: any = inject('router')
const { list, height, isCollapse } = toRefs(props)
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>

<style scoped>
.el-menu {
  border-right: none !important;
}
</style>
