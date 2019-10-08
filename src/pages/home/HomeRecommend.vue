<template>
          <!-- 人气推荐 -->
        <Container1 :title="'人气推荐'" :isShowMore="true">
            <div class="recommend-wrapper">
                <div class="top">
                    <div class="img">
                            <img  src="https://yanxuan-item.nosdn.127.net/8ee282bed26f6248b3453b4b202a55db.png?imageView&amp;quality=65&amp;thumbnail=280x280" >
                    </div>
                    <div class="desc-wrapper">
                        <div class="desc">
                            <!-- 优惠券 -->
                            <div class="youhuiquan">
                                每满300减30券
                            </div>
                            <div class="title">
                                AB面独立弹簧床垫 进口乳胶原液
                            </div>
                            <div class="hint">
                                仅售供应商建议价的1/3
                            </div>
                            <div class="price">
                                ￥2599
                            </div>
                        </div>
                    </div>

                </div>
                <div class="content">
                    <ul class="list">
                        <li class="item">
                            <div class="img">
                                <img src="https://yanxuan-item.nosdn.127.net/1547946fa7c422e88dcc6950ffa7586a.png?imageView&amp;quality=65&amp;thumbnail=330x330">
                            </div>
                            <div class="desc">
                                网易智造蒸汽沐足盆（可单买...
                                <span class="price">499￥</span>
                            </div>
                        </li>
                        <li class="item">
                            <div class="img">
                                <img src="https://yanxuan-item.nosdn.127.net/1547946fa7c422e88dcc6950ffa7586a.png?imageView&amp;quality=65&amp;thumbnail=330x330">
                            </div>
                            <div class="desc">
                                网易智造蒸汽沐足盆（可单买...
                                <span class="price">499￥</span>
                            </div>
                        </li>
                        <li class="item">
                            <div class="img">
                                <img src="https://yanxuan-item.nosdn.127.net/1547946fa7c422e88dcc6950ffa7586a.png?imageView&amp;quality=65&amp;thumbnail=330x330">
                            </div>
                            <div class="desc">
                                网易智造蒸汽沐足盆（可单买...
                                <span class="price">499￥</span>
                            </div>
                        </li>
                    </ul>
                </div>
               <span class="youhuiquan">满400减60券</span> 
            </div>
        </Container1> <!--end 人气推荐-->
</template>

<script>
import Container1 from './HomeContainer1'
export default {
    components:{
        Container1
    }
}
</script>

<style lang="less" scoped>
@import '../../assets/mixins.less';
// 人气推荐
.recommend-wrapper{
    .top{
        height: 140px;
        display: flex;
        border-radius: 4px;
        background-image: repeating-linear-gradient(-45deg,
        #fef0df 0px,#fef0df 3px ,#fefefe 3px ,#fefefe 4px
        );
        .img{
            width: 140px;
            height: 140px;
            img{
                width: 100%;
                height: 100%;
            }
        }
        .desc-wrapper{
            flex-grow: 1;
            background-color: #fef0df;
            position: relative;
            .desc{
                margin-left: 15px;
                margin-top: 30px;
                .youhuiquan{
                    .youhuiquan(81px);
                }
                .title{
                    margin-top: 12px;
                    font-size: 12px;
                }
                .hint{
                    margin-top: 6px;
                    font-size: 12px;
                    color: #7f7f7f;
                }
                .price{
                    margin-top: 9px;
                    color: #b4282d;
                    font-size: 12px;
                }
            }
            
        }

    }

    .content{
        margin-top: 10px;
        .list{
            display: flex;
            flex-flow: wrap;
            justify-content: space-between;
            .item{
                border-radius: 4px;
                width: 108px;
                .img{
                    height: 109px;
                    width: 100%;
                    background-color: #f5f5f5;
                    margin-bottom: 10px;
                    img{
                        width: 100%;
                        height: 100%;
                    }

                }
                .desc{
                    font-size: 12px;
                    color: #333;
                    .price{
                        color: #b4282d;
                    }
                }
            
            }
        }
    }
    .youhuiquan{
        .youhuiquan(71px);
        margin-top: 5px;
    }
}

</style>