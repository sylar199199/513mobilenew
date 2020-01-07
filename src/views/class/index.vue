<template>
  <section class="class-wrapper">
    <ul class="class-wrapper-gradeTree">
      <li
        v-for="item in findOneList"
        :key="item.sign"
        @click="handleGradeTree(item.sign)"
        :class="{ active: item.sign === current }"
      >
        {{ item.name }}
      </li>
    </ul>
    <ul class="class-wrapper-gradeTree">
      <li
        v-for="(item, index) in priceList"
        :key="item"
        @click="handlePrice(index)"
        :class="{ active: index === currentTwo }"
      >
        {{ item }}
      </li>
    </ul>
    <ul class="class-comprehensive-ranking">
      <li
        v-for="(item, index) in allHot"
        :key="item.id"
        @click="handleHot(index)"
        :class="{ active: index === currentThere }"
      >
        {{ item.title }}
      </li>
    </ul>
    <section
      v-if="allCourseRecommendedList.length===0"
      class="class-default-graph"
    >
      <default-img />
    </section>
    <section v-else>
      <ul class="class-wrapper-mian">
        <li
          v-for="item in allCourseRecommendedList"
          :key="item.courseIdSign"
        >
          <router-link
            :to="{
              name: 'collegeCourseDetail',
              params: {
                id: item.courseIdSign
              }
            }"
            class="class-wrapper-mian-router"
          >
            <img
              :src='item.coursePicture'
              alt=""
            />
            <p>{{item.courseName}}</p>
            <p>{{item.teacherName}}【{{item.schoolName}}】</p>
            <p
              class="class-wrapper-mian-mianfei"
              v-if="item.coursePrice === '免费'"
            >免费</p>
            <p
              class="class-wrapper-mian-shoufei"
              v-else
            >￥{{item.coursePrice}}</p>
          </router-link>
        </li>
      </ul>
      <van-pagination
        v-model="currentPage"
        :total-items="allCourseRecommendedTotal"
        :items-per-page="8"
        @change="handleChangePage"
        class="class-wrapper-mian-pagination"
      />
    </section>
  </section>
</template>

<script>
import { mapActions, mapState } from "vuex";
import { Pagination } from "vant";
import DefaultImg from "@/components/default-img/index";

export default {
  data() {
    return {
      current: "0",
      currentTwo: 0,
      currentThere: 0,
      courseType: 0,
      gradeThree: 0,
      sort: 0,
      currentPage: 1,
      page: 1,
      size: 8,
      priceList: ["全部", "免费", "付费"],
      allHot: [
        { id: 222, title: "综合排序" },
        { id: 223, title: "精选" },
        { id: 224, title: "最新" },
        { id: 225, title: "最热" }
      ]
    };
  },
  components: {
    [Pagination.name]: Pagination,
    "default-img": DefaultImg
  },
  computed: {
    ...mapState("course", {
      findOneList: state => state.findOneList,
      allCourseRecommendedList: state => state.allCourseRecommendedList,
      allCourseRecommendedTotal: state => state.allCourseRecommendedTotal
    })
  },
  methods: {
    ...mapActions("course", ["getFindOne", "getAllCourseRecommendedList"]),
    // 一级
    async handleGradeTree(sign) {
      this.current = sign;
      this.gradeThree = sign;
      this.page = 1;
      this.currentPage = 1;
      let params = {
        courseType: this.courseType,
        gradeThree: this.gradeThree,
        page: this.page,
        size: this.size,
        sort: this.sort
      };
      await this.getAllCourseRecommendedList(params);
    },
    // 二级
    async handlePrice(index) {
      this.currentTwo = index;
      this.courseType = index;
      this.page = 1;
      this.currentPage = 1;
      let params = {
        courseType: this.courseType,
        gradeThree: this.gradeThree,
        page: this.page,
        size: this.size,
        sort: this.sort
      };
      await this.getAllCourseRecommendedList(params);
    },
    // 三级
    async handleHot(index) {
      this.currentThere = index;
      this.sort = index;
      this.page = 1;
      this.currentPage = 1;
      let params = {
        courseType: this.courseType,
        gradeThree: this.gradeThree,
        page: this.page,
        size: this.size,
        sort: this.sort
      };
      await this.getAllCourseRecommendedList(params);
    },
    // 分页器
    async handleChangePage(page) {
      this.page = page;
      let params = {
        courseType: this.courseType,
        gradeThree: this.gradeThree,
        page: this.page,
        size: this.size,
        sort: this.sort
      };
      await this.getAllCourseRecommendedList(params);
    }
  },
  async created() {
    await this.getFindOne();
    let params = {
      courseType: this.courseType,
      gradeThree: this.gradeThree,
      page: this.page,
      size: this.size,
      sort: this.sort
    };
    await this.getAllCourseRecommendedList(params);
  }
};
</script>

<style lang="less" scoped>
.class-wrapper {
  background: #fff;
  overflow: hidden;
  .class-wrapper-gradeTree {
    display: flex;
    flex-wrap: wrap;
    li {
      width: 74px;
      height: 30px;
      line-height: 30px;
      margin: 20px 8px 0;
      text-align: center;
      background: rgba(241, 246, 248, 1);
      border-radius: 15px;
      font-size: 12px;
      font-family: Source Han Sans CN;
      font-weight: 400;
      color: rgba(51, 51, 51, 1);
    }
    .active {
      color: #58c6bd;
    }
  }
  .class-comprehensive-ranking {
    background: #fff;
    display: flex;
    justify-content: space-around;
    border-bottom: 1px #e6e6e6 solid;
    margin-top: 20px;
    margin-bottom: 20px;
    li {
      padding: 0 10px;
      height: 30px;
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
  .class-wrapper-mian {
    margin-top: 20px;
    background: #fff;
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
    min-height: 384px;
    li {
      width: 170px;
      height: 172px;
      margin-left: 12px;
      margin-bottom: 20px;
      .class-wrapper-mian-router {
        display: block;
        width: 100%;
        height: 100%;
        img {
          width: 170px;
          height: 96px;
        }
        p {
          width: 170px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        p:nth-child(2) {
          font-size: 14px;
          font-family: PingFang SC;
          font-weight: bold;
          color: rgba(51, 51, 51, 1);
          margin: 10px 0 5px;
        }
        p:nth-child(3) {
          font-size: 12px;
          font-family: PingFang SC;
          font-weight: 500;
          color: rgba(153, 153, 153, 1);
          line-height: 21px;
        }
        .class-wrapper-mian-mianfei {
          font-size: 12px;
          font-family: PingFang SC;
          font-weight: 500;
          color: rgba(51, 177, 110, 1);
          line-height: 21px;
        }
        .class-wrapper-mian-shoufei {
          font-size: 12px;
          font-family: PingFang SC;
          font-weight: 500;
          color: rgba(233, 45, 8, 1);
          line-height: 21px;
        }
      }
    }
  }
  .class-wrapper-mian-pagination {
    margin-bottom: 20px;
  }
  .class-default-graph {
    width: 100%;
  }
}
</style>
