import request from '@/api/requiest'

export const apiTest = (signal?: any) => request('/todos/1', { signal })

export default {
  apiTest
}
