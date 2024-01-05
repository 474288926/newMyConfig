<template>
  <div class="relative max-w-screen min-h-screen">
    <header
      ref="header"
      class="fixed top-0 right-0 left-52 z-10 bg-white dark:bg-transparent"
      :style="{ left: navSize.width + 'px' }"
    >
      <div
        class="flex items-center gap-1 p-2 border border-l-0 border-t-0 dark:border-[#58585B]"
      >
        <div class="flex items-center mr-auto transition-all">
          <div class="mr-4 hidden sm:flex items-center">
            <el-icon
              :class="[!isCollapse ? 'rotate-90' : '-rotate-90']"
              size="20"
              @click="isCollapse = !isCollapse"
            >
              <Download />
            </el-icon>
          </div>
          <BreadCrumbs class="hidden sm:block" :list="breadList" />
        </div>
        <div class="flex-1 flex items-center gap-4 flex-row-reverse">
          <el-icon ref="refresh" @click="onRefresh"><Refresh /></el-icon>
          <el-icon @click="toggleFullscreen">
            <FullScreen />
          </el-icon>
          <el-switch
            v-model="isDark"
            :active-action-icon="Moon"
            :inactive-action-icon="Sunny"
          />
          <el-button type="primary" size="default" @click="midTest">接口测试</el-button>
        </div>
        <el-popover placement="bottom" :popper-style="{ padding: 0 }">
          <template #reference>
            <div class="flex items-center gap-4 cursor-pointer group px-4">
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
          <div class="py-1">
            <div
              class="cursor-pointer flex items-center px-4 gap-2 py-2 hover:bg-blue-50 hover:text-blue-700 dark:hover:bg-blue-400/10"
              @click="onQuit"
            >
              <el-icon><Right /></el-icon>
              <span class="tracking-wider">{{ '退出登陆' }}</span>
            </div>
          </div>
        </el-popover>
      </div>
      <Tabs class="border-b border-r dark:border-[#58585B]" :list="routerList" />
    </header>
    <nav
      ref="nav"
      class="fixed left-0 top-0 h-screen z-50 text-white text-sm transition-all border-r dark:border-[#58585B]"
      :class="[isCollapse ? 'w-14' : 'w-52']"
    >
      <div :style="{ height: headerSize.height + 'px' }">
        <logo v-if="!isCollapse"></logo>
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
import {
  inject,
  onBeforeUnmount,
  onMounted,
  onUnmounted,
  reactive,
  ref,
  watch
} from 'vue'
import { useDark, useElementSize } from '@vueuse/core'
import { storeToRefs } from 'pinia'
import { Moon, Sunny } from '@element-plus/icons-vue'
import useRouterStore from '@/store/router/index'
import NavBar from '@/layouts/NavBar.vue'
import Logo from '@/layouts/Logo.vue'
import BreadCrumbs from '@/layouts/BreadCrumbs.vue'
import Tabs from '@/layouts/Tabs.vue'
import { apiTest } from '@/api/test'
import useConfigStore from '@/store/config'

const storeConfig = useConfigStore()
const { isLoading } = storeToRefs(storeConfig)
// 定义元素大小的类型
interface Size {
  width: number
  height: number
}
const controller = new AbortController()
const { signal } = controller
const midTest = async () => {
  storeConfig.setLoading(true)
  const res = await apiTest(signal)
  console.log('接口测试', res)
  storeConfig.setLoading(false)
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
// 在组件销毁前取消请求
onBeforeUnmount(() => {
  controller.abort()
  storeConfig.setLoading(false)
})

// 在组件销毁时移除窗口大小变化的监听器
onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
})

const cookies: any = inject('cookies')
const onQuit = () => {
  cookies.remove('token')
  router.replace('/login')
}

const gsap: any = inject('gsap')
const refresh: any = ref(null)
const onRefresh = async () => {
  gsap.to(refresh.value.$el, {
    rotation: '+=360',
    duration: 0.3,
    onComplete: () => {
      router.replace({
        path: '/blank'
      })
    }
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

const isDark = useDark()
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
