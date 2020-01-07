import { $ajax } from '@/http/ajax';
import $apis from '@/http/apis/one-index'
import cookieUtils from '@/utils/cookie/index';
import { Toast } from 'vant';

export default {
  // 发送手机验证码
  async sendCodeForMobile({}, params) {
    const res = await $ajax.post($apis.sendCodeForMobile, params)
    if (res.status === 200 && res.data.code === 1) {
      Toast.success('验证码发送成功', 1);
      return true
    } else {
      Toast.fail(res.data.msg, 2);
      return false
    }
  },

  // 登录
  async login({}, params) {
    const res = await $ajax.post($apis.login, params);
    if (res.status === 200 && res.data.code === 1) {
      await cookieUtils.setCookie('yetLogin', res.data.data, 1440)
      Toast.success('登录成功', 1);
      return true;
    } else {
      Toast.fail(res.data.msg, 2);
      return false;
    }
  },

  // 获取登录信息
  async getLoginInfo({ commit }) {
    const res = await $ajax.get($apis.getLoginInfo);
    if (res.status === 200 && res.data.code === 1) {
      commit('setLoginInfo', res.data.data)
    }
  },

  // 忘记密码
  async resetLoginPassword({}, params) {
    const res = await $ajax.post($apis.resetLoginPassword, params)
    if (res.status === 200 && res.data.code === 1) {
      Toast.success('密码修改成功', 1);
      return true;
    } else {
      Toast.fail(res.data.msg, 2);
      return false;
    }
  },

  // 注册
  async register({}, params) {
    const res = await $ajax.post($apis.register, params);
    if (res.status === 200 && res.data.code === 1) {
      Toast.success('注册成功', 1);
      return true;
    } else {
      Toast.fail(res.data.msg, 2);
      return false;
    }
  },

  // 发送聊天信息
  async getSendLiveChat({}, params) {
    const res = await $ajax.post($apis.getSendLiveChat, params);
    if (res.data.code === -6) {
      Toast.fail('请重新登录', 2);
    }
  },
  /**
   * 直播列表
   */
  async getLiveList({}){
    const res = await $ajax.get($apis.getLiveList);
    if (res.data.code === 1) {
      return res.data.data
    }
    return []
  },
  /**
   * 直播详情
   */
  async getLiveDetail({}, params){
    const res = await $ajax.post($apis.getLiveDetail, params)
    if (res.data.code === 1) {
        return res.data.data
    }
    return {}
  }
}
