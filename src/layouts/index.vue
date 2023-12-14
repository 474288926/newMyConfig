<template>
  <div class="relative max-w-screen min-h-screen">
    <header
      ref="header"
      class="fixed top-0 right-0 left-52 h-32 z-10 shadow-md bg-white"
      :style="{ left: navSize.width + 'px' }"
    ></header>
    <nav ref="nav" class="fixed left-0 top-0 w-52 h-screen z-10">
      <header class="logo" :style="{ height: headerSize.height + 1 + 'px' }"></header>
      <section
        class="shadow-md overflow-auto"
        :style="{ height: `calc(100vh - ${headerSize.height + 1}px)` }"
      >
        <div v-for="index in 20" :key="index" class="p-2 m-1 bg-slate-500">
          {{ index }}
        </div>
      </section>
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
    console.log('n-size: ', navSize, 'h-size:', headerSize)
  }
}

// 使用 watchElementSize 进行监听
watch(nav, () => watchElementSize(nav.value, navSize))
watch(header, () => watchElementSize(header.value, headerSize))
</script>

<style scoped>
.logo {
  border-bottom: 1px solid #ccc;
}
</style>
