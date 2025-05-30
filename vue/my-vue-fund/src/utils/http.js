// src/utils/http.js
import axios from 'axios'

// 创建axios实例
const service = axios.create({
  baseURL:"http://127.0.0.1:5002", // 从环境变量获取基础API地址
  timeout: 10000 // 请求超时时间
})

// 请求拦截器
service.interceptors.request.use(
  config => {

    return config
  },
  error => {
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

// 响应拦截器
service.interceptors.response.use(
  response => {
    // 在这里可以统一处理响应数据
    const res = response.data
    // 这里可以根据后端返回的状态码进行统一处理
    // if (res.code !== 200) {
    //   return Promise.reject(new Error(res.message || 'Error'))
    // } else {
    //   return res
    // }
    return res
  },
  error => {
    console.log('err' + error) // for debug
    // 这里可以统一处理错误响应
    // if (error.response.status === 401) {
    //   // 处理未授权
    // }
    return Promise.reject(error)
  }
)

/**
 * GET请求
 * @param {string} url 请求地址
 * @param {object} params 请求参数
 * @param {object} config axios配置
 * @returns {Promise}
 */
export function get(url, params = {}, config = {}) {
  return service({
    url,
    method: 'get',
    params,
    ...config
  })
}

/**
 * POST请求
 * @param {string} url 请求地址
 * @param {object} data 请求体数据
 * @param {object} config axios配置
 * @returns {Promise}
 */
export function post(url, data = {}, config = {}) {
  return service({
    url,
    method: 'post',
    data,
    ...config
  })
}

export default {
  get,
  post
}