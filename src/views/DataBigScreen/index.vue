<template>
  <v-scale-screen :boxStyle="{ background: 'black' }">
    <header class="text-center text-white text-4xl">数据大屏适配方案</header>
    <main class="flex flex-row">
      <aside class="w-3/12">
        <lineEchart />
        <barEchart />
        <lineEchart />
        <barEchart />
      </aside>
      <section class="w-6/12">
        <geoEchart />
      </section>
      <aside class="w-3/12">
        <lineEchart />
        <barEchart />
        <lineEchart />
        <barEchart />
      </aside>
    </main>
  </v-scale-screen>
</template>

<script setup lang="ts">
import VScaleScreen from 'v-scale-screen'
import lineEchart from './common/line.vue'
import barEchart from './common/bar.vue'
import geoEchart from './common/geo.vue'
</script>

<style scoped>
.corner {
  border-image-source: radial-gradient(
    60% 60% at 50% 50%,
    transparent 0px,
    transparent 100%,
    #6d7096 100%
  );
  border-image-slice: 1;
  border-width: 4px;
  border-style: solid;
  position: relative;
}
.corner::before {
  content: '';
  position: absolute;
  top: -4px;
  left: -4px;
  width: calc(100% + 8px);
  height: calc(100% + 8px);
  border: 4px solid rgba(255, 0, 0, 0.5);
}
</style>
