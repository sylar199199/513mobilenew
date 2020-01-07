<template>
  <section class="corporate">
    <h2>企业愿景</h2>
    <section class="about-us-corporate">
      将继续创新、专注、专业、共赢的精神，积极探索互联网创新教学新模式，打造双元化教育模式，
      以就业为教育的初心，实现优势互补、产教融合、校企协同、合作育人，为我国教育事业、高新行
      业发展做出更大贡献。
    </section>
    <ul>
      <li
        v-for="item in enterpriseList"
        :key="item.enterpriseSign"
      >
        <img
          :src='item.enterpriseImg'
          alt=""
        />
        <section class="about-us-corporate-right">
          <p>{{item.enterpriseTitle}}</p>
          <p>{{item.enterpriseContent}}</p>
        </section>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  data() {
    return {
      enterpriseList: [
        {
          enterpriseSign: 120,
          enterpriseImg: this.$imgUrl + "/about-us/icon01%402x.png",
          enterpriseTitle: "五 个 竞 争 因 素",
          enterpriseContent: "专 业  ·  高 效  ·  分 享  ·  创 新  ·  定 制"
        },
        {
          enterpriseSign: 121,
          enterpriseImg: this.$imgUrl + "/about-us/icon02%402x.png",
          enterpriseTitle: "一 个 理 念",
          enterpriseContent: "授 人 以 鱼 不 如 授 人 以 渔"
        },
        {
          enterpriseSign: 122,
          enterpriseImg: this.$imgUrl + "/about-us/icon03%402x.png",
          enterpriseTitle: "三 个 共 同 目 标",
          enterpriseContent: "不 断 开 拓  ·  创 造 价 值  ·  实 现 共 赢"
        }
      ]
    };
  }
};
</script>

<style lang="less" scoped>
.corporate {
  overflow: hidden;
  background: #fff;
  h2:nth-child(1) {
    font-size: 22px;
    font-family: PingFang SC;
    font-weight: bold;
    color: rgba(51, 51, 51, 1);
    text-align: center;
    margin-bottom: 24px;
    margin-top: 60px;
  }
  .about-us-corporate {
    width: 95%;
    margin: 0 auto;
    height: 90px;
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
  ul {
    margin-top: 40px;
    li {
      display: flex;
      margin-bottom: 20px;
      margin-left: 15px;
      img {
        width: 84px;
        height: 84px;
      }
      .about-us-corporate-right {
        margin: 24px 0 0 14px;
        p:nth-child(1) {
          font-size: 16px;
          font-family: Source Han Sans CN;
          font-weight: 400;
          color: rgba(51, 51, 51, 1);
          line-height: 21px;
        }
        p:nth-child(2) {
          font-size: 12px;
          font-family: Source Han Sans CN;
          font-weight: 400;
          color: rgba(153, 153, 153, 1);
          line-height: 21px;
        }
      }
    }
  }
}
</style>
