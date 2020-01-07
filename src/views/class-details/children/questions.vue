<template>
  <section class="class-details-questions">
    <ul class="class-details-questions-list">
      <li
        v-for="(item, index) in list"
        :key="item"
        :class="{active: index === current}"
        @click="handleCurrent(index)"
      >
        {{ item }}
      </li>
    </ul>
    <section>
      <section
        class="class-details-questions-default"
        v-if="allCourseQuestionsList && allCourseQuestionsList.length === 0"
      >
        <default-img />
      </section>
      <section v-else>
        <ul class="class-details-questions-main">
          <li
            v-for="item in allCourseQuestionsList"
            :key="item.idSign"
          >
            <img
              :src="item.headPic"
              alt=""
              class="class-details-questions-main-img"
            >
            <section class="class-details-questions-main-right">
              <p>{{ item.userName }}</p>
              <p>{{ item.questions_content }}</p>
              <p>
                <span>{{ item.questions_time }}</span>
                <span @click="handleShowAnswer(item.idSign)">回复{{ item.num }}条</span>
              </p>
            </section>
          </li>
        </ul>
        <van-pagination
          v-model="currentPage"
          :total-items="allCourseQuestionsTotal"
          :items-per-page="5"
          @change="handleChangePage"
          class="class-details-questions-pagination"
        />
      </section>
    </section>
    <van-popup
      v-model="popupShow"
      closeable
      close-icon="close"
      position="bottom"
      transition="van-fade"
      :style="{ height: '350px' }"
      @click-overlay="handleOverlay"
    >
      <Answer :courseSign="courseSign" />
    </van-popup>
  </section>
</template>

<script>
import { mapState, mapActions } from "vuex";
import DefaultImg from "@/components/default-img/index";
import Answer from './children/answer';
import { Popup, Pagination } from "vant";

export default {
  data() {
    return {
      list: ["最新", "最热"],
      current: 0,
      page: 1,
      size: 5,
      popupShow: false,
      currentPage: 1,
      courseSign: null,
    };
  },
  components: {
    "default-img": DefaultImg,
    Answer,
    [Popup.name]: Popup,
    [Pagination.name]: Pagination,
  },
  computed: {
    ...mapState("course", {
      allCourseQuestionsList: state => state.allCourseQuestionsList,
      allCourseQuestionsTotal: state => state.allCourseQuestionsTotal
    })
  },
  methods: {
    ...mapActions("course", [
      "getAllCourseQuestionsList",
      'getAllCourseQuestionsAnswersList'
    ]),
    // 点击分页
    handleChangePage(page) {
      this.page = page;
      let params = {
        courseIdSign: this.$route.params.id,
        page: this.page,
        size: this.size,
        sortType: this.current
      };
      this.getAllCourseQuestionsList(params);
    },
    // 点击最新最热
    handleCurrent(index) {
      this.current = index;
      this.page = 1;
      this.currentPage = 1;
      let params = {
        courseIdSign: this.$route.params.id,
        page: this.page,
        size: this.size,
        sortType: this.current
      };
      this.getAllCourseQuestionsList(params);
    },
    // 点击回复查看
    handleShowAnswer(sign) {
      this.courseSign = sign
      this.popupShow = true;
      let params = {
        questionsIdSign: sign,
        page: 1,
        size: 5,
      }
      this.getAllCourseQuestionsAnswersList(params)
    },
    // 点击遮罩层
    handleOverlay() {
      this.page = 1;
      this.currentPage = 1;
    }
  },
  created() {
    let params = {
      courseIdSign: this.$route.params.id,
      page: this.page,
      size: this.size,
      sortType: this.current
    };
    this.getAllCourseQuestionsList(params);
  }
};
</script>

<style lang="less" scoped>
.class-details-questions {
  padding: 0 15px;
  position: relative;
  .class-details-questions-list {
    margin-top: 20px;
    display: flex;
    li {
      font-size: 16px;
      font-family: PingFang SC;
      font-weight: bold;
      color: rgba(102, 102, 102, 1);
      margin-right: 25px;
    }
    .active {
      color: #55c6c1;
    }
  }
  .class-details-questions-default {
    width: 100%;
  }
  .class-details-questions-main {
    min-height: 300px;
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
          span:nth-child(2) {
            font-size: 12px;
            font-family: PingFang SC;
            font-weight: 500;
            color: rgba(88, 198, 189, 1);
            line-height: 21px;
          }
        }
      }
    }
  }
  .class-details-questions-pagination {
    margin: 20px 0;
  }
}
</style>
