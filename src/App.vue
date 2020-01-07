<template>
  <section id="app">
    <router-view />
  </section>
</template>

<script>
export default {
  watch: {
    $route: function(to, from) {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }
  },
};
</script>

<style lang="less" scoped>
#app {
  width: 100%;
  height: 100%;
  -webkit-overflow-scrolling: touch;
}
.v-enter,
.v-leave-to {
  opacity: 0;
}
.v-enter-active,
.v-leave-active {
  transition: all 0.5s;
}
</style>
