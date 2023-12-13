/// <reference types="vite/client" />
declare module "@/views/home/index.vue" {
  import Vue from "vue";
  export default Vue;
}
declare module "@/router/index" {
  import VueRouter from "vue-router";
  const router: VueRouter;
  export default router;
}
