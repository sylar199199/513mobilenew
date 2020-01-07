<template>
  <section>
    <section
      class="class-details-questions-default"
      v-if="allCourseQuestionsAnswersList && allCourseQuestionsAnswersList.length === 0"
    >
      <default-img />
    </section>
    <section v-else>
      <ul class="class-details-questions-main">
        <li
          v-for="item in allCourseQuestionsAnswersList"
          :key="item.sign"
        >
          <img
            :src="item.answersPhoto"
            alt=""
            class="class-details-questions-main-img"
          >
          <section class="class-details-questions-main-right">
            <p>{{ item.answersName }}【{{ item.answersSchool }}】回复{{
              item.questionName }}【{{ item.questionSchool }}】</p>
            <p>{{ item.answersContent }}</p>
            <p>
              <span>{{ item.answersTime }}</span>
            </p>
          </section>
        </li>
      </ul>
      <van-pagination
        v-model="currentPage"
        :total-items="allCourseQuestionsAnswersTotal"
        :items-per-page="5"
        @change="handleChangePage"
        class="class-details-questions-pagination"
      />
    </section>
  </section>
</template>

<script>
import { mapState, mapActions } from "vuex";
import DefaultImg from "@/components/default-img/index";
import { Pagination } from "vant";

export default {
  data() {
    return {
      currentPage: 1,
      page: 1,
      size: 5,
    }
  },
  props: {
    courseSign: {
      type: String,
    }
  },
  components: {
    "default-img": DefaultImg,
    [Pagination.name]: Pagination,
  },
  computed: {
    ...mapState("course", {
      allCourseQuestionsAnswersList: state =>
        state.allCourseQuestionsAnswersList,
      allCourseQuestionsAnswersTotal: state =>
        state.allCourseQuestionsAnswersTotal
    })
  },
  methods: {
    ...mapActions("course", [
      'getAllCourseQuestionsAnswersList'
    ]),
    // 点击分页
    handleChangePage(page) {
      this.page = page
      let params = {
        questionsIdSign: this.courseSign,
        page: this.page,
        size: this.size,
      }
      this.getAllCourseQuestionsAnswersList(params)
    }
  }
};
</script>

<style lang="less" scoped>
.class-details-questions-default {
  width: 100%;
}
.class-details-questions-main {
  padding: 0 15px;
  margin-top: 40px;
  min-height: 252px;
  li {
    display: flex;
    margin-top: 20px;
    .class-details-questions-main-img {
      width: 42px;
      height: 42px;
      margin-right: 10px;
      border-radius: 50%;
    }
    .class-details-questions-main-right {
      flex: 1;
      border-bottom: 1px solid #e6e6e6;
      p:nth-child(1) {
        font-size: 14px;
        font-family: PingFang SC;
        font-weight: bold;
        color: rgba(51, 51, 51, 1);
        line-height: 21px;
      }
      p:nth-child(2) {
        font-size: 14px;
        font-family: PingFang SC;
        font-weight: 500;
        color: rgba(102, 102, 102, 1);
        line-height: 21px;
      }
      p:nth-child(3) {
        display: flex;
        justify-content: space-between;
        margin-bottom: 15px;
        span:nth-child(1) {
          font-size: 12px;
          font-family: PingFang SC;
          font-weight: 500;
          color: rgba(153, 153, 153, 1);
          line-height: 21px;
        }
      }
    }
  }
}
.class-details-questions-pagination {
  margin: 20px 0;
}
</style>
