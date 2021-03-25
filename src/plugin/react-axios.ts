import axios from 'axios'

// axios默认配置
axios.defaults.timeout = 120000 // 超时时间
// axios.defaults.baseURL = '/api' // 请求前缀路径
// axios.defaults.headers['Content-Type'] = 'application/json;charset=UTF-8'
// axios.defaults.withCredentials = true;

// http response 拦截器
axios.interceptors.response.use(
  (response: any) => {
    return response
  },
  (error: any) => {
    const code = error.response.status
    console.log(error);
    switch (code) {
      case 404:
        return false
      default:
        return error.response
    }
  }
)


export default axios
