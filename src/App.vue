<template>
  <router-view v-if="!loading"> </router-view>
  <GlobalLoading v-if="loading"></GlobalLoading>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const loading = ref(true)
const loadData = async () => {
  window.onload = () => {
    loading.value = false
  }
}
loadData()
</script>

<style>
.dark .introjs-tooltiptext,
.introjs-tooltip-title {
  color: #000;
}
body {
  overflow: hidden;
}
</style>
