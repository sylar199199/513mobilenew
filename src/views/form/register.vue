<template>
  <section class="login">
    <section class="login-header">
      <img
        src="../../assets/image/login_icon_return.png"
        @click="handleGoBack"
        alt=""
      />
    </section>
    <p class="login-title">注册账号</p>
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
        v-model="code"
        placeholder="请输入验证码"
        left-icon="phone-o"
        :maxlength="6"
        class="login-password-border login-password"
      >
        <code-btn
          slot="button"
          :phone="username"
          mobileCode="1"
        />
      </van-field>
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
    >注 册</van-button>
    <section class="register-footer-nav">
      已有账号，
      <router-link
        :to="{
          path: '/login',
          query: {
            redirect: $route.query.redirect || ''
          }
        }"
        class="register-footer-nav-gologin"
      >点此登录</router-link>
    </section>
  </section>
</template>

<script>
import { Field, Button } from "vant";
import { checkPhone, checkPwd, chexkCode } from "@/utils/base-validators/index";
import CodeBtn from "./children/code-btn";
import { encryptBy } from "@/utils/des/index";
import { mapActions } from "vuex";

export default {
  data() {
    return {
      username: "",
      pwd: "",
      code: "",
      pwdType: 'password'
    };
  },
  components: {
    [Field.name]: Field,
    [Button.name]: Button,
    "code-btn": CodeBtn
  },
  methods: {
    ...mapActions("form", ["register"]),
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
    // 点击注册
    async handleSubmit() {
      if (
        checkPhone(this.username) &&
        chexkCode(this.code) &&
        checkPwd(this.pwd)
      ) {
        let params = {
          mobile: this.username,
          mobileCode: this.code,
          password: encryptBy(this.pwd)
        };
        const res = await this.register(params)
        if (res) {
          this.$router.replace({
            path: "/login",
            query: {
              redirect: this.$route.query.redirect || ""
            }
          });
        }
      }
    }
  }
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
  .register-footer-nav {
    font-size: 14px;
    font-family: PingFang SC;
    font-weight: 500;
    color: rgba(153, 153, 153, 1);
    text-align: center;
    padding-top: 30px;
    .register-footer-nav-gologin {
      color: #55c6c1;
    }
  }
}
</style>
