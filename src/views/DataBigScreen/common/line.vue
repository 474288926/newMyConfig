<template>
  <div ref="chart" class="w-full h-[256px]"></div>
</template>

<script setup lang="ts">
import { inject, onMounted, onUnmounted, ref } from 'vue'

const echarts: any = inject('echarts')
const chart: any = ref(null)
const resizeObserver: any = ref(null)

onMounted(() => {
  const myChart = echarts.init(chart.value)

  const option = {
    legend: {
      data: ['Email', 'Video Ads'],
      textStyle: {
        // color: 'black' // 设置图例文字颜色
      }
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        label: {
          backgroundColor: '#6a7985'
        }
      }
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: [
      {
        type: 'value'
      }
    ],
    series: [
      {
        name: 'Email',
        data: [120, 932, 601, 1234, 870, 1330, 1889],
        type: 'line',
        smooth: true,
        stack: 'Total',
        emphasis: {
          focus: 'series'
        },
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
      },
      {
        name: 'Video Ads',
        data: [3120, 1932, 2601, 1234, 170, 330, 1289],
        type: 'line',
        smooth: true,
        stack: 'Total',
        emphasis: {
          focus: 'series'
        },
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

  resizeObserver.value = new ResizeObserver((entries) => {
    // entries 包含观察到的元素信息
    entries.forEach((entry) => {
      // 获取新的宽度和高度
      const newWidth = entry.contentRect.width
      const newHeight = entry.contentRect.height
      // 在这里更新图表的大小
      myChart.resize({ width: newWidth, height: newHeight })
    })
  })
  // 开始观察容器元素
  resizeObserver.value.observe(chart.value)
})

// 在组件销毁前停止观察
onUnmounted(() => {
  if (resizeObserver.value) {
    resizeObserver.value.disconnect()
  }
})
</script>

<style scoped></style>
