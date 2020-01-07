export default {
  // 登陆成功保存token
  setToken(state, newToken) {
    state.token = newToken
  },

  // 课程列表一级
  setFindOne(state, newFindOneList) {
  },

  // 获取用户身份信息
  setLoginInfo(state, loginfo) {
    state.userInfo = loginfo; 
  },

  // 切换组件清空webscoket信息
  clearCommentList(state) {
    state.commentList = []
  }
}