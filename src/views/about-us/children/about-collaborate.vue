<template>
  <section class="about-collaborate">
    <section class="about-us-collaborate-left">
      <h2>高校/企业合作</h2>
      <p>
        <img
          src="@/assets/icon/name_icon@2x.png"
          alt=""
        />
        郑先生
      </p>
      <p>
        <img
          src="@/assets/icon/phone_icon@2x.png"
          alt=""
        />
        13530000351
      </p>
      <p>
        <img
          src="@/assets/icon/qq-icon@2x.png"
          alt=""
        />
        3431438970
      </p>
      <p>
        <img
          src="@/assets/icon/email_icon@2x.png"
          alt=""
        />
        3431438970@qq.com
      </p>
    </section>
    <section class="about-us-collaborate-right">
      <img
        :src="$imgUrl + '/about-us/WeChat%402x.png'"
        alt=""
      />
    </section>
  </section>
</template>

<style lang="less" scoped>
.about-collaborate {
  background: #fff;
  display: flex;
  justify-content: space-between;
  overflow: hidden;
  .about-us-collaborate-left {
    margin: 40px 0;
    h2:nth-child(1) {
      font-size: 22px;
      font-family: PingFang SC;
      font-weight: bold;
      color: rgba(51, 51, 51, 1);
      margin-left: 16px;
      margin-bottom: 20px;
    }
    p {
      font-size: 12px;
      font-family: PingFang SC;
      font-weight: 500;
      color: rgba(128, 128, 128, 1);
      line-height: 21px;
      opacity: 0.99;
      margin-left: 16px;
      img {
        width: 18px;
        height: 18px;
        position: relative;
        top: 4px;
        margin-right: 6px;
      }
    }
  }
  .about-us-collaborate-right {
    margin: 40px 0;
    img {
      width: 155px;
      height: 155px;
    }
  }
}
</style>
