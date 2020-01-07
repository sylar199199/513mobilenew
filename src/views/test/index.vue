<template>
  <section>
    <section
      class="chitchat-search-fixed"
      @click="handleShowKeyboard"
    ></section>
    <van-popup
      v-model="popupShow"
      position="bottom"
    >
      <van-field
        v-model="inputVal"
        center
        placeholder="请输入内容"
        ref="tagInput"
        id="dom"
        @focus="handleFocus"
      >
        <van-button
          slot="button"
          class="chitchat-search-btn"
          size="small"
          type="primary"
          :disabled="isShow"
        >发 送</van-button>
      </van-field>
    </van-popup>
  </section>
</template>

<script>
import { Field, Button, Popup } from "vant";

export default {
  data() {
    return {
      isShow: true,
      inputVal: '',
      popupShow: false,
    };
  },
  components: {
    [Field.name]: Field,
    [Button.name]: Button,
    [Popup.name]: Popup
  },
  methods: {
    // 点击显示弹出层
    handleShowKeyboard() {
      this.popupShow = true;
      this.$nextTick(_ => {
        this.$refs.tagInput.$refs.input.focus();
      });
    },
    // 获取焦点事件
    handleFocus() {
      var dom = document.getElementById('dom')
      setTimeout(function(){  
        dom.scrollIntoView(true);
	      dom.scrollIntoViewIfNeeded(); 
      }, 0);
    }
  },
  mounted() {}
};
</script>

<style lang="less" scoped>
.chitchat-search-fixed {
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 50px;
  border-radius: 35px;
  background: #eee;
}
</style>
