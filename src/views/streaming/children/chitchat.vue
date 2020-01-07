<template>
  <section class="chitchat">
    <section class="chitchat-main">
      <ul id="content">
        <li
          v-for="item in commentList"
          :key="item.sortNo"
        >
          <img
            :src="item.headPortrait"
            class="chitchat-img"
            alt=""
          >
          <section class="chitchat-right">
            <p>
              <span>{{item.name}}</span>
              <span>{{ item.createTime }}</span>
            </p>
            <p>{{ item.sendContent }}</p>
          </section>
        </li>
      </ul>
    </section>
    <section
      class="chitchat-search"
      @click="handleLogin"
    >
      <van-field
        v-model="inputVal"
        center
        :placeholder="isLogin ? '请输入内容': '请登录'"
        :disabled="!isLogin"
      >
        <van-button
          slot="button"
          class="chitchat-search-btn"
          size="small"
          type="primary"
          @click="handleSend"
          :disabled="isShow"
        >发 送</van-button>
      </van-field>
    </section>
  </section>
</template>

<script>
import { Field, Button } from "vant";
import { mapActions, mapState } from 'vuex';
import cookieUtils from '@/utils/cookie/index';

export default {
  data() {
    return {
      isLogin: cookieUtils.getCookie('yetLogin'),
      inputVal: '',
      isShow: true,
    }
  },
  watch: {
    inputVal: function() {
      if (this.inputVal.length !== 0 && this.inputVal.length < 30) {
        this.isShow = false
      } else {
        this.isShow = true
      }
    },
  },
  components: {
    [Field.name]: Field,
    [Button.name]: Button
  },
  computed: {
    ...mapState('form', {
      commentList: state => state.commentList,
    }),
  },
  methods: {
    ...mapActions('form', ['getLoginInfo', 'getSendLiveChat']),
    // 点击发送
    async handleSend() {
      let params = {
        liveId: this.$route.query.id,
        sendContent: this.inputVal
      }
      await this.getSendLiveChat(params)
      this.inputVal = ''
      let anchor = this.$el.querySelector('#content');
      document.querySelector("#content").scrollTop += anchor.offsetTop
    },
    // 没有登录点击评论跳转登陆页面
    handleLogin() {
      if (!cookieUtils.getCookie('yetLogin')) {
        this.$router.push({
          path: '/login',
          query: {
            redirect: this.$route.fullPath
          }
        })
      }
    }
  },
  updated() {
    let anchor = this.$el.querySelector('#content');
    document.querySelector("#content").scrollTop += anchor.offsetTop
  },
  mounted() {
    let anchor = this.$el.querySelector('#content');
    document.querySelector("#content").scrollTop += anchor.offsetTop
  },
};
</script>

<style lang="less" scoped>
.chitchat {
  .chitchat-main {
    height: calc(100vh - 330px);
    ul {
    padding: 12px;
    height: calc(100vh - 330px);
    overflow-y: auto;
    li {
      margin-bottom: 30px;
      display: flex;
      .chitchat-img {
        width: 42px;
        height: 42px;
        border-radius: 50%;
        margin-right: 10px;
      }
      .chitchat-right {
        flex: 1;
        p:nth-child(1) {
          display: flex;
          justify-content: space-between;
          margin-bottom: 5px;
          span:nth-child(1) {
            font-size: 14px;
            font-family: PingFang SC;
            font-weight: bold;
            color: rgba(51, 51, 51, 1);
            line-height: 21px;
          }
          span:nth-child(2) {
            font-size: 12px;
            font-family: PingFang SC;
            font-weight: 500;
            color: rgba(153, 153, 153, 1);
            line-height: 21px;
          }
        }
        p:nth-child(2) {
          font-size: 14px;
          font-family: PingFang SC;
          font-weight: 500;
          color: rgba(102, 102, 102, 1);
          line-height: 21px;
          text-align: justify;
          text-justify: distribute-all-lines; //ie6-8
          text-align-last: left; //一个块或行的最后一行对齐方式
          -moz-text-align-last: left;
          -webkit-text-align-last: justify;
        }
      }
    }
  }
  }
  .chitchat-search {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 50px;
    border-top: 1px solid rgba(230, 230, 230, 1);
  }
}
</style>
