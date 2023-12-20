<template>
  <div class="flex flex-col gap-4 relative">
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
            :class="[index === 0 ? 'bg-white' : 'bg-green-200']"
          >
            <el-icon
              style="padding: 2px"
              :color="index === 0 ? 'rgb(96 165 250)' : 'rgb(94 180 55)'"
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
    <el-card shadow="never">
      <template #header>
        <div class="flex flex-row items-center gap-1">
          <el-icon color="blue"><DataAnalysis /></el-icon>
          <span class="font-semibold">经营建议</span>
        </div>
      </template>
      <div
        class="grid grid-cols-2 grid-rows-4 md:grid-cols-3 md:grid-rows-3 lg:grid-cols-4 lg:grid-rows-2"
      >
        <div
          class="h-16 flex flex-row gap-2 items-center"
          v-for="item in list1"
          :key="item.name"
        >
          <div
            class="group bg-blue-50 w-12 h-12 rounded-md flex justify-center items-center hover:bg-blue-400"
          >
            <el-icon :size="28"
              ><component
                :is="item.icon"
                class="text-blue-400 group-hover:text-white"
              ></component
            ></el-icon>
          </div>

          <div class="flex flex-col gap-1">
            <span class="text-sm font-normal">{{ item.name }}</span>
            <span class="text-xs font-light">{{ item.desc }}</span>
          </div>
        </div>
      </div>
    </el-card>
    <div class="grid grid-grid-1 lg:grid-cols-2 gap-4">
      <el-card shadow="never">
        <template #header>
          <div class="flex flex-row items-center gap-1">
            <el-icon color="blue"><DataLine /></el-icon>
            <span class="font-semibold">流量概括</span>
          </div>
        </template>
        <div ref="areaChart" class="w-full h-72"></div>
        <template #footer>
          <div class="text-sm font-light">
            <span>自上周以来</span
            ><span class="text-green-400 tracking-wider">&nbsp;提升&nbsp;44%</span>
          </div>
        </template>
      </el-card>
      <el-card shadow="never">
        <template #header>
          <div class="flex flex-row items-center gap-1">
            <el-icon color="blue"><TrendCharts /></el-icon>
            <span class="font-semibold">授权数</span>
          </div>
        </template>
        <div ref="areaChart1" class="w-full h-72"></div>
        <template #footer>
          <span class="text-sm font-light">授权数：1612</span>
        </template>
      </el-card>
    </div>
    <footer
      class="border border-gray-200 p-4 rounded-md bg-white text-center font-light text-sm"
    >
      Copyright <span class="font-normal">(c)</span> 2024 My New Vue3
    </footer>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import * as echarts from 'echarts'
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
const list1 = ref<Array<any>>([
  {
    name: '工商建议',
    desc: '工商建议快捷入口',
    icon: 'bell'
  },
  {
    name: '商标管理',
    desc: '商标管理快捷入口',
    icon: 'bell'
  },
  {
    name: '专利查询',
    desc: '专利查询快捷入口',
    icon: 'bell'
  },
  {
    name: '著作权查询',
    desc: '著作权查询快捷入口',
    icon: 'bell'
  },
  {
    name: '证照查询',
    desc: '证照查询快捷入口',
    icon: 'bell'
  },
  {
    name: '纳税提醒',
    desc: '纳税提醒快捷入口',
    icon: 'bell'
  },
  {
    name: '违规查询',
    desc: '违规查询快捷入口',
    icon: 'bell'
  },
  {
    name: '全部应用',
    desc: '全部应用快捷入口',
    icon: 'bell'
  }
])

type EChartsOption = echarts.EChartsOption

const areaChart = ref(null)
const areaChart1 = ref(null)

onMounted(() => {
  const myChart = echarts.init(areaChart.value)

  const option: EChartsOption = {
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: [120, 932, 601, 1234, 870, 1330, 1889],
        type: 'line',
        smooth: true,
        areaStyle: {
          color: {
            type: 'linear', // 设置为线性渐变
            x: 0, // 渐变起始点
            y: 0, // 渐变起始点
            x2: 1, // 渐变结束点
            y2: 0, // 渐变结束点
            colorStops: [
              { offset: 0, color: 'rgba(167, 217, 245, 0.7)' }, // 渐变起始颜色
              { offset: 0.8, color: 'rgba(94, 191, 248, 0.7)' }, // 渐变中间颜色
              { offset: 1, color: 'rgba(44, 172, 245, 0.7)' }
            ]
          }
        }
      }
    ]
  }
  myChart.setOption(option)

  const myChart1 = echarts.init(areaChart1.value)

  const option1: EChartsOption = {
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: [120, 200, 150, 80, 70, 110, 130],
        type: 'bar'
      }
    ]
  }
  myChart1.setOption(option1)
})
</script>

<style scoped></style>
