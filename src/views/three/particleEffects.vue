<template>
  <div class="flex-1 overflow-hidden">
    <!-- <div class="absolute top-8 left-8 flex gap-8 flex-col">
      <div class="cursor-pointer text-white" @click="updateGeometry(boxGeo, 80)">
        方形
      </div>
      <div class="cursor-pointer text-white" @click="updateGeometry(sphereGeo, -80)">
        圆形
      </div>
    </div> -->
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
const camera = new THREE.PerspectiveCamera(60, 1, 100, 10000)
camera.position.set(90, 140, 200)
const renderer = new THREE.WebGLRenderer()
renderer.setPixelRatio(window.devicePixelRatio)
// const axesHelper = new THREE.AxesHelper(5)
// scene.add(axesHelper)
const controls = new OrbitControls(camera, renderer.domElement)

const MAX = 1500
const geo: any = new THREE.BufferGeometry()
const aroundGeo = new THREE.BufferGeometry()
const positions = new Float32Array(MAX * 3)
const aroundPositions = new Float32Array(500 * 3)
for (let i = 0, s = MAX, j = 0; i < s; i += 1, j += 3) {
  positions[j] = Math.random() * 800 - 400
  positions[j + 1] = Math.random() * 800 - 400
  positions[j + 2] = Math.random() * 800 - 400
  if (i < 500) {
    aroundPositions[j] = Math.random() * 600 - 400
    aroundPositions[j + 1] = Math.random() * 600 - 400
    aroundPositions[j + 2] = Math.random() * 600 - 400
  }
}
geo.setAttribute('position', new THREE.BufferAttribute(positions, 3))
aroundGeo.setAttribute('position', new THREE.BufferAttribute(aroundPositions, 3))
const textureLoader = new THREE.TextureLoader()
const pointMap = textureLoader.load(`${PUBLIC_DIR}three/gradient.png`)
pointMap.colorSpace = THREE.SRGBColorSpace

const mat = new THREE.PointsMaterial({
  size: 4,
  transparent: true,
  map: pointMap
})
const aroundMat = new THREE.PointsMaterial({
  size: 2,
  transparent: true,
  map: pointMap
})
const points = new THREE.Points(geo, mat)
const aroundPoints = new THREE.Points(aroundGeo, aroundMat)
scene.add(points)
scene.add(aroundPoints)
const pos = geo.getAttribute('position')

const boxGeo = new THREE.BoxGeometry(100, 100, 100, 8, 8, 8).getAttribute('position')
const sphereGeo = new THREE.SphereGeometry(100, 20, 20).getAttribute('position')
const maxCount = ref(0)
const toggle = ref(false)
const updateGeometry = (geometry: any, n: any) => {
  toggle.value = !toggle.value
  const { array, count } = geometry
  maxCount.value = maxCount.value > count ? maxCount.value : count
  for (let i = 0; i < maxCount.value; i += 1) {
    const newVertice = new THREE.Vector3(
      geo.attributes.position.array[i * 3] - n,
      geo.attributes.position.array[i * 3 + 1],
      geo.attributes.position.array[i * 3 + 2]
    )

    new TWEEN.Tween(newVertice)
      .easing(TWEEN.Easing.Exponential.In)
      .to(
        {
          x: array[i * 3] === undefined ? Math.random() * 800 - 400 : array[i * 3] + n,
          y:
            array[i * 3 + 1] === undefined
              ? Math.random() * 800 - 400
              : array[i * 3 + 1],
          z:
            array[i * 3 + 2] === undefined
              ? Math.random() * 800 - 400
              : array[i * 3 + 2]
        },
        1000
      )
      .delay(Math.random() * 400)
      .onUpdate(() => {
        pos.array[i * 3] = newVertice.x + n
        pos.array[i * 3 + 1] = newVertice.y
        pos.array[i * 3 + 2] = newVertice.z
        geo.setAttribute('position', new THREE.BufferAttribute(pos.array, 3))
        // pos.needsUpdate = true
      })
      .start()
  }
}

const animation = () => {
  controls.update()
  aroundPoints.rotation.x += Math.PI / 1000
  aroundPoints.rotation.y -= Math.PI / 1000
  TWEEN.update()
  camera.lookAt(scene.position)
  renderer.render(scene, camera)
}
onMounted(async () => {
  await nextTick()
  if (canvasRef.value) {
    updateSize(canvasRef.value, camera, renderer)
    canvasRef.value?.appendChild(renderer.domElement)
  }
  setInterval(() => {
    if (toggle.value) {
      updateGeometry(boxGeo, 80)
    } else {
      updateGeometry(sphereGeo, -80)
    }
  }, 5000)

  renderer.setAnimationLoop(animation)
})
</script>

<style scoped></style>
