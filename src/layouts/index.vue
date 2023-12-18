<template>
  <div class="relative max-w-screen min-h-screen">
    <header
      ref="header"
      class="fixed top-0 right-0 left-52 z-10 shadow-md bg-white"
      :style="{ left: navSize.width + 'px' }"
    >
      <div class="flex items-end border-b p-2 border-b-gray-200">
        <div class="flex items-center mr-auto transition-all">
          <el-icon
            class="mr-4"
            :class="[!isCollapse ? 'rotate-90' : '-rotate-90']"
            color="#494A4D"
            size="20"
            @click="isCollapse = !isCollapse"
          >
            <Download />
          </el-icon>
          <BreadCrumbs :list="breadList" />
        </div>
        <el-popover placement="bottom">
          <template #reference>
            <div class="flex items-center gap-4 cursor-pointer group">
              <el-avatar
                :size="50"
                src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
              />
              <div class="flex items-center gap-2 transition-all">
                <span>admin</span>
                <el-icon class="transition-all group-hover:rotate-180" size="12">
                  <ArrowDownBold />
                </el-icon>
              </div>
            </div>
          </template>
          <div class="cursor-pointer flex items-center gap-2">
            <el-icon><Right /></el-icon>
            <span>{{ '退出登陆' }}</span>
          </div>
        </el-popover>
      </div>
      <Tabs :list="routerList" />
    </header>
    <nav
      ref="nav"
      class="fixed left-0 top-0 h-screen z-100 text-white text-sm bg-zinc-800 transition-all"
      :class="[isCollapse ? 'w-14' : 'w-52']"
    >
      <logo :style="{ height: headerSize.height + 1 + 'px' }"></logo>
      <NavBar :height="headerSize.height" :list="navList" :isCollapse="isCollapse" />
    </nav>
    <main
      class="p-4 rounded-md overflow-auto absolute right-0 bg-slate-100 bottom-0"
      :style="{ left: navSize.width + 'px', top: headerSize.height + 'px' }"
    >
      <router-view v-slot="{ Component }">
        <transition>
          <keep-alive>
            <component :is="Component" />
          </keep-alive>
        </transition>
      </router-view>
    </main>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref, watch } from 'vue'
import { useElementSize } from '@vueuse/core'
import { storeToRefs } from 'pinia'
import useRouterStore from '@/store/router/index'
import NavBar from '@/layouts/NavBar.vue'
import Logo from '@/layouts/Logo.vue'
import BreadCrumbs from '@/layouts/BreadCrumbs.vue'
import Tabs from '@/layouts/Tabs.vue'
// 定义元素大小的类型
interface Size {
  width: number
  height: number
}
// 创建 refs 引用 DOM 元素
const nav = ref(null)
const header = ref(null)
// 创建响应式引用来保存元素的大小
const navSize = reactive<Size>({ width: 0, height: 0 })
const headerSize = reactive<Size>({ width: 0, height: 0 })
// 优化后的函数，用于监听参数变化并重新计算宽度和高度
const watchElementSize = (element: HTMLElement | null, sizeRef: Size) => {
  if (element) {
    const newSize = useElementSize(element)
    // 创建新的引用对象，而不是直接修改参数
    Object.assign(sizeRef, newSize)
  }
}
// 使用 watchElementSize 进行监听
watch(nav, () => watchElementSize(nav.value, navSize))
watch(header, () => watchElementSize(header.value, headerSize))
const store = useRouterStore()
const { navList, breadList, routerList } = storeToRefs(store)
const isCollapse = ref<boolean>(false)
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
