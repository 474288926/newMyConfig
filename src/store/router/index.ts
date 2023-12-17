import { defineStore } from 'pinia'
import { inject, ref } from 'vue'
import { NavItemTypes } from '@/layouts/NavItem.vue'

const refactoringArrays = <T>(
  list: Array<T>,
  actionUrl: string,
  level: number = 0
): Array<T> =>
  list.reduce((per: any, cur: any) => {
    if (cur.children && cur.children.length > 0) {
      const newCur = {
        title: cur.meta?.title || cur.title,
        path: cur.path,
        icon: cur.meta?.icon || cur.icon,
        toggle:
          cur.children.findIndex((item: any) => item.path === actionUrl) !== -1
            ? true
            : !!cur.toggle,
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
  const setNavList = () => {
    navList.value = refactoringArrays(navList.value, router.currentRoute.value.path)
  }
  return {
    navList,
    setNavList
  }
})

export default useRouterStore
