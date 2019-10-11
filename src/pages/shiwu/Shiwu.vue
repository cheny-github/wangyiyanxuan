<template>
  <!-- 识物 -->
  <div class="faxian-wrapper">
    <header class="header">
      <div class="top">
        <div class="left">
          <i class="iconfont iconshouye"></i>
        </div>
        <div class="center">
          <span class="text text-faxian"
          :class="{active:HeadActiveIndex ===0}"
           @click="navTo('/shiwu/recommend',0)">发现</span>
          <span class="text hint" 
          @click="navTo('/shiwu/goodsneibujia',1)"
          :class="{active:HeadActiveIndex ===1,margin10px:HeadActiveIndex ===1}"
          >甄选家</span>
        </div>
        <div class="right">
          <i class="iconfont iconsousuo"></i>
          <i class="iconfont icongouwuche"></i>
        </div>
      </div>
      <div class="nav" ref="nav">
        <ul class="list">
          <li class="item" 
            v-for="(tab, index) in tabs" :key="index"
            :class="{active:index ===tabActiveIndex}"
          >{{tab.tabName}}</li>
        </ul>
      </div>
    </header>
    <div class="content">
      <router-view :setHeadActiveIndex="setHeadActiveIndex"></router-view>
    </div>
  </div>
</template>

<script>
import BScroll from '@better-scroll/core';
export default {
    async mounted(){
      const result = await this.$api.wangyi.reqTabs();
      this.tabs =[...result.data,...result.data];
    },
    data(){
      return {
        tabs : [],
        tabActiveIndex:0,
        HeadActiveIndex:0
      }
    },
    watch:{
      tabs(){
        this.$nextTick(()=>{
            new BScroll(this.$refs.nav,{
                        scrollX: true,
                        click:true,
            })
        })
      }
    },
    methods:{
      setHeadActiveIndex(index){
        this.HeadActiveIndex = index
      }
      ,
      navTo(path,index){
        if (path === this.$route.path) {
            return 
        }
        this.$router.replace(path)
        this.HeadActiveIndex=index
      }
    },
    beforeRouteEnter(to,from,next)
    {
      next()
    }
};
</script>

<style lang="less" scoped>

.faxian-wrapper {
  padding-bottom: 52px;
}
.margin10px{
  margin-left: 10px;
}
.seprator() {
  &::after {
    content: "";
    background-color: #f4f4f4;
    position: absolute;
    height: 10px;
    width: 100%;
    bottom: -10px;
  }
  & {
    margin-bottom: 10px;
  }
}
.header {
  position: relative;
  .seprator();
}
.top {
  height: 49px;
  padding: 0 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ccc;

  .iconshouye {
    font-size: 20px;
  }
  .center {
    .text {
      font-size: 13px;
      color: #7f7f7f;
      &.active {
        font-size: 20px;
        font-weight: bold;
        color: #b4282d;
        margin-right: 15px;
      }
    }
  }
  .right {
    display: flex;
    align-items: center;
    .iconsousuo {
      font-size: 24px;
      margin-right: 20px;
    }
    .icongouwuche {
      font-size: 20px;
    }
  }
}
.nav {
  margin-left: 10px;
  font-size: 14px;
  width: 100vw;
  color: #7f7f7f;
  display: flex;
  height: 35px;
  border-bottom: 1px solid #ccc;
  .list {
    display: flex;
    height: 35px;
    .item {
      height: 35px;
      box-sizing: border-box;
      padding: 0 4px;
      margin-right: 25px;
      flex: none;
      line-height: 35px;
      &.active {
        color: #b4282d;
        border-bottom: 1px solid #b4282d;
      }
    }
  }
}
</style>
