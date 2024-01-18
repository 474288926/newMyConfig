<template>
  <div class="flex-1 overflow-hidden">
    <div class="absolute top-0 left-0 flex gap-8 flex-col">
      <div class="cursor-pointer" @click="updateGeometry(boxGeo, 100)">方形</div>
      <div class="cursor-pointer" @click="updateGeometry(sphereGeo, -100)">圆形</div>
    </div>
    <div ref="canvasRef" class="h-full"></div>
  </div>
</template>

<script setup lang="ts">
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import * as TWEEN from 'three/examples/jsm/libs/tween.module.js'
import { ref, nextTick, onMounted } from 'vue'
import { updateSize } from '@/utils/three/updateSize'

const canvasRef = ref<HTMLElement | null>(null)

const scene = new THREE.Scene()
scene.fog = new THREE.FogExp2(0x05050c, 0.0005)
const camera = new THREE.PerspectiveCamera(60, 1, 10, 10000)
camera.position.set(90, 140, 200)
const renderer = new THREE.WebGLRenderer()
renderer.setPixelRatio(window.devicePixelRatio)
// const axesHelper = new THREE.AxesHelper(5)
// scene.add(axesHelper)
const controls = new OrbitControls(camera, renderer.domElement)

const MAX = 15000
const geo: any = new THREE.BufferGeometry()

const positions = new Float32Array(MAX * 3)

geo.setAttribute('position', new THREE.BufferAttribute(positions, 3))

const textureLoader = new THREE.TextureLoader()
const pointMap = textureLoader.load(`${PUBLIC_DIR}three/gradient.png`)

const mat = new THREE.PointsMaterial({
  size: 4,
  transparent: true,
  map: pointMap
})
const points = new THREE.Points(geo, mat)
scene.add(points)
const pos = geo.getAttribute('position')

const boxGeo = new THREE.BoxGeometry(40, 40, 40, 10, 10, 10).getAttribute('position')
const sphereGeo = new THREE.SphereGeometry(30, 30, 30).getAttribute('position')
const maxCount = ref(0)

const updateGeometry = (geometry: any, n: number) => {
  const tweens = []
  const { array, count } = geometry
  maxCount.value = maxCount.value > count ? maxCount.value : count
  for (let i = 0; i < maxCount.value; i += 1) {
    const newVertice = new THREE.Vector3(
      geo.attributes.position.array[i * 3],
      geo.attributes.position.array[i * 3 + 1],
      geo.attributes.position.array[i * 3 + 2]
    )

    tweens.push(new TWEEN.Tween(newVertice).easing(TWEEN.Easing.Exponential.In))
    tweens[i]
      .to(
        {
          x: array[i * 3] * 2 + n,
          y: array[i * 3 + 1] * 2,
          z: array[i * 3 + 2] * 2
        },
        Math.random() * 1000
      )
      .delay(Math.random() * 800)
      .onUpdate(() => {
        pos.array[i * 3] = newVertice.x
        pos.array[i * 3 + 1] = newVertice.y
        pos.array[i * 3 + 2] = newVertice.z
        geo.setAttribute('position', new THREE.BufferAttribute(pos.array, 3))
        // pos.needsUpdate = true
      })

    tweens[i].start()
  }
}

const update = () => {
  const arr = pos.array
  for (let i = 0, s = MAX, j = 0; i < s; i += 1, j += 3) {
    arr[j] = (Math.random() - 0.5) * 2000
    arr[j + 1] = (Math.random() - 0.5) * 2000
    arr[j + 2] = (Math.random() - 0.5) * 2000
  }
}

const animation = () => {
  controls.update()
  TWEEN.update()
  renderer.render(scene, camera)
}
onMounted(async () => {
  await nextTick()
  if (canvasRef.value) {
    updateSize(canvasRef.value, camera, renderer)
    canvasRef.value?.appendChild(renderer.domElement)
  }
  update()
  renderer.setAnimationLoop(animation)
})
</script>

<style scoped></style>
