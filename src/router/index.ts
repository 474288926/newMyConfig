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
    path: '/iframe',
    redirect: '/iframe/vue',
    meta: { title: '内嵌网页', icon: 'bell' },
    component: layout,
    children: [
      {
        path: '/iframe/vue',
        name: 'vue',
        meta: {
          title: 'vue',
          icon: 'Lock'
        },
        component: () => import('@/views/iframe/vue.vue')
      },
      {
        path: '/iframe/pinia',
        name: 'pinia',
        meta: {
          title: 'pinia',
          icon: 'Lock'
        },
        component: () => import('@/views/iframe/pinia.vue')
      },
      {
        path: '/iframe/router',
        name: 'router',
        meta: {
          title: 'router',
          icon: 'Lock'
        },
        component: () => import('@/views/iframe/router.vue')
      },
      {
        path: '/iframe/element',
        name: 'element',
        meta: {
          title: 'element',
          icon: 'Lock'
        },
        component: () => import('@/views/iframe/element.vue')
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
