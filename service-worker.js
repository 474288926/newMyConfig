// service-worker.js
// eslint-disable-next-line no-restricted-globals
self.addEventListener('message', (event) => {
  if (event.data && event.data.action === 'skipWaiting') {
    // eslint-disable-next-line no-restricted-globals
    self.skipWaiting() // 立即激活新的 Service Worker
  }
})

// 其他缓存策略和生命周期事件的处理
