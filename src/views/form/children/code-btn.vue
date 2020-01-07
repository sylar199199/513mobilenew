<template>
  <van-button
    class="register-code"
    :disabled='btnDisabled'
    @click="handleClickCode"
  >
    {{ bthContent }}
  </van-button>
</template>

<script>
import { Button } from "vant";
import { mapActions } from "vuex";
import { checkPhone } from "@/utils/base-validators/index";

export default {
  props: {
    phone: {
      type: String
    },
    mobileCode: {
      type: String
    }
  },
  data() {
    return {
      btnDisabled: false,
      bthContent: "获取验证码",
      time: 60
    };
  },
  components: {
    [Button.name]: Button
  },
  methods: {
    ...mapActions("form", ["sendCodeForMobile"]),
    async handleClickCode() {
      if (await checkPhone(this.phone)) {
        let params = {
          mobile: this.phone,
          type: this.mobileCode
        };
        const res = await this.sendCodeForMobile(params)
        if (res) {
          this.btnDisabled = true;
          let timeChange;
          let ti = this.time;
          const clock = () => {
            if (ti > 0) {
              ti = ti - 1;
              this.time = ti;
              this.bthContent = ti;
            } else {
              clearInterval(timeChange);
              this.btnDisabled = false;
              this.time = 60;
              this.bthContent = "获取验证码";
            }
          };
          timeChange = setInterval(clock, 1000);
        }
      }
    }
  }
};
</script>

<style lang="less" scoped>
.register-code {
  width: 112px;
  height: 30px;
  background: rgba(85, 198, 193, 1);
  border-radius: 15px;
  text-align: center;
  line-height: 30px;
  font-size: 14px;
  font-family: PingFang SC;
  font-weight: 500;
  color: rgba(255, 255, 255, 1);
  border: 0;
}
</style>