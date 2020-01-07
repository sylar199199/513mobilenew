<template>
  <section class="team-mien">
    <h2>团队风采</h2>
    <section class="team-mien-title">
      拥有专业的课程研发团队及师资队伍约100多人，联合全国高校创建了32所跨境电商实训与创业中心基地、
      15所校外实训基地，并建立有创业扶持基金500多万，帮助学生创业，已通过培训就业学生共计25000多人次。
    </section>
    <section class="team-mien-main">
      <van-swipe
        :loop="false"
        class="vant-swiper-width"
        :show-indicators="false"
      >
        <van-swipe-item>
          <img
            :src="$imgUrl + '/about-us/img01%402x.png'"
            alt=""
          />
        </van-swipe-item>
        <van-swipe-item>
          <img
            :src="$imgUrl + '/about-us/img_02%25402x.png'"
            alt=""
          />
        </van-swipe-item>
        <van-swipe-item>
          <img
            :src="$imgUrl + '/about-us/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20191104164148.png'"
            alt=""
          />
        </van-swipe-item>
        <van-swipe-item>
          <img
            :src="$imgUrl + '/about-us/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20191104164650.png'"
            alt=""
          />
        </van-swipe-item>
      </van-swipe>
    </section>
  </section>
</template>

<script>
import { Swipe, SwipeItem } from "vant";
export default {
  components: {
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem
  }
};
</script>

<style lang="less" scoped>
.team-mien {
  background: #fff;
  overflow: hidden;
  h2:nth-child(1) {
    text-align: center;
    margin-top: 60px;
    margin-bottom: 20px;
    font-size: 22px;
    font-family: PingFang SC;
    font-weight: bold;
    color: rgba(51, 51, 51, 1);
  }
  .team-mien-title {
    width: 95%;
    margin: 0 auto;
    height: 90px;
    font-size: 14px;
    font-family: PingFang SC;
    font-weight: 500;
    color: rgba(128, 128, 128, 1);
    line-height: 21px;
  }
  .team-mien-main {
    width: 100%;
    .vant-swiper-width {
      width: 330px;
      img {
        width: 300px;
        height: 160px;
        margin-left: 20px;
      }
    }
  }
}
</style>
