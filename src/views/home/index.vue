<template>
  <div>
    <div v-for="index in 1000" :key="index" class="p-4 m-2 bg-blue-300">
      {{ index }}
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
