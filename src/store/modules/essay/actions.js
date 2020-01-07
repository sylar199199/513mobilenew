import { $ajax } from '@/http/ajax'
import $apis from '@/http/apis/one-index'

export default {
    /**
     * 获取文章分类
     * @param commit
     * @returns {Promise<void>}
     */
    async ArticleType({}) {
      const res = await $ajax.get($apis.ArticleType)
      if (res.status === 200 && res.data.code === 1) {
         return res.data.data
      }
    },
    /**
     * 获取文章列表
     * @param commit
     * @returns {Promise<void>}
     */
    async getAllArticleList({ commit }, params){
      const res = await $ajax.post($apis.getAllArticleList, params)
        if (res.status === 200 && res.data.code === 1) {
            commit('setAllAllArticleList', res.data.data)
        }
    },
    /**
     *  获取文章详情
     */
    async getByArticleId({ commit, dispatch }, params){
        const res = await $ajax.post($apis.getByArticleId, params)
        if (res.status === 200 && res.data.code === 1) {
            commit('setArticleData', res.data.data)
        }
    },
    /**
     * 获取推荐文章列表
     */
    async getAllRecommendedArticleList({ commit }, params){
        const res = await $ajax.post($apis.getAllRecommendedArticleList, params)
        if (res.status === 200 && res.data.code === 1) {
           commit('setAllRecommendedArticleList', res.data.data)
        }
    },
    /**
     * 文章点赞
     */
    async addLikeRecord({}, params){
        const res = await $ajax.post($apis.addLikeRecord, params)
        if (res.status === 200 && res.data.code === 1) {
            return 1
        }
    },
    /**
     * 文章收藏
     */
    async addUserCollection({}, params){
        const res = await $ajax.post($apis.addUserCollection, params)
        if (res.status === 200 && res.data.code === 1) {
            return 1
        }
    },
    /**
     * 文章取消收藏
     */
    async updateUserCollection({}, params){
        const res = await $ajax.post($apis.updateUserCollection, params)
        if (res.status === 200 && res.data.code === 1) {
            return 1
        }
    }
}
