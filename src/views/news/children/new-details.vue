<template>
  <section class="news-details">
    <section class="news-details-common news-details-title">
      {{ byNewsDetail ? byNewsDetail.title : '' }}
    </section>
    <section class="news-details-common news-details-people">
      <p>
        <img
          src="@/assets/icon/list_icon_time_select.png"
          alt=""
        />
        {{ byNewsDetail ? byNewsDetail.createTime : '' }}
      </p>
      <p>
        <img
          src="@/assets/icon/list_icon_me_select.png"
          alt=""
        />
        {{ byNewsDetail ? byNewsDetail.browseCount : '' }}
      </p>
    </section>
    <section 
      class="news-details-common news-details-content details-marked"
      v-html="newsDetails"
    ></section>
  </section>
</template>

<script>
import { mapState, mapActions } from "vuex";
import marked from 'marked';

export default {
  computed: {
    ...mapState("home", {
      byNewsDetail: state => state.byNewsDetail
    }),
    newsDetails() {
      if (this.byNewsDetail && this.byNewsDetail.contentTwo) {
        return marked(this.byNewsDetail.contentTwo);
      }
    }
  },
  methods: {
    ...mapActions("home", ["getByNewsDetail"])
  },
  created() {
    this.getByNewsDetail(this.$route.params.id);
  }
};
</script>

<style lang="less" scoped>
.news-details {
  overflow: hidden;
  min-height: calc(100vh - 324px);
  .news-details-common {
    padding: 0 15px;
    margin-bottom: 20px;
  }
  .news-details-title {
    margin: 15px 0;
    font-size: 19px;
    font-family: PingFang SC;
    font-weight: 500;
    color: rgba(51, 51, 51, 1);
    line-height: 22px;
  }
  .news-details-people {
    display: flex;
    margin-bottom: 30px;
    p {
      margin-right: 15px;
      font-size: 13px;
      font-family: PingFang SC;
      font-weight: 500;
      color: rgba(128, 128, 128, 1);
      line-height: 17px;
      img {
        width: 18px;
        height: 18px;
        position: relative;
        top: 3px;
      }
    }
  }
  .news-details-content {
    p {
      line-height: 20px;
      margin-bottom: 20px;
      word-wrap: break-word;
    }
    img {
      max-width: 100%;
      height: 100%;
      margin: 0 auto;
    }
  }
}
</style>
