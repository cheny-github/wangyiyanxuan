<template>
          <!-- 品牌制造商直供 -->
        <Container1  :isShowMore="true">
            <span slot="title">品牌制造商直供</span>
            <div class="supply-wrapper">
                <ul class="content">
                    <li class="item">
                        <div class="desc">
                            <span class="provider">海外制造商</span>
                            <div class="price">
                                9.9元起
                            </div>
                        </div>
                        <img src="http://yanxuan.nosdn.127.net/74e2ea8f81004d0a60f90fc8e4649058.png?imageView&thumbnail=343y260&enlarge=1" alt="">
                    </li>
                    <li class="item">
                        <div class="desc">
                            <span class="provider">海外制造商</span>
                            <div class="price">
                                9.9元起
                            </div>
                        </div>
                        <img src="http://yanxuan.nosdn.127.net/74e2ea8f81004d0a60f90fc8e4649058.png?imageView&thumbnail=343y260&enlarge=1" alt="">
                    </li>
                    <li class="item">
                        <div class="desc">
                            <span class="provider">海外制造商</span>
                            <div class="price">
                                9.9元起
                            </div>
                        </div>
                        <img src="http://yanxuan.nosdn.127.net/74e2ea8f81004d0a60f90fc8e4649058.png?imageView&thumbnail=343y260&enlarge=1" alt="">
                    </li>
                    <li class="item">
                        <div class="desc">
                            <span class="provider">海外制造商</span>
                            <div class="price">
                                9.9元起
                            </div>
                        </div>
                        <img src="http://yanxuan.nosdn.127.net/74e2ea8f81004d0a60f90fc8e4649058.png?imageView&thumbnail=343y260&enlarge=1" alt="">
                    </li>
                </ul>
            </div>
        </Container1> <!--end 品牌制造商直供-->
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
// 品牌制造商直供
.supply-wrapper{
    .content{
        display: flex;
        flex-flow: wrap;
        .item{
            width: 170px;
            height: 130px;
            background-color: #f90;
            border-radius: 4px;
            position: relative;
            &:nth-of-type(1){
                margin-right: 2px;
                margin-bottom: 2px;
            }
            &:nth-of-type(4){
                margin-top: 2px;
                margin-left: 2px;
            }
            .desc{
                position: absolute;
                top: 12px;
                left: 50%;
                transform: translateX(-50%);
                text-align: center;
                .provider{
                    font-size: 14px;
                    color: #333;
                }
                .price{
                    margin-top: 7px;
                    font-size: 12px;
                    color: #888888;
                }
            }
            img{
                width: 100%;
                height: 100%;
                // position: absolute;
                // bottom: 2px;
                // right: 0;
                // left: 0;
                // margin: 0 auto;
            }
        }
    }
}

</style>