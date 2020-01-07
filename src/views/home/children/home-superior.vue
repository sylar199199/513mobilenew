<template>
  <section class="home-superior">
    <h2>优质就业岗位推荐</h2>
    <ul>
      <li
        v-for="item in superiorList"
        :key="item.superiorSign"
      >
        <section
          class="home-superior-left"
          :style="{
            background: `${item.superiorBackground}`,
          }"
        >
          <p>{{item.leftTitle}}</p>
          <p>{{item.leftPIYin}}</p>
        </section>
        <section class="home-superior-right">
          <p>{{item.rightTitle}}</p>
          <p>
            <span>{{item.rightPrice}}</span>
            <span>{{item.rightGrade}}</span>
          </p>
          <p>
            <span>{{item.rightGongSi}}</span>
            <span>{{item.rightAdress}}</span>
          </p>
        </section>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  data() {
    return {
      superiorList: [
        {
          superiorSign: 130,
          superiorBackground:
            "linear-gradient(266deg,rgba(108,187,241,1) 0%,rgba(58,155,252,1) 100%)",
          leftTitle: "淮庭科技",
          leftPIYin: "HUAI TING KE JI",
          rightTitle: "Wish销售运营亚马逊速卖通销售",
          rightPrice: "4000-8000元/月",
          rightGrade: "外贸业务员",
          rightGongSi: "深圳市淮庭科技有限公司",
          rightAdress: "龙岗坂田"
        },
        {
          superiorSign: 131,
          superiorBackground:
            "linear-gradient(-90deg,rgba(88,198,189,1) 0%,rgba(73,222,184,1) 100%)",
          leftTitle: "淮庭科技",
          leftPIYin: "HUAI TING KE JI",
          rightTitle: "Wish销售运营亚马逊速卖通销售",
          rightPrice: "5000-10000元/月",
          rightGrade: "外贸业务员",
          rightGongSi: "深圳市智建恒贸易有限公司",
          rightAdress: "南山区"
        },
        {
          superiorSign: 132,
          superiorBackground:
            "linear-gradient(-90deg,rgba(253,140,104,1) 0%,rgba(251,121,121,1) 100%)",
          leftTitle: "首恒贸易",
          leftPIYin: "SHOU HENG MAO YI",
          rightTitle: "Wish销售运营亚马逊速卖通销售",
          rightPrice: "4000-8000元/月",
          rightGrade: "外贸业务员",
          rightGongSi: "深圳市首恒贸易有限公司",
          rightAdress: "龙岗横岗"
        },
        {
          superiorSign: 133,
          superiorBackground:
            "linear-gradient(-90deg,rgba(137,99,242,1) 0%,rgba(177,152,247,1) 100%)",
          leftTitle: "明川源贸易",
          leftPIYin: "MING CHUAN MAO YI",
          rightTitle: "外贸业务员／应届生优先考虑／提供...",
          rightPrice: "3000-6000元/月",
          rightGrade: "外贸业务员",
          rightGongSi: "深圳市明川源贸易有限公司",
          rightAdress: "龙华区"
        }
      ]
    };
  }
};
</script>

<style lang="less" scoped>
.home-superior {
  overflow: hidden;
  h2 {
    font-size: 22px;
    margin-top: 60px;
    margin-bottom: 25px;
    font-family: PingFang SC;
    font-weight: bold;
    color: rgba(51, 51, 51, 1);
    text-align: center;
  }
  ul {
    li {
      display: flex;
      margin-bottom: 20px;
      .home-superior-left {
        width: 105px;
        height: 60px;

        border-radius: 2px;
        margin: 0 15px;
        text-align: center;
        p:nth-child(1) {
          font-size: 12px;
          margin-top: 12px;
          font-family: Source Han Sans CN;
          font-weight: 500;
          color: rgba(255, 255, 255, 1);
        }
        p:nth-child(2) {
          font-size: 6px;
          font-family: Source Han Sans CN;
          font-weight: 400;
          color: rgba(255, 255, 255, 1);
          line-height: 24px;
        }
      }
      .home-superior-right {
        p:nth-child(1) {
          font-size: 14px;
          font-family: PingFang SC;
          font-weight: 500;
          color: rgba(51, 51, 51, 1);
          line-height: 21px;
          margin-right: 15px;
          width: 220px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        p:nth-child(2) {
          font-size: 12px;
          font-family: PingFang SC;
          font-weight: 500;
          line-height: 21px;
          span:nth-child(1) {
            color: rgba(85, 198, 194, 1);
          }
          span:nth-child(2) {
            color: #666666;
            margin-left: 15px;
          }
        }
        p:nth-child(3) {
          font-size: 12px;
          font-family: PingFang SC;
          font-weight: 500;
          line-height: 21px;
          span:nth-child(2) {
            margin-left: 15px;
          }
        }
      }
    }
  }
  .home-superior-more {
    text-align: center;
    font-size: 13px;
    font-family: Adobe Heiti Std;
    font-weight: normal;
    color: rgba(153, 153, 153, 1);
  }
}
</style>
