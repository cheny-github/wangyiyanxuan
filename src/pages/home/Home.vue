<template>
    <div class="home">
        <Header></Header>
        <Swiper></Swiper>
        <!-- 商品分类 -->
        <Category></Category>

        <!-- 新人专享礼 -->
        <XRZXL></XRZXL>
        <!-- 品牌制造商直供 -->
        <Supply></Supply>

        <!-- 目类热销榜 -->
        <Hot></Hot>

        <!-- 人气推荐 -->
        <Recommend></Recommend>


        <!-- 限时购 -->
        <XSG></XSG>

        <!-- 新品首发 -->
        <XPSF></XPSF>

        <!-- 超值专区 -->
        <CZZQ></CZZQ>

        <!-- 节日活动 -->
        <JRHD></JRHD>


        <div class="end">
            <div class="download">
                <div class="btn-download app">下载APP</div>
                <div class="btn-download pc">电脑版</div>
            </div>
            <div class="copyright">
                    网易公司版权所有 © 1997- 2019
            </div>
            <div class="license">
                    食品经营许可证：JY13301080111719
            </div>
        </div>


        <div class="to-top">
            <span class="iconfont iconjiantoushang"></span>
        </div>
    </div><!--end home-->
</template>

<script>

import Header from './HomeHeader';
import Swiper from './HomeSwiper';
import Category from './HomeCategory';
import XRZXL from './HomeXRZXL';
import Supply from './HomeSupply';
import Hot from './HomeHot';
import Recommend from './HomeRecommend';
import XSG from './HomeXSG';
import XPSF from './HomeXPSF';
import CZZQ from './HomeCZZQ';
import JRHD from './HomeJRHD';
import {reqHomeData} from '../../api/index.js'
export default {
  components:{
    Header,
    Swiper,
    Category,
    XRZXL,
    Supply,
    Hot,
    Recommend,
    XSG,
    XPSF,
    CZZQ,
    JRHD
  },
  mounted(){

  }

};
</script>

<style lang="less" scoped>
@import '../../assets/mixins.less';


.home{
    padding-top: 76px;
    padding-bottom: 50px;
    width: 100vw;
    overflow-x: hidden;
}

.end{
    height: 123px;
    background-color: #414141;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .download{
        display: flex;
        .btn-download{
            font-size: 12px;
            padding: 10px 20px;
            background-color: #414141;
            color: white;
            border: 1px solid #fff;
            border-radius: 3px;
            &.app{
                margin-right: 25px;
            }        
        }
    }
 
    .copyright{
        margin-top: 20px;
        font-size: 12px;
        color: #888;
    }
    .license{
        margin-top: 20px;
        font-size: 12px;
        color: #888;
        margin-top: 5px;
    }
}



.to-top{
    position: fixed;
    height: 40px;
    width: 40px;
    border-radius: 50%;
    text-align: center;
    line-height: 40px;
    right: 20px;
    bottom: 60px;
    z-index: 3;
    background-color: #fff;
    border: 1px solid #ccc;
    color: #888;
    .iconfont{
        font-size: 20px;
    }
}

</style>
