// axios.js
import axios from 'axios'
import NProgress from 'nprogress'

NProgress.configure({ showSpinner: false })

const createAxiosInstance = () => {
  const controller = new AbortController()
  const { signal } = controller
  const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com', // 设置你的 API 地址
    timeout: 5000, // 设置请求超时时间
    signal
  })
  // 请求之前
  instance.interceptors.request.use(
    (config) => {
      // store.toggleLoading()
      NProgress.start()
      return config
    },
    (error) => {
      // store.toggleLoading()
      NProgress.done()
      return Promise.reject(error)
    }
  )

  // 请求之后
  instance.interceptors.response.use(
    (response) => {
      // store.toggleLoading()
      NProgress.done()
      return response.data
    },
    (error) => {
      // store.toggleLoading()
      NProgress.done()
      return Promise.reject(error)
    }
  )

  const request = (url: any, options: any = {}) => {
    // 将传递的 options 中的 signal 和 isLoading 提取出来
    const { signal: signalIs } = options

    return instance
      .request({
        url,
        ...options,
        method: options.method?.toUpperCase() || 'GET',
        signal: signalIs || controller.signal // 如果传递了 signal，则使用传递的，否则使用默认的
      })
      .finally(() => {})
  }

  return { request, controller }
}

const { request } = createAxiosInstance()
export default request
