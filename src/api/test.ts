import request from '@/api/requiest'

export const apiTest = () => request.get('/todos/1')

export default {
  apiTest
}
