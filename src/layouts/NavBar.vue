<template>
  <div
    class="shadow-md overflow-auto"
    :style="{ height: `calc(100vh - ${height + 1}px)` }"
  >
    <el-menu
      :default-active="router.currentRoute.value.path || ''"
      active-text-color="#ffd04b"
      router
      :collapse="isCollapse"
      background-color="rgb(39 39 42 / var(--tw-bg-opacity))"
      class="el-menu-vertical-demo"
      text-color="#fff"
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
