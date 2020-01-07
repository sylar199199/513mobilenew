<template>
  <section class="home-select">
    <h2>为何选择我们</h2>
    <ul>
      <li
        v-for="item in selectList"
        :key="item.selectSign"
      >
        <img :src='item.selectImg' alt=""/>
        <p>{{item.selectTitle}}</p>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  data() {
    return {
      selectList: [
        {
          selectSign: 151,
          selectImg: this.$imgUrl + "/home/icon_talents%402x.png",
          selectTitle: "个性化人才输出"
        },
        {
          selectSign: 152,
          selectImg: this.$imgUrl + "/home/icon_project%402x.png",
          selectTitle: "精品化项目孵化"
        },
        {
          selectSign: 153,
          selectImg: this.$imgUrl + "/home/icon_curriculum%402x.png",
          selectTitle: "体系化课程培训"
        },
        {
          selectSign: 154,
          selectImg: this.$imgUrl + "/home/icon_serve%402x.png",
          selectTitle: "一站式跨境服务"
        }
      ]
    };
  }
};
</script>

<style lang="less" scoped>
.home-select {
  overflow: hidden;
  h2 {
    font-size: 22px;
    font-family: PingFang SC;
    font-weight: bold;
    color: rgba(51, 51, 51, 1);
    margin-top: 60px;
    text-align: center;
  }
  ul {
    display: flex;
    flex-wrap: wrap;
    li {
      margin-top: 25px;
      width: 50%;
      text-align: center;
      img {
        width: 93px;
        height: 93px;
      }
      p {
        font-size: 12px;
        font-family: PingFang SC;
        font-weight: 500;
        color: rgba(128, 128, 128, 1);
        margin-top: 12px;
        text-align: center;
      }
    }
  }
}
</style>
