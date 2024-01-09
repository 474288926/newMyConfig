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
      <el-icon @click="toggleFullscreen()">
        <FullScreen />
      </el-icon>
      <Dark />
      <el-button type="primary" size="default" @click="midTest">接口测试</el-button>
    </div>
    <el-popover placement="bottom-end" :popper-style="{ padding: 0 }">
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
          class="cursor-pointer flex items-center px-4 gap-2 py-2 hover:bg-blue-50 hover:text-blue-400 dark:hover:text-blue-600 dark:hover:bg-blue-400/10"
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
import { inject, onBeforeUnmount, ref } from 'vue'
import BreadCrumbs from '@/layouts/BreadCrumbs.vue'
import { apiTest } from '@/api/test'
import useRouterStore from '@/store/router/index'
import useConfigStore from '@/store/config'
import Dark from '@/layouts/Dark.vue'
import { toggleFullscreen } from '@/utils/toggleFullscreen'

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

// 在组件销毁前取消请求
onBeforeUnmount(() => {
  controller.abort()
  storeConfig.setLoading(false)
})
</script>

<style scoped></style>
