<template>
  <section class="survey">
    <section class="survey-teacher">
      <h2>{{detailsCourseCourseInfoVo ? detailsCourseCourseInfoVo.courseName : ''}}</h2>
      <p class="survet-teacher-form">
        课程来自：{{detailsCourseCourseInfoVo ? detailsCourseCourseInfoVo.schoolName : ''}}
      </p>
      <section class="survet-teacher-top">
        <p class="survet-teacher-subject">
          学科：{{detailsCourseCourseInfoVo ? detailsCourseCourseInfoVo.courseTypeName : ''}}
        </p>
        <p class="survet-teacher-credit">
          <span>
            {{detailsCourseCourseInfoVo ? detailsCourseCourseInfoVo.courseScore : ''}}学分
          </span>
          <span>
            {{detailsCourseCourseInfoVo ? detailsCourseCourseInfoVo.courseTime : ''}}课时
          </span>
        </p>
      </section>
      <ul>
        <li
          v-for="(item, key) in detailsCourseCourseTeacherVoList"
          :key="key"
        >
          <img
            :src='item.teacherImage'
            alt=""
          />
          <section class="survet-teacher-bottom">
            <p>{{item.teacherName}} · {{item.schoolName}}</p>
            <p>{{item.teacherTitle}}</p>
          </section>
        </li>
      </ul>
    </section>
    <section class="survey-course-introduction">
      <p>
        <span></span>
        课程简介
      </p>
      <section class="survey-course-content">
        {{ detailsCourseCourseInfoVo ? detailsCourseCourseInfoVo.content : '' }}
      </section>
    </section>
    <section class="survey-course-introduction">
      <p>
        <span></span>
        课程详情
      </p>
      <section 
        class="survey-course-content details-marked"
        v-html="courseDetails"
      >
      </section>
    </section>
    <DetailsEcharts />
  </section>
</template>

<script>
import { mapState } from "vuex";
import marked from 'marked';
import DetailsEcharts from './children/echarts';

export default {
  components: {
    DetailsEcharts,
  },
  computed: {
    ...mapState("course", {
      detailsCourseCourseInfoVo: state => state.detailsCourseCourseInfoVo,
      detailsCourseCourseTeacherVoList: state =>
        state.detailsCourseCourseTeacherVoList
    }),
    courseDetails() {
      if (this.detailsCourseCourseInfoVo && this.detailsCourseCourseInfoVo.courseDetailsTwo) {
        return marked(this.detailsCourseCourseInfoVo.courseDetailsTwo)
      }
    }
  }
};
</script>

<style lang="less" scoped>
.survey {
  .survey-teacher {
    background: #fff;
    margin-left: 15px;
    overflow: hidden;
    margin-bottom: 20px;
    h2 {
      font-size: 16px;
      font-family: PingFang SC;
      color: rgba(51, 51, 51, 1);
      line-height: 30px;
    }
    .survet-teacher-form {
      margin: 15px 0;
      font-size: 12px;
      font-family: PingFang SC;
      font-weight: 500;
      color: rgba(128, 128, 128, 1);
    }
    .survet-teacher-top {
      display: flex;
      justify-content: space-between;
      .survet-teacher-subject {
        font-size: 12px;
        font-family: PingFang SC;
        font-weight: 500;
        color: rgba(128, 128, 128, 1);
      }
      .survet-teacher-credit {
        margin-right: 15px;
        span {
          font-size: 12px;
          font-family: PingFang SC;
          font-weight: 500;
          color: rgba(128, 128, 128, 1);
          margin-left: 15px;
        }
      }
    }
    ul {
      margin-top: 20px;
      li {
        display: flex;
        margin-bottom: 20px;
        img {
          width: 40px;
          height: 40px;
          margin-right: 10px;
          border-radius: 50%;
        }
        .survet-teacher-bottom {
          width: 290px;
          border-bottom: 1px #e6e6e6 solid;
          p {
            width: 100%;
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
          }
          p:nth-child(1) {
            font-size: 16px;
            font-family: PingFang SC;
            font-weight: 500;
            color: rgba(51, 51, 51, 1);
          }
          p:nth-child(2) {
            font-size: 12px;
            font-family: PingFang SC;
            font-weight: 500;
            color: rgba(128, 128, 128, 1);
            line-height: 21px;
            margin: 6px 0;
          }
        }
      }
    }
  }
  .survey-course-introduction {
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
    .survey-course-content {
      font-size: 14px;
      font-family: PingFang SC;
      font-weight: 500;
      color: rgba(128, 128, 128, 1);
      line-height: 21px;
      width: 100%;
      word-break: break-all;
      margin-top: 10px;
      text-align: justify;
      text-justify: distribute-all-lines;
      text-align-last: left;
      -moz-text-align-last: left;
      -webkit-text-align-last: left;
    }
  }
}
</style>