<template>
  <div class="flex-1 overflow-hidden">
    <div ref="canvasRef" class="w-full h-full"></div>
  </div>
</template>

<script setup lang="ts">
import * as THREE from 'three'
import { ref, nextTick, onMounted } from 'vue'

const canvasRef = ref<HTMLElement | null>(null)
const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 1000)
const renderer = new THREE.WebGL1Renderer()

onMounted(async () => {
  await nextTick()
  if (canvasRef.value) {
    renderer.setSize(canvasRef.value?.offsetWidth, canvasRef.value?.offsetHeight)
    canvasRef.value?.appendChild(renderer.domElement)
    renderer.render(scene, camera)
  }
})
</script>

<style scoped></style>
