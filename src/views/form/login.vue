<template>
  <section class="login">
    <section class="login-header">
      <img
        src="../../assets/image/login_icon_return.png"
        @click="handleGoBack"
        alt=""
      />
    </section>
    <p class="login-title">账号登录</p>
    <section class="login-form">
      <van-field
        v-model="username"
        placeholder="请输入11位手机号"
        right-icon="question-o"
        left-icon="contact"
        :maxlength="11"
        clearable
        @click-right-icon="$toast('请输入11位手机号')"
        class="login-password-border"
      />
      <van-field
        v-model="pwd"
        :type="pwdType"
        placeholder="请输入6-16位密码"
        right-icon="eye"
        left-icon="closed-eye"
        :maxlength="16"
        @click-right-icon="checkType"
        class="login-password-border login-password"
      />
    </section>
    <van-button
      class="login-btn"
      @click="handleSubmit"
    >登 录</van-button>
    <section class="login-footer-nav">
      <ul class="login-nav">
        <li>
          <router-link
            :to="{
              path: '/register',
              query: {
                redirect: $route.query.redirect || ''
              }
            }"
            class="login-nav-navLink"
          >注册账号</router-link>
        </li>|
        <li>
          <router-link
            :to="{
              path: '/retrieve-password',
              query: {
                redirect: $route.query.redirect || ''
              }
            }"
            class="login-nav-navLink"
          >忘记密码</router-link>
        </li>
      </ul>
    </section>
  </section>
</template>

<script>
import { Field, Button } from "vant";
import { checkPhone, checkPwd } from "@/utils/base-validators/index";
import { encryptBy } from '@/utils/des/index';
import { mapActions } from "vuex";

export default {
  data() {
    return {
      username: "",
      pwd: "",
      pwdType: 'password'
    };
  },
  components: {
    [Field.name]: Field,
    [Button.name]: Button
  },
  methods: {
    ...mapActions("form", ["login", "getLoginInfo"]),
    // 点击返回
    handleGoBack() {
      window.history.go(-1);
    },
    // 点击切换passwold
    checkType() {
      if (this.pwdType === 'password') {
        this.pwdType = 'text'
      } else {
        this.pwdType = 'password'
      }
    },
    // 点击登录
    async handleSubmit() {
      if (checkPhone(this.username) && checkPwd(this.pwd)) {
        let params = {
          password: encryptBy(this.pwd),
          phone: this.username
        };
        if (await this.login(params)) {
          if (this.$route.query.redirect) {
            this.$router.replace(this.$route.query.redirect);
          } else {
            window.history.go(-1)
          }
        }
      }
    }
  },
};
</script>

<style lang="less" scoped>
.login {
  background: #fff;
  min-height: calc(100vh);
  .login-header {
    width: 100%;
    height: 45px;
    background: #fff;
    img {
      width: 22px;
      height: 22px;
      margin-top: 10px;
      margin-left: 12px;
    }
  }
  .login-title {
    font-size: 27px;
    font-family: PingFang SC;
    font-weight: 500;
    color: rgba(51, 51, 51, 1);
    margin: 44px 0 50px 30px;
  }
  .login-form {
    padding: 0 30px;
    .login-password {
      margin-top: 10px;
    }
    .login-password-border {
      border-bottom: 1px solid rgba(219, 219, 219, 1);
    }
  }
  .login-btn {
    width: 315px;
    height: 49px;
    background: #55c6c1;
    font-size: 17px;
    font-family: PingFang SC;
    font-weight: 500;
    color: rgba(255, 255, 255, 1);
    line-height: 48px;
    text-align: center;
    border-radius: 25px;
    margin: 30px 0 0 35px;
  }
  .login-footer-nav {
    .login-nav {
      display: flex;
      color: #cccccc;
      width: 200px;
      margin: 30px auto 0;
      li {
        margin: 0 20px;
        .login-nav-navLink {
          color: #666666;
          font-size: 14px;
          font-family: PingFang SC;
          font-weight: 500;
        }
      }
    }
  }
}
</style>
