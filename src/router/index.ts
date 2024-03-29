import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import { ElNotification } from 'element-plus'
import layout from '@/layouts/index.vue'
import useRouterStore from '@/store/router/index'
import { useInject } from '@/composables/useInject'

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
    path: '/table',
    redirect: '/table/index',
    meta: { title: '表格', icon: 'Memo' },
    component: layout,
    children: [
      {
        path: '/table/index',
        name: 'table',
        meta: {
          title: '弹框编辑表格'
        },
        component: () => import('@/views/table/index.vue')
      },
      {
        path: '/table/dbClickTable',
        name: 'dbClickTable',
        meta: {
          title: '双击编辑表格'
        },
        component: () => import('@/views/table/dbClickTable.vue')
      },
      {
        path: '/table/dataValidation',
        name: 'dataValidation',
        meta: {
          title: '数据校验+单元格表格'
        },
        component: () => import('@/views/table/dataValidation.vue')
      }
    ]
  },
  {
    path: '/form',
    redirect: '/form/index',
    meta: { title: '表单', icon: 'Finished' },
    component: layout,
    children: [
      {
        path: '/form/index',
        name: 'form',
        meta: {
          title: '综合表单'
        },
        component: () => import('@/views/form/index.vue')
      },
      {
        path: '/form/steps',
        name: 'steps',
        meta: {
          title: '分步表单'
        },
        component: () => import('@/views/form/steps.vue')
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
          title: 'vue'
        },
        component: () => import('@/views/iframe/vue.vue')
      },
      {
        path: '/iframe/pinia',
        name: 'pinia',
        meta: {
          title: 'pinia'
        },
        component: () => import('@/views/iframe/pinia.vue')
      },
      {
        path: '/iframe/router',
        name: 'router',
        meta: {
          title: 'router'
        },
        component: () => import('@/views/iframe/router.vue')
      },
      {
        path: '/iframe/element',
        name: 'element',
        meta: {
          title: 'element'
        },
        component: () => import('@/views/iframe/element.vue')
      }
    ]
  },
  {
    path: '/three',
    redirect: '/three/stickers',
    meta: { title: 'three.js', icon: 'PictureRounded' },
    component: layout,
    children: [
      {
        path: '/three/particleEffects',
        name: 'particleEffects',
        meta: {
          title: '粒子特效',
          icon: 'PictureRounded'
        },
        component: () => import('@/views/three/particleEffects.vue')
      }
    ]
  },
  {
    path: '/DataBigScreen',
    redirect: '/DataBigScreen/index',
    meta: { title: '数据大屏', icon: 'DataLine' },
    // component: layout,
    children: [
      {
        path: '/DataBigScreen/index',
        name: 'DataBigScreen',
        meta: {
          title: '大屏适配方案',
          icon: 'DataLine'
        },
        component: () => import('@/views/DataBigScreen/index.vue')
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
  const { nprogress, cookies } = useInject()
  nprogress.start()
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
  const { nprogress } = useInject()
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
