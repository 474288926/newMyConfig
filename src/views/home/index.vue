<template>
  <section class="flex flex-col gap-4">
    <div class="grid gap-4 xl:grid-cols-4 lg:grid-cols-2">
      <div
        class="h-40 flex-1 border border-b-gray-200 rounded-md bg-white text-sm p-5 flex flex-col"
        v-for="(item, index) in list"
        :class="{
          'bg-gradient-to-r from-blue-300 via-blue-400 to-blue-600 text-white':
            index === 0
        }"
        :key="index"
      >
        <span>{{ item.name }}</span>
        <p class="flex-1 text-2xl tracking-wider flex items-center">
          <span v-if="index === 0">¥</span> {{ item.sum }}
        </p>
        <div class="flex flex-row items-center">
          <span>自上周已来</span>
          <div
            class="rounded-full h-4 w-4 mx-1"
            :class="[index === 1 ? 'bg-white' : 'bg-green-200']"
          >
            <el-icon
              style="padding: 2px"
              :color="index === 1 ? 'rgb(96 165 250)' : 'rgb(94 180 55)'"
              ><Top
            /></el-icon>
          </div>
          <span>{{ item.number }}%</span>
        </div>
      </div>
    </div>
    <div class="grid xl:grid-cols-2 gap-4">
      <el-card shadow="never">
        <template #header>
          <div class="flex flex-row items-center gap-1">
            <el-icon color="blue"><Paperclip /></el-icon>
            <span class="font-semibold">待处理</span>
            <el-badge :value="6" :max="99"> </el-badge>
          </div>
        </template>
        <div class="flex flex-col gap-2 lg:flex-row">
          <div
            class="flex-1 px-5 py-8 flex flex-row lg: gap-4 bg-gradient-to-r from-red-100 via-red-50 to-white rounded-md"
          >
            <div class="w-3 rounded-xl bg-red-600 flex-shrink-0"></div>
            <div class="flex flex-col gap-4">
              <div class="text-sm font-light text-red-600">
                <p>
                  <span class="text-lg mr-1 font-normal">订单预警</span
                  >产品爆单，请及时处理
                </p>
              </div>
              <div class="text-sm font-light">
                <p class="whitespace-normal overflow-wrap break-all">
                  <el-tag class="-mt-2 mr-1">完成中</el-tag>
                  预警原因:用户投诉发货不及时
                </p>
              </div>
            </div>
          </div>
          <div
            class="flex-1 px-5 py-8 flex flex-row gap-4 bg-gradient-to-r from-blue-100 via-blue-50 to-white rounded-md"
          >
            <div class="w-3 rounded-xl bg-blue-600 flex-shrink-0"></div>
            <div class="flex flex-col gap-4">
              <div class="text-sm font-light text-blue-600">
                <p>
                  <span class="text-lg mr-1 font-normal">售后工单</span
                  >用户张*给予五星好评
                </p>
              </div>
              <div class="text-sm font-light">
                <p class="whitespace-normal overflow-wrap break-all">
                  <el-tag class="-mt-2 mr-1" type="danger">未完成</el-tag>
                  订单号:202231644258421
                </p>
              </div>
            </div>
          </div>
        </div>
      </el-card>
      <el-card shadow="never">
        <template #header>
          <div class="flex flex-row items-center gap-1">
            <el-icon color="blue"><Warning /></el-icon>
            <span class="font-semibold">信息</span>
          </div>
        </template>
        <div class="overflow-auto w-full">
          <div class="flex flex-row flex-wrap">
            <div
              v-for="(value, key) in jsonData.dependencies"
              :key="key"
              class="flex-shrink-0 text-xs w-72 flex flex-row"
            >
              <div
                class="border border-slate-300 p-2 font-bold flex-1 flex items-center"
              >
                {{
                  key.split('/').length > 1
                    ? key.split('/')[1].replace('@', '')
                    : key.split('/')[0].replace('@', '')
                }}
              </div>
              <div class="border border-slate-300 p-2 flex-1 flex items-center">
                {{ value.replace('^', '') }}
              </div>
            </div>
          </div>
        </div>
      </el-card>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import * as jsonData from '../../../package.json'

const list = ref([
  {
    name: '总销量',
    sum: '13777.12',
    number: '44'
  },
  {
    name: '活跃用户',
    sum: '1135',
    number: '44'
  },
  {
    name: '总成交',
    sum: '8645342',
    number: '44'
  },
  {
    name: '订单',
    sum: '157',
    number: '44'
  }
])
</script>

<style scoped></style>
