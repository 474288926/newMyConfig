<template>
  <div class="flex-1 overflow-hidden">
    <div ref="canvasRef" class="h-full"></div>
  </div>
</template>

<script setup lang="ts">
import GUI from 'lil-gui'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader.js'
import { ref, nextTick, onMounted } from 'vue'

console.log('PUBLIC_DIR:', PUBLIC_DIR)
const canvasRef = ref<HTMLElement | null>(null)
const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 1000)
camera.position.set(2, 2, 1)
camera.lookAt(0, 0, 0)
const renderer = new THREE.WebGLRenderer()
const axesHelper = new THREE.AxesHelper(5)
scene.add(axesHelper)
const controls = new OrbitControls(camera, renderer.domElement)
const gui = new GUI()
gui.title('控制器')
const guiElement = gui.domElement
guiElement.style.top = '140px'
guiElement.style.right = '32px'
// 创建纹理加载器
const textureLoader = new THREE.TextureLoader()
// 加载纹理
const texture = textureLoader.load(`${PUBLIC_DIR}three/stickers/color.jpg`)
// 设置srgb色彩空间
texture.colorSpace = THREE.SRGBColorSpace
// 设置线性srgb色彩空间
// texture.colorSpace = THREE.LinearSRGBColorSpace
// 不设置 默认线性srgb色彩空间
// texture.colorSpace = THREE.NoColorSpace
// 加载ao贴图 环境光遮罩贴图
const aoMap = textureLoader.load(`${PUBLIC_DIR}three/stickers/ambientOcclusion.jpg`)
// 加载透明度贴图
// const alphaMap = textureLoader.load(`${PUBLIC_DIR}three/stickers/height.jpg`)
// 添加光照贴图
// const lightMap = textureLoader.load(`${PUBLIC_DIR}three/minecraft.png`)
// 添加高光贴图
const specularMap = textureLoader.load(`${PUBLIC_DIR}three/stickers/roughness.jpg`)

const plane = new THREE.PlaneGeometry(1, 2)
const planeMaterial = new THREE.MeshBasicMaterial({
  color: '#fff',
  map: texture, // 设置纹理
  // 允许透明 png图片相关
  transparent: true,
  // ao贴图
  aoMap,
  // 透明度贴图
  // alphaMap,
  // 光照贴图
  // lightMap,
  // 高光贴图
  specularMap,
  // 设置反射程度
  reflectivity: 0.3
})
const rgbeLoader = new RGBELoader()
rgbeLoader.load(`${PUBLIC_DIR}three/hdr/003.hdr`, (envMap) => {
  // 设置球形贴图
  Object.assign(envMap, { mapping: THREE.EquirectangularReflectionMapping })
  // 设置场景背景
  scene.background = envMap
  // 设置场景环境贴图
  scene.environment = envMap
  // 设置材质环境贴图
  planeMaterial.envMap = envMap
})
gui.add(planeMaterial, 'aoMapIntensity', 0, 1).name('ao贴图强度')
gui
  .add(texture, 'colorSpace', {
    sRGB: THREE.SRGBColorSpace,
    linear: THREE.LinearSRGBColorSpace
  })
  .onChange(() => {
    // 中途更改纹理属性  需要更新纹理
    texture.needsUpdate = true
  })
const mesh = new THREE.Mesh(plane, planeMaterial)
// 添加光源
const light = new THREE.PointLight(0xffffff, 1)
light.position.set(2, 3, 4)
scene.add(light)

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
    canvasRef.value.appendChild(guiElement)
    renderer.setSize(canvasRef.value?.clientWidth, canvasRef.value?.clientHeight)
    canvasRef.value?.appendChild(renderer.domElement)
  }
  scene.add(mesh)
  controls.update()
  animation()
})
</script>

<style scoped></style>
