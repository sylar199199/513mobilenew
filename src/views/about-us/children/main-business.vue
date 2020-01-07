<template>
  <section class="main-business">
    <h2>主营业务</h2>
    <ul>
      <li
        v-for="item in list"
        :key="item.ywId"
      >
        <section class="main-business-main">
          <img
            :src='item.imgUrl'
            alt=""
          />
          <p>{{item.title}}</p>
          <p>{{item.twoTitle}}</p>
          <p>{{item.content}}</p>
        </section>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          ywId: 111,
          imgUrl: this.$imgUrl + "/about-us/icon_01%402x.png",
          title: "人才培养",
          twoTitle: "高校人才一体化培训与就业",
          content:
            "5~12天岗前免费技能培训，180天企业实习与就业，联合办学，订单培养等多种培养模式。"
        },
        {
          ywId: 112,
          imgUrl: this.$imgUrl + "/about-us/icon_02%402x.png",
          title: "线上课程",
          twoTitle: "跨境干货实时了解与掌握",
          content:
            "提供更便捷的实战学习，包含跨境电商运营+实操、网络安全课程、区块链课程、电竞运营课程、大数据课程及合作高校教授课程"
        },
        {
          ywId: 113,
          imgUrl: this.$imgUrl + "/about-us/icon_03%402x.png",
          title: "企业培训",
          twoTitle: "跨境企业全方位学习成长",
          content:
            "Amazon、速卖通、阿里国际、Wish等多种跨境平台课程开设；基础运营、产品开发、站外推广、团队管理等多类型课程体系。"
        },
        {
          ywId: 114,
          imgUrl: this.$imgUrl + "/about-us/icon_04%402x.png",
          title: "团队孵化",
          twoTitle: "传统工厂一站式转型与跨境",
          content:
            "90天全日制转型运营指导，3人小团队从0到1式成长，日出1000美金销量目标达成。"
        }
      ]
    }
  }
};
</script>

<style lang="less" scoped>
.main-business {
  width: 100%;
  height: 543px;
  background: rgba(245, 245, 245, 1);
  overflow: hidden;
  h2:nth-child(1) {
    text-align: center;
    margin-top: 25px;
    margin-bottom: 60px;
    font-size: 22px;
    font-family: PingFang SC;
    font-weight: bold;
    color: rgba(51, 51, 51, 1);
  }
  ul:nth-child(2) {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    li {
      width: 45%;
      transition-duration: 1s;
      height: 172px;
      margin-bottom: 45px;
      .main-business-main {
        width: 100%;
        transition-duration: 1s;
        height: 172px;
        border: 1px solid rgba(204, 204, 204, 1);
        background: rgba(255, 255, 255, 1);
        img:nth-child(1) {
          display: block;
          width: 58px;
          height: 58px;
          margin: 26px auto 10px;
        }
        p:nth-child(2) {
          text-align: center;
          font-size: 16px;
          font-family: PingFang SC;
          font-weight: 500;
          color: rgba(51, 51, 51, 1);
        }
        p:nth-child(3) {
          text-align: center;
          line-height: 30px;
          font-size: 12px;
          font-family: PingFang SC;
          font-weight: 500;
          color: rgba(153, 153, 153, 1);
        }
        p:nth-child(4) {
          margin: 0 20px;
          font-size: 12px;
          font-family: PingFang SC;
          font-weight: 500;
          color: rgba(255, 255, 255, 1);
          line-height: 18px;
          display: none;
          text-align: justify;
          text-justify: distribute-all-lines; //ie6-8
          text-align-last: left; //一个块或行的最后一行对齐方式
          -moz-text-align-last: left;
          -webkit-text-align-last: left;
        }
      }
    }
    li:hover {
      .main-business-main {
        transform: scale(1.3);
        transition-duration: 1s;
        background: rgba(88, 198, 189, 1);
        box-shadow: 0px 3px 18px 0px rgba(21, 138, 128, 0.28);
        img {
          display: none;
        }
        p:nth-child(2) {
          margin-top: 5px;
          color: #fff;
        }
        p:nth-child(3) {
          color: #fff;
        }
        p:nth-child(4) {
          display: block;
          opacity: 0.8;
        }
      }
    }
  }
}
</style>
