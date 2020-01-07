<template>
  <section class="streaming">
    <section class="streaming-top">
      <iframe
        class="streaming-top-iframe"
        src="https://live.vhall.com/webinar/inituser/547078292?embed=video"
        title="直播"
        webkitallowfullscreen="true"
        mozallowfullscreen="true"
        allowfullscreen="true"
        scrolling="no"
      >
      </iframe>
    </section>
    <section class="streaming-bottom">
      <section class="streaming-bottom-fixed">
        <ul class="details-course-ranking">
        <li
          v-for="(item, index) in list"
          :key="item"
          @click="handleCurrent(index)"
          :class="{ active: index === current }"
        >
          {{ item }}
        </li>
      </ul>
      </section>
      <Particulars v-if="current === 0" />
      <Chitchat v-if="current === 1" />
    </section>
  </section>
  <!-- https://live.vhall.com/webinar/inituser/547078292?embed=video -->
</template>

<script>
import Particulars from './children/particulars';
import Chitchat from './children/chitchat';
import cookieUtils from '@/utils/cookie/index';
import { mapActions, mapState, mapMutations } from 'vuex';
import { createScoket, oncloseWS } from '@/utils/webSocket/index';

export default {
  data() {
    return {
      isShow: cookieUtils.getCookie('yetLogin'),
      list: ["详情", "聊天"],
      current: 0,
    };
  },
  components: {
    Particulars,
    Chitchat
  },
  methods: {
    ...mapActions('form', ['getLoginInfo']),
    ...mapMutations('form', ['clearCommentList']),
    // 点击tab
    handleCurrent(index) {
      this.current = index
    },
  },
  async mounted() {
    await this.getLoginInfo()
    createScoket(this.$route.query.id)
  },
  async destroyed() {
    await this.clearCommentList()
    await oncloseWS()
  }
};
</script>

<style lang="less" scoped>
.streaming {
  background: #fff;
  .streaming-top {
    width: 100%;
    height: 210px;
    background: #fff;
    .streaming-top-iframe {
      width: 100%;
      background: #fff;
      height: 210px;
      position: fixed;
      top: 0;
      z-index: 9;
      border: 0;
    }
    .streaming-top-mask-main {
      width: 100%;
      height: 210px;
      .streaming-top-mask {
        position: fixed;
        left: 0;
        right: 0;
        height: 210px;
        background: #000;
        opacity: 0.5;
        z-index: 99;
      }
      .streaming-top-top {
        position: absolute;
        top: 10px;
        left: 10px;
        font-size: 16px;
        font-family: PingFang SC;
        color: rgba(255, 255, 255, 1);
        line-height: 25px;
        display: flex;
        z-index: 99;
        a {
          display: block;
          width: 26px;
          height: 26px;
          margin-right: 10px;
          img {
            width: 100%;
            height: 100%;
          }
        }
      }
      .streaming-top-bottom {
        position: absolute;
        top: 160px;
        left: 15px;
        font-size: 16px;
        font-family: PingFang SC;
        color: rgba(255, 255, 255, 1);
        line-height: 25px;
        display: flex;
        z-index: 99;
        .streaming-top-bottom-button {
          width: 130px;
          height: 35px;
          line-height: 35px;
          border: 1px solid rgba(40, 188, 173, 1);
          border-radius: 18px;
          margin-left: 20px;
          position: relative;
          top: -5px;
          span {
            font-size: 16px;
            font-family: PingFang SC;
            font-weight: 500;
            color: rgba(88, 198, 189, 1);
            margin: 0 12px;
          }
        }
      }
    }
  }
  .streaming-bottom {
    background: #fff;
    .streaming-bottom-fixed {
      height: 48px;
      .details-course-ranking {
        background: #fff;
        display: flex;
        justify-content: space-around;
        border-bottom: 1px #e6e6e6 solid;
        position: fixed;
        width: 100%;
        top: 210px;
        z-index: 99;
        li {
          padding: 0 10px;
          height: 46px;
          line-height: 46px;
        }
        .active {
          color: #58c6bd;
          border-bottom: 2px #58c6bd solid;
        }
      }
    }
  }
}
</style>
