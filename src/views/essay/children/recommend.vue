<template>
    <div>
        <div class="information" v-for="(item, index, key) in allRecommendedArticleList" :key="key"
             @click="getDetails(item.id)">
            <div class="information-main">
                <p>{{ item.title }}</p>
                <div class="name-time">
                    <div class="information-name">
                        <img :src="item.logo" class="logo-style">
                        {{item.schoolName}}
                    </div>
                    <div class="information-time">
                        {{item.createTime}}
                    </div>
                </div>
            </div>
            <img :src="item.pictureUrl" class="information-imgage">
        </div>
    </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
    export default {
        name: "recommend",
        computed:{
            ...mapState('essay', {
                allRecommendedArticleList: state => {
                    return state.allRecommendedArticleList}
            })
        },
        methods: {
            ...mapActions('essay', ['getByArticleId']),
            async getDetails(id){
                await this.getByArticleId({sign: id})
            }
        }
    }
</script>

<style scoped lang="less">
    .information{
        width: 100%;
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid rgba(230,230,230,1);
        padding-bottom: 16px;
        margin-bottom: 16px;
        .information-main{
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            margin-right: 18px;
            p{
                width:194px;
                height:44px;
                text-align: justify;
                font-size:14px;
                font-family:PingFang SC;
                font-weight:500;
                color:rgba(26,26,26,1);
                line-height:20px;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2;
                overflow: hidden;
            }
            .name-time{
                display: flex;
                justify-content: space-between;
                .information-name{
                    .logo-style{
                        width: 12px;
                        height: 12px;
                    }
                }
                .information-time{
                    .logo-style{
                        width: 12px;
                        height: 12px;
                    }
                }
                .information-time, .information-name{
                    font-size:12px;
                    font-family:PingFang SC;
                    font-weight:500;
                    color:rgba(153,153,153,1);
                    line-height:18px;
                }
            }
        }
        .information-imgage{
            width: 140px;
            height: 79px;
        }
    }
</style>
