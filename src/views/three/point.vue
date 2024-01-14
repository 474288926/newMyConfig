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
const geometry = new THREE.BufferGeometry()

// 创建一个简单的矩形. 在这里我们左上和右下顶点被复制了两次。
// 因为在两个三角面片里，这两个顶点都需要被用到。有正反两面逆时针是反面
const vertices = new Float32Array([-1.0, -1.0, 0, 1.0, -1.0, 0, 1.0, 1.0, 0, -1, 1, 0])

// itemSize = 3 因为每个顶点都是一个三元组。
geometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3))
// 创建索引
const indices = new Uint32Array([0, 1, 2, 2, 3, 0])
// 创建索引属性 共用定点
geometry.setIndex(new THREE.BufferAttribute(indices, 1))
// 从索引值开始
geometry.addGroup(0, 3, 0)
geometry.addGroup(3, 3, 1)
const material = new THREE.MeshBasicMaterial({
  color: 0xff0000
  // wireframe: true,//线
  // side: THREE.DoubleSide // 显示正反两面
})
const material1 = new THREE.MeshBasicMaterial({
  color: 0x00ff00
})

const mesh = new THREE.Mesh(geometry, [material, material1])

const animation = () => {
  controls.update()
  requestAnimationFrame(animation)
  // cube.rotation.x += 0.01
  // cube.rotation.y += 0.01
  renderer.render(scene, camera)
}
onMounted(async () => {
  await nextTick()
  if (canvasRef.value) {
    updateSize(canvasRef.value, camera, renderer)
    canvasRef.value?.appendChild(renderer.domElement)
  }
  scene.add(mesh)
  controls.update()
  animation()
})
</script>

<style scoped></style>
