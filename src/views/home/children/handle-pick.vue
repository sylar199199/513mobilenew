<template>
  <section class="handle-pick">
    <h2>精选跨境电商课程</h2>
    <ul>
      <li
        v-for="item in courseRecommended"
        :key="item.courseIdSign"
      >
        <router-link
          :to="{
              name: 'collegeCourseDetail',
              params: {
                id: item.courseIdSign
              }
            }"
          class="home-handpick-route"
        >
          <img
            :src='item.coursePicture'
            alt=""
          />
          <section class="home-handpick-content">
            <p>{{item.courseName}}</p>
            <p>{{item.teacherName}}【{{item.schoolName}}】</p>
            <p 
              class="home-handpick-mianfei"
              v-if="item.coursePrice === '免费'"
            >免费</p>
            <p class="home-handpick-fufei" v-else>￥{{item.coursePrice}}</p>
          </section>
        </router-link>
      </li>
    </ul>
    <van-button 
      plain 
      type="primary"
      size='small'
      @click="handleGoClass"
    >更多></van-button>
  </section>
</template>

<script>
import { mapState, mapActions } from "vuex";
import { Button } from 'vant';

export default {
  components: {
    [Button.name]: Button
  },
  computed: {
    ...mapState("home", {
      courseRecommended: state => state.courseRecommended
    })
  },
  methods: {
    ...mapActions("home", ["getCourseRecommended"]),
    // 点击更多去class页面
    handleGoClass() {
      this.$router.push('/class')
    }
  },
  created() {
    this.getCourseRecommended();
  }
};
</script>

<style lang="less" scoped>
.handle-pick {
  overflow: hidden;
  text-align: center;
  h2 {
    font-size: 22px;
    text-align: center;
    font-family: PingFang SC;
    font-weight: bold;
    color: rgba(51, 51, 51, 1);
    margin-top: 60px;
  }
  ul {
    margin-top: 25px;
    li {
      margin-bottom: 20px;
      width: 100%;
      .home-handpick-route {
        display: block;
        width: 100%;
        height: 100%;
        display: flex;
        img {
          width: 160px;
          height: 90px;
          margin-left: 15px;
          margin-right: 10px;
        }
        .home-handpick-content {
          width: 170px;
          p {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            text-align: left;
          }
          p:nth-child(1) {
            font-size: 14px;
            font-family: PingFang SC;
            font-weight: bold;
            color: rgba(51, 51, 51, 1);
            margin-bottom: 12px;
          }
          p:nth-child(2) {
            font-size: 12px;
            font-family: PingFang SC;
            font-weight: 500;
            color: rgba(153, 153, 153, 1);
            margin-bottom: 20px;
          }
          .home-handpick-mianfei {
            font-size: 12px;
            font-family: PingFang SC;
            font-weight: 500;
            color: rgba(51, 177, 110, 1);
          }
          .home-handpick-fufei {
            font-size: 12px;
            font-family: PingFang SC;
            font-weight: 500;
            color: rgba(233, 45, 8, 1);
          }
        }
      }
    }
  }
}
</style>
