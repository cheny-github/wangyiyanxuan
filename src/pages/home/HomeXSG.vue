<template>
          <!-- 限时购 -->
        <Container1  :isShowMore="true">
            <div class="xianshigou-header" slot="title">
                    <div class="desc">
                         <div>限时购</div>
                        <div class="time">
                            <span class="time-item">01</span>&nbsp;:&nbsp;
                            <span class="time-item">54</span>&nbsp;:&nbsp;
                            <span class="time-item">08</span>
                        </div>    
                    </div>
            </div>
            <div class="xianshigou" >
                <ul class="list">
                    <li class="item">
                        <div class="img">
                                <img src="https://yanxuan-item.nosdn.127.net/ac05fbe6a867f154f6c326d288fa0400.png?imageView&amp;thumbnail=216x216&amp;quality=75">
                        </div>
                        <div class="price">
                            <div class="now">159￥</div>
                            <div class="old">209￥</div>
                        </div>
                    </li>
                    <li class="item">
                        <div class="img">
                                <img src="https://yanxuan-item.nosdn.127.net/ac05fbe6a867f154f6c326d288fa0400.png?imageView&amp;thumbnail=216x216&amp;quality=75">
                        </div>
                        <div class="price">
                            <span class="now">159￥</span>
                            <span class="old">209￥</span>
                        </div>
                    </li>
                    <li class="item">
                        <div class="img">
                                <img src="https://yanxuan-item.nosdn.127.net/ac05fbe6a867f154f6c326d288fa0400.png?imageView&amp;thumbnail=216x216&amp;quality=75">
                        </div>
                        <div class="price">
                            <div class="now">159￥</div>
                            <div class="old">209￥</div>
                        </div>
                    </li>
                    <li class="item">
                        <div class="img">
                                <img src="https://yanxuan-item.nosdn.127.net/ac05fbe6a867f154f6c326d288fa0400.png?imageView&amp;thumbnail=216x216&amp;quality=75">
                        </div>
                        <div class="price">
                            <div class="now">159￥</div>
                            <div class="old">209￥</div>
                        </div>
                    </li>
                    <li class="item">
                        <div class="img">
                                <img src="https://yanxuan-item.nosdn.127.net/ac05fbe6a867f154f6c326d288fa0400.png?imageView&amp;thumbnail=216x216&amp;quality=75">
                        </div>
                        <div class="price">
                            <div class="now">159￥</div>
                            <div class="old">209￥</div>
                        </div>
                    </li>
                    <li class="item">
                        <div class="img">
                                <img src="https://yanxuan-item.nosdn.127.net/ac05fbe6a867f154f6c326d288fa0400.png?imageView&amp;thumbnail=216x216&amp;quality=75">
                        </div>
                        <div class="price">
                            <div class="now">159￥</div>
                            <div class="old">209￥</div>
                        </div>
                    </li>
                </ul>
            </div>
        </Container1> <!--end 限时购-->

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