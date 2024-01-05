// axios.ts
import axios, { AxiosInstance } from 'axios'
import NProgress from 'nprogress'

NProgress.configure({ showSpinner: false })
const instance: AxiosInstance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com', // 设置你的 API 地址
  timeout: 5000 // 设置请求超时时间
})

// 请求之前
instance.interceptors.request.use(
  (config) => {
    NProgress.start()
    return config
  },
  (error) => {
    NProgress.done()
    return Promise.reject(error)
  }
)
// 请求之后
instance.interceptors.response.use(
  (response) => {
    NProgress.done()
    return response.data
  },
  (error) => {
    NProgress.done()
    return Promise.reject(error)
  }
)

export default instance
