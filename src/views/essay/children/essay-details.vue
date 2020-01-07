<template>
    <section class="essay-details">
        <section class="header">
            <img  @click="$router.push({path: 'essay',query: {typeId: $route.query.typeId, plate: $route.query.plate, }})" src="@/assets/icon/nav_icon_return@2x.png" alt="返回" class="header-image home-class">
            <section class="header-context">
                详情
            </section>
                <img  src="@/assets/icon/nav_icon_share@2x.png" alt="分享" class="header-image share-class">
        </section>
        <section class="details-context">
            <h1>
                {{ articleData&&articleData.title }}
            </h1>
            <section class="details-title">
                <section class="details-title-left">
                    <img src="https://image.513online.top/images/20190906/logo.png@!none_rule" alt="logo" class="logo-style">
                    <section class="name-style">
                        <p>{{ articleData&&articleData.schoolName }}</p>
                        <p class="p-2">作者：{{articleData&&articleData.userName }}</p>
                    </section>
                </section>
                <section class="details-title-right">
                    <img src="@/assets/icon/list_icon_time_select.png" alt="time" class="logo-icon">
                    <p class="p-1">{{ articleData&&articleData.createTime }}</p>
                    <img src="@/assets/icon/lecturer.png" alt="number" class="logo-icon">
                    <p>{{ articleData&&articleData.browseCount }} </p>
                </section>
            </section>
        </section>
        <section class="gray-context">
           {{ articleData&&articleData.instructions}}
        </section>
        <section
                class="survey-course-content details-marked"
                v-html="articleDetails"
        >
        </section>
        <section class="explain-style">本文经原作者授权转载，转载需经原作者授权同意。</section>
        <section class="empty-style"></section>
        <p class="recommend-style">相关推荐</p>
        <section class="essay-detail">
            <recommend></recommend>
        </section>
        <van-pagination
                v-model="currentPage"
                :total-items="allRecommendedArticleTotal"
                :items-per-page="5"
                @change="handleChangePage"
                class="news-business-pagination"
        />
        <section class="support-style">
            <section class="support-commend">
                <img src="@/assets/icon/like_default.png" alt="like_default"  v-if="praise" class="icon-style"  @click="handlePraise">
                <img src="@/assets/icon/like_selected.png" alt="" class="icon-style" v-else>
                <p>{{ articleData&&articleData.likeRecordCount }}</p>
            </section>
            <section class="support-commend">
                <img src="@/assets/icon/collect_default.png" alt="like_default" class="icon-style" v-if="collect" @click="handleCollect">
                <img src="@/assets/icon/collect_selected.png" alt="" class="icon-style" v-else @click="handleNoCollect">
                <p>{{ articleData&&articleData.collectionCount }}</p>
            </section>

        </section>
    </section>
</template>

<script>
import { mapState, mapActions } from "vuex";
import { Pagination } from 'vant';
import Recommend from './recommend'
import marked from 'marked';
import cookieUtils from '@/utils/cookie/index';
export default {
    name: "essay-details",
    data(){
      return {
          currentPage: 1,
          page: 1,
          size: 10,
          praise: true,
          collect: true,
      }
    },
    components:{
        Recommend,
        [Pagination.name]: Pagination,
    },
    computed: {
        ...mapState('essay', {
            articleData: state => state.articleData,
            allRecommendedArticleTotal: state => state.allRecommendedArticleTotal
        }),
        articleDetails() {
            if (this.articleData && this.articleData.details) {
                return marked(this.articleData.details)
            }
        }
    },
    methods: {
        ...mapActions('essay', ['getByArticleId', 'getAllRecommendedArticleList', 'addLikeRecord']),
        handleChangePage(val){
            let params = {
                typeId: this.essayType,
                page: val,
                size: this.size,
                plate: this.plate,
            };
            this.getAllArticleList(params)
        },
        // 点赞
        async handlePraise(){
            if (cookieUtils.getCookie('yetLogin')){
                const res = await this.addLikeRecord({sign: this.$route.query.sign})
                if(res){
                    let params = {
                        sign: this.$route.query.sign
                    }
                    await this.getByArticleId(params)
                }
                return
            }
            this.praise = false
        },
        // 收藏
        async handleCollect(){
            if (cookieUtils.getCookie('yetLogin')){
                const res = await this.addUserCollection({sign: this.$route.query.sign})
                if(res){
                    let params = {
                        sign: this.$route.query.sign
                    }
                    await this.getByArticleId(params)
                }
                return
            }
            this.collect = false
        },
        async handleNoCollect(){
            if (cookieUtils.getCookie('yetLogin')){
                const res = await this.updateUserCollection({sign: this.$route.query.sign})
                if(res){
                    let params = {
                        sign: this.$route.query.sign
                    }
                    await this.getByArticleId(params)
                }
                return
            }
            this.collect = true
        }
    },
    async mounted(){
        let params = {
            sign: this.$route.query.sign
        }
        await this.getByArticleId(params)
        let cuParams = {
            typeId: this.$route.query.typeId,
            page: this.page,
            size: this.size,
            plate: this.$route.query.plate,
        };
        await this.getAllRecommendedArticleList(cuParams);
        this.praise = this.articleData.likeRecordId === 0 ? true : false
        this.collect = this.articleData.collectionId === 0 ? true : false
    }
}
</script>

