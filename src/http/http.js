import axios from 'axios';
import { Toast } from 'vant';
import cookieUtils from '@/utils/cookie/index';

// axios 配置
axios.defaults.timeout = 5000; // 设置请求超时
axios.defaults.baseURL = process.env.VUE_APP_BASE_URL; // 默认请求地址
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8'; // 请求头的设置
// 设置跨域携带用户凭证
axios.defaults.withCredentials = true

// 请求
axios.interceptors.request.use((config) => {
  const TOKEN = cookieUtils.getCookie('yetLogin') || '';
  if (TOKEN) {
    config.headers.common['Token'] = TOKEN;
  }
  return config;
}, (error) => {
  // Tool.toast('错误的传参', 'fail')
  return Promise.reject(error);
});

// 返回
axios.interceptors.response.use((res) => {
  Toast.loading('Loading...', 0)
  if (res.data.code === -6) {
    // 被挤出清空token
    cookieUtils.setCookie('yetLogin', 0, -1)
  }
  // 拦截器配置
  const responseCode = res.status
  if (responseCode === 200) {
    Toast.clear()
    // 第一层处理请求code
    // TODO:后期可以考虑将两层验证全部集中在service中处理
    return Promise.resolve(res)
  } else {
    Toast.fail('网络链接失败', 3);
    return Promise.reject(res)
  }
  // return res.data; // data数据
}, (error) => {
  // 请求失败
  Toast.fail('网络链接失败', 3);
  return Promise.reject(error);
});

export const get = (url) => axios.get(url);

export const post = (url, params) => axios.post(url, params);
