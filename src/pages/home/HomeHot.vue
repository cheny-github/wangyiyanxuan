<template>
          <!-- 目类热销榜 -->
        <Container1 :title="'目类热销榜'">
            <div class="hot-wrapper">
                <!-- 好评榜，热销榜 -->
                <div class="top">
                    <div class="item rexiao">
                            <div class="desc">
                                <span class="text">热销榜</span>
                                <span class="under-line"></span>
                            </div>
                            <img  src="https://yanxuan-item.nosdn.127.net/5e2f6eff4922907b455a61b11f3552b6.png?imageView&amp;quality=65&amp;thumbnail=200x200" >
                    </div>
                    <div class="item haoping">
                        <div class="desc">
                                <span class="text">好评榜</span>
                                <span class="under-line"></span>
                        </div>
                        <img  src="https://yanxuan-item.nosdn.127.net/5e2f6eff4922907b455a61b11f3552b6.png?imageView&amp;quality=65&amp;thumbnail=200x200" >
                    </div>
                </div> <!--end 好评，热销榜-->

                <ul class="list">
                    <li class="item">
                        <span>居家生活榜</span>
                        <img src="https://yanxuan-item.nosdn.127.net/c0b3d87a8066b33c68294ce60f8e1920.png?imageView&amp;quality=65&amp;thumbnail=200x200">
                    </li>
                    <li class="item">
                        <span>居家生活榜</span>
                        <img src="https://yanxuan-item.nosdn.127.net/c0b3d87a8066b33c68294ce60f8e1920.png?imageView&amp;quality=65&amp;thumbnail=200x200">
                    </li>
                    <li class="item">
                        <span>居家生活榜</span>
                        <img src="https://yanxuan-item.nosdn.127.net/c0b3d87a8066b33c68294ce60f8e1920.png?imageView&amp;quality=65&amp;thumbnail=200x200">
                    </li>
                    <li class="item">
                        <span>居家生活榜</span>
                        <img src="https://yanxuan-item.nosdn.127.net/c0b3d87a8066b33c68294ce60f8e1920.png?imageView&amp;quality=65&amp;thumbnail=200x200">
                    </li>
                    <li class="item">
                        <span>居家生活榜</span>
                        <img src="https://yanxuan-item.nosdn.127.net/c0b3d87a8066b33c68294ce60f8e1920.png?imageView&amp;quality=65&amp;thumbnail=200x200">
                    </li>
                    <li class="item">
                        <span>居家生活榜</span>
                        <img src="https://yanxuan-item.nosdn.127.net/c0b3d87a8066b33c68294ce60f8e1920.png?imageView&amp;quality=65&amp;thumbnail=200x200">
                    </li>
                    <li class="item">
                        <span>居家生活榜</span>
                        <img src="https://yanxuan-item.nosdn.127.net/c0b3d87a8066b33c68294ce60f8e1920.png?imageView&amp;quality=65&amp;thumbnail=200x200">
                    </li>
                    <li class="item">
                        <span>居家生活榜</span>
                        <img src="https://yanxuan-item.nosdn.127.net/c0b3d87a8066b33c68294ce60f8e1920.png?imageView&amp;quality=65&amp;thumbnail=200x200">
                    </li>
                


                </ul>
            </div>
        </Container1> <!--end 目类热销榜-->

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
// 目类热销榜
.hot-wrapper{
    .top{
        display: flex;
        .item{
            height: 100px;
            width: 170px;
            border-radius: 3px;
            position: relative;
            img{
                position: absolute;
                right: 25px;
                top: 16px;
                width: 50px;
                height: 70px;
            }
            .desc{
                display: flex;
                flex-direction: column;
                position: absolute;
                top: 50%;
                transform: translateY(-50%);
                left: 12px;
                .text{
                    font-size: 14px;
                    color: #333;
                    margin-bottom: 9px;
                }
                .under-line{
                    width: 24px;
                    height: 2px;
                    background-color: #333333;
                }
            }
            &.rexiao{
                background-color: #f9f3e4;
                margin-right: 5px;
            }
            &.haoping{
                background-color: #ebeff6;
            }
        }
    }
    .list{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        .item{
            height: 89px;
            width: 83px;
            // margin-right: 5px;
            margin-top: 5px;
            display: flex;
            flex-flow: column; //ffw
            background-color: #f5f5f5;
            align-items: center;
            color: #333;
            font-size: 12px;
            img{
                margin-top: 9px;
                height: 52px;
            }
            span{
                margin-top: 9px;
            }
            &:nth-of-type(4n){
                margin-right: 0;
            }

        }
    }
}
</style>