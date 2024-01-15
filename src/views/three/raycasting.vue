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
camera.position.set(2, 2, 15)
camera.lookAt(0, 0, 0)
const renderer = new THREE.WebGLRenderer()
const axesHelper = new THREE.AxesHelper(5)
scene.add(axesHelper)
const controls = new OrbitControls(camera, renderer.domElement)

const sphere = new THREE.Mesh(
  new THREE.SphereGeometry(1, 32, 32),
  new THREE.MeshBasicMaterial({ color: 0x00ff00 })
)
sphere.position.x = -4
scene.add(sphere)

const sphere2 = new THREE.Mesh(
  new THREE.SphereGeometry(1, 32, 32),
  new THREE.MeshBasicMaterial({ color: 0xff00ff })
)
sphere2.position.x = 4
scene.add(sphere2)

// 创建射线
const raycaster = new THREE.Raycaster()
// 创建鼠标向量
const pointer = new THREE.Vector2()

const render = () => {
  // 通过摄像机和鼠标位置更新射线
  raycaster.setFromCamera(pointer, camera)
  // 计算物体和射线的焦点
  const intersects: any = raycaster.intersectObjects([sphere, sphere2])
  console.log('intersects:', intersects)
  if (intersects.length > 0) {
    if (intersects[0].object.isSelect) {
      intersects[0].object.isSelect = false
      intersects[0].object.material.color.set(intersects[0].object.oldClor)
      return
    }
    intersects[0].object.isSelect = true
    intersects[0].object.oldClor = intersects[0].object.material.color.getHex()
    intersects[0].object.material.color.set(0xff0000)
  }
}
const onPointerMove = (event: any) => {
  // 将鼠标位置归一化为设备坐标。x 和 y 方向的取值范围是 (-1 to +1)
  if (canvasRef.value) {
    pointer.x = ((event.clientX - 223) / (canvasRef.value?.clientWidth || 0)) * 2 - 1
    pointer.y = -((event.clientY - 130) / (canvasRef.value?.clientHeight || 0)) * 2 + 1
  }
  render()
}
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

    window.addEventListener('click', onPointerMove)
  }
  animation()
})
</script>

<style scoped></style>
