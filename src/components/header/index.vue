<template>
  <section class="header">
    <img 
      :src="$imgUrl + '/header/logo.png'" 
      alt="" 
      @click="handleGoHome"
      class="header-logo"
    />
    <img 
      :src="$imgUrl + '/header/nav_icon_menu.png'" 
      alt="" 
      @click="handleGoMenu"
      class="header-router"
    />
  </section>
</template>

<script>
export default {
  methods: {
    handleGoMenu() {
      this.$router.push('/menu')
    },
    handleGoHome() {
      this.$router.push('/home')
    },
  }
}
</script>

<style lang="less" scoped>
.header {
  width: 100%;
  height: 68px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 4px 16px 0px rgba(0, 0, 0, 0.18);
  display: flex;
  justify-content: space-between;
  position: sticky;
  z-index: 999;
  top: 0;
  .header-logo {
    width: 128px;
    height: 28px;
    margin-top: 20px;
    margin-left: 15px;
  }
  .header-router {
    display: block;
    width: 36px;
    height: 36px;
    background-position: center;
    background-size: cover;
    margin-top: 18px;
    margin-right: 10px;
  }
}
</style>
