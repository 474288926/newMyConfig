import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import { ElNotification } from 'element-plus'
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
        name: 'v-u-e',
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
  },
  {
    path: '/three',
    redirect: '/three/stickers',
    meta: { title: 'three.js', icon: 'bell' },
    component: layout,
    children: [
      {
        path: '/three/particleEffects',
        name: 'particleEffects',
        meta: {
          title: '粒子特效',
          icon: 'Lock'
        },
        component: () => import('@/views/three/particleEffects.vue')
      },
      {
        path: '/three/solarSystem',
        name: 'solarSystem',
        meta: {
          title: '太阳系模拟',
          icon: 'Lock'
        },
        component: () => import('@/views/three/solarSystem.vue')
      },
      {
        path: '/three/tweenedAnimation',
        name: 'tweenedAnimation',
        meta: {
          title: '补间动画',
          icon: 'Lock'
        },
        component: () => import('@/views/three/tweenedAnimation.vue')
      },
      {
        path: '/three/raycasting',
        name: 'raycasting',
        meta: {
          title: '光线投射交互',
          icon: 'Lock'
        },
        component: () => import('@/views/three/raycasting.vue')
      },
      {
        path: '/three/loadModel',
        name: 'loadModel',
        meta: {
          title: '加载模型',
          icon: 'Lock'
        },
        component: () => import('@/views/three/loadModel.vue')
      },
      {
        path: '/three/fog',
        name: 'fog',
        meta: {
          title: '雾',
          icon: 'Lock'
        },
        component: () => import('@/views/three/fog.vue')
      },
      {
        path: '/three/stickers',
        name: 'stickers',
        meta: {
          title: '贴图',
          icon: 'Lock'
        },
        component: () => import('@/views/three/stickers.vue')
      },
      {
        path: '/three/practice',
        name: 'vue',
        meta: {
          title: '方块',
          icon: 'Lock'
        },
        component: () => import('@/views/three/practice.vue')
      },
      {
        path: '/three/point',
        name: 'point',
        meta: {
          title: '点、面',
          icon: 'Lock'
        },
        component: () => import('@/views/three/point.vue')
      }
    ]
  },
  {
    // 当用户访问任何未匹配的路由时，将跳转到404页面
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    meta: { title: '404', hidden: true },
    component: () => import('@/views/404.vue')
  },
  {
    path: '/blank',
    name: 'blank',
    meta: { title: '空白页', hidden: true },
    component: () => import('@/views/blank.vue')
  }
]
const router = createRouter({
  history: createWebHashHistory(),
  routes
})

const whites = ['/login', '/register', '/blank']
router.beforeEach((to) => {
  const nprogress: any = inject('nprogress')
  nprogress.start()
  const cookies: any = inject('cookies')
  const isToken = cookies.get('token')
  if (!isToken && !whites.includes(to.path)) {
    return '/login'
  }
  return true
})

function getDayPeriod() {
  const now = new Date()
  const currentHour = now.getHours()

  if (currentHour >= 5 && currentHour < 12) {
    return '早上'
  }
  if (currentHour >= 12 && currentHour < 18) {
    return '中午/下午'
  }
  if (currentHour >= 18 && currentHour < 24) {
    return '晚上'
  }
  return '深夜'
}

router.afterEach(async (to, from) => {
  const nprogress: any = inject('nprogress')
  nprogress.done()
  if (!whites.includes(to.path) && to.name !== 'NotFound') {
    const { path, meta, matched } = to
    const { setNavList, setBreadList, setRouterList, setActiveRouteUrl } =
      useRouterStore()
    setNavList()
    setBreadList(matched)
    setRouterList([{ path, meta }])
    setActiveRouteUrl(path)
  }
  if (from.path === '/login' && to.path === '/home') {
    ElNotification.success({
      title: `${getDayPeriod()}好!`,
      message: '欢迎登陆My Vue'
    })
  }
  if (to.path === '/blank') {
    router.replace(from.path)
  }
  console.log(to, from, '跳转成功:')
})

export default router
