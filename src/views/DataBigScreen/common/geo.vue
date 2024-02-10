<template>
  <div ref="chart" class="w-full h-[1080px]"></div>
</template>

<script setup lang="ts">
import { inject, onMounted, onUnmounted, ref } from 'vue'

const resizeObserver: any = ref(null)

const echarts: any = inject('echarts')
const chart: any = ref(null)
const myChart: any = ref(null)

const convertData = (val: any) => {
  const { features } = val
  const res = features.reduce((per: any, cur: any) => {
    const { properties } = cur
    if (properties) {
      per.push({ name: properties.name, value: properties.center })
    }
    return per
  }, [])
  return res
}

const convertToLineData = (val: any, end: any) => {
  const res = val.reduce((per: any, cur: any) => {
    if (cur.name !== end.name) {
      per.push({
        fromName: cur.name,
        toName: end.name,
        coords: [cur.value, end.value]
      })
    }
    return per
  }, [])
  return res
}

const api = async () => {
  myChart.value = echarts.init(chart.value)
  try {
    const response = await fetch('/src/assets/mapjson/100000.json')
    const geoJson = await response.json()
    echarts.registerMap('china', geoJson)
    console.log('geoJson:', geoJson)
    const options = {
      animation: true,
      animationDuration: 1000,
      animationEasing: 'cubicInOut',
      animationDurationUpdate: 1000,
      animationEasingUpdate: 'cubicInOut',
      tooltip: {
        trigger: 'axis', // hover触发器
        axisPointer: {
          // 坐标轴指示器，坐标轴触发有效
          type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
          shadowStyle: {
            color: 'rgba(150,150,150,0.1)' // hover颜色
          }
        }
      },
      geo: {
        show: true,
        map: 'china',
        roam: false, // 是否可以缩放
        zoom: 1,
        label: {
          show: false,
          color: 'white'
        },
        emphasis: {
          label: {
            show: false // 鼠标移入时也不显示标签
          }
        },

        center: [102.83531246, 24.0267395887],
        itemStyle: {
          borderColor: 'rgba(147, 235, 248, 1)',
          borderWidth: 1,
          areaColor: {
            type: 'radial',
            x: 0.5,
            y: 0.5,
            r: 0.8,
            colorStops: [
              {
                offset: 0,
                color: 'rgba(147, 235, 248, 0)' // 0% 处的颜色
              },
              {
                offset: 1,
                color: 'rgba(147, 235, 248, .2)' // 100% 处的颜色
              }
            ],
            globalCoord: false // 缺省为 false
          },
          shadowColor: 'rgba(128, 217, 248, 1)',
          shadowOffsetX: -2,
          shadowOffsetY: 2,
          shadowBlur: 10
        }
      },
      series: [
        {
          name: 'effectScatter', // 散点系列的名称
          type: 'effectScatter', // 系列类型为散点
          coordinateSystem: 'geo', // 使用地理坐标系
          data: convertData(geoJson),
          symbolSize: 12, // 散点的大小
          label: {
            // 标签配置
            show: true, // 显示标签
            formatter: '{b}', // 标签内容，这里使用 name
            position: 'right', // 标签位置，可以根据需要调整
            color: 'white' // 标签文字颜色
          },
          // 添加水波动画配置
          rippleEffect: {
            period: 4,
            scale: 4,
            brushType: 'stroke',
            color: 'rgba(255, 0, 0, 0.6)'
          },
          itemStyle: {
            // 散点样式配置
            color: 'red' // 散点颜色
          }
        },
        {
          name: 'lines', // 轨迹动画系列的名称
          type: 'lines', // 系列类型为线
          coordinateSystem: 'geo', // 使用地理坐标系
          // polyline: true, // 设置为 true，表示是折线
          data: convertToLineData(convertData(geoJson), {
            name: '浙江',
            value: [119.5313, 29.8773]
          }),
          lineStyle: {
            color: 'red',
            width: 1,
            opacity: 0.6,
            curveness: 0.2
          },
          effect: {
            // 特效配置
            show: true, // 显示特效
            period: 4, // 特效周期，值越小速度越快
            trailLength: 0.2, // 尾迹长度，值越大尾迹越长
            color: 'yellow', // 特效颜色
            symbolSize: 5, // 特效大小
            polyline: true
          },
          emphasis: {
            // 强调样式配置
            lineStyle: {
              // 线样式配置
              width: 4, // 强调时线宽
              color: 'green' // 强调时线颜色
            }
          }
        }
      ]
    }
    myChart.value?.setOption(options)
  } catch (error) {
    console.error('Error fetching JSON data:', error)
  }
}

onMounted(() => {
  api()
  resizeObserver.value = new ResizeObserver((entries) => {
    // entries 包含观察到的元素信息
    entries.forEach((entry) => {
      // 获取新的宽度和高度
      const newWidth = entry.contentRect.width
      const newHeight = entry.contentRect.height
      // 在这里更新图表的大小
      myChart.value.resize({ width: newWidth, height: newHeight })
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
