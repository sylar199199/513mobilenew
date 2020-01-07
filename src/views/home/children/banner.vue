<template>
  <section class="home-banner">
    <van-swipe :autoplay="30000">
      <van-swipe-item v-for="item in h5AdvertisingList" :key="item.id">
        <router-link
          v-if="item.courseId"
          :to="{
            name: 'collegeCourseDetail',
            params: {
              id: item.courseId
            }
          }"
          class="home-banner-route"
        >
          <img v-lazy="item.advertImage" />
        </router-link>
        <img v-else v-lazy="item.advertImage" />
      </van-swipe-item>
    </van-swipe>
  </section>
</template>

<script>
import { mapActions, mapState } from "vuex";
import { Swipe, SwipeItem } from "vant";

export default {
  components: {
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem
  },
  computed: {
    ...mapState("home", {
      h5AdvertisingList: state => state.h5AdvertisingList
    })
  },
  methods: {
    ...mapActions("home", ["getH5AdvertisingList"])
  },
  created() {
    this.getH5AdvertisingList();
  }
};
</script>

<style lang="less" scoped>
.home-banner {
  height: 225px;
  overflow: hidden;
  .home-banner-route {
    display: block;
    width: 100%;
    height: 100%;
    img {
      width: 100%;
      height: 225px;
    }
  }
  img {
    width: 100%;
    height: 225px;
  }
}
</style>
