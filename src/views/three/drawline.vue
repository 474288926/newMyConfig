<template>
  <div ref="threeContainer"></div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import * as THREE from 'three'

// 使用 ref 创建响应式变量
const threeContainer: any = ref(null)
const renderer: any = new THREE.WebGLRenderer()
const camera: any = new THREE.PerspectiveCamera(
  45,
  window.innerWidth / window.innerHeight,
  1,
  500
)

const scene = new THREE.Scene()

// 在 onMounted 钩子中进行初始化和操作
onMounted(() => {
  renderer.setSize(window.innerWidth / 2, window.innerHeight / 2)
  threeContainer.value.appendChild(renderer.domElement)
  camera.position.set(0, 0, 100)
  camera.lookAt(0, 0, 0)
  // create a blue LineBasicMaterial
  const material = new THREE.LineBasicMaterial({ color: 0x0000ff })
  const points: any = []
  points.push(new THREE.Vector3(-10, 0, 0))
  points.push(new THREE.Vector3(0, 40, 60))
  points.push(new THREE.Vector3(10, 0, 0))
  const geometry = new THREE.BufferGeometry().setFromPoints(points)
  const line = new THREE.Line(geometry, material)
  scene.add(line)
  renderer.render(scene, camera)
})
</script>

<style scoped>
/* 样式可以根据需要进行添加 */
</style>
