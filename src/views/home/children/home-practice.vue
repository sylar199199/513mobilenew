<template>
  <section class="home-practice">
    <h2 class="home-practice-one">实践课校企合作方案</h2>
    <p class="home-practice-two">三/五天校企合作见习游学方案内容</p>
    <section class="home-practice-swiper">
      <van-swipe
        :loop="false"
        class="vant-swiper-width"
        :show-indicators="false"
      >
        <van-swipe-item
          v-for="(item, index) in practiceList"
          :key="item.practiceSign"
        >
          <section class="home-practice-main">
            <p>
              <span>{{index+1}}</span>
              {{item.practiceTitle}}
            </p>
            <section class="home-practice-content">
              {{item.practiceContent}}
            </section>
            <section
              class="home-practice-img"
              v-if="item.practiceImgTwo"
            >
              <img
                :src='item.practiceImgOne'
                alt=""
                class="home-practice-img-one"
              />
              <img
                :src='item.practiceImgTwo'
                alt=""
                class="home-practice-img-two"
              />
            </section>
            <section
              class="home-practice-img"
              v-else
            >
              <img
                :src='item.practiceImgOne'
                alt=""
                class="home-practice-img-one-other"
              />
            </section>
          </section>
        </van-swipe-item>
      </van-swipe>
    </section>
  </section>
</template>

<script>
import { Swipe, SwipeItem } from "vant";
//
export default {
  data() {
    return {
      practiceList: [
        {
          practiceSign: 141,
          practiceTitle: "到深圳参观行业优秀企业",
          practiceContent:
            "通过参观各公司工作环境，了解各公司内部组织架构，以及工作人员的详细讲解，学生们对跨境电商行业有了进一步的了解。",
          practiceImgOne: this.$imgUrl + "/home/newlTK.png",
          practiceImgTwo: this.$imgUrl + "/home/new3FO.png"
        },
        {
          practiceSign: 142,
          practiceTitle: "到深圳参观行业优秀企业",
          practiceContent:
            "学习跨境电商的趋势，实操展示亚马逊后台，让学生们更深入的了解亚马逊电商，并完成跨境电商实践操作学习。",
          practiceImgOne: this.$imgUrl + "/home/new8YD.png"
        },
        {
          practiceSign: 143,
          practiceTitle: "到深圳参观行业优秀企业",
          practiceContent:
            "本次素拓设置了游戏《前方打仗 后方支援》，增强团队协作、沟通协调能力，提升团队凝聚力。",
          practiceImgOne: this.$imgUrl + "/home/newQw6.jpg",
          practiceImgTwo: this.$imgUrl + "/home/newGfe.png"
        }
      ]
    };
  },
  components: {
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem
  }
};
</script>

<style lang="less" scoped>
.home-practice {
  overflow: hidden;
  .home-practice-one {
    font-size: 22px;
    font-family: PingFang SC;
    font-weight: bold;
    color: rgba(51, 51, 51, 1);
    text-align: center;
    margin-top: 50px;
    margin-bottom: 15px;
  }
  .home-practice-two {
    text-align: center;
    font-size: 14px;
    font-family: PingFang SC;
    font-weight: 500;
    color: rgba(128, 128, 128, 1);
    margin-bottom: 20px;
  }
  .home-practice-swiper {
    width: 100%;
    .vant-swiper-width {
      width: 300px;
      .van-swipe-item {
        width: 285px !important;
      }
    }
  }
  .home-practice-main {
    width: 245px;
    padding: 20px 25px;
    height: 260px;
    margin-left: 15px;
    background: rgba(245, 245, 245, 1);
    border: 1px solid rgba(204, 204, 204, 1);
    border-radius: 4px;
    p:nth-child(1) {
      display: flex;
      font-size: 14px;
      font-family: PingFang SC;
      font-weight: 500;
      color: rgba(51, 51, 51, 1);
      span {
        display: block;
        margin-right: 5px;
        font-size: 16px;
        font-family: PingFang SC;
        color: rgba(88, 198, 189, 1);
        width: 22px;
        height: 22px;
        line-height: 22px;
        text-align: center;
        border: 1px solid rgba(88, 198, 189, 1);
        border-radius: 50%;
        position: relative;
        top: -4px;
      }
    }
    .home-practice-content {
      font-size: 12px;
      font-family: PingFang SC;
      font-weight: 500;
      color: rgba(128, 128, 128, 1);
      line-height: 18px;
    }
    .home-practice-img {
      display: flex;
      margin-top: 15px;
      .home-practice-img-one {
        width: 102px;
        height: 73px;
        border-radius: 2px;
        transform: rotate(-5deg);
      }
      .home-practice-img-two {
        width: 103px;
        height: 77px;
        border-radius: 2px;
        margin-top: 20px;
        transform: rotate(8deg);
      }
      .home-practice-img-one-other {
        width: 198px;
        height: 96px;
        margin-top: 20px;
      }
    }
  }
}
</style>
