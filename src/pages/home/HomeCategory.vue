// 商品分类
<template>
          <!-- 商品分类 -->
        <div class="category-wrapper">
            <!-- 顶部装饰 -->
            <div class="top">
                    <ul class="g-grow" data-reactid=".0.2.0"><li class="item" data-reactid=".0.2.0.$0"><a data-reactid=".0.2.0.$0.0"><i class="u-icon u-icon-servicePolicy-index" style="background-image:url(http://yanxuan.nosdn.127.net/a03dd909803b9ac032eba58b7253a2f6.png);" data-reactid=".0.2.0.$0.0.0"></i><span class="text" data-reactid=".0.2.0.$0.0.1">网易自营品牌</span></a></li><li class="item" data-reactid=".0.2.0.$1"><a data-reactid=".0.2.0.$1.0"><i class="u-icon u-icon-servicePolicy-index" style="background-image:url(http://yanxuan.nosdn.127.net/2d0402ffcd52b3ec3b07422681c42a89.png);" data-reactid=".0.2.0.$1.0.0"></i><span class="text" data-reactid=".0.2.0.$1.0.1">30天无忧退货</span></a></li><li class="item" data-reactid=".0.2.0.$2"><a data-reactid=".0.2.0.$2.0"><i class="u-icon u-icon-servicePolicy-index" style="background-image:url(http://yanxuan.nosdn.127.net/eb61ee48e8942dbd1784c9ee75ebe955.png);" data-reactid=".0.2.0.$2.0.0"></i><span class="text" data-reactid=".0.2.0.$2.0.1">48小时快速退款</span></a></li></ul>
            </div>
            <!-- 分类 -->
            <ul class="category-list">
                <li class="category-item" 
                v-for="(category, index) in categoryList" :key="index">
                        <img class="img" :src="category.picUrl" >
                    <span :style="{color:'#'+category.textColor}">
                        {{category.text}}
                    </span>
                </li>
            </ul>
        </div> <!--end 商品分类-->

</template>

<script>
import {mapState} from 'vuex';
export default {
    computed:{
        ...mapState({
            kingKongModule:state=>state.home.homeData.kingKongModule
        })
    },
    data() {
        return {
            categoryList:[]
        }
    },
    watch:{
        kingKongModule(value){
            this.categoryList = value.kingKongList
        }
    }
}
</script>

<style lang="less" scoped>
@import '../../assets/mixins.less';

// 商品分类
.category-wrapper{
    // 头部样式
    .top{
        box-sizing: border-box;
        height: 45px;
        width: 100vw;
        padding-left: 16px;
        padding-top: 13px;
        .g-grow{
            width: 100%;
            height: 100%;
            display: flex;
            font-size: 12px;
            // 列表
            .item{
                a{
                    display: flex;
                    align-items: center;
                }
                // 图标
                .u-icon{
                    display: inline-block;
                    width: 13px;
                    height: 13px;
                    background-size: cover;
                    margin-right: 5px;
                    margin-left: 23px;
                }
                &:first-of-type{
                    .u-icon{
                        margin-left: 0;
                    }
                }
            }
        }
    }
    // 分类列表
    .category-list{
        height: 177px;
        width: 100vw;
        box-sizing: border-box;
        // 总是留出下面的剩余空间
        padding: 0 12px;
        
        display: flex;
        flex-flow: wrap;
        .category-item{
            margin-right: 25px;
            display: flex;
            flex-direction: column;
            align-items: center;
            font-size: 12px;
            .img{
                height: 50px;
                width: 50px;
                margin-bottom: 10px;
            }
            // n从1开始 不要写成了nth-of-last-type
            &:nth-of-type(5n){
                margin-right: 0px;
            }
        }
    }

    .seprator()

}
</style>