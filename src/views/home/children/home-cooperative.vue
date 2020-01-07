<template>
  <section class="home-cooperative">
    <h2>他们都在与我们合作</h2>
    <ul>
      <li
        v-for="item in schoolCrestList"
        :key="item.sheetId"
      >
        <img :src='item.sheetSrc' alt=""/>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  data() {
    return {
      schoolCrestList: [
        {
          sheetId: 'sheetId01',
          sheetSrc: this.$imgUrl + '/home/sheet_list/hogx_5.png',
        },
        {
          sheetId: 'sheetId02',
          sheetSrc: this.$imgUrl + '/home/sheet_list/hogx_8.png',
        },
        {
          sheetId: 'sheetId03',
          sheetSrc: this.$imgUrl + '/home/sheet_list/hogx_3.png',
        },
        {
          sheetId: 'sheetId04',
          sheetSrc: this.$imgUrl + '/home/sheet_list/hogx_6.png',
        },
        {
          sheetId: 'sheetId05',
          sheetSrc: this.$imgUrl + '/home/sheet_list/hogx_2.png',
        },
        {
          sheetId: 'sheetId06',
          sheetSrc: this.$imgUrl + '/home/sheet_list/hogx_11.png',
        },
        {
          sheetId: 'sheetId07',
          sheetSrc: this.$imgUrl + '/home/sheet_list/hogx_9.png',
        },
        {
          sheetId: 'sheetId08',
          sheetSrc: this.$imgUrl + '/home/sheet_list/hogx_7.png',
        },
        {
          sheetId: 'sheetId09',
          sheetSrc: this.$imgUrl + '/home/sheet_list/hogx_10.png',
        },
        {
          sheetId: 'sheetId10',
          sheetSrc: this.$imgUrl + '/home/sheet_list/hogx_4.png',
        },
        {
          sheetId: 'sheetId11',
          sheetSrc: this.$imgUrl + '/home/sheet_list/hogx_1.png',
        },
        {
          sheetId: 'sheetId12',
          sheetSrc: this.$imgUrl + '/home/sheet_list/hogx_12.png',
        },
      ]
    }
  }
};
</script>

<style lang="less" scoped>
.home-cooperative {
  overflow: hidden;
  h2 {
    font-size: 22px;
    font-family: PingFang SC;
    font-weight: bold;
    color: rgba(51, 51, 51, 1);
    margin-top: 60px;
    text-align: center;
  }
  ul {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 60px;
    li {
      margin: 20px 0 0 0;
      width: 25%;
      text-align: center;
      img {
        width: 60px;
        height: 60px;
      }
    }
  }
}
</style>
