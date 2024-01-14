<template>
  <div class="flex-1 overflow-hidden">
    <div ref="canvasRef" class="h-full"></div>
  </div>
</template>

<script setup lang="ts">
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
// 导入gltf加载器
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'
// 导入压缩的gltf加载器
import { DRACOLoader } from 'three/addons/loaders/DRACOLoader.js'
import { ref, nextTick, onMounted } from 'vue'
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader.js'

const canvasRef = ref<HTMLElement | null>(null)
const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(45, 1, 0.5, 1000)
camera.position.set(2, 2, 10)
camera.lookAt(0, 0, 0)
const renderer = new THREE.WebGLRenderer()
const axesHelper = new THREE.AxesHelper(5)
scene.add(axesHelper)
const controls = new OrbitControls(camera, renderer.domElement)

// 实例化gltf加载器
const gltfLoader = new GLTFLoader()
// 加载模型
gltfLoader.load(
  `${PUBLIC_DIR}three/model/Across the spider verse spiderman 2099.glb`,
  // 加载完成回调
  (gltf) => {
    console.log(gltf)
    scene.add(gltf.scene)
  }
)
// 实例化draco加载器
const dracoLoader = new DRACOLoader()
// 设置解析器路径
dracoLoader.setDecoderPath(`${PUBLIC_DIR}three/draco/`)
// 设置gltf加载器draco解码器
gltfLoader.setDRACOLoader(dracoLoader)
// 加载压缩模型
gltfLoader.load(`${PUBLIC_DIR}three/model/bigcity.glb`, (gltf) => {
  gltf.scene.scale.set(0.01, 0.01, 0.01)
  scene.add(gltf.scene)
})
// 加载环境贴图
const rgbeLoader = new RGBELoader()
rgbeLoader.load(`${PUBLIC_DIR}three/hdr/002.hdr`, (envMap) => {
  Object.assign(envMap, { mapping: THREE.EquirectangularReflectionMapping })
  scene.environment = envMap
})
// 创建场景线性雾
scene.fog = new THREE.Fog(0x999999, 0.1, 50)
// 指数雾
// scene.fog = new THREE.FogExp2(0x999999, 0.05)
scene.background = new THREE.Color(0x999999)
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
    renderer.setSize(canvasRef.value?.clientWidth, canvasRef.value?.clientHeight)
    canvasRef.value?.appendChild(renderer.domElement)
  }
  controls.update()
  animation()
})
</script>

<style scoped></style>
