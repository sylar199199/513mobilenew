<template>
  <div class="essay">
    <section class="header">
      <img  @click="$router.push('/home')" src="@/assets/icon/nav_icon_home_black.png" alt="首页" class="home-class">
      <div class="header-context">
        <van-dropdown-menu >
          <van-dropdown-item @change="changeType" v-model="essayType" :options="essayTypeList" />
        </van-dropdown-menu>
      </div>
    </section>
    <div class="article-context">
      <ul class="details-course-ranking">
        <li
                v-for="(item, index) in list"
                :key="item"
                @click="current = index
                        changePlate(index)"
                :class="{ active: index === current }"
        >
          {{ item }}
        </li>
      </ul>
    </div>
    <div class="essay-detail">
      <information
              :total-items="AllArticleListTotal"
              :plate="plate"
              :typeId="essayType"
      />
    </div>
    <van-pagination
            v-model="currentPage"
            :total-items="AllArticleListTotal"
            :items-per-page="5"
            @change="handleChangePage"
            class="news-business-pagination"
    />
  </div>
</template>

<script>
import { DropdownMenu, DropdownItem, Pagination } from 'vant';
import Information from "./children/information";
import { mapState, mapActions } from "vuex";

export default {
    data(){
        return{
            list: ['资讯', '干货'],
            essayType: null,
            essayTypeList: [],
            current: 0,
            page: 1,
            size: 10,
            plate: '1',
            currentPage: 1
        }
    },
    computed: {
        ...mapState('essay', {
            AllArticleListTotal: state => state.AllArticleListTotal
        })
    },
    components: {
        [DropdownMenu.name]: DropdownMenu,
        [DropdownItem.name]: DropdownItem,
        [Pagination.name]: Pagination,
        Information,
    },
    methods:{
        ...mapActions('essay', ['ArticleType', 'getAllArticleList']),
        changeType(val){
            let params = {
                typeId: val,
                page: this.page,
                size: this.size,
                plate: this.plate,
            };
            this.getAllArticleList(params)
        },
        changePlate(index){
            this.plate = index ===0 ? '1' : '2'
            let params = {
                typeId: this.essayType,
                page: this.page,
                size: this.size,
                plate: this.plate,
            };
            this.getAllArticleList(params)
        },
        handleChangePage(val){
            let params = {
                typeId: this.essayType,
                page: val,
                size: this.size,
                plate: this.plate,
            };
            this.getAllArticleList(params)
        },
    },
    async created(){
         const res = await this.ArticleType()
         this.essayTypeList = res.map((item, index)=>{
           return {
               text: item.title,
               value: item.id,
           }
         })
        this.essayType = this.$route.query.typeId ? this.$route.query.typeId : this.essayTypeList[0].value
        let params = {
            typeId: this.$route.query.typeId ? this.$route.query.typeId : this.essayType,
            page: this.page,
            size: this.size,
            plate: this.$route.query.plate ? this.$route.query.plate : '1',
        };
        await this.getAllArticleList(params);
    },
};
</script>

<style lang="less" scoped>
.essay{
  .header{
    display: flex;
    align-items: center;
    width: 100%;
    height: 44px;
    background: #fff;
    overflow: hidden;
    box-shadow:0px 1px 11px 0px rgba(0, 0, 0, 0.15);
    .home-class{
      width: 26px;
      height: 26px;
      line-height: 68px;
      margin-left: 8.5px;
    }
    .header-context{
      margin-left: 30%
    }
  }
  .article-context{
    padding: 12px;
    .details-course-ranking {
      background: #fff;
      display: flex;
      justify-content: flex-start;
      margin-bottom: 20px;
      li {
        padding: 0 10px;
        height: 40px;
        line-height: 40px;
        font-size: 17px;
        font-family: PingFang SC;
        font-weight: bold;
        color: rgba(102,102,102,1);
        margin: 0 18px;
      }
      .active {
        color: #58c6bd;
        border-bottom: 2px #58c6bd solid;
      }
    }
  }
  .news-business-pagination {
    margin-bottom: 20px;
  }
  .essay-detail{
    padding: 0px 13px;
      min-height: calc(100vh - 190px);
  }
  /deep/.van-dropdown-menu__title--active, /deep/.van-ellipsis, /deep/.van-dropdown-menu__title::after{
    font-size:17px;
    font-family:PingFang SC;
    font-weight:500;
    color:rgba(51,51,51,1);
    line-height:21px;
  }
  /deep/.van-dropdown-item__option {
    font-size:14px;
    font-family:PingFang SC;
    font-weight:500;
    color: #666666;
    line-height:20px;
  }
  /deep/.van-dropdown-item__option--active{
    font-size:14px;
    font-family:PingFang SC;
    font-weight:500;
    color: #58C6BD;
    line-height:20px;
  }
  /deep/.van-icon-success:before {
   color: #58C6BD;
  }
}
</style>
