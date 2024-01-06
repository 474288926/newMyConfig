<template>
  <div
    class="flex items-center gap-1 p-2 border border-l-0 border-t-0 dark:border-[#58585B]"
  >
    <div class="flex items-center mr-auto transition-all">
      <div class="mr-4 hidden sm:flex items-center">
        <el-icon
          :class="[!isCollapse ? 'rotate-90' : '-rotate-90']"
          size="20"
          @click="storeConfig.toggleCollapse()"
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
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { Moon, Sunny } from '@element-plus/icons-vue'
import { inject, onBeforeUnmount, ref } from 'vue'
import { useDark } from '@vueuse/core'
import BreadCrumbs from '@/layouts/BreadCrumbs.vue'
import { apiTest } from '@/api/test'
import useRouterStore from '@/store/router/index'
import useConfigStore from '@/store/config'

const storeConfig = useConfigStore()
const { isCollapse } = storeToRefs(storeConfig)
const controller = new AbortController()
const { signal } = controller
const midTest = async () => {
  storeConfig.setLoading(true)
  const res = await apiTest(signal)
  console.log('接口测试', res)
  storeConfig.setLoading(false)
}

const store = useRouterStore()
const { breadList } = storeToRefs(store)

const router: any = inject('router')
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

// 在组件销毁前取消请求
onBeforeUnmount(() => {
  controller.abort()
  storeConfig.setLoading(false)
})
</script>

<style scoped></style>