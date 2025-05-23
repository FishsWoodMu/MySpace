import axios from 'axios'
import { ElMessage } from 'element-plus' // 如果你使用 Element Plus 的提示组件
import { getToken } from '@/utils/auth' // 假设你有获取token的工具函数

// 创建 axios 实例
const service = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_API, // 从环境变量获取基础API地址
  timeout: 5000 // 请求超时时间
})

// 请求拦截器
service.interceptors.request.use(
  config => {
    // 在发送请求之前做些什么
    if (getToken()) {
      // 如果存在token，则每个请求头都带上token
      config.headers['Authorization'] = 'Bearer ' + getToken()
    }
    return config
  },
  error => {
    // 对请求错误做些什么
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

// 响应拦截器
service.interceptors.response.use(
  response => {
    const res = response.data
    
    // 根据你的后端返回结构自定义处理
    if (res.code !== 200) {
      ElMessage({
        message: res.message || 'Error',
        type: 'error',
        duration: 5 * 1000
      })
      
      // 特殊错误码处理
      if (res.code === 401 || res.code === 403) {
        // 可以在这里处理token过期或未授权的逻辑
      }
      
      return Promise.reject(new Error(res.message || 'Error'))
    } else {
      return res
    }
  },
  error => {
    console.log('err' + error) // for debug
    ElMessage({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

/**
 * 封装get方法
 * @param url 请求url
 * @param params 请求参数
 * @returns {Promise}
 */
export function get(url, params = {}) {
  return new Promise((resolve, reject) => {
    service.get(url, {
      params: params
    })
    .then(response => {
      resolve(response)
    })
    .catch(err => {
      reject(err)
    })
  })
}

/**
 * 封装post请求
 * @param url 请求url
 * @param data 请求数据
 * @returns {Promise}
 */
export function post(url, data = {}) {
  return new Promise((resolve, reject) => {
    service.post(url, data)
      .then(response => {
        resolve(response)
      }, err => {
        reject(err)
      })
  })
}

/**
 * 封装put请求
 * @param url 请求url
 * @param data 请求数据
 * @returns {Promise}
 */
export function put(url, data = {}) {
  return new Promise((resolve, reject) => {
    service.put(url, data)
      .then(response => {
        resolve(response)
      }, err => {
        reject(err)
      })
  })
}

/**
 * 封装delete请求
 * @param url 请求url
 * @returns {Promise}
 */
export function del(url) {
  return new Promise((resolve, reject) => {
    service.delete(url)
      .then(response => {
        resolve(response)
      }, err => {
        reject(err)
      })
  })
}

// 统一导出
export default {
  get,
  post,
  put,
  delete: del
}