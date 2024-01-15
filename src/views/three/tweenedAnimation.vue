<template>
  <div class="flex-1 overflow-hidden">
    <div ref="canvasRef" class="h-full"></div>
  </div>
</template>

<script setup lang="ts">
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
// 导入补间动画库
import * as TWEEN from 'three/examples/jsm/libs/tween.module.js'
import GUI from 'lil-gui'
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

const gui = new GUI()
gui.title('控制器')
const guiElement = gui.domElement
guiElement.style.top = '140px'
guiElement.style.right = '32px'

const sphere = new THREE.Mesh(
  new THREE.SphereGeometry(1, 32, 32),
  new THREE.MeshBasicMaterial({ color: 0xff00ff })
)
sphere.position.x = -4
// 创建补间对象
const tween = new TWEEN.Tween(sphere.position)
tween.to({ x: 4 }, 1000)

const params = {
  stop() {
    tween.stop()
  }
}
gui.add(params, 'stop')
// 开始的回调
tween.onStart(() => {
  console.log('开始')
})
// 结束的回调
tween.onComplete(() => {
  console.log('结束')
})
// 停止的回调
tween.onStop(() => {
  console.log('停止')
})
// 更新的回调
tween.onUpdate(() => {
  console.log('更新')
})
// 设置循环次数
// tween.repeat(Infinity)
// 设置循环往返
// tween.yoyo(true)
// 每次动画的间隔
// tween.delay(1000)
// 设置缓动运动曲线
tween.easing(TWEEN.Easing.Quadratic.InOut)

const tween1 = new TWEEN.Tween(sphere.position)
tween1.to({ x: -4 }, 1000)
tween.chain(tween1)
tween1.chain(tween)
// 启动动画
tween.start()

const animation = () => {
  controls.update()
  requestAnimationFrame(animation)
  // 更新动画
  TWEEN.update()
  renderer.render(scene, camera)
}
onMounted(async () => {
  await nextTick()
  if (canvasRef.value) {
    canvasRef.value.appendChild(guiElement)
    updateSize(canvasRef.value, camera, renderer)
    canvasRef.value?.appendChild(renderer.domElement)
  }
  scene.add(sphere)
  controls.update()
  animation()
})
</script>

<style scoped></style>
