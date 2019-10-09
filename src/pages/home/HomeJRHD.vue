// 节日活动
<template>
    <div>
        <div class="container2 xinhuodaowei" v-for="(data, dindex) in dataList" :key="dindex">
            <div class="container2-img">
                <img :src="data.titlePicUrl">
            </div>
            <div class="scroll-wrapper" ref="list">
                <ul class="list">
                    <li class="item"  v-for="(item, index) in data.itemList" :key="index">
                        <div class="img">
                            <img :src="item.listPicUrl">
                        </div>
                        <div class="desc">
                            <div class="text">
                                {{item.simpleDesc}}
                            </div>
                            <div class="price">
                                ￥{{item.retailPrice}}
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>

</template>

<script>
import { mapState } from 'vuex'
import BScroll from '@better-scroll/core'
export default {
    data() {
        return {
            dataList:[]
        }
    },
    computed: {
        ...mapState({
            categoryModule:state=>state.home.homeData.categoryModule
        })
    },
    watch:{
        categoryModule(value){
            this.dataList= value
            this.$nextTick(()=>{
                const liNodes =this.$refs.list
                liNodes.forEach(li=>{
                    new BScroll(li,{
                        scrollX: true,
                        click:true,
                    })
                })
            })
        }
    }
}
</script>

<style lang="less" scoped>
@import '../../assets/mixins.less';
.scroll-wrapper{
    display: flex;
}
.container2{
    margin-bottom: 21px;
    .color{   //4款颜色....
        line-height: 1.3em;
        text-align: center;
        position: absolute;
        top: 5px;
        left: 5px;
        border: 1px;
        color: #b4a087;
        padding: 5px 2px;
        width: 10px;
        font-size: 10px;
        border: 1px solid #b4a087;
        border-radius: 3px;
    }
    .hint{
        .hint();
        display: inline-block;
    }
    .container2-img{
        img{
            width: 100vw;
        }
    }
    .list{
        display: flex;
        margin-top: 10px;
        margin-right: 5px;
        .item{
            width: 100px;
            margin: 0 10px;
            position: relative;
            .img{
                width: 100px;
                height: 100px;
                background-color: #f4f4f4;
                margin-bottom: 3px;
                img{
                    width: 100%;
                    height: 100%;
                }
              
            }
            .desc{
                font-size: 12px;
                line-height: 18px;
                .t1{
                    margin-right: .3em;
                }
                .price{
                    color: #b4282d;
                }
            }
        
        }

    }
    .seprator();
    &::after{
        top: 20px;
    }
}
</style>