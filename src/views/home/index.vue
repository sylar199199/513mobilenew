<template>
  <div class="home">
    <Banner />
    <section class="home-about-education">
      <h2>关于513教育</h2>
      <p class="home-about-explain">
        解决企业用人需求为根本，帮助高校学生提供就业方向，为跨境电商行业挖掘人才、推荐人才、
        培训人才，最终实现人才与企业无缝对接的商业模式。
      </p>
      <section
        class="home-commerce-theory"
        :style="{
          backgroundImage: `url(${$imgUrl}/home/img_bg01.png)`,
        }"
      >
        <p>
          跨境电商理论+实训
        </p>
        <p>
          提供专业的在线学习平台供学生学习电商理论知识；提供跨境电商仿真实
          训创新平台，注重在线视频授课与实训教学的结合。
        </p>
      </section>
      <section
        class="home-commerce-theory home-commerce-practice"
        :style="{
          backgroundImage: `url(${$imgUrl}/home/img_bg02.png)`,
        }"
      >
        <p>
          实践课
        </p>
        <p>
          通过实践课深入了解企业、跨境电商，了解将要从事的工作方向；开展
          素拓活动，让大学生感受深圳充满激情与活力的人文气息。
        </p>
      </section>
    </section>
    <HandlePick />
    <section class="home-training">
      <h2>亚马逊实训平台</h2>
      <div class="home-training-title">
        提供跨境电商仿真实训创新平台，注重在线视频授课结合实训，学生可以结合实际操作步骤，
        模拟出真实业务操作步骤，易用性和真实性。针对零基础起步，完成新开店、选品、发布产品、
        产品管理、仿真发货、推广营运等实操，学完可直接上岗就业。
      </div>
      <div class="home-training-imglist">
        <img
          :src="$imgUrl + '/home/nedRIO.png'"
          alt=""
        />
        <img
          :src="$imgUrl + '/home/ned6qx.png'"
          alt=""
        />
        <img
          :src="$imgUrl + '/home/nedgZ6.png'"
          alt=""
        />
        <img
          :src="$imgUrl + '/home/ned2dK.png'"
          alt=""
        />
      </div>
    </section>
    <Superior />
    <section class="home-solution">
      <h2>校企合作解决方案</h2>
      <section
        class="home-solution-top"
        :style="{
          backgroundImage: `url(${$imgUrl}/home/nedfiD.png)`,
        }"
      >
        <section class="home-solution-top-mask"></section>
        <p class="home-solution-top-title">合作高校案例</p>
        <section class="home-solution-top-content">
          与全国各大高校强强合作，开展跨境电商就业特训营，帮助高校毕业生学习跨境电商知识、运营实战技能，
          提升毕业生就业竞争力，解决就业难题。
        </section>
      </section>
      <section
        class="home-solution-top home-solution-bottom"
        :style="{
          backgroundImage: `url(${$imgUrl}/home/nedhJe.png)`,
        }"
      >
        <section class="home-solution-top-mask"></section>
        <p class="home-solution-top-title">人才双选会</p>
        <section class="home-solution-top-content">
          与行业其他知名电子商务企业实行战略纵深合作，为电商行业挖掘人才、推荐人才、培训人才。
          每月定期召开人才双选会，学生与企业意向确认后签订入职协议。
        </section>
      </section>
    </section>
    <Practice />
    <Select />
    <Cooperative />
    <section class="home-statistics">
      <p>
        累计培训学员<span>13600</span>名
      </p>
      <p>
        累计为企业输送人才<span>9000</span>名
      </p>
      <p>
        已和<span>108</span>所高校合作，<span>2500</span>家企业合作
      </p>
    </section>
    <HomeNews />
  </div>
</template>

<script>
import Banner from "./children/banner";
import HandlePick from "./children/handle-pick";
import Superior from "./children/home-superior";
import Practice from "./children/home-practice";
import Select from "./children/home-select";
import Cooperative from "./children/home-cooperative";
import HomeNews from "../news/children/home-news";

export default {
  components: {
    Banner,
    HandlePick,
    Superior,
    Practice,
    Select,
    Cooperative,
    HomeNews
  }
};
</script>

