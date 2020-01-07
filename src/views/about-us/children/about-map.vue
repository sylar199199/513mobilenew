<template>
  <section class="about-map">
    <section class="about-us-contact-us">
      <p>联系我们</p>
      <p></p>
    </section>
    <section class="about-us-contact-common">
      <p>伍壹叁在线教育（深圳）有限公司</p>
      <p>地址：深圳市南山区西丽同乐路1002号留仙文化园三栋3层</p>
    </section>
    <section class="about-us-contact-common">
      <img
        :src="$imgUrl + '/about-us/mapm.png'"
        alt=""
      />
    </section>
  </section>
</template>

<style lang="less" scoped>
.about-map {
  background: #fff;
  overflow: hidden;
  .about-us-contact-us {
    margin-top: 50px;
    p:nth-child(1) {
      font-size: 22px;
      margin-left: 15px;
      font-family: PingFang SC;
      font-weight: bold;
      color: rgba(51, 51, 51, 1);
    }
    p:nth-child(2) {
      margin: 15px 0 20px 15px;
      width: 50px;
      height: 2px;
      background: #000;
    }
  }
  .about-us-contact-common {
    margin-bottom: 20px;
    p {
      font-size: 12px;
      margin-left: 15px;
      font-family: PingFang SC;
      font-weight: 500;
      color: rgba(51, 51, 51, 1);
      line-height: 21px;
      opacity: 0.8;
    }
    img {
      width: 100%;
    }
  }
}
</style>
