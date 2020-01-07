<template>
  <section class="menu">
    <section class="menu-header">
      <img
        :src="$imgUrl + '/header/logo.png'"
        class="header-logo"
        alt=""
      />
      <p class="header-router">
        <img
          :src="$imgUrl + '/header/close%402x.png'"
          alt=""
          @click="handleGoBack"
        />
      </p>
    </section>
    <section class="menu-search">
      <section class="menu-search-focus">
        <!--  <SearchBar placeholder="请输入内容" /> -->
      </section>
      <ul>
        <li>
          <router-link to="/home">首页</router-link>
        </li>
        <li>
          <router-link to="/class">课程</router-link>
        </li>
         <li>
          <router-link to="/streaming-list">直播</router-link>
        </li>
        <li>
          <router-link to="/essay">文章</router-link>
        </li>
        <li>
          <a href="http://crm.513.com/resume">在线简历</a>
        </li>
        <li>
          <router-link to="/app-download">APP下载</router-link>
        </li>

      </ul>
    </section>
    <section class="menu-footer">
      ©伍壹叁在线教育(深圳)有限公司版权所有 粤ICP备19058570号
    </section>
  </section>
</template>

<script>
export default {
  methods: {
    handleGoBack() {
      window.history.go(-1)
    }
  }
}
</script>

<style lang="less" scoped>
.menu {
  .menu-header {
    width: 100%;
    height: 68px;
    background: rgba(255, 255, 255, 1);
    box-shadow: 0px 4px 16px 0px rgba(0, 0, 0, 0.18);
    display: flex;
    justify-content: space-between;
    position: sticky;
    z-index: 999;
    top: 0;
    .header-logo {
      width: 128px;
      height: 28px;
      margin-top: 20px;
      margin-left: 15px;
    }
    .header-router {
      display: block;
      width: 46px;
      height: 34px;
      img {
        width: 28px;
        height: 28px;
        margin-top: 18px;
      }
    }
  }
  .menu-search {
    .menu-search-focus {
      margin: 20px 15px 20px 15px;
    }
    ul {
      li {
        height: 60px;
        line-height: 60px;
        margin: 0 50px;
        border-bottom: 1px solid rgba(230, 230, 230, 1);
        a {
          font-size: 16px;
          font-family: PingFang SC;
          font-weight: 500;
          color: rgba(51, 51, 51, 1);
          display: block;
        }
      }
    }
  }
  .menu-footer {
    width: 100%;
    height: 44px;
    background: rgba(64, 64, 64, 1);
    font-size: 12px;
    font-family: PingFang SC;
    font-weight: 500;
    color: rgba(179, 179, 179, 1);
    line-height: 44px;
    text-align: center;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 999;
  }
}
</style>
