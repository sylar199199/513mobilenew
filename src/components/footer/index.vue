<template>
  <section class="footer">
    <p>
      <img 
        :src="$imgUrl + '/footer/phone%402x.png'" 
        alt="" 
      />
      咨询电话 0755-21002465
    </p>
    <ul class="footer-nav">
      <li class="footer-nav-item">
        <router-link
          to='/home'
          class="footer-nav-a"
        >首页</router-link>
      </li>
      <li class="footer-nav-item">
        <router-link
          to='/home/news-advisory'
          class="footer-nav-a"
        >新闻资讯</router-link>
      </li>
      <li class="footer-nav-item">
        <router-link
          to="/about-us"
          class="footer-nav-a"
        >关于我们</router-link>
      </li>
      <li class="footer-nav-item">
        <router-link
          to="/app-download"
          class="footer-nav-a"
        >APP下载</router-link>
      </li>
    </ul>
    <p>
      ©伍壹叁在线教育(深圳)有限公司版权所有 <span>粤ICP备19058570号</span>
    </p>
  </section>
</template>

<style lang="less" scoped>
.footer {
  width: 100%;
  height: 256px;
  background: rgba(64, 64, 64, 1);
  overflow: hidden;
  p:nth-child(1) {
    text-align: center;
    margin-top: 33px;
    vertical-align: middle;
    font-size: 18px;
    font-family: PingFang SC;
    font-weight: 500;
    color: rgba(240, 240, 240, 1);
    img {
      width: 23px;
      height: 23px;
      vertical-align: middle;
      margin-right: 10px;
    }
  }
  .footer-nav {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    .footer-nav-item {
      width: 50%;
      height: 16px;
      text-align: center;
      margin-top: 30px;
      position: relative;
      .footer-nav-a {
        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        font-size: 14px;
        font-family: PingFang SC;
        font-weight: 500;
        color: rgba(240, 240, 240, 1);
      }
    }
  }
  p:nth-child(3) {
    margin-top: 40px;
    font-size: 12px;
    font-family: PingFang SC;
    font-weight: 500;
    color: rgba(179, 179, 179, 1);
    text-align: center;
    span {
      font-size: 12px;
      font-family: PingFang SC;
      font-weight: 500;
      color: rgba(179, 179, 179, 1);
    }
  }
}
</style>
