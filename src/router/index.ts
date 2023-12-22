import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import { inject } from 'vue'
import layout from '@/layouts/index.vue'
import useRouterStore from '@/store/router/index'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'login',
    meta: { title: '登陆', hidden: true },
    component: () => import('@/views/login/index.vue')
  },
  {
    path: '/register',
    name: 'register',
    meta: { title: '注册', hidden: true },
    component: () => import('@/views/login/register.vue')
  },
  {
    path: '/',
    redirect: '/home',
    meta: { title: '首页', icon: 'house' },
    component: layout,
    children: [
      {
        path: '/home',
        name: 'home',
        meta: {
          title: '首页',
          icon: 'house'
        },
        component: () => import('@/views/home/index.vue')
      }
    ]
  },
  {
    path: '/test',
    redirect: '/test/test1',
    meta: { title: '测试', icon: 'bell' },
    component: layout,
    children: [
      {
        path: '/test/test1',
        name: 'test1',
        meta: {
          title: '测试1-1'
        },
        component: () => import('@/views/test/index.vue'),
        children: [
          {
            path: '/test/test1/test3',
            name: 'test3',
            meta: {
              title: '测试1-1-1'
            },
            component: () => import('@/views/test/index1.vue')
          },
          {
            path: '/test/test1/test33',
            name: 'test33',
            meta: {
              title: '测试1-1-1-3'
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
          icon: 'Lock'
        },
        component: () => import('@/views/test/index1.vue')
      },
      {
        path: '/test/test4',
        name: 'test4',
        meta: {
          title: '特别长的测',
          icon: 'Lock'
        },
        component: () => import('@/views/test/index1.vue')
      }
    ]
  },
  {
    path: '/test22',
    redirect: '/test/test21',
    meta: { title: '测试2222223', icon: 'bell' },
    component: layout,
    children: [
      {
        path: '/test/test21',
        name: 'test21',
        meta: {
          title: '测试21-1',
          icon: 'bell'
        },
        component: () => import('@/views/test/index.vue')
      }
    ]
  }
]
const router = createRouter({
  history: createWebHashHistory(),
  routes
})
const whites = ['/login', '/register']
router.beforeEach((to, from) => {
  const Cookies: any = inject('Cookies')
  console.log(123, to, from, Cookies.get('token'))
  const isToken = Cookies.get('token')
  console.log('white:', !whites.includes(to.path))
  if (!isToken && !whites.includes(to.path)) {
    return '/login'
  }
  return true
})

router.afterEach(async (to, from) => {
  if (!whites.includes(to.path)) {
    const { path, meta, matched } = to
    const { setNavList, setBreadList, setRouterList, setActiveRouteUrl } =
      useRouterStore()
    setNavList()
    setBreadList(matched)
    setRouterList([{ path, meta }])
    setActiveRouteUrl(path)
  }
  console.log(to, from, '跳转成功:')
})

export default router
