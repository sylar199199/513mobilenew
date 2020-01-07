<template>
    <section class="streaming-list">
        <section class="header">
            <img  @click="$router.push('/home')" src="@/assets/icon/nav_icon_home_black.png" alt="首页" class="home-class">
            <section class="header-context">
                全部直播
            </section>
            <img  src="@/assets/icon/nav_icon_share@2x.png" alt="分享" class="header-image share-class">
        </section>
        <section v-if="streamList.length !== 0" class="streaming-list-main" v-for="(item, index) in streamList" :key="index">
            <section class="streaming-list-item" @click="$router.push({path: '/streaming',query: {id: item.id}})">
                <section class="item-image">
                    <img :src="item.livePhoto" alt="livePhoto">
                </section>
                <section class="item-right">
                    <p class="p-title">{{item.userName}}</p>
                    <p class="p-name">{{item.liveName}}</p>
                    <p class="p-time">{{item.startTime}}</p>
                </section>
            </section>
        </section>
        <default-img v-if="streamList.length === 0" />
    </section>
</template>

<script>
import DefaultImg from "@/components/default-img/index";
import { mapActions } from "vuex";
    export default {
        name: "streaming-list",
        data(){
            return{
                streamList: [],
            }
        },
        components: {
            "default-img": DefaultImg
        },
        methods: {
            ...mapActions('form', ['getLiveList'])
        },
        async created(){
          this.streamList =  await this.getLiveList()
        },
    }
</script>

<style scoped lang="less">
.streaming-list{
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
            width: 26px;
            height: 26px;
            line-height: 68px;
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
    .streaming-list-main{
        margin-top: 20px;
        padding: 0 12px;
        .streaming-list-item{
            margin-bottom: 20px;
            display: flex;
            .item-image {
                img{
                    height: 90px;
                    width: 160px;
                    border-radius: 6px;
                }
            }
            .item-right{
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                margin-left: 14px;
                .p-title{
                    font-size:14px;
                    font-family:PingFang SC;
                    font-weight:bold;
                    color:rgba(51,51,51,1);
                    line-height:18px;
                }
                .p-name{
                    font-size:12px;
                    font-family:PingFang SC;
                    font-weight:500;
                    color:rgba(102,102,102,1);
                    line-height:18px;
                }
                .p-time{
                    font-size:12px;
                    font-family:PingFang SC;
                    font-weight:500;
                    color:rgba(153,153,153,1);
                    line-height:18px;
                }
            }
        }
    }
}
</style>
