<template>
  <template v-for="item in list" :key="item.path">
    <el-sub-menu v-if="item.children && item.children.length > 0" :index="item.path">
      <template #title>
        <el-icon v-if="item.icon" :size="16">
          <component :is="item.icon"> </component>
        </el-icon>
        <span>{{ item.title }}</span>
      </template>
      <nav-item :list="item.children"></nav-item>
    </el-sub-menu>
    <el-menu-item v-else :index="item.path" @click="onPath(item.path)">
      <el-icon v-if="item.icon" :size="16">
        <component :is="item.icon"> </component>
      </el-icon>
      <template #title>
        {{ item.title }}
      </template>
    </el-menu-item>
  </template>
</template>

<script setup lang="ts">
import { inject, toRefs } from 'vue'
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

const router: any = inject('router')

const onPath = (path: string) => {
  console.log('path:', path)
  if (path.lastIndexOf('/DataBigScreen') === 0) {
    window.open(`#${path}`, '_blank') // 大屏打开新标签
  } else {
    router.push(path)
  }
}
</script>

<style scoped></style>
