<template>
  <div class="relative max-w-screen min-h-screen">
    <header
      ref="header"
      class="fixed top-0 right-0 left-52 z-10 shadow-md bg-white"
      :style="{ left: navSize.width + 'px' }"
    >
      <div class="flex items-center space-x-2 border-b p-2 border-b-gray-200">
        <div class="flex items-center mr-auto transition-all">
          <div class="mr-4 hidden sm:flex items-center">
            <el-icon
              :class="[!isCollapse ? 'rotate-90' : '-rotate-90']"
              color="#494A4D"
              size="20"
              @click="isCollapse = !isCollapse"
            >
              <Download />
            </el-icon>
          </div>
          <BreadCrumbs :list="breadList" />
        </div>
        <div class="flex-1 flex items-center gap-2 flex-row-reverse">
          <el-icon ref="refresh" @click="onRefresh"><Refresh /></el-icon>
          <el-icon @click="toggleFullscreen">
            <FullScreen />
          </el-icon>
        </div>
        <el-popover placement="bottom">
          <template #reference>
            <div class="flex items-center gap-4 cursor-pointer group">
              <el-avatar
                :size="40"
                src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
              />
              <div class="items-center gap-2 transition-all hidden sm:flex">
                <span>admin</span>
                <el-icon class="transition-all group-hover:rotate-180" size="12">
                  <ArrowDownBold />
                </el-icon>
              </div>
            </div>
          </template>
          <div class="cursor-pointer flex items-center gap-2" @click="onQuit">
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
      <div :style="{ height: headerSize.height + 1 + 'px' }">
        <logo v-if="!isCollapse"></logo>
      </div>
      <NavBar :height="headerSize.height" :list="navList" :isCollapse="isCollapse" />
    </nav>
    <main
      class="p-4 rounded-md overflow-auto absolute right-0 bg-slate-100 bottom-0 flex flex-col justify-between gap-4"
      :style="{ left: navSize.width + 'px', top: headerSize.height + 'px' }"
    >
      <router-view v-slot="{ Component }">
        <transition name="slide" mode="out-in">
          <keep-alive>
            <component :is="Component" />
          </keep-alive>
        </transition>
      </router-view>
      <footer
        class="border border-gray-200 p-4 rounded-md bg-white text-center font-light text-sm"
      >
        Copyright <span class="font-normal">(c)</span> 2024 My New Vue3
      </footer>
    </main>
  </div>
</template>

<script setup lang="ts">
import { inject, onMounted, onUnmounted, reactive, ref, watch } from 'vue'
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

const router: any = inject('router')
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
    isCollapse.value = true
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

const Cookies: any = inject('Cookies')
const onQuit = () => {
  Cookies.remove('token')
  router.replace('/login')
}

const gsap: any = inject('gsap')
const refresh: any = ref(null)
const onRefresh = () => {
  gsap.to(refresh.value.$el, {
    rotation: '+=360',
    duration: 0.6
  })
  router.replace({
    path: '/blank'
  })
}

const toggleFullscreen = () => {
  const elem = document.documentElement as HTMLElement & {
    mozRequestFullScreen?(): Promise<void>
    webkitRequestFullscreen?(): Promise<void>
    msRequestFullscreen?(): Promise<void>
    mozCancelFullScreen?(): Promise<void>
    exitFullscreen?(): Promise<void>
  }
  if (!document.fullscreenElement) {
    // 请求全屏
    if (elem.requestFullscreen) {
      elem.requestFullscreen()
    } else if (elem.mozRequestFullScreen) {
      elem.mozRequestFullScreen()
    } else if (elem.webkitRequestFullscreen) {
      elem.webkitRequestFullscreen()
    } else if (elem.msRequestFullscreen) {
      elem.msRequestFullscreen()
    }
  } else {
    // 退出全屏
    // eslint-disable-next-line no-lonely-if
    if (document.exitFullscreen) {
      document.exitFullscreen()
    } else if (elem.mozCancelFullScreen) {
      elem.mozCancelFullScreen()
    }
  }
}
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
