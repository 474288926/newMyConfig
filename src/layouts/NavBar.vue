<template>
  <div
    class="shadow-md overflow-auto"
    :style="{ height: `calc(100vh - ${height + 1}px)` }"
  >
    <NavItem :list="list" />
  </div>
</template>

<script setup lang="ts">
import { toRefs } from 'vue'
import NavItem, { NavItemTypes } from '@/layouts/NavItem.vue'

const props = defineProps<{
  list: Array<NavItemTypes>
  height: number
}>()
const { list, height } = toRefs(props)
</script>

<style scoped></style>
