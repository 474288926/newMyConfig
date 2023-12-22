import { defineStore } from 'pinia'
import { inject, ref } from 'vue'
import { NavItemTypes } from '@/layouts/NavItem.vue'

const refactoringArrays = <T>(
  list: Array<T>,
  actionUrl: string,
  level: number = 0
): Array<T> =>
  list.reduce((per: any, cur: any) => {
    if (cur.meta?.hidden) {
      return [...per]
    }
    if (cur.children && cur.children.length > 0) {
      const is = cur.children.findIndex((item: any) => item.path === actionUrl)
      const newCur = {
        title: cur.meta?.title || cur.title,
        path: cur.path,
        icon: cur.meta?.icon || cur.icon,
        toggle: is !== -1 ? true : !!cur.toggle,
        level,
        children: refactoringArrays(cur.children, actionUrl, level + 1)
      }
      return [
        ...per,
        newCur.children.length === 1
          ? ({
              ...(newCur.children[0] as { [key: string]: any }),
              level: level - 1
            } as const)
          : { ...newCur, level }
      ]
    }
    return [
      ...per,
      {
        title: cur.meta?.title || cur.title,
        path: cur.path,
        icon: cur.meta?.icon || cur.icon,
        action: actionUrl === cur.path,
        level
      }
    ]
  }, [])

const useRouterStore = defineStore('router', () => {
  const router: any = inject('router')
  const navList = ref<Array<NavItemTypes>>(
    refactoringArrays(router.options.routes, router.currentRoute.value.path)
  )
  const breadList = ref<any>([])
  const routerList = ref<any>([
    {
      path: '/home',
      name: 'home',
      meta: {
        title: '首页',
        icon: 'house'
      }
    }
  ])
  const activeRouteUrl = ref<string>('')
  const setNavList = () => {
    navList.value = refactoringArrays(navList.value, router.currentRoute.value.path)
  }
  const setBreadList = <T>(urls: Array<T>) => {
    breadList.value = urls
  }
  const setRouterList = <T>(val: Array<T>) => {
    routerList.value = [
      ...routerList.value,
      ...val.reduce((per: any, cur: any) => {
        const is = routerList.value.some((item: any) => item.path === cur.path)
        if (!is) {
          return [...per, cur]
        }
        return [...per]
      }, [])
    ]
  }
  const delRouterList = (url: string) => {
    const length = routerList.value.findIndex((x: any) => x.path === url)
    routerList.value = routerList.value.filter((x: any) => x.path !== url)
    if (url === activeRouteUrl.value) {
      if (routerList.value.length > length - 1) {
        return routerList.value[length - 1]
      }
      return routerList.value[routerList.value.length]
    }
    return ''
  }
  const setActiveRouteUrl = (url: string) => {
    activeRouteUrl.value = url
  }
  return {
    navList,
    setNavList,
    breadList,
    setBreadList,
    routerList,
    setRouterList,
    activeRouteUrl,
    setActiveRouteUrl,
    delRouterList
  }
})

export default useRouterStore
