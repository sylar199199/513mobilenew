<template>
  <section>
    <default-img v-if="allNewsList.length === 0" />
    <section v-else>
      <ul class="news-business-main">
        <li
          v-for="item in allNewsList"
          :key="item.sign"
        >
          <router-link
            :to="{
              name: 'homeNewsAdvisoryDetail',
              params: { id: item.sign },
            }"
            class="news-bussiness-main"
          >
            <section class="news-bussiness-left">
              <p class="news-bussiness-left-content">
                {{item.title}}
              </p>
              <section class="news-bussiness-icon">
                <p>
                  <img
                    src="@/assets/icon/list_icon_me_select.png"
                    alt=""
                  />
                  {{item.createTime}}
                </p>
                <p>
                  <img
                    src="@/assets/icon/list_icon_time_select.png"
                    alt=""
                  />
                  {{item.browseCount}}
                </p>
              </section>
            </section>
            <img
              class="news-bussiness-right"
              :src='item.pictureImage'
              alt=""
            />
          </router-link>
        </li>
      </ul>
      <van-pagination
        v-model="currentPage"
        :total-items="allNewsTotal"
        :items-per-page="5"
        @change="handleChangePage"
        class="news-business-pagination"
      />
    </section>
  </section>
</template>

<script>
import { mapState, mapActions } from "vuex";
import DefaultImg from "@/components/default-img/index";
import { Pagination } from "vant";

export default {
  data() {
    return {
      page: 1,
      size: 10,
      currentPage: 1
    };
  },
  components: {
    [Pagination.name]: Pagination,
    "default-img": DefaultImg
  },
  computed: {
    ...mapState("home", {
      allNewsList: state => state.allNewsList,
      allNewsTotal: state => state.allNewsTotal
    })
  },
  methods: {
    ...mapActions("home", ["getAllNewsList"]),
    handleChangePage(page) {
      this.page = page;
      let params = {
        category: 1,
        page: this.page,
        size: this.size
      };
      this.getAllNewsList(params);
    }
  },
  async created() {
    let params = {
      category: 1,
      page: this.page,
      size: this.size
    };
    await this.getAllNewsList(params);
  }
};
</script>

<style lang="less" scoped>
.news-business-main {
  padding-bottom: 40px;
  min-height: 184px;
  li {
    margin-top: 20px;
    width: 345px;
    height: 108px;
    overflow: hidden;
    margin-left: 15px;
    border: 1px solid rgba(204, 204, 204, 1);
    border-radius: 6px;
    .news-bussiness-main {
      display: block;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: space-between;
      .news-bussiness-left {
        .news-bussiness-left-content {
          width: 179px;
          height: 75px;
          font-size: 16px;
          margin-top: 8px;
          font-family: PingFang SC;
          font-weight: 500;
          color: rgba(51, 51, 51, 1);
          line-height: 24px;
          margin-left: 10px;
          overflow: hidden;
        }
        .news-bussiness-icon {
          display: flex;
          p {
            font-size: 12px;
            font-family: PingFang SC;
            font-weight: 500;
            color: rgba(128, 128, 128, 1);
            margin-right: 8px;
            img {
              width: 16px;
              height: 16px;
              position: relative;
              top: 3px;
              margin-right: 4px;
            }
          }
        }
      }
      .news-bussiness-right {
        width: 144px;
        height: 108px;
      }
    }
  }
}
.news-business-pagination {
  margin-bottom: 20px;
}
</style>
