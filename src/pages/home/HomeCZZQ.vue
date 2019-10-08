<template>
          <!-- 超值专区 -->
        <div class="chaozhizhuanqu-wrapper">
            <ul class="list">
                <li class="item">
                    <div class="desc">
                            <div class="title">9.9超值专区</div>
                            <div class="hint">190款商品定价直降</div>
                    </div>
                    <div class="imgs">
                            <img src="https://yanxuan-item.nosdn.127.net/b2065eab67acc5923a8ec71167a35f6a.png?imageView&amp;thumbnail=150x150&amp;quality=75">
                            <img src="https://yanxuan-item.nosdn.127.net/569ab2c87df93c56de39b8c890463242.png?imageView&amp;thumbnail=150x150&amp;quality=75">
                    </div>
                </li>
                <li class="item">
                    <div class="desc">
                            <div class="title">9.9超值专区</div>
                            <div class="hint">190款商品定价直降</div>
                    </div>
                    <div class="imgs">
                            <img src="https://yanxuan-item.nosdn.127.net/b2065eab67acc5923a8ec71167a35f6a.png?imageView&amp;thumbnail=150x150&amp;quality=75">
                            <img src="https://yanxuan-item.nosdn.127.net/569ab2c87df93c56de39b8c890463242.png?imageView&amp;thumbnail=150x150&amp;quality=75">
                    </div>
                </li>
                <li class="item">
                    <div class="desc">
                            <div class="title">9.9超值专区</div>
                            <div class="hint">190款商品定价直降</div>
                    </div>
                    <div class="imgs">
                            <img src="https://yanxuan-item.nosdn.127.net/b2065eab67acc5923a8ec71167a35f6a.png?imageView&amp;thumbnail=150x150&amp;quality=75">
                            <img src="https://yanxuan-item.nosdn.127.net/569ab2c87df93c56de39b8c890463242.png?imageView&amp;thumbnail=150x150&amp;quality=75">
                    </div>
                </li>
                <li class="item">
                    <div class="desc">
                            <div class="title">9.9超值专区</div>
                            <div class="hint">190款商品定价直降</div>
                    </div>
                    <div class="imgs">
                            <img src="https://yanxuan-item.nosdn.127.net/b2065eab67acc5923a8ec71167a35f6a.png?imageView&amp;thumbnail=150x150&amp;quality=75">
                            <img src="https://yanxuan-item.nosdn.127.net/569ab2c87df93c56de39b8c890463242.png?imageView&amp;thumbnail=150x150&amp;quality=75">
                    </div>
                </li>
            </ul>
        </div> <!--end 超值专区-->

</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
@import '../../assets/mixins.less';
// 超值专区
.chaozhizhuanqu-wrapper{
    padding: 15px;
    padding-top: 7px;
    .list{
        display:flex;
        flex-wrap: wrap;
        justify-content: space-between;
        .item{
            width:171.5px;
            height: 132px;
            margin-bottom: 2px;
            background-color: #f5f5f5;
            border-radius: 3px;
            position: relative;
            .desc{
                position: absolute;
                top: 16px;
                left: 16px;
                .title{
                    font-size: 16px;
                    color: #333333;
                }
                .hint{
                    font-size: 12px;
                    color: #aaaaaa;
                }
            }
            .imgs{
                margin-top: 60px;
                display: flex;
                img{
                    width: 49%;
                }
            }
        }
    }
    .seprator();
    &::after{
        left: -16px;
    }
}

</style>