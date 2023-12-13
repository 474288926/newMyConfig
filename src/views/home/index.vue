<template>
  <div>
    <header>home123131</header>
    <main>
      <p>Count: {{ counter.count }}</p>
      -- {{ x }} -- {{ y }}
      <button @click="counter.increment">Increment</button>
      <button @click="counter.decrement">Decrement</button>
    </main>
  </div>
</template>

<script setup lang="ts">
import { useCounterStore } from "@/store/counter/index";
import { inject } from "vue";
import { useMouse } from "@vueuse/core";
// "x" and "y" are refs
const { x, y } = useMouse();
const counter = useCounterStore();
const router = inject("router");
console.log("router:", router);
</script>

<style scoped></style>
