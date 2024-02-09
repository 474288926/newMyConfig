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
      textStyle: {
        // color: 'black' // 设置图例文字颜色
      }
    },
    tooltip: {},
    dataset: {
      source: [
        ['product', '2015', '2016', '2017'],
        ['Matcha Latte', 43.3, 85.8, 93.7],
        ['Milk Tea', 83.1, 73.4, 55.1],
        ['Cheese Cocoa', 86.4, 65.2, 82.5],
        ['Walnut Brownie', 72.4, 53.9, 39.1]
      ]
    },
    xAxis: {
      type: 'category'
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        type: 'bar'
      },
      {
        type: 'bar'
      },
      {
        type: 'bar'
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
