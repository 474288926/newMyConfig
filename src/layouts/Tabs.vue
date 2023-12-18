<template>
  <div class="p-2">
    <el-tabs
      type="card"
      class="demo-tabs"
      v-model="activeRouteUrl"
      @tab-remove="removeTab"
      @tab-change="changeTab"
    >
      <el-tab-pane
        v-for="item in list"
        :key="item.path"
        :label="item.meta.title"
        :name="item.path"
        :closable="item.path !== '/home'"
      >
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script setup lang="ts">
import { inject, toRefs } from 'vue'
import { storeToRefs } from 'pinia'
import useRouterStore from '@/store/router/index'
import { BreadCrumbsTypes } from '@/layouts/BreadCrumbs.vue'

const props = defineProps<{
  list: Array<BreadCrumbsTypes>
}>()
const { list } = toRefs(props)
const router: any = inject('router')
const store = useRouterStore()
const { activeRouteUrl } = storeToRefs(store)
const changeTab = (val: any) => {
  router.push(val)
}
const removeTab = (val: any) => {
  const newUrl = store.delRouterList(val)
  if (newUrl) {
    router.replace(newUrl)
  }
}
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
:deep().el-tabs--card > .el-tabs__header .el-tabs__item.is-active {
  background-color: var(--el-color-primary-light-9);
}
:deep().el-tabs__header {
  margin: 0 !important;
}
</style>
