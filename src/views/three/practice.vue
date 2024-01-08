<template>
  <div ref="threeContainer" class="flex-1"></div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'

const threeContainer = ref<HTMLElement | null>(null)

const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 1000)
const renderer = new THREE.WebGL1Renderer()
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
const material = new THREE.MeshBasicMaterial({ color: 0xffff00 })
const parentMaterial = new THREE.MeshBasicMaterial({ color: 0x0fff00 })
// 设置网格 模型加材质
const parent = new THREE.Mesh(geometry, parentMaterial)
const cube = new THREE.Mesh(geometry, material)
parent.add(cube)
parent.position.set(-2, 0, 0)
cube.position.set(2, 0, 0)
// 设置相机位置 x y z
camera.position.set(2, 2, 10)
camera.lookAt(0, 0, 0)
const animation = () => {
  controls.update()
  requestAnimationFrame(animation)
  cube.rotation.x += 0.01
  cube.rotation.y += 0.01
  renderer.render(scene, camera)
}
// 在 onMounted 钩子中进行初始化和操作
onMounted(() => {
  if (threeContainer.value) {
    camera.aspect = threeContainer.value.offsetWidth / threeContainer.value.offsetHeight
    camera.updateProjectionMatrix()
    renderer.setSize(
      threeContainer.value.clientWidth - 55,
      threeContainer.value.clientHeight
    )
    console.log(
      threeContainer,
      threeContainer.value.offsetWidth,
      threeContainer.value.clientWidth
    )
    threeContainer.value.appendChild(renderer.domElement)
  }
  scene.add(parent)
  animation()
})
</script>

<style scoped>
/* 样式可以根据需要进行添加 */
</style>
