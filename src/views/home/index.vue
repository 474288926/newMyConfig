<template>
  <div>
    <header>home123131</header>
    <main>
      <p>Count: {{ counter.count }}</p>
      <icon-ep-Search />
      <el-input v-model.trim="searchInput">
        <!-- prefix图标居左,suffix图标居右 -->
        <template #suffix>
          <div class="icon">
            <icon-ep-Search />
          </div>
        </template>
        <template #prefix>
          <div class="icon">
            <icon-ep-Search />
          </div>
        </template>
      </el-input>
      -- {{ x }} -- {{ y }}
      <el-button type="danger" @click="counter.increment">Increment</el-button>
      <el-button type="info" @click="counter.decrement">Decrement</el-button>
    </main>
  </div>
</template>

<script setup lang="ts">
import { useMouse } from '@vueuse/core'
import { inject } from 'vue'
import useCounterStore from '@/store/counter/index.ts'

// "x" and "y" are refs
const { x, y } = useMouse()
const counter = useCounterStore()
const router = inject('router')
console.log('router:', router)
const searchInput: string = '123'
</script>

<style scoped></style>
