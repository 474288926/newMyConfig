<template>
  <el-breadcrumb separator-icon="ArrowRight">
    <el-breadcrumb-item
      v-for="(item, index) in list"
      :key="item.path"
      :to="index !== list.length - 1 ? { path: item.path } : {}"
    >
      {{ item.meta.title || '' }}
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script setup lang="ts">
import { toRefs } from 'vue'

export interface MetaType {
  title?: string
  icon?: string
}
export interface BreadCrumbsTypes {
  path: string
  meta: MetaType
}

const props = defineProps<{
  list: Array<BreadCrumbsTypes>
}>()
const { list } = toRefs(props)
</script>

<style scoped></style>
