<template>
  <div id="loader" style="position: relative; width: 100%; height: 100vh; z-index: 999">
    <!-- 加载动画内容 -->
    <div class="loading-spinner">loading....</div>
  </div>
</template>

<style scoped>
/* 样式可以根据你的需求自定义 */
.loading-spinner {
  border: 8px solid rgba(255, 255, 255, 0.3);
  border-top: 8px solid #3498db;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spin 1s linear infinite;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -25px;
  margin-left: -25px;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
