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
camera.position.set(-90, 140, 200)
camera.lookAt(0, 0, 0)
const renderer = new THREE.WebGLRenderer()
const axesHelper = new THREE.AxesHelper(5)
scene.add(axesHelper)
const controls = new OrbitControls(camera, renderer.domElement)
const cubeTextureLoader = new THREE.CubeTextureLoader()
const starsTexture = `${PUBLIC_DIR}three/planet/stars.jpg`
scene.background = cubeTextureLoader.load([
  starsTexture,
  starsTexture,
  starsTexture,
  starsTexture,
  starsTexture,
  starsTexture
])
const textureLoader = new THREE.TextureLoader()
const sunGeo = new THREE.SphereGeometry(16, 30, 30)
const sunMat = new THREE.MeshBasicMaterial({
  map: textureLoader.load(`${PUBLIC_DIR}three/planet/sun.jpg`, (texture) => {
    Object.assign(texture, { colorSpace: THREE.SRGBColorSpace })
  })
})
const sun = new THREE.Mesh(sunGeo, sunMat)
scene.add(sun)
const pointLight = new THREE.PointLight(0xffffff, 30000, 300)
scene.add(pointLight)
const createPlanet = (size: number, texture: string, position: number, ring?: any) => {
  const geo = new THREE.SphereGeometry(size, 30, 30)
  const mat = new THREE.MeshStandardMaterial({
    map: textureLoader.load(texture, (val) => {
      Object.assign(val, { colorSpace: THREE.SRGBColorSpace })
    })
  })
  const mesh = new THREE.Mesh(geo, mat)
  mesh.position.x = position

  const obj = new THREE.Object3D()
  obj.add(mesh)
  if (ring) {
    const ringGeo = new THREE.RingGeometry(ring.innerRadius, ring.outerRadius, 32)
    const ringMat = new THREE.MeshBasicMaterial({
      map: textureLoader.load(ring.texture, (val) => {
        Object.assign(val, { colorSpace: THREE.SRGBColorSpace })
      }),
      side: THREE.DoubleSide
    })
    const ringMesh = new THREE.Mesh(ringGeo, ringMat)
    obj.add(ringMesh)
    ringMesh.position.x = position
    ringMesh.rotation.x = -0.5 * Math.PI

    console.log('ring:', ringMesh, ring, obj)
  }
  scene.add(obj)
  return { mesh, obj }
}
const mercury = createPlanet(3.2, `${PUBLIC_DIR}three/planet/mercury.jpg`, 28)
const venus = createPlanet(5.8, `${PUBLIC_DIR}three/planet/venus.jpg`, 44)
const earth = createPlanet(6, `${PUBLIC_DIR}three/planet/earth.jpg`, 62)
const mars = createPlanet(4, `${PUBLIC_DIR}three/planet/mars.jpg`, 78)
const jupiter = createPlanet(12, `${PUBLIC_DIR}three/planet/jupiter.jpg`, 100)
const saturn = createPlanet(10, `${PUBLIC_DIR}three/planet/saturn.jpg`, 138, {
  innerRadius: 10,
  outerRadius: 20,
  texture: `${PUBLIC_DIR}three/planet/saturn ring.png`
})
const uranus = createPlanet(7, `${PUBLIC_DIR}three/planet/uranus.jpg`, 176, {
  innerRadius: 7,
  outerRadius: 12,
  texture: `${PUBLIC_DIR}three/planet/uranus ring.png`
})
const neptune = createPlanet(7, `${PUBLIC_DIR}three/planet/neptune.jpg`, 200)
const pluto = createPlanet(2.8, `${PUBLIC_DIR}three/planet/pluto.jpg`, 216)

const animation = () => {
  controls.update()
  sun.rotateY(0.004)
  mercury.mesh.rotateY(0.004)
  venus.mesh.rotateY(0.002)
  earth.mesh.rotateY(0.02)
  mars.mesh.rotateY(0.018)
  jupiter.mesh.rotateY(0.04)
  saturn.mesh.rotateY(0.038)
  uranus.mesh.rotateY(0.03)
  neptune.mesh.rotateY(0.032)
  pluto.mesh.rotateY(0.008)

  mercury.obj.rotateY(0.04)
  venus.obj.rotateY(0.015)
  earth.obj.rotateY(0.01)
  mars.obj.rotateY(0.008)
  jupiter.obj.rotateY(0.002)
  saturn.obj.rotateY(0.0009)
  uranus.obj.rotateY(0.0004)
  neptune.obj.rotateY(0.0001)
  pluto.obj.rotateY(0.00007)
  renderer.render(scene, camera)
}
onMounted(async () => {
  await nextTick()
  if (canvasRef.value) {
    updateSize(canvasRef.value, camera, renderer)
    canvasRef.value?.appendChild(renderer.domElement)
  }
  renderer.setAnimationLoop(animation)
})
</script>

<style scoped></style>
