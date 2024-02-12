<!-- NotFound.vue -->
<template>
  <div
    class="w-screen h-screen flex justify-center items-center"
    style="background-color: #f6f8f9"
  >
    <div class="w-3/5 flex flex-row space-x-4">
      <el-image :src="imageSrc" fit="cover"></el-image>

      <div class="flex flex-col flex-shrink-0 justify-center">
        <span class="text-xl text-blue-500 font-medium">抱歉！</span>
        <span class="font-medium tracking-wide mt-7">当前页面不存在</span>
        <span class="text-xs tracking-wide text-gray-600 mt-4"
          >请检查您输入的网址是否正确，或点击下面的按钮返回首页。</span
        >
        <div class="mt-6">
          <el-button type="primary" size="default" @click="router.push('/')"
            >返回首页</el-button
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import imageSrc from '@/assets/img/404.png'
import { useInject } from '@/composables/useInject'

const { router } = useInject()
</script>

<style scoped></style>
