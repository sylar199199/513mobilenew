<template>
  <section class="app-download">
    <section class="app-download-banner">
      <img
        class="app-download-banner-img"
        :src="$imgUrl + '/app-download/bg_img_app.png'"
        alt=""
      />
      <div class="app-download-banner-a">
        <a
          v-if="android"
          href="https://www.513.com/513education.apk"
          class="app-download-banner-android"
          :style="{
            backgroundImage: `url(${$imgUrl}/app-download/android.png)`,
          }"
        >
        </a>
        <a
          v-if="ios"
          href="https://apps.apple.com/cn/app/id1477612300"
          class="app-download-banner-android"
          :style="{
            backgroundImage: `url(${$imgUrl}/app-download/ios.png)`,
          }"
        >
        </a>
      </div>
    </section>
    <section class="app-download-school">
      <p>
        跨校学堂，名师荟萃
      </p>
      <div>
        校企优秀师资合作共创优质课程，学生充分利用碎片时间完成在线学习，扩展课外知识面。
      </div>
      <img
        :src="$imgUrl + '/app-download/img_01.png'"
        alt=""
      />
    </section>
    <section class="app-download-interaction">
      <p>
        理实一体，及时互动
      </p>
      <div>
        理论课程、实训一体化教学，学习更有趣有料，遇疑问、不解，可随时师生互动。
      </div>
      <img
        :src="$imgUrl + '/app-download/img_02.png'"
        alt=""
      />
    </section>
    <section class="app-download-school">
      <p>
        教学分析，高效提升
      </p>
      <div>
        教师可时时查看学生学习情况，学生可有针对改善学习行为，教学相互促进，增值增效。
      </div>
      <img
        :src="$imgUrl + '/app-download/img_03.png'"
        alt=""
      />
    </section>
  </section>
</template>

<script>
export default {
  data() {
    return {
      android: false,
      ios: false
    };
  },
  created() {
    let u = navigator.userAgent;
    if (u.indexOf("Android") > -1 || u.indexOf("Adr") > -1) {
      this.android = true;
    } else if (!!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)) {
      this.ios = true;
    }
  }
};
</script>

<style lang="less" scoped>
.app-download {
  .app-download-banner {
    width: 100%;
    height: 255px;
    overflow: hidden;
    position: relative;
    .app-download-banner-img {
      width: 100%;
    }
    .app-download-banner-a {
      width: 127px;
      height: 100px;
      position: absolute;
      left: 5%;
      top: 43%;
      .app-download-banner-android {
        display: block;
        width: 135px;
        height: 40px;
        background-position: center;
        background-size: cover;
      }
      a:nth-child(2) {
        margin-top: 20px;
      }
    }
  }
  .app-download-school {
    overflow: hidden;
    p:nth-child(1) {
      text-align: center;
      margin-top: 70px;
      margin-bottom: 20px;
      font-size: 20px;
      font-family: PingFang SC;
      font-weight: bold;
      color: rgba(51, 51, 51, 1);
    }
    div:nth-child(2) {
      width: 278px;
      height: 30px;
      margin: 0 auto;
      text-align: left;
      font-size: 12px;
      font-family: PingFang SC;
      font-weight: 500;
      color: rgba(128, 128, 128, 1);
      line-height: 18px;
    }
    img:nth-child(3) {
      display: block;
      width: 100%;
      margin: 30px auto 40px;
    }
  }
  .app-download-interaction {
    width: 100%;
    height: 515px;
    background: rgba(245, 245, 245, 1);
    overflow: hidden;
    p:nth-child(1) {
      text-align: center;
      margin-top: 70px;
      margin-bottom: 20px;
      font-size: 20px;
      font-family: PingFang SC;
      font-weight: bold;
      color: rgba(51, 51, 51, 1);
    }
    div:nth-child(2) {
      width: 280px;
      height: 30px;
      margin: 0 auto;
      text-align: left;
      font-size: 12px;
      font-family: PingFang SC;
      font-weight: 500;
      color: rgba(128, 128, 128, 1);
      line-height: 18px;
    }
    img:nth-child(3) {
      display: block;
      width: 100%;
      margin: 30px auto 50px;
    }
  }
}
</style>
