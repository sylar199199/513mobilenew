export default {
  //文章列表
    setAllAllArticleList(state, newsetAllAllArticleList) {
      state.AllArticleList = newsetAllAllArticleList.list
      state.AllArticleListTotal = parseInt(newsetAllAllArticleList.total)
  },
  //文章详情数据
    setArticleData(state, articleData){
     state.articleData = articleData
    },
    //推荐列表
    setAllRecommendedArticleList(state, allRecommendedArticle){
        state.allRecommendedArticleList = allRecommendedArticle.list
        state.allRecommendedArticleTotal = parseInt(allRecommendedArticle.total)
    }
}
