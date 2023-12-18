<template>
  <div class="p-2">
    <el-tabs type="card" class="demo-tabs" closable @tab-remove="removeTab">
      <el-tab-pane v-for="index in 4" :key="index" label="index" :name="index">
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script setup lang="ts">
const removeTab = () => {}
</script>

<style scoped>
:deep().el-tabs--card > .el-tabs__header {
  border-bottom: none;
}
:deep().el-tabs__nav {
  gap: 0.5rem !important;
  border: none !important;
}
:deep().el-tabs__item {
  border: 1px solid #e9e9e9 !important;
  border-radius: 4px;
  height: 34px;
}
:deep().el-tabs--card > .el-tabs__header .el-tabs__item.is-active.is-closable {
  background-color: var(--el-color-primary-light-9);
}
:deep().el-tabs__header {
  margin: 0 !important;
}
:deep().el-tabs--card > .el-tabs__header {
  height: auto !important;
}
</style>
