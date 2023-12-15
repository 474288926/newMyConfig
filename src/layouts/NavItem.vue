<template>
  <div v-for="item in list" :key="item.url">
    <div
      class="p-2 flex flex-nowrap items-center w-full cursor-pointer"
      @click="toPath(item.url)"
    >
      <el-icon v-if="item.icon" :size="16" class="flex-shrink-0 mr-1">
        <component :is="item.icon"> </component>
      </el-icon>

      <div class="truncate flex-1">{{ item.title }}</div>
      <el-icon
        class="flex-shrink-0"
        v-if="item.children && item.children.length > 0"
        :size="16"
        @click="item.toggle = !item.toggle"
      >
        <component :is="item.toggle ? 'ArrowDown' : 'ArrowUp'"></component>
      </el-icon>
    </div>
    <div v-show="item.toggle">
      <NavItem v-if="item.children && item.children.length > 0" :list="item.children" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { inject, toRefs } from 'vue'
import NavItem from '@/layouts/NavItem.vue'

export interface NavItemTypes {
  title: string
  url: string
  icon?: string
  toggle?: boolean
  children?: Array<NavItemTypes>
}
const props = defineProps<{
  list: Array<NavItemTypes>
}>()
const router: any = inject('router')
const { list } = toRefs(props)
const toPath = (url: string) => {
  router.push(url)
}
</script>

<style scoped></style>
