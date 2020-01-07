<template>
  <section class="home-news">
    <h2>新闻资讯</h2>
    <ul class="home-news-top-list">
      <li
        v-for="item in allNewsList"
        :key="item.sign"
        class="home-news-top-item"
      >
        <router-link
          :to="{
              name: 'homeNewsAdvisoryDetail',
              params: { id: item.sign },
            }"
          class="home-news-top-a"
        >
          <img
            :src='item.pictureImage'
            alt=""
          />
          <section class="home-news-top-top">
            <p>{{item.title}}</p>
            <p>
              <span>{{item.createTime}}</span>
              <span>公司动态</span>
            </p>
          </section>
        </router-link>
      </li>
    </ul>
    <ul class="home-news-bottom">
      <li
        v-for="item in newsList"
        :key="item.sign"
      >
        <router-link
          :to="{
            name: 'homeNewsAdvisoryDetail',
            params: { id: item.sign },
          }"
          class="home-news-bottom-route"
        >
          <p>{{item.createTime}}</p>
          <p>{{item.title}}</p>
        </router-link>
      </li>
    </ul>
    <van-button
      plain
      type="primary"
      size='small'
      class="home-news-more"
      @click="handleGoNews"
    >更多></van-button>
  </section>
</template>

<script>
import { mapState, mapActions } from "vuex";
import { Button } from "vant";

export default {
  components: {
    [Button.name]: Button
  },
  computed: {
    ...mapState("home", {
      allNewsList: state => state.allNewsList,
      allNewsTotal: state => state.allNewsTotal,
      newsList: state => state.newsList
    })
  },
  methods: {
    ...mapActions("home", ["getAllNewsList", "getNewList"]),
    handleGoNews() {
      this.$router.push('/home/news-advisory')
    }
  },
  async created() {
    let params = {
      category: 1,
      page: 1,
      size: 1
    };
    await this.getAllNewsList(params);
    await this.getNewList();
  }
};
</script>

<style lang="less" scoped>
.home-news {
  overflow: hidden;
  text-align: center;
  h2 {
    font-size: 22px;
    font-family: PingFang SC;
    font-weight: bold;
    color: rgba(51, 51, 51, 1);
    margin-top: 60px;
    margin-bottom: 25px;
    text-align: center;
  }
  .home-news-top-list {
    .home-news-top-item {
      .home-news-top-a {
        display: block;
        width: 100%;
        img {
          width: 94%;
          height: 194px;
          display: block;
          margin: 0 auto;
        }
        .home-news-top-top {
          background: #f5f5f5;
          width: 94%;
          margin: 0 auto;
          overflow: hidden;
          p {
            width: 100%;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            text-align: left;
          }
          p:nth-child(1) {
            font-size: 14px;
            font-family: PingFang SC;
            font-weight: 500;
            color: rgba(51, 51, 51, 1);
            margin: 15px 0;
          }
          p:nth-child(2) {
            margin-bottom: 15px;
            span {
              font-size: 12px;
              font-family: PingFang SC;
              font-weight: 500;
              color: rgba(128, 128, 128, 1);
            }
            span:nth-child(2) {
              margin-left: 20px;
            }
          }
        }
      }
    }
  }
  .home-news-bottom {
    margin-top: 20px;
    li {
      margin: 0 15px 30px;
      .home-news-bottom-route {
        display: flex;
        p:nth-child(1) {
          width: 57px;
          height: 30px;
          line-height: 30px;
          text-align: center;
          background: rgba(204, 204, 204, 1);
          border-radius: 4px;
          font-size: 14px;
          font-family: PingFang SC;
          font-weight: 500;
          color: rgba(255, 255, 255, 1);
        }
        p:nth-child(2) {
          width: 270px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          font-size: 14px;
          font-family: PingFang SC;
          font-weight: 500;
          text-align: left;
          color: rgba(128, 128, 128, 1);
          margin-left: 10px;
          margin-top: 5px;
        }
      }
    }
  }
  .home-news-more {
    margin-bottom: 40px;
  }
}
</style>
