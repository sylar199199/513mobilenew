<template>
  <section class="survey-echart">
    <section class="survey-echart-title">
      <p>
        <span></span>
        考核标准
      </p>
    </section>
    <section class="survey-echart-wrapper">
      <section
        class="survey-echart-main"
        ref="chart"
      ></section>
      <ul class="survey-echart-length">
        <li
          v-for="item in inspectionStandardId"
          :key="item.name"
        >
          <span :style="{background: item.backgroundStyle}"></span>
          {{ item.name }}
          <span>{{ item.value }}%</span>
        </li>
      </ul>
    </section>
  </section>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  computed: {
    ...mapState("course", {
      inspectionStandardId: state => state.inspectionStandardId
    })
  },
  methods: {
    ...mapActions("course", ["getByInspectionStandardId"]),
    initCharts() {
      let myChart = echarts.init(this.$refs.chart);
      // 绘制图表
      myChart.setOption({
        color: ["#5BADFD", "#FD8C68", "#F0E053", "#17DBBB", "#9a7ef2"],
        series: [
          {
            name: "",
            type: "pie",
            radius: "55%",
            center: ["45%", "38%"],
            data: this.inspectionStandardId,
            label: {
              normal: {
                show: false,
                position: "center"
              }
            }
          }
        ]
      });
    }
  },
  async mounted() {
    let params = {
      courseIdSign: this.$route.params.id,
      page: 1,
      size: 10
    };
    await this.getByInspectionStandardId(params);
    await this.initCharts();
  }
};
</script>

<style lang="less" scoped>
.survey-echart {
  .survey-echart-title {
    margin: 0 15px 30px;
    p {
      font-size: 16px;
      font-family: PingFang SC;
      font-weight: 500;
      color: rgba(51, 51, 51, 1);
      span {
        display: inline-block;
        width: 3px;
        height: 15px;
        background: rgba(85, 198, 193, 1);
        margin-right: 6px;
        position: relative;
        top: 2px;
      }
    }
  }
  .survey-echart-wrapper {
    display: flex;
    .survey-echart-main {
      width: 60%;
      height: 200px;
    }
    .survey-echart-length {
      width: 40%;
      height: 200px;
      li {
        font-size: 14px;
        font-family: PingFang SC;
        font-weight: 500;
        color: rgba(102, 102, 102, 1);
        margin-bottom: 12px;
        span:nth-child(1) {
          display: inline-block;
          width: 15px;
          height: 13px;
          background: rgba(91, 173, 253, 1);
          border-radius: 2px;
          position: relative;
          top: 1px;
        }
        span:nth-child(2) {
          font-size:14px;
          font-family:PingFang SC;
          font-weight:500;
          color:rgba(88,198,189,1);
          margin-left: 5px;
        }
      }
    }
  }
}
</style>
