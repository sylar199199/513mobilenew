export default {
  getCourseRecommended: '/courseInfo/getCourseRecommended', //首页4条推荐课
  getH5AdvertisingList: '/adverting/getH5AdvertisingList', //获取h5全部广告
  getFindOne: '/courseType/findOne', // 获取课程一级分类列表
  getAllCourseRecommendedList: '/courseInfo/getAllCourseRecommendedList', //推荐课程列表
  getSchoolCrestList: '/school/getSchoolCrestList', //获取所有校徽
  getAllNewsList: '/news/getAllNewsList', //新闻资讯列表
  getNewList: '/news/getNewsList', //热点资讯展示 半年内最热5条
  getByNewsId: '/news/getByNewsId', // 新闻详情页
  getByCourseId: '/courseInfo/getByCourseId', //根据id查询课程信息
  getCourseCatalog: '/courseInfo/courseCatalog', // 详情页获取课程目录
  getAllCourseQuestionsList: '/courseQuestions/getAllCourseQuestionsList', // 根据课程id查询课程全部提问
  getAllCourseQuestionsAnswersList: '/courseQuestionsAnswers/getAllCourseQuestionsList', // 根据问答id查询全部回复
  getByInspectionStandardId: '/inspectionStandard/getByInspectionStandardId', // 课程详情页考核标准饼图数据

  // 登陆，注册，忘记密码
  sendCodeForMobile: '/baseVerify/sendCodeForMobile', // 发送手机验证码
  login: '/login', // 登录
  register: '/register', // 注册
  resetLoginPassword: '/resetLoginPassword', // 忘记密码
  getLoginInfo: '/getLoginInfo', // 获取登录信息
  getSendLiveChat: '/live/sendLiveChat', // 发送聊天信息
  getLiveList: '/live/getLiveList', // 直播列表
  getLiveDetail: '/live/getLiveDetail', // 直播列表

  // 文章部分
  ArticleType: '/article/ArticleType',
  getAllArticleList: '/article/getAllArticleList',
  getByArticleId: '/article/getByArticleId',
  getAllRecommendedArticleList: '/article/getAllRecommendedArticleList',
  addLikeRecord: '/userLikeRecord/addLikeRecord',
  addUserCollection: '/userCollection/addUserCollection',
  updateUserCollection: '/userCollection/updateUserCollection',
}
