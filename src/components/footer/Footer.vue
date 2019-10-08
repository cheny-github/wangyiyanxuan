<template>
  <div>
        <footer class="footer">
            <div class="nav-item">
                <i class="iconfont iconshouye"></i>
                <span class="text">首页</span>
            </div>
            <div class="nav-item">
                <i class="iconfont iconiconset0497"></i>
                <span class="text">分类</span>
            </div>
            <div class="nav-item">
                <i class="iconfont icontupian"></i>
                <span class="text">识物</span>
            </div>
            <div class="nav-item">
                <i class="iconfont icongouwuche"></i>
                <span class="text">购物车</span>
            </div>
            <div class="nav-item">
                <i class="iconfont icongerenzhongxin"></i>
                <span class="text">个人</span>
            </div>
        </footer>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
//footer
.footer{
    position: fixed;
    width: 100%;
    bottom: 0;
    height: 50px;
    background-color: #fff;
    display: flex;
    padding: 0 25px;
    box-sizing: border-box;
    justify-content: space-between;
    align-items: center;
    font-size: 12px;
    z-index: 3;
    .nav-item{
        display: flex;
        flex-direction: column;
        align-items: center;
        .text{
            margin-top: 5px;
        }   
    }
}
</style>