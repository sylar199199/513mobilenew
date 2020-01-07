<template>
  <section class="catalogue">
    <ul v-if="courseCatalog.length !== 0">
      <li
        v-for="item in courseCatalog"
        :key="item.chapterId"
      >
        第{{item.chapterLevel}}章 {{item.name}}
        <section
          v-for="(_i, index) in item.child"
          :key="_i.chapterVideoId"
        >
          <p>
            <span>
              {{item.chapterLevel}}-{{index+1}} {{_i.title}}
            </span>
            <span>{{_i.duration}}</span>
          </p>
        </section>
      </li>
    </ul>
    <default-img v-else />
  </section>
</template>

<script>
import { mapState, mapActions } from "vuex";
import DefaultImg from "@/components/default-img/index";

export default {
  components: {
    "default-img": DefaultImg
  },
  computed: {
    ...mapState("course", {
      courseCatalog: state => state.courseCatalog
    })
  },
  methods: {
    ...mapActions("course", ["getCourseCatalog"])
  },
  created() {
    this.getCourseCatalog(this.$route.params.id);
  }
};
</script>

<style lang="less" scoped>
.catalogue {
  overflow: hidden;
  background: #fff;
  ul {
    min-height: 180px;
    li {
      width: 100%;
      padding: 0 12px;
      font-size: 16px;
      font-family: PingFang SC;
      font-weight: bold;
      color: rgba(51, 51, 51, 1);
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      margin-bottom: 30px;
      p {
        display: flex;
        justify-content: space-between;
        margin-top: 25px;
        span {
          font-size: 14px;
          font-family: PingFang SC;
          font-weight: 500;
          color: rgba(102, 102, 102, 1);
        }
        span:nth-child(1) {
          display: block;
          width: 250px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          margin-left: 20px;
        }
      }
    }
  }
}
</style>
