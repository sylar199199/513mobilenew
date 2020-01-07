export default {
  // 课程列表一级
  setFindOne(state, newFindOneList) {
    state.findOneList = newFindOneList
  },

  // 课程列表
  setAllCourseRecommendedList(state, newAllCourseRecommendedList) {
    state.allCourseRecommendedList = newAllCourseRecommendedList.list
    state.allCourseRecommendedTotal = parseInt(newAllCourseRecommendedList.total)
  },

  // 课程详情页数据
  setByCourseId(state, newDetailsCourseId) {
    state.detailsCourseCourseInfoVo = newDetailsCourseId.courseInfoVo
    state.detailsCourseCourseTeacherVoList = newDetailsCourseId.courseTeacherVoList
  },

  // 课程详情页饼图数据
  setByInspectionStandardId(state, newInspectionStandardId) {
    state.inspectionStandardId = newInspectionStandardId
  },

  // 详情页获取课程目录
  setCourseCatalog(state, newCourseCatalog) {
    state.courseCatalog = newCourseCatalog
  },

  // 根据问答id查询全部提问
  setAllCourseQuestionsList(state, newAllCourseQuestionsList) {
    state.allCourseQuestionsList = newAllCourseQuestionsList.list
    state.allCourseQuestionsTotal = parseInt(newAllCourseQuestionsList.total)
  },

  // 根据问答id查询全部回复
  setAllCourseQuestionsAnswersList(state, newAllCourseQuestionsAnswersList) {
    state.allCourseQuestionsAnswersList = newAllCourseQuestionsAnswersList.list
    state.allCourseQuestionsAnswersTotal = parseInt(newAllCourseQuestionsAnswersList.total)
  },
}