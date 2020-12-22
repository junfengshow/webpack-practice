import axios, { AxiosRequestConfig, AxiosPromise, Method } from 'axios'
import qs from 'qs'

type optionsType = {
  method?: Method,
  body?: object|null
}

// 配置默认值
// ...

// 添加请求拦截器
axios.interceptors.request.use(function (config) {
  // 在发送请求之前
  return config;
}, function (error) {
  // 处理发送请求之前的请求错误
  return Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
  // 处理响应数据
  const { data } = response
  // 正常请求 返回错误信息
  if (data && data.result === 0) {
    return data
  }
  let msg = data && data.msg ? data.msg : '服务器开小差'
  let result = data && data.result ? data.result : 3000
  return {
    result,
    msg
  }
}, function (error) {
  // 处理响应错误
  return Promise.reject(error);
});

const request = function (url: string, options?: optionsType): AxiosPromise {
  // 请求方式默认 get
  const _method = options && options.method ? options.method : 'get'
  const _configs: AxiosRequestConfig = {
    url, 
    method: _method, 
    responseType: 'json',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  }
  
  if (!options) {
    return axios(_configs)
  } 
  // 处理传入的参数
  if (_configs.method === 'get') {
    if (options.body) {
      _configs.params = options.body
      _configs.paramsSerializer = function(params) {
        return qs.stringify(params, {arrayFormat: 'brackets'})
      }
    } 
  } else {
    if (options.body) {
      _configs.data = options.body
    }
  }
  return axios(_configs)
} 

export default request