<style scoped lang="less">
.essay-details{
    .header{
        display: flex;
        position: sticky;
        top: 0;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: 44px;
        overflow: hidden;
        background: white;
        box-shadow:0px 1px 11px 0px rgba(0, 0, 0, 0.15);
        .header-image{
            width: 26px;
            height: 26px;
            line-height: 68px;
        }
        .home-class{
            margin-left: 8.5px;
        }
        .share-class{
            margin-right: 8.5px;
        }
        .header-context{
            text-align: center;
            font-size:17px;
            font-family:PingFang SC;
            font-weight:500;
            color:rgba(51,51,51,1);
            line-height:21px;
        }
    }
    .details-context{
        padding: 12px;
        h1{
            font-size:20px;
            font-family:PingFang SC;
            font-weight:500;
            color:rgba(26,26,26,1);
            line-height:24px;
        }
        .details-title{
            color: #999999;
            display: flex;
            align-items:center;
            margin-top: 20px;
            .details-title-left{
                align-items:center;
                flex: 1;
                display: flex;
                .logo-style{
                    width: 30px;
                    height: 30px;
                }
                .name-style{
                    p{
                        font-family:PingFang SC;
                        font-weight:500;
                        color:rgba(153,153,153,1);
                        line-height:18px;
                    }
                    .p-2{
                        font-size:10px;
                    }
                }
            }
            .details-title-right{
                align-items:center;
                justify-content: flex-end;
                display: flex;
                flex: 1;
                .p-1{
                    margin-right: 10px;
                }
                .logo-icon{
                    width: 16px;
                    height: 16px;
                }
            }
        }
    }
    .gray-context{
        background: rgba(245,245,245,1);
        margin:25px 14px 0 14px;
        padding: 20px;
        font-size:14px;
        font-family:PingFang SC;
        font-weight:500;
        color:rgba(102,102,102,1);
    }
    .survey-course-content {
        padding: 20px 20px;
    }
    .recommend-style{
        margin: 22px 0 22px 12px;
        font-size:17px;
        font-family:PingFang SC;
        font-weight:bold;
        color:rgba(51,51,51,1);
        line-height:18px;

    }
    .explain-style{
        margin: 18px 0 41px 0;
        text-align: center;
        font-size:12px;
        font-family:PingFang SC;
        font-weight:500;
        color:rgba(235,69,45,1);
        line-height:21px;
    }
    .empty-style{
        width: 100%;
        height: 10px;
        background: rgba(245,245,245,1);
    }
    .essay-detail{
        padding: 0px 13px;
    }
    .news-business-pagination{
        margin-bottom: 50px;
    }
    .support-style{
        position: fixed;
        background: white;
        bottom: 0;
        width: 100%;
        height: 50px;
        display: flex;
        justify-items: center;
        justify-content: space-around;
        .support-commend{
            display: flex;
            align-items: center;
            p{
                font-size:14px;
                font-family:PingFang SC;
                font-weight:500;
                color:rgba(153,153,153,1);
                line-height:21px;
            }
        }
        .icon-style{
            height: 22px;
            width: 22px;
        }
    }
}
</style>