<style lang="less" scoped>
.home {
  width: 100%;
  height: 100%;
  background: #fff;
  .home-about-education {
    padding: 0 15px;
    margin-top: 60px;
    h2:nth-child(1) {
      text-align: center;
      font-size: 22px;
      font-family: PingFang SC;
      font-weight: bold;
      color: rgba(51, 51, 51, 1);
    }
    .home-about-explain {
      margin: 25px 0 0 0;
      font-size: 14px;
      font-family: PingFang SC;
      font-weight: 500;
      color: rgba(128, 128, 128, 1);
      line-height: 21px;
      text-align: justify;
      text-justify: distribute-all-lines; //ie6-8
      text-align-last: left; //一个块或行的最后一行对齐方式
      -moz-text-align-last: left;
      -webkit-text-align-last: left;
    }
    .home-commerce-theory {
      margin-top: 20px;
      width: 100%;
      height: 108px;
      background-repeat: no-repeat;
      background-size: cover;
      overflow: hidden;
      p:nth-child(1) {
        margin: 16px 10px 0;
        font-size: 18px;
        font-family: PingFang SC;
        font-weight: bold;
        color: rgba(255, 255, 255, 1);
        line-height: 21px;
        text-shadow: 0px 1px 0px rgba(36, 194, 187, 0.68);
      }
      p:nth-child(2) {
        font-size: 12px;
        margin: 10px 10px 0;
        font-family: PingFang SC;
        font-weight: 500;
        color: rgba(255, 255, 255, 1);
        line-height: 16px;
        text-align: justify;
        text-justify: distribute-all-lines; //ie6-8
        text-align-last: left; //一个块或行的最后一行对齐方式
        -moz-text-align-last: left;
        -webkit-text-align-last: justify;
      }
    }
    .home-commerce-practice {
      p:nth-child(1) {
        text-shadow: 0px 5px 10px rgba(243, 113, 157, 0.35);
      }
    }
  }
  .home-training {
    overflow: hidden;
    h2 {
      text-align: center;
      margin-top: 58px;
      margin-bottom: 24px;
      font-size: 22px;
      font-family: PingFang SC;
      font-weight: bold;
      color: rgba(51, 51, 51, 1);
    }
    .home-training-title {
      width: 92%;
      font-size: 14px;
      font-family: PingFang SC;
      font-weight: 500;
      color: rgba(128, 128, 128, 1);
      line-height: 21px;
      margin: 0 auto;
      text-align: justify;
      text-justify: distribute-all-lines; //ie6-8
      text-align-last: left; //一个块或行的最后一行对齐方式
      -moz-text-align-last: left;
      -webkit-text-align-last: justify;
    }
    .home-training-imglist {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      img {
        width: 48%;
        height: 99px;
        margin-bottom: 6px;
      }
    }
  }
  .home-solution {
    overflow: hidden;
    background: #fff;
    h2 {
      font-size: 22px;
      font-family: PingFang SC;
      font-weight: bold;
      color: rgba(51, 51, 51, 1);
      text-align: center;
      margin-top: 60px;
      margin-bottom: 25px;
    }
    .home-solution-top {
      width: 92%;
      height: 194px;
      margin: 0 auto;
      background-repeat: no-repeat;
      background-size: cover;
      margin-bottom: 10px;
      position: relative;
      overflow: hidden;
      .home-solution-top-mask {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: #000;
        opacity: 0.5;
      }
      .home-solution-top-title {
        margin-top: 46px;
        margin-bottom: 24px;
        font-size: 17px;
        font-family: PingFang SC;
        font-weight: 500;
        color: rgba(255, 255, 255, 1);
        text-align: center;
        position: relative;
        z-index: 9;
      }
      .home-solution-top-content {
        width: 267px;
        height: 75px;
        font-size: 12px;
        font-family: PingFang SC;
        font-weight: 500;
        color: rgba(219, 219, 219, 1);
        line-height: 18px;
        margin: 0 auto;
        position: relative;
        z-index: 9;
        text-align: justify;
        text-justify: distribute-all-lines; //ie6-8
        text-align-last: left; //一个块或行的最后一行对齐方式
        -moz-text-align-last: left;
        -webkit-text-align-last: justify;
      }
    }
  }
  .home-statistics {
    width: 100%;
    height: 143px;
    background: rgba(88, 198, 189, 1);
    overflow: hidden;
    p {
      margin-top: 16px;
      text-align: center;
      font-size: 16px;
      font-family: PingFang SC;
      font-weight: 500;
      color: rgba(255, 255, 255, 1);
      line-height: 26px;
      text-shadow: 0px 2px 0px rgba(9, 168, 155, 0.48);
      span {
        color: #f4c15b;
        font-size: 20px;
      }
    }
  }
}
</style>
