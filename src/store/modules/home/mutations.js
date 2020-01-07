export default {
  // 首页轮播图
  setH5AdvertisingList(state, newH5AdvertisingList) {
    state.h5AdvertisingList = newH5AdvertisingList
  },

  // 首页4条推荐课
  setCourseRecommended(state, newCourseRecommended) {
    state.courseRecommended = newCourseRecommended
  },

  // 获取新闻
  setAllNewsList(state, newAllNewsList) {
    state.allNewsList = newAllNewsList.list
    state.allNewsTotal = parseInt(newAllNewsList.total)
  },

  // 获取新闻
  setNewList(state, newNewsList) {
    state.newsList = newNewsList
  },

  // 获取新闻详情页
  setByNewsDetail(state, newByNewsDetail) {
    state.byNewsDetail = newByNewsDetail
  },
}