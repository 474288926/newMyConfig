import { defineStore } from 'pinia'
import { inject, ref } from 'vue'
import { NavItemTypes } from '@/layouts/NavItem.vue'

const refactoringArrays = <T>(list: Array<T>): Array<T> =>
  list.reduce((per: any, cur: any) => {
    if (cur.children && cur.children.length > 0) {
      const newCur = {
        title: cur.meta.title,
        url: cur.path,
        icon: cur.meta.icon || '',
        children: refactoringArrays(cur.children)
      }
      return [...per, newCur.children.length === 1 ? newCur.children[0] : newCur]
    }
    return [...per, { title: cur.meta.title, url: cur.path, icon: cur.meta.icon }]
  }, [])

const useRouterStore = defineStore('router', () => {
  const router: any = inject('router')
  const navList = ref<Array<NavItemTypes>>(refactoringArrays(router.options.routes))
  return {
    navList
  }
})

export default useRouterStore
