<template>
  <div>
    <v-scale-screen>
      <img src="@/assets/img/charts.png" alt="" />
    </v-scale-screen>
  </div>
</template>

<script setup lang="ts">
import VScaleScreen from 'v-scale-screen'
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
