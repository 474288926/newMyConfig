<template>
  <div v-for="item in list" :key="item.url">
    <div
      class="p-2 flex flex-nowrap items-center w-full cursor-pointer"
      @click="toPath(item)"
      :style="{ 'padding-left': 8 * (item.level || 0) + 'px' }"
    >
      <el-icon v-if="item.icon" :size="16" class="flex-shrink-0 mr-1">
        <component :is="item.icon"> </component>
      </el-icon>
      <div class="truncate flex-1">{{ item.title }}</div>
      <el-icon
        class="flex-shrink-0"
        v-if="item.children && item.children.length > 0"
        :size="16"
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
  level?: number
  children?: Array<NavItemTypes>
}
const props = defineProps<{
  list: Array<NavItemTypes>
}>()
const router: any = inject('router')
const { list } = toRefs(props)
const toPath = (val: any) => {
  if (val.toggle !== undefined) {
    Object.assign(val, { toggle: !val.toggle })
  } else {
    console.log(val)
    router.push(val.url)
  }
}
</script>

<style scoped></style>
