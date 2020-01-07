import { $ajax } from '@/http/ajax'
import $apis from '@/http/apis/one-index'

export default {
  // 课程列表一级分类
  async getFindOne({ commit }) {
    const res = await $ajax.get($apis.getFindOne)
    if (res.status === 200 && res.data.code === 1) {
      res.data.data.unshift({ sign: '0', name: '全部' })
      commit('setFindOne', res.data.data)
    }
  },

  // 课程列表数据
  async getAllCourseRecommendedList({ commit }, params) {
    const res = await $ajax.post($apis.getAllCourseRecommendedList, params)
    if (res.status === 200 && res.data.code === 1) {
      commit('setAllCourseRecommendedList', res.data.data)
    }
  },

  // 课程详情页数据
  async getByCourseId({ commit }, sign) {
    const res = await $ajax.post($apis.getByCourseId, {sign})
    if (res.status === 200 && res.data.code === 1) {
      commit('setByCourseId', res.data.data)
    }
  },

  // 课程详情页饼图数据
  async getByInspectionStandardId({ commit }, params) {
    const res = await $ajax.post($apis.getByInspectionStandardId, params)
    if (res.status === 200 && res.data.code === 1) {
      let data = res.data.data
      let pieList = [
        {
          name: '观看视频',
          value: data ? data.watchVideo : 0,
          backgroundStyle: '#5BADFD',
        },
        {
          name: '单元测试',
          value: data ? data.unitTesting : 0,
          backgroundStyle: '#FD8C68',
        },
        {
          name: '期末考试',
          value: data ? data.theFinalExam : 0,
          backgroundStyle: '#F0E053',
        },
        {
          name: '互动问答',
          value: data ? data.interactiveQuestion : 0,
          backgroundStyle: '#17DBBB',
        },
        {
          name: '登录签到',
          value: data ? data.logSig : 0,
          backgroundStyle: '#9A7EF2',
        },
      ]
      commit('setByInspectionStandardId', pieList)
    }
  },

  // 详情页获取课程目录
  async getCourseCatalog({ commit }, sign) {
    const res = await $ajax.post($apis.getCourseCatalog, {sign})
    if (res.status === 200 && res.data.code === 1) {
      commit('setCourseCatalog', res.data.data)
    }
  },

  // 根据问答id查询全部提问
  async getAllCourseQuestionsList({ commit }, params) {
    const res = await $ajax.post($apis.getAllCourseQuestionsList, params)
    if (res.status === 200 && res.data.code === 1) {
      commit('setAllCourseQuestionsList', res.data.data)
    }
  },

  // 根据问答id查询全部回复
  async getAllCourseQuestionsAnswersList({ commit }, params) {
    const res = await $ajax.post($apis.getAllCourseQuestionsAnswersList, params)
    if (res.status === 200 && res.data.code === 1) {
      commit('setAllCourseQuestionsAnswersList', res.data.data)
    }
  },
}