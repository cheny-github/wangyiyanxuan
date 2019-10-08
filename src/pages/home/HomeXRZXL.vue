<template>
    <Container1>
        <div class="present-wrapper">
            <p class="hint">新人专享礼</p>
            <div class="image-group">
                <div class="left">
                        <span class="hint">新人专享礼</span>
                        <img data-original="//yanxuan.nosdn.127.net/ba4d635ec94ad95b28bfab6500900659.png" data-src="//yanxuan.nosdn.127.net/ba4d635ec94ad95b28bfab6500900659.png" class="swiper-lazy" data-reactid=".0.4.2.1.0.1.0.0" src="//yanxuan.nosdn.127.net/ba4d635ec94ad95b28bfab6500900659.png" style="display: inline;">
                </div>
                <div class="right">
                    <!-- 福利社 -->
                    <div class="fulishe card">
                        <div class="desc">
                            <span class="strong">福利社</span>
                            <span class="text">
                                今日特价
                            </span>
                        </div>
                            <img data-original="https://yanxuan-item.nosdn.127.net/40d9b6d35b842e8c8877ecafedddc034.png?imageView&amp;thumbnail=200x200&amp;quality=75" data-src="https://yanxuan-item.nosdn.127.net/40d9b6d35b842e8c8877ecafedddc034.png?imageView&amp;thumbnail=200x200&amp;quality=75" class="swiper-lazy" data-reactid=".0.4.2.1.1.0.0.0.0.0" src="https://yanxuan-item.nosdn.127.net/40d9b6d35b842e8c8877ecafedddc034.png?imageView&amp;thumbnail=200x200&amp;quality=75" style="display: inline;">
                            <div class="price">
                                <div class="now">
                                    ￥45
                                </div>
                                <div class="old">
                                    ￥9.9
                                </div>
                            </div>
                    </div>
                    <!-- 拼团 -->
                    <div class="pingtuan card">
                            <div class="desc">
                                    <span class="strong">福利社</span>
                                    <span class="text">
                                        今日特价
                                    </span>
                            </div>
                            <img data-original="https://yanxuan-item.nosdn.127.net/1b8e4a484e128c28a050cd2bc0c64396.png?imageView&amp;thumbnail=200x200&amp;quality=75" data-src="https://yanxuan-item.nosdn.127.net/1b8e4a484e128c28a050cd2bc0c64396.png?imageView&amp;thumbnail=200x200&amp;quality=75" class="swiper-lazy" data-reactid=".0.4.2.1.1.1.0.0.0.0" src="https://yanxuan-item.nosdn.127.net/1b8e4a484e128c28a050cd2bc0c64396.png?imageView&amp;thumbnail=200x200&amp;quality=75" style="display: inline;">
                            <div class="price">
                                    <div class="old">
                                        ￥9.9
                                    </div>
                                    <div class="now">
                                        ￥45
                                    </div>
                            </div>
                    </div>

                </div>
            </div>
        </div>
    </Container1>
       
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
.container1{
    padding-top: 0 !important;
}
// 新人专享礼
.present-wrapper{
    .hint{
        text-align: center;
        font-size: 16px;
        margin-bottom: 14px;
    }
    .image-group{
        height: 217px;
        display: flex;
        margin-bottom: 1px;
        .left{
            position: relative;
            height: 100%;
            width: 172px;
            margin-right: 2px;
            border-radius: 3px;
            background-color: #f9e9cf;
            flex-shrink: 0;
            img{
                width: 122px;
                position: absolute;
                top: 58px;
                left: 0;
                right: 0;
                margin:0 auto;
            }
            .hint{
                position: absolute;
                top: 20px;
                left: 15px;
                font-size: 16px;
            }
        }
        .right{
            width: 172px;
            .card{
                width: 100%;
                height: 107px;
                background-color: #fbe2d3;
                border-radius: 3px;
                margin-bottom: 2px;
                position: relative;
                .desc{
                    position: absolute;
                    top: 15px;
                    left: 15px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    .strong{
                        font-size: 16px;
                        margin-bottom: 7px;
                    }
                    .text{
                        font-size: 12px;
                        color: #aaaaaa;
                    }
                }
                .price{
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                    background-color: #f6a447;
                    color: #fff;
                    display: flex;
                    flex-flow: column;
                    justify-content: center;
                    align-items: center;
                    position: absolute;
                    top: 8px;
                    right: 15px;
                    .old{
                        text-decoration: line-through;
                        font-size: 8px;
                    }
                    .now{

                        font-size: 10px;
                    }
                }
                &.pingtuan{
                    background-color: #ffecc2;
                    .text{
                        color: #fff;
                        padding: 3px 5px ;
                        background-color: rgba(0, 0, 0,.3);
                        border-radius: 3px;
                    }
                }
            }

            img{
                width: 75px;
                height: 75px;
                position: absolute;
                right: 10px;
                bottom: 15px;
            }
        }
    }
}

</style>