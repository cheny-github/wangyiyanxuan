<template>
    <div class="wrapper">
        <header class="header">
            <span></span>
            <span class="hint">购物车</span>
            <div class="lingquan">领券</div>
        </header>
        <div class="content">
            <ul class="service">
                <li class="serviceItem">
                    30天无忧退货
                </li>
                <li class="serviceItem">
                    40小时无忧退款
                </li>
                <li class="serviceItem">
                    满88元免邮费
                </li>
            </ul>
            <!-- 购物车 -->
            <div class="gouwuche">
                <img  class="" src="https://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/noCart-a8fe3f12e5.png" alt="ShopCar">
                <p class="hint">去添加点什么吧</p>
            </div>
            <button class="btn-login">登录</button>
        </div>

    </div>
</template>

<script>
export default {

}
</script>
<style lang="less" scoped>
    .wrapper{
        padding-bottom: 51px;
        .header{
            height: 44px;
            display: flex;
            padding: 0 30px;
            justify-content: space-between;
            align-items: center;
            .hint{
                font-size: 18px;
                font-weight: bold;
            }
            .lingquan{
                font-size: 15px;
                color: #b4282d;
            }
           
        }
        .content{
            background-color: #f4f4f4;
            border-top: 1px solid transparent;
            height: 510px;
            position: relative;
            .service{
                display: flex;
                justify-content: space-between;
                margin-top: 18px;
                padding: 0 25px;
                font-size: 12px;
                color: #6e6e6e;
            }
            .gouwuche{
                height: 90px;
                width: 113px;
                position: absolute;
                left: 125px;
                bottom: 240px;
                .hint{
                    text-align: center;
                    margin-top: 21px;
                    font-size: 12px;
                    color: #aaa;
                }
                img{
                    width: 100%;
                    height: 100%;
                }
            }
            .btn-login{
                height: 46px;
                border: 1px solid #ccc;
                width: 240px;
                background-color: #b4282d;
                font-size: 16px;
                color: #fff;
                text-align: center;
                line-height: 46px;
                position: absolute;
                left: 69px;
                bottom: 78px;
            }
        }
    }
</style>