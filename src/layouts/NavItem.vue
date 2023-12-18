<template>
  <div v-for="item in list" :key="item.path">
    <el-sub-menu v-if="item.children && item.children.length > 0" :index="item.path">
      <template #title>
        <el-icon v-if="item.icon" :size="16" class="mr-1">
          <component :is="item.icon"> </component>
        </el-icon>
        <div>{{ item.title }}</div>
      </template>
      <nav-item :list="item.children"></nav-item>
    </el-sub-menu>
    <el-menu-item v-else :index="item.path">
      <el-icon v-if="item.icon" :size="16" class="mr-1">
        <component :is="item.icon"> </component>
      </el-icon>
      <div>{{ item.title }}</div>
    </el-menu-item>
  </div>
</template>

<script setup lang="ts">
import { toRefs } from 'vue'
import NavItem from '@/layouts/NavItem.vue'

export interface NavItemTypes {
  title: string
  path: string
  icon?: string
  toggle?: boolean
  action?: boolean
  level?: number
  children?: Array<NavItemTypes>
}
const props = defineProps<{
  list: Array<NavItemTypes>
}>()
const { list } = toRefs(props)
</script>

<style scoped></style>
