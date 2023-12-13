// typings/pinia-shims.d.ts

import { App, Plugin } from "vue";
import { Pinia } from "pinia";

// Augment the Vue 3 global API
declare module "vue" {
  interface GlobalComponents {
    Pinia: Pinia;
  }
}

// Expose Pinia to the global context
declare module "@vue/runtime-core" {
  interface ComponentCustomProperties {
    $pinia: Pinia;
  }
}

// Provide typings for `createPinia` plugin
declare module "pinia" {
  export const createPinia: () => Pinia;
}

// Provide typings for `useStore` helper
declare module "pinia" {
  export const useStore: <Id extends string | symbol, S extends { id: Id }>(
    storeId: Id
  ) => S;
}

// Provide typings for the Pinia plugin
declare const piniaPlugin: Plugin;
export default piniaPlugin;
