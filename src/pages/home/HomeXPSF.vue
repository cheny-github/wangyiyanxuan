<template>
          <!-- 新品首发 -->
        <Container1 :title="'新品首发'" :isShowMore="true">
            <div class="xinpingshoufa-wrapper">
                <ul class="list">
                    <li class="item">
                            <div class="img">
                                    <img src="https://yanxuan-item.nosdn.127.net/e277aa8352b720eab2f6afae5dcabcc1.png?imageView&amp;quality=65&amp;thumbnail=330x330"/>
                            </div>
                            <div class="desc">  
                                <span class="title">衣物除螨除菌液1L/3L</span>
                                <span class="price">￥699</span>
                            </div>
                            <span class="hint">新品尝鲜价</span>
                    </li>
                    <li class="item">
                            <div class="img">
                                    <img src="https://yanxuan-item.nosdn.127.net/e277aa8352b720eab2f6afae5dcabcc1.png?imageView&amp;quality=65&amp;thumbnail=330x330"/>
                            </div>
                            <div class="desc">  
                                <span class="title">衣物除螨除菌液1L/3L</span>
                                <span class="price">￥699</span>
                            </div>
                    </li>
                    <li class="item">
                            <div class="img">
                                    <img src="https://yanxuan-item.nosdn.127.net/e277aa8352b720eab2f6afae5dcabcc1.png?imageView&amp;quality=65&amp;thumbnail=330x330"/>
                            </div>
                            <div class="desc">  
                                <span class="title">衣物除螨除菌液1L/3L</span>
                                <span class="price">￥699</span>
                            </div>
                    </li>
                    <li class="item">
                            <div class="img">
                                    <img src="https://yanxuan-item.nosdn.127.net/e277aa8352b720eab2f6afae5dcabcc1.png?imageView&amp;quality=65&amp;thumbnail=330x330"/>
                            </div>
                            <div class="desc">  
                                <span class="title">衣物除螨除菌液1L/3L</span>
                                <span class="price">￥699</span>
                            </div>
                    </li>
                    <li class="item">
                            <div class="img">
                                    <img src="https://yanxuan-item.nosdn.127.net/e277aa8352b720eab2f6afae5dcabcc1.png?imageView&amp;quality=65&amp;thumbnail=330x330"/>
                            </div>
                            <div class="desc">  
                                <span class="title">衣物除螨除菌液1L/3L</span>
                                <span class="price">￥699</span>
                            </div>
                    </li>
                    <li class="item">
                            <div class="img">
                                    <img src="https://yanxuan-item.nosdn.127.net/e277aa8352b720eab2f6afae5dcabcc1.png?imageView&amp;quality=65&amp;thumbnail=330x330"/>
                            </div>
                            <div class="desc">  
                                <span class="title">衣物除螨除菌液1L/3L</span>
                                <span class="price">￥699</span>
                            </div>
                    </li>
                </ul>
            </div>
        </Container1> <!--end 新品首发-->

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
// 新品首发
.xinpingshoufa-wrapper{
    .list{
        display: flex;
        flex-flow: wrap;
        justify-content: space-between;
        .item{
            height: 169px;
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
              .hint()
            }
        }
    }
}
</style>