<template>
  <div class="flex-1 overflow-hidden">
    <div ref="canvasRef" class="h-full"></div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, nextTick } from 'vue'
import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
import GUI from 'lil-gui'
import { toggleFullscreen } from '@/utils/toggleFullscreen'
import { updateSize } from '@/utils/three/updateSize'

const canvasRef = ref<HTMLElement | null>(null)

const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 1000)
// 设置相机位置 x y z
camera.position.set(2, 2, 10)
camera.lookAt(0, 0, 0)
const renderer = new THREE.WebGLRenderer()
const axesHelper = new THREE.AxesHelper(5)
scene.add(axesHelper)
// 控制器 可通过第二个参数调整控制的作用在哪个对象上 比如document.body 会作用在整个body页面
const controls = new OrbitControls(camera, renderer.domElement)
// 设置阻尼感
controls.enableDamping = true
controls.dampingFactor = 0.05
// 设置自动旋转
controls.autoRotate = true
// 创建立方体 宽高深
const geometry = new THREE.BoxGeometry(1, 1, 1)
// 设置基础材质不受光
const material = new THREE.MeshBasicMaterial({ color: 0xffff00, wireframe: true })
const parentMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 })
const parentMaterial1 = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const parentMaterial2 = new THREE.MeshBasicMaterial({ color: 0x00fff0 })
const parentMaterial3 = new THREE.MeshBasicMaterial({ color: 0xffe000 })
const parentMaterial4 = new THREE.MeshBasicMaterial({ color: 0xf0ffff })
const parentMaterial5 = new THREE.MeshBasicMaterial({ color: 0xff0ff0 })
// 设置网格 模型加材质
const parent = new THREE.Mesh(geometry, [
  parentMaterial,
  parentMaterial1,
  parentMaterial2,
  parentMaterial3,
  parentMaterial4,
  parentMaterial5
])
const cube = new THREE.Mesh(geometry, material)
parent.add(cube)
parent.position.set(-4, 0, 0)
// parent.scale.set(4, 4, 4)
cube.position.set(4, 0, 0)
// cube.scale.set(2, 2, 2)
cube.rotation.x = Math.PI / 4

const gui = new GUI()
gui.title('控制器')
const guiElement = gui.domElement
guiElement.style.top = '140px'
guiElement.style.right = '32px'
const myObject = {
  toggleFullscreen: () => {
    if (canvasRef.value) {
      toggleFullscreen(canvasRef.value)
    }
  }
}
gui.add(myObject, 'toggleFullscreen').name('全屏切换')
const folder = gui.addFolder('立方体位置')
folder
  .add(cube.position, 'x', -5, 5)
  .step(1)
  .name('立方体x轴位置')
  .onChange((event: number) => {
    console.log(event)
  })
folder
  .add(cube.position, 'y', -5, 5)
  .step(1)
  .name('立方体y轴位置')
  .onFinishChange((event: number) => {
    console.log(event)
  })
folder.add(cube.position, 'z', -5, 5).step(1).name('立方体z轴位置')
gui.add(parentMaterial, 'wireframe').name('父元素线框模式')
const colorParams = {
  cubecolor: '#0ff000'
}
gui
  .addColor(colorParams, 'cubecolor')
  .name('立方体颜色')
  .onChange((val: string) => {
    cube.material.color.set(val)
  })
const animation = () => {
  controls.update()
  cube.rotation.x += 0.01
  cube.rotation.y += 0.01
  renderer.render(scene, camera)
}
// 在 onMounted 钩子中进行初始化和操作
onMounted(async () => {
  await nextTick()
  if (canvasRef.value) {
    canvasRef.value.appendChild(guiElement)
    updateSize(canvasRef.value, camera, renderer)
    canvasRef.value.appendChild(renderer.domElement)
  }
  scene.add(parent)
  renderer.setAnimationLoop(animation)
  window.addEventListener('resize', () => {
    if (canvasRef.value) {
      updateSize(canvasRef.value, camera, renderer)
    }
  })
})
</script>

<style scoped>
/* 样式可以根据需要进行添加 */
</style>
