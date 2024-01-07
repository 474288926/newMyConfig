<template>
  <div class="relative max-w-screen min-h-screen">
    <header
      ref="header"
      class="fixed top-0 right-0 left-52 z-10 bg-white dark:bg-transparent"
      :style="{ left: navSize.width + 'px' }"
    >
      <y-header class="introHeader" />
      <Tabs
        class="border-b border-r dark:border-[#58585B] introTab"
        :list="routerList"
      />
    </header>
    <nav
      ref="nav"
      class="fixed left-0 top-0 h-screen text-white text-sm transition-all border-r dark:border-[#58585B]"
      :class="[isCollapse ? 'w-14' : 'w-52']"
    >
      <div :style="{ height: headerSize.height + 'px' }">
        <Logo class="introLogo -top-6" v-if="!isCollapse"></Logo>
      </div>
      <NavBar
        class="introNavBar"
        :height="headerSize.height"
        :list="navList"
        :isCollapse="isCollapse"
      />
    </nav>
    <main
      id="scrollbar"
      class="introMain p-4 overflow-auto block bg-slate-100 dark:bg-transparent"
      :style="{
        marginLeft: navSize.width + 'px',
        marginTop: headerSize.height + 'px',
        minHeight: `calc(100vh - (${headerSize.height} +'px')`
      }"
      v-loading="isLoading"
    >
      <router-view v-slot="{ Component }">
        <transition name="slide" mode="out-in">
          <keep-alive>
            <component class="relative h-full" :is="Component" />
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
import { inject, onMounted, onUnmounted, reactive, ref, watch } from 'vue'
import { useElementSize } from '@vueuse/core'
import { storeToRefs } from 'pinia'
import NavBar from '@/layouts/NavBar.vue'
import Logo from '@/layouts/Logo.vue'
import Tabs from '@/layouts/Tabs.vue'
import YHeader from '@/layouts/YHeader.vue'
import useConfigStore from '@/store/config'
import useRouterStore from '@/store/router/index'

const introJs: any = inject('introJs')
const storeConfig = useConfigStore()
const { isLoading, isCollapse, isIntro } = storeToRefs(storeConfig)
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
  if (!isIntro.value) {
    introJs()
      .setOptions({
        disableInteraction: true,
        steps: [
          {
            title: 'Welcome',
            intro: 'Hello World! 这是一个操作引导👋',
            label: '第一步'
          },
          {
            title: '引导操作！',
            element: document.querySelector('.introHeader'),
            intro: '小操作：刷新、dark模式切换、折叠侧边栏、面包屑、退出登陆'
          },
          {
            title: '引导操作！',
            element: document.querySelector('.introTab'),
            intro: '当前缓存页面'
          },
          {
            title: '引导操作！',
            element: document.querySelector('.introLogo'),
            intro: 'logo'
          },
          {
            title: '引导操作！',
            element: document.querySelector('.introNavBar'),
            intro: '导航栏'
          },
          {
            title: '引导操作！',
            element: document.querySelector('.introMain'),
            intro: '主体内容'
          }
        ],
        nextLabel: '下一步', // 修改下一步按钮文字
        prevLabel: '上一步',
        doneLabel: '完成引导'
      })
      .onbeforeexit(() => {
        // 在引导结束前触发的事件
        // 在这里保存用户状态，比如使用localStorage
        storeConfig.setIntro()
      })
      .start()
  }

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
