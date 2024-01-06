<template>
  <div class="relative max-w-screen min-h-screen">
    <header
      ref="header"
      class="fixed top-0 right-0 left-52 z-10 bg-white dark:bg-transparent"
      :style="{ left: navSize.width + 'px' }"
    >
      <y-header />
      <Tabs class="border-b border-r dark:border-[#58585B]" :list="routerList" />
    </header>
    <nav
      ref="nav"
      class="fixed left-0 top-0 h-screen z-50 text-white text-sm transition-all border-r dark:border-[#58585B]"
      :class="[isCollapse ? 'w-14' : 'w-52']"
    >
      <div :style="{ height: headerSize.height + 'px' }">
        <Logo v-if="!isCollapse"></Logo>
      </div>
      <NavBar :height="headerSize.height" :list="navList" :isCollapse="isCollapse" />
    </nav>
    <main
      id="scrollbar"
      class="p-4 overflow-auto absolute right-0 bg-slate-100 dark:bg-transparent bottom-0 flex flex-col justify-between gap-4"
      :style="{ left: navSize.width + 'px', top: headerSize.height + 'px' }"
      v-loading="isLoading"
    >
      <router-view v-slot="{ Component }">
        <transition name="slide" mode="out-in">
          <keep-alive>
            <component class="relative" :is="Component" />
          </keep-alive>
        </transition>
      </router-view>
      <el-backtop target="#scrollbar" :right="40" :bottom="100" />
      <el-card
        :body-style="{ padding: '12px' }"
        class="border rounded-md text-center font-light text-sm flex-shrink-0"
        shadow="never"
      >
        Copyright <span class="font-normal">(c)</span> 2024 My New Vue3
      </el-card>
    </main>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, reactive, ref, watch } from 'vue'
import { useElementSize } from '@vueuse/core'
import { storeToRefs } from 'pinia'
import NavBar from '@/layouts/NavBar.vue'
import Logo from '@/layouts/Logo.vue'
import Tabs from '@/layouts/Tabs.vue'
import YHeader from '@/layouts/YHeader.vue'
import useConfigStore from '@/store/config'
import useRouterStore from '@/store/router/index'

const storeConfig = useConfigStore()
const { isLoading, isCollapse } = storeToRefs(storeConfig)
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
const { navList, routerList } = storeToRefs(store)
// 获取屏幕大小的函数
function getScreenSize() {
  if (window.innerWidth < 640) {
    return 'sm'
  }
  if (window.innerWidth < 768) {
    return 'md'
  }
  return 'lg'
}

// 定义窗口大小变化时的处理函数
function handleResize() {
  if (getScreenSize() === 'sm' && !isCollapse.value) {
    storeConfig.toggleCollapse(true)
  }
}

// 在组件挂载时添加窗口大小变化的监听器
onMounted(() => {
  handleResize()
  window.addEventListener('resize', handleResize)
})

// 在组件销毁时移除窗口大小变化的监听器
onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
})
</script>

<style scoped>
/* 动画生效阶段应用 */
.slide-enter-active,
.slide-leave-active {
  transition: all 0.2s ease-in-out;
}
/* 进入动画的结束帧和离开动画的起始帧 */
.slide-enter-to,
.slide-leave-from {
  left: 0;
}
/* 进入动画起始帧 */
.slide-enter-from {
  left: 3%;
}
/* 离开动画结束帧 */
.slide-leave-to {
  opacity: 0;
  left: -3%;
}
</style>
