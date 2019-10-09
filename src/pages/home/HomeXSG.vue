<template>
          <!-- 限时购 -->
        <Container1  :isShowMore="true">
            <div class="xianshigou-header" slot="title">
                    <div class="desc">
                         <div>限时购</div>
                        <div class="time">
                            <span class="time-item">{{nextStartTime.hours}}</span>&nbsp;:&nbsp;
                            <span class="time-item">{{nextStartTime.minutes}}</span>&nbsp;:&nbsp;
                            <span class="time-item">{{nextStartTime.seconds}}</span>
                        </div>    
                    </div>
            </div>
            <div class="xianshigou" >
                <ul class="list">
                    <li class="item" v-for="(item, index) in itemList" :key="index">
                        <div class="img">
                                <img :src="item.picUrl">
                        </div>
                        <div class="price">
                            <div class="now">{{item.activityPrice}}￥</div>
                            <div class="old">{{item.originPrice}}￥</div>
                        </div>
                    </li>
                  
                </ul>
            </div>
        </Container1> <!--end 限时购-->

</template>

<script>
// flashSaleModule
import Container1 from './HomeContainer1'
import {mapState} from 'vuex'
import dayjs from 'dayjs'
 
export default {
    mounted() {
        setInterval(()=>{
            this.now = new Date().valueOf()
        },1000)
    },
    components:{
        Container1
    },
    data() {
        return {
            now:new Date().valueOf(),
            itemList:[]
        }
    },
    computed: {
        ...mapState({
            flashSaleModule:state=>state.home.homeData.flashSaleModule
        }),
        nextStartTime(){
            const nextStartTime = this.flashSaleModule &&this.flashSaleModule.nextStartTime
            const diff = dayjs(nextStartTime).diff(this.now)
            const seconds =Math.floor( (diff/1000) )%60
            const minutes = Math.floor((diff/1000/60)) %60
            const hours  = Math.floor((diff/1000/60/60))
            return {
                seconds,
                minutes,
                hours
            }
        },
    },
    watch:{
        flashSaleModule(value){
            this.itemList = value.itemList
        }
    }
}
</script>

<style lang="less" scoped>
// 限时购
.xianshigou-header{
    .desc{
        display: flex;
        .time{
            margin-left: 12px;
            display: flex;
            .time-item{
                border-radius: 3px;
                text-align: center;
                height: 18px;
                width: 18px;
                background-color: #333333;
                color: #fff;
                font-size: 12px;
            }

        }
    }
}
.xianshigou{
    .list{   
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        .item{
            height: 130px;
            margin-bottom: 21px;
            width: 108px;
            .img{
                height: 108px;
                background-color: #f5f5f5;
                font-size: 0;
                img{
                    height: 100%;
                    width: 100%;
                }
            }
            .price{
                margin-top: 12px;
                margin-left: 10px;
                display: flex;
                align-items: center;
                .now{
                    font-size: 14px;
                    margin-right: 7px;
                    color: #b4282d;
                }
                .old{
                    font-size: 12px;
                    color: #7f7f7f;
                    text-decoration: line-through;
                }
            }
        }
    }


}

</style>