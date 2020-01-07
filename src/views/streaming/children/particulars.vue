<template>
  <section class="particulars">
    <section class="particulars-title">
    {{details.liveName}}
    </section>
    <section class="particulars-teacher">
      <img
        src="../../../assets/icon/lecturer.png"
        alt=""
      >
      讲师：{{details.userName}}
    </section>
    <section class="particulars-content">
     {{details.labelInfo}}
    </section>
    <section class="particulars-img">
      <img
        :src="details.livePhoto"
        alt=""
      >
    </section>
    <section class="particulars-content" v-html="liveInfo">
      而在最近几年，电竞经济突飞猛进，根据前瞻产业研究院发布的《中国电子竞技行业市场前景预测与投资战略规划分析报告》显示，截止到2018年底，中国电竞行业用户总数为4.28亿人，市场规模达到912.6亿元。电子竞技这一行业，也迎来了“最好的时代”。
    </section>
  </section>
</template>

<script>

import { mapActions } from "vuex";
import marked from 'marked';

export default {
    data(){
      return{
          details:{},
      }
    },
    computed:{
        liveInfo(){
            if(this.details&&this.details.liveInfo){
                return marked(this.details.liveInfo);
            }
        }
    },
    methods: {
        ...mapActions('form', ['getLiveDetail']),
    },
    async mounted(){
        const params = {
            id: this.$route.query.id
        }
       this.details = await this.getLiveDetail(params)
    }
};
</script>

<style lang="less" scoped>
.particulars {
  margin-top: 20px;
  padding: 0 15px;
  background: #fff;
  .particulars-title {
    font-size: 20px;
    font-family: PingFang SC;
    font-weight: bold;
    color: rgba(51, 51, 51, 1);
    line-height: 25px;
  }
  .particulars-teacher {
    font-size: 12px;
    font-family: PingFang SC;
    font-weight: 500;
    color: rgba(128, 128, 128, 1);
    margin-bottom: 30px;
    margin-top: 15px;
    img {
      width: 17px;
      height: 17px;
      margin-right: 3px;
      position: relative;
      top: 3px;
    }
  }
  .particulars-content {
    margin-bottom: 25px;
    font-size: 14px;
    font-family: PingFang SC;
    font-weight: 500;
    color: rgba(128, 128, 128, 1);
    line-height: 21px;
    text-align: justify;
    text-justify: distribute-all-lines; //ie6-8
    text-align-last: left; //一个块或行的最后一行对齐方式
    -moz-text-align-last: left;
    -webkit-text-align-last: justify;
  }
  .particulars-img {
    margin-bottom: 20px;
    img {
      width: 100%;
    }
  }
}
</style>
