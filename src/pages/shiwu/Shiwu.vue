<template>
    <div class="faxian-wrapper">
        <header class="header">
            <div class="top">
                <div class="left">
                    <i class="iconfont iconshouye"></i>
                </div>
                <div class="center">
                    <span class="text-faxian">发现</span>
                    <span class="hint">甄选家</span>
                </div>
                <div class="right">
                    <i class="iconfont iconsousuo"></i>
                    <i class="iconfont icongouwuche"></i>
                </div>
            </div>
            <div class="nav">
                <ul>
                    <li>推荐</li>
                    <li>好货内部价</li>
                    <li>晒单</li>
                    <li>选购指南</li>
                    <li>回购榜</li>
                </ul>
            </div>
        </header>
        <div class="content">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>

export default {

}
</script>

<style lang="less" scoped>
    @import '../../assets/mixins.less';
    .top{
        height: 49px;
        padding: 0 12px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid #ccc;
        .iconshouye{
            font-size: 20px;
        }
        .center{
            .text-faxian{
                font-size: 20px;
                font-weight: bold;
                color: #b4282d;
                margin-right: 15px;
            }
            .hint{
                font-size: 13px;
                color: #7f7f7f;
            }
        }
        .right{
            display: flex;
            align-items: center;
            .iconsousuo{
                font-size: 24px;
                margin-right: 20px;
            }
            .icongouwuche{
                font-size: 20px;
            }
        }
    }
    .nav{
        margin-right: 10px;
        height: 35px;
        font-size: 14px;
    }
</style>
