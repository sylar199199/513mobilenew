<template>
  <section class="default-graph">
    <section class="default-graph-main">
      <img
        :src="$imgUrl + '/no-list/defaultpage_content%402x.png'"
        alt=""
        class="default-graph-img"
      >
      <p class="default-graph-p">暂无数据</p>
    </section>
  </section>
</template>

<style lang="less" scoped>
.default-graph {
  min-height: 300px;
  width: 100%;
  position: relative;
  .default-graph-main {
    width: 200px;
    height: 260px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    .default-graph-img {
      width: 200px;
      height: 240px;
    }
    .default-graph-p {
      font-size: 14px;
      font-family: Source Han Sans CN;
      font-weight: 400;
      color: rgba(153, 153, 153, 1);
    }
  }
}
</style>