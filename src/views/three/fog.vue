<template>
  <div class="flex-1 overflow-hidden">
    <div ref="canvasRef" class="h-full"></div>
  </div>
</template>

<script setup lang="ts">
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { ref, nextTick, onMounted } from 'vue'
import { updateSize } from '@/utils/three/updateSize'

const canvasRef = ref<HTMLElement | null>(null)
const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 1000)
camera.position.set(2, 2, 10)
camera.lookAt(0, 0, 0)
const renderer = new THREE.WebGLRenderer()
const axesHelper = new THREE.AxesHelper(5)
scene.add(axesHelper)
const controls = new OrbitControls(camera, renderer.domElement)

const geometry = new THREE.BoxGeometry(1, 1, 100)
const material = new THREE.MeshBasicMaterial({ color: 0x0ff000 })
const mesh = new THREE.Mesh(geometry, material)
// 创建场景线性雾
scene.fog = new THREE.Fog(0x999999, 0.1, 50)
// 指数雾
// scene.fog = new THREE.FogExp2(0x999999, 0.05)
scene.background = new THREE.Color(0x999999)

const animation = () => {
  controls.update()
  renderer.render(scene, camera)
}
onMounted(async () => {
  await nextTick()
  if (canvasRef.value) {
    updateSize(canvasRef.value, camera, renderer)
    canvasRef.value?.appendChild(renderer.domElement)
  }
  scene.add(mesh)
  renderer.setAnimationLoop(animation)
})
</script>

<style scoped></style>
