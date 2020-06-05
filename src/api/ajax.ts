import axios from 'axios'
// import Nprogress from 'nprogress'
import store from '@/store'
const ajax = axios.create({
  baseURL:'/api',
  timeout: 20000,
})
//请求拦截器
ajax.interceptors.request.use((config: any): any => {
  //请求的时候显示进度条
  // Nprogress.start()
  //请求的时候携带token
  // config.headers['userTempId'] = store.state.user.userTempId
  /* if(token){
    config.headers['token'] = token
  } */
  return config
})
ajax.interceptors.response.use(
  (response: any): any => {
    // Nprogress.done()
    return response.data
  },
  (error: object): object => {
    // Nprogress.done()
    alert('请求出错：' + error || '未知错误')
    return Promise.reject(error)
  }
)
export default ajax
