<template>
  <section class="class-details">
    <img
      :src="detailsCourseCourseInfoVo ? detailsCourseCourseInfoVo.coursePicture : ''"
      alt=""
      class="details-course-list-wrapper"
    >
    <ul class="details-course-ranking">
      <li
        v-for="(item, index) in list"
        :key="item"
        @click="handleCurrent(index)"
        :class="{ active: index === current }"
      >
        {{ item }}
      </li>
    </ul>
    <Survey v-if="current === 0" />
    <Catalogue v-if="current === 1" />
    <Questions v-if="current === 2" />
  </section>
</template>

<script>
import { mapState, mapActions } from "vuex";
import { Tab, Tabs } from "vant";
import Survey from "./children/survey";
import Catalogue from "./children/catalogue";
import Questions from "./children/questions";

export default {
  data() {
    return {
      list: ["概况", "目录", "问答"],
      current: 0
    };
  },
  components: {
    [Tab.name]: Tab,
    [Tabs.name]: Tabs,
    Survey,
    Catalogue,
    Questions
  },
  computed: {
    ...mapState("course", {
      detailsCourseCourseInfoVo: state => state.detailsCourseCourseInfoVo,
      detailsCourseCourseTeacherVoList: state =>
        state.detailsCourseCourseTeacherVoList
    })
  },
  methods: {
    ...mapActions("course", ["getByCourseId"]),
    // 点击tab
    handleCurrent(index) {
      this.current = index
    }
  },
  created() {
    this.getByCourseId(this.$route.params.id);
  }
};
</script>

<style lang="less" scoped>
.class-details {
  .details-course-list-wrapper {
    width: 100%;
    height: 210px;
  }
  .details-course-ranking {
    background: #fff;
    display: flex;
    justify-content: space-around;
    border-bottom: 1px #e6e6e6 solid;
    margin-bottom: 20px;
    li {
      padding: 0 10px;
      height: 40px;
      line-height: 40px;
      font-size: 14px;
      font-family: Source Han Sans CN;
      font-weight: 400;
      color: rgba(51, 51, 51, 1);
    }
    .active {
      color: #58c6bd;
      border-bottom: 2px #58c6bd solid;
    }
  }
}
</style>
