<template>
          <!-- 新品首发 -->
        <Container1 :title="'新品首发'" :isShowMore="true">
            <div class="xinpingshoufa-wrapper">
                <ul class="list">
                    <li class="item" v-for="(item, index) in itemList" :key="index">
                            <div class="img">
                                    <img :src="item.listPicUrl"/>
                            </div>
                            <div class="desc">  
                                <span class="title">{{item.simpleDesc}}</span>
                                <span class="price">￥{{item.retailPrice}}</span>
                                <span class="hint" v-for="(tag, i) in item.itemTagList" :key="i">{{tag.name}}</span>
                            </div>
                    </li>
                </ul>
            </div>
        </Container1> <!--end 新品首发-->

</template>

<script>
import Container1 from './HomeContainer1'
import { mapState } from 'vuex'
export default {
    data() {
        return {
            itemList:[]
        }
    },
    components:{
        Container1
    },
    computed: {
        ...mapState({
          newItemList:state=>state.home.homeData.newItemList  
        })
    },
    watch:{
        newItemList(value){
            this.itemList=value.filter((item,index)=>index<6)
        }
    }
}
</script>

<style lang="less" scoped>
@import '../../assets/mixins.less';
// 新品首发
.xinpingshoufa-wrapper{
    .list{
        display: flex;
        flex-flow: wrap;
        justify-content: space-between;
        .item{
            width: 108px;
            margin-bottom: 9px;
            .img{
                width: 108px;
                height: 108px;
                background-color: #f5f5f5;
                margin-bottom: 10px;
                img{
                    height: 100%;
                    width: 100%;
                }
            }
            .desc{
                font-size: 12px;
                line-height: 16px;
                .price{
                    color: #b4282d;
                }
            }
            .hint{
              .hint();
              margin-left: 2px;
            }
        }
    }
}
</style>