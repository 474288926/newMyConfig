import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// 如果编辑器提示 path 模块找不到，则可以安装一下 @types/node -> npm i @types/node -D
import { resolve } from 'path'
// VitePWA
import { VitePWA } from 'vite-plugin-pwa'
/**
 * @desc:由于按需加载组件无法使用component组件渲染，作者也无支持此功能计划，建议使用全局导入，所以注释掉按需导入
 */
// 配置自动导入element ui组件
// import AutoImport from 'unplugin-auto-import/vite'
// import Components from 'unplugin-vue-components/vite'
// import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
// 配置自动导入element icon
// import Icons from 'unplugin-icons/vite'
// import IconsResolver from 'unplugin-icons/resolver'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // AutoImport({
    //   resolvers: [
    //     ElementPlusResolver(),
    //     IconsResolver({
    //       prefix: 'Icon'
    //     })
    //   ]
    // }),
    // Components({
    //   resolvers: [
    //     ElementPlusResolver(),
    //     IconsResolver({
    //       prefix: 'icon',
    //       enabledCollections: ['ep']
    //     })
    //   ],
    //   dts: 'src/components.d.ts'
    // }),
    // Icons({
    //   autoInstall: true
    // }),
    VitePWA({
      includeAssets: ['vite.svg'],
      manifest: {
        name: 'Your App',
        short_name: 'App',
        start_url: './index.html',
        icons: [
          {
            src: 'pwa-144.png',
            sizes: '144x144',
            type: 'image/png'
          },
          {
            src: 'pwa-192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'pwa-512.png',
            sizes: '512x512',
            type: 'image/png'
          },
          {
            src: 'pwa-512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any'
          },
          {
            src: 'pwa-512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable'
          }
        ],
        screenshots: [
          {
            src: 'pwa-512.png',
            sizes: '512x512',
            type: 'image/png',
            form_factor: 'wide',
            label: 'Homescreen of Awesome App'
          },
          {
            src: 'pwa-512.png',
            sizes: '512x512',
            type: 'image/png',
            form_factor: 'narrow',
            label: 'Homescreen of Awesome App1'
          }
        ],
        background_color: '#ffffff',
        theme_color: '#000000',
        display: 'standalone'
      }
      // registerType: 'autoUpdate',
      // workbox: {
      //   cleanupOutdatedCaches: true,
      //   runtimeCaching: [
      //     {
      //       urlPattern: /someInterface/i, // 接口缓存 此处填你想缓存的接口正则匹配
      //       handler: 'CacheFirst',
      //       options: {
      //         cacheName: 'interface-cache'
      //       }
      //     },
      //     {
      //       urlPattern: /(.*?)\.(js|css|ts)/, // js /css /ts静态资源缓存
      //       handler: 'CacheFirst',
      //       options: {
      //         cacheName: 'js-css-cache'
      //       }
      //     },
      //     {
      //       urlPattern: /(.*?)\.(png|jpe?g|svg|gif|bmp|psd|tiff|tga|eps)/, // 图片缓存
      //       handler: 'CacheFirst',
      //       options: {
      //         cacheName: 'image-cache'
      //       }
      //     }
      //   ]
      // }
    })
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src') // 设置 `@` 指向 `src` 目录
    }
  },
  base: './', // 设置打包路径
  build: {
    assetsDir: './',
    // 小于此阈值的导入或引用资源将内联为 base64 编码，以避免额外的 http 请求。设置为 0 可以完全禁用此项
    assetsInlineLimit: 4096,
    // chunk 大小警告的限制
    chunkSizeWarningLimit: 500,
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: process.env.NODE_ENV === 'production',
        drop_debugger: process.env.NODE_ENV === 'production'
      }
    }
  },
  server: {
    port: 4000, // 设置服务启动端口号
    open: true, // 设置服务启动时是否自动打开浏览器
    cors: true // 允许跨域

    // 设置代理，根据我们项目实际情况配置
    // proxy: {
    //   '/api': {
    //     target: 'http://xxx.xxx.xxx.xxx:8000',
    //     changeOrigin: true,
    //     secure: false,
    //     rewrite: (path) => path.replace('/api/', '/')
    //   }
    // }
  }
})
