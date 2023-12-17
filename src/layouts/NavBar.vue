<template>
  <div
    class="shadow-md overflow-auto"
    :style="{ height: `calc(100vh - ${height + 1}px)` }"
  >
    <NavItem :list="list" />
  </div>
</template>

<script setup lang="ts">
import { toRefs, watch } from 'vue'
import NavItem, { NavItemTypes } from '@/layouts/NavItem.vue'

const props = defineProps<{
  list: Array<NavItemTypes>
  height: number
}>()
const { list, height } = toRefs(props)
console.log('list:', list.value)

watch(list, (newVal) => {
  console.log(123, newVal)
})
</script>

<style scoped></style>
