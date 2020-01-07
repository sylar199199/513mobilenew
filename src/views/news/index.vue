<template>
  <section class="news">
    <img
      :src="$imgUrl + '/home/new_banner.png'"
      alt=""
      class="news-advisory-img"
    />
    <section class="news-advisory-route">
      <router-link 
        to='/home/news-advisory/business'
        active-class="active"
      >
        企业动态
      </router-link>
      <span></span>
      <router-link 
        to='/home/news-advisory/industry'
        active-class="active"
      >
        行业新闻
      </router-link>
    </section>
    <router-view></router-view>
  </section>
</template>

<style lang="less" scoped>
.news {
  background: #fff;
  .news-advisory-img {
    display: block;
    width: 100%;
    height: 180px;
  }
  .news-advisory-route {
    margin-top: 20px;
    text-align: center;
    a {
      height: 16px;
      font-size: 16px;
      font-family: PingFang SC;
      font-weight: bold;
      color: rgba(51, 51, 51, 1);
    }
    .active {
      color: #58c6bd;
    }
    span {
      display: inline-block;
      width: 1px;
      height: 15px;
      background: #808080;
      margin: 0 15px;
    }
  }
}
</style>
