<template>
  <!-- 轮播图 -->
        <div class="swiper-container">
                <div class="swiper-wrapper">
                    <div class="swiper-slide"> <img src="https://yanxuan.nosdn.127.net/647c2450daf2874ae5611a504e36fbef.jpg?imageView&quality=75&thumbnail=750x0" alt=""></div>
                    <div class="swiper-slide"> <img src="https://yanxuan.nosdn.127.net/647c2450daf2874ae5611a504e36fbef.jpg?imageView&quality=75&thumbnail=750x0" alt=""></div>
                    <div class="swiper-slide"> <img src="https://yanxuan.nosdn.127.net/647c2450daf2874ae5611a504e36fbef.jpg?imageView&quality=75&thumbnail=750x0" alt=""></div>
              
     
                </div>
                <!-- 如果需要分页器 设置样式需要使用>>>选择器 -->
                <div class="swiper-pagination"></div>
        </div> <!--end 轮播图-->
</template>

<script>
import Swiper from "swiper";
import "swiper/css/swiper.css";
export default {
  mounted() {
    new Swiper(".swiper-container", {
      autoplay: true, //可选选项，自动滑动
      pagination: {
        el: ".swiper-pagination"
      }
    });
  },
}
</script>

<style lang="less" scoped>
// 轮播图
.swiper-container{
    height: 185px;
    img{
        height: 185px;
    }
    .swiper-pagination-bullet {
        border-radius: 0px;
        width: 20px;
        height: 2px;
        margin-right: 5px;
        &.swiper-pagination-bullet-active{
            background-color: #fff;
        }
    }
}
</style>