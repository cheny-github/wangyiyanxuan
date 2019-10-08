// 节日活动
<template>
    <div class="container2 xinhuodaowei">
        <div class="container2-img">
            <img src="https://yanxuan.nosdn.127.net/1a9dbabea1338bef2bc17d333009c7ff.jpg?imageView&thumbnail=750x0&quality=75">
        </div>
        <ul class="list">
            <li class="item">
                <div class="img">
                    <img src="https://yanxuan-item.nosdn.127.net/58e7ef289596f73c597459fd69f26b5f.png?imageView&amp;quality=65&amp;thumbnail=330x330">
                    <span class="color">
                            4色可选
                    </span>
                </div>
                <div class="desc">
                    <div class="text">
                        <span class="t1">秋冬上新</span><span class="t2">男式基础合体直筒休闲裤</span>
                    </div>
                    <div class="price">
                        ￥99.9
                    </div>
                </div>
            </li>
            <li class="item">
                <div class="img">
                    <img src="https://yanxuan-item.nosdn.127.net/58e7ef289596f73c597459fd69f26b5f.png?imageView&amp;quality=65&amp;thumbnail=330x330">
                    <span class="color">
                            4色可选
                    </span>
                </div>
                <div class="desc">
                    <div class="text">
                        <span class="t1">秋冬上新</span><span class="t2">男式基础合体直筒休闲裤</span>
                    </div>
                    <div class="price">
                        ￥99.9
                    </div>
                </div>
            </li>
            <li class="item">
                <div class="img">
                    <img src="https://yanxuan-item.nosdn.127.net/58e7ef289596f73c597459fd69f26b5f.png?imageView&amp;quality=65&amp;thumbnail=330x330">
                    <span class="color">
                            4色可选
                    </span>
                </div>
                <div class="desc">
                    <div class="text">
                        <span class="t1">秋冬上新</span><span class="t2">男式基础合体直筒休闲裤</span>
                    </div>
                    <div class="price">
                        ￥99.9
                    </div>
                </div>
            </li>
            <li class="item">
                <div class="img">
                    <img src="https://yanxuan-item.nosdn.127.net/58e7ef289596f73c597459fd69f26b5f.png?imageView&amp;quality=65&amp;thumbnail=330x330">
                    <span class="color">
                            4色可选
                    </span>
                </div>
                <div class="desc">
                    <div class="text">
                        <span class="t1">秋冬上新</span><span class="t2">男式基础合体直筒休闲裤</span>
                    </div>
                    <div class="price">
                        ￥99.9
                    </div>
                </div>
            </li>
            <li class="item">
                <div class="img">
                    <img src="https://yanxuan-item.nosdn.127.net/58e7ef289596f73c597459fd69f26b5f.png?imageView&amp;quality=65&amp;thumbnail=330x330">
                    <span class="color">
                            4色可选
                    </span>
                </div>
                <div class="desc">
                    <div class="text">
                        <span class="t1">秋冬上新</span><span class="t2">男式基础合体直筒休闲裤</span>
                    </div>
                    <div class="price">
                        ￥99.9
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
@import '../../assets/mixins.less';
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