<template>
  <div class="category">
      <div class="header-wrapper">
        <header class="header">
          <Search :width="'100%'"></Search>
        </header>
      </div>
      <div class="content">
        <!-- 左边 -->
        <div class="category-list-wrapper" ref="listWrapper">
          <ul class="category-list">
            <li class="category-item" v-for="(categoryItem, index) in categoryL1List" :key="index"  :class="{active:index===currentIndex}"
            @click="changeCategory(index,categoryItem)"
            >
              {{categoryItem.name}}
            </li>
          </ul>
        </div>
        <!-- 右边 -->
        <div class="detail-wrapper" ref="detailWrapper">
          <div class="detail">
            <!-- 轮播图 -->
            <div class="swiper-container">
                <div class="swiper-wrapper">
                    <div class="swiper-slide"> <img src="https://yanxuan.nosdn.127.net/21eaf80574f1ce30fee388e777ccb15d.jpg?imageView&amp;quality=75&amp;thumbnail=0x196"></div>
                    <div class="swiper-slide"> <img src="https://yanxuan.nosdn.127.net/21eaf80574f1ce30fee388e777ccb15d.jpg?imageView&amp;quality=75&amp;thumbnail=0x196"></div>
                    <div class="swiper-slide"> <img src="https://yanxuan.nosdn.127.net/21eaf80574f1ce30fee388e777ccb15d.jpg?imageView&amp;quality=75&amp;thumbnail=0x196"></div>
                </div>
                <div class="swiper-pagination"></div>
            </div>
            <!-- 列表类容 -->
            <ul class="detail-list">
              <li class="detail-item" v-for="(item, index) in categoryL2List" :key="index">
                <img :src="item.bannerUrl" class="cateImg" data-reactid=".0.1.1.0.0.1:$categroup0.1.$subCate_1.0.0.0">
                <p>{{item.name}}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import Search from 'components/search/Search' 
import Swiper from 'swiper'
import BScroll from "@better-scroll/core";
import { mapState } from 'vuex';
export default {
  name:"Category",
  components:{
    Search
  },
  methods:{
    changeCategory(index,categoryItem){
      this.currentIndex=index
      this.categoryL2List = categoryItem.subCateList
    }
  },
  data() {
    return {
      categoryList:[],
      categoryL1List:[],
      categoryL2List:[],
      currentIndex:0
    }
  },
  mounted(){
    new Swiper(".swiper-container", {
      autoplay: true, //可选选项，自动滑动
      pagination: {
        el: ".swiper-pagination"
      }
    });
    this.$store.dispatch('fetchCategoryList')
  },
  computed:{
    ...mapState({
      fetchData:state=>state.category.categoryList
    })
  },
  watch:{
    fetchData(value){
      this.categoryList=value
      this.categoryL1List =value.categoryL1List
      this.categoryL2List =value.categoryL2List
    },
    categoryL2List(){
      this.$nextTick(()=>{
            new BScroll(this.$refs.detailWrapper, {
              click: true,
            });
      })
    },
    categoryL1List(){
      this.$nextTick(()=>{
          new BScroll(this.$refs.listWrapper, {
            click: true,
          });
      })
    }
  }
}
</script>
<style lang="less" scoped>
@import '../../assets/mixins.less';
.category{
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}
.content{
  margin-top: 15px;
  display: flex;
  height: 509px;
  overflow: hidden;
  .category-list-wrapper{
    margin-right: 28px;
    height: 100%;
    flex: none;
    display: flex;
    flex-direction: column;
    .category-list{
      display: flex;
      flex-direction: column;
      .category-item{
        margin-bottom: 25px;
        height: 26px;
        flex: none;
        font-size: 14px;
        padding-left: 13px;
        line-height: 26px;
        border-left: 4px solid transparent;
        &.active{
          color: #ab2b2b;
          border-left: 4px solid #ab2b2b;
        }
      }
    }
  }
  .swiper-container{
    height: 97px;
    width: 264px;
    img{
      height: 100%;
      width: 100%;
    }
    /deep/.swiper-pagination-bullet {
        border-radius: 0px;
        width: 20px;
        height: 2px;
        margin-right: 5px;
        &.swiper-pagination-bullet-active{
            background-color: #fff;
        }
    }
  }
  .detail-list{
    margin-top: 18px;
    display: flex;
    flex-wrap: wrap;
    .detail-item{
      width: 72px;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      margin-right: 17px;
      margin-bottom: 20px;
    }
    .cateImg{
      width: 50px;
      height: 50px;
      border-radius: 50%;
    }
  }

}


.header-wrapper{
  position: relative;
  .header{
    height: 28px;
    padding: 8px 15px;
  }
  .border-1px-bottom();
}
</style>