import { $ajax } from '@/http/ajax'
import $apis from '@/http/apis/one-index'

export default {
  // 首页轮播图
  async getH5AdvertisingList({ commit }) {
    const res = await $ajax.get($apis.getH5AdvertisingList)
    if (res.status === 200 && res.data.code === 1) {
      commit('setH5AdvertisingList', res.data.data)
    }
  },

  //首页4条推荐课
  async getCourseRecommended({ commit }) {
    const res = await $ajax.get($apis.getCourseRecommended)
    if (res.status === 200 && res.data.code === 1) {
      commit('setCourseRecommended', res.data.data)
    }
  },

  // 获取新闻
  async getAllNewsList({ commit }, params) {
    const res = await $ajax.post($apis.getAllNewsList, params)
    if (res.status === 200 && res.data.code === 1) {
      commit('setAllNewsList', res.data.data)
    }
  },

  // 首页获取热点资讯展示 半年内最热5条
  async getNewList({ commit }) {
    const res = await $ajax.get($apis.getNewList)
    if (res.status === 200 && res.data.code === 1) {
      commit('setNewList', res.data.data)
    }
  },

  // 获取新闻详情页
  async getByNewsDetail({ commit }, sign) {
    const res = await $ajax.post($apis.getByNewsId, { sign, });
    if (res.status === 200 && res.data.code === 1) {
      commit('setByNewsDetail', res.data.data[0])
    }
  }
}