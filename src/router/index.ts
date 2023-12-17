import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import layout from '@/layouts/index.vue'
import useRouterStore from '@/store/router/index'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home',
    meta: { title: '首页', icon: 'House' },
    component: layout,
    children: [
      {
        path: '/home',
        name: 'home',
        meta: {
          title: '首页',
          icon: 'House'
        },
        component: () => import('@/views/home/index.vue')
      }
    ]
  },
  {
    path: '/test',
    redirect: '/test/test1',
    meta: { title: '测试', icon: 'House' },
    component: layout,
    children: [
      {
        path: '/test/test1',
        name: 'test1',
        meta: {
          title: '测试1-1',
          icon: 'House'
        },
        component: () => import('@/views/test/index.vue'),
        children: [
          {
            path: '/test/test1/test3',
            name: 'test3',
            meta: {
              title: '测试1-1-1',
              icon: 'House'
            },
            component: () => import('@/views/home/index.vue')
          }
        ]
      },
      {
        path: '/test/test2',
        name: 'test2',
        meta: {
          title: '测试1-2',
          icon: 'House'
        },
        component: () => import('@/views/test/index1.vue')
      }
    ]
  }
]
const router = createRouter({
  history: createWebHashHistory(),
  routes
})
router.afterEach((to, from) => {
  const { setNavList } = useRouterStore()
  setNavList()
  console.log(to, from, '跳转成功:')
})

export default router
