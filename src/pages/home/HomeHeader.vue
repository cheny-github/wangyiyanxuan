<template>
  <div class="head-wrapper">
    <div class="search-bar">
      <div class="log">网易严选</div>
        <Search></Search>
      <div class="loggin">登录</div>
    </div>
    <!--end search-bar-->
    <div class="nav-bar-wrapper">
      <div class="nav-bar">
        <span class="quanbupindao-text" v-show="isShowPindao">全部频道</span>
        <div class="nav-list-wrapper" ref="navWrapper" v-show="!isShowPindao">
          <ul class="nav-list" ref="navList">
            <li class="nav-item active">推荐</li>
            <li class="nav-item">居家生活</li>
            <li class="nav-item">服饰鞋包</li>
            <li class="nav-item">美食酒水</li>
            <li class="nav-item">服饰鞋包</li>
            <li class="nav-item">美食酒水</li>
            <li class="nav-item">服饰鞋包</li>
            <li class="nav-item">美食酒水</li>
          </ul>
        </div>
        <i class="iconfont iconjiantouxia" @click="showPingdaoTroggle()" ref="jiantouxia"></i>
      </div> <!-- end nav-bar-->
       <ul class="pindao-list" v-show="isShowPindao">
          <li class="pindao-item active">推荐</li>
          <li class="pindao-item">居家生活</li>
          <li class="pindao-item">居家生活</li>
          <li class="pindao-item">居家生活</li>
          <li class="pindao-item">居家生活</li>
          <li class="pindao-item">居家生活</li>
          <li class="pindao-item">居家生活</li>
          <li class="pindao-item">居家生活</li>
          <li class="pindao-item">居家生活</li>
        </ul>
    </div>
  </div>
  <!--end head-wrappper-->
</template>

<script>
import BScroll from "@better-scroll/core";
import { getWidthByChildren } from "../../utils/index";
import Search from 'components/search/Search';
export default {
  mounted() {
    // 由于navList是flex容器，不能由子元素撑开，所以需要单独计算navList的宽度以满足滑动的要求
    const width = getWidthByChildren(this.$refs.navList);
    this.$refs.navList.style.width = width + "px";
    new BScroll(this.$refs.navWrapper, {
      scrollX: true,
      click: true,
      probeType: 3 // listening scroll hook
    });
  },
  components:{
      Search
  },
  data() {
    return {
      isShowPindao: false,
      rotate:0
    };
  },
  methods:{
    showPingdaoTroggle(){
      this.isShowPindao = !this.isShowPindao
      this.rotate= this.isShowPindao?180:0
      this.$refs.jiantouxia.style.transform=`rotateZ(${this.rotate}deg)`
    }
  }
};
</script>

<style lang="less" scoped>
// 头部
.head-wrapper {
  position: fixed;
  width: 100%;
  box-sizing: border-box;
  z-index: 33;
  background-color: #fff;
  top: 0;
  // height: 74px;
  padding: 0 15px;
  margin-bottom: 2px;
  .search-bar {
    height: 36px -8px;
    padding-top: 8px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .log {
      font-size: 16px;
    }

    .loggin {
      height: 18px;
      line-height: 18px;
      width: 34px;
      border: 1px solid #bc6776;
      border-radius: 3px;
      font-size: 11px;
      text-align: center;
      color: #bc6776;
    }
  }
  .nav-bar {
    height: 38px-15px;
    padding-top: 15px;
    border: 1px;
    display: flex;
    justify-content: space-between;

    font-size: 14px;
    .nav-list-wrapper {
      overflow: hidden;
      .nav-list {
        width: 9900px;
        display: flex;
        .nav-item {
          // margin: 0 10px;
          padding: 0 18px;
          height: 22px;
          padding-bottom: 5px;
          box-sizing: border-box;
          white-space: nowrap;
          // display: inline-block;
          &.active {
            color: #b4282d;
            border-bottom: 2px solid #b4282d;
          }
          &:first-of-type {
            margin-left: 0;
          }
        }
      }
    }
    .iconfont {
      font-size: 14px;
      font-weight: 100;
      &.iconjiantouxia{
        transition: all .3s;
      }
    }
  }
}
// 频道
.nav-bar-wrapper {
  .quanbupindao-text {
    display: flex;
    align-items: flex-end;
  }
  .pindao-list {
    display: flex;
    flex-wrap: wrap;
    margin-top: 20px;
    background-color: #fff;
    .pindao-item {
      margin-bottom: 20px;
      margin-right: 15px;
      text-align: center;
      line-height: 26px;
      width: 73px;
      height: 26px;
      box-sizing: border-box;
      border: 1px solid #aaa;
      border-radius: 3px;
      font-size: 12px;
      &:nth-of-type(4n) {
        margin-right: 0;
      }
      &.active {
        color: #b4282d;
        border: 1px solid #b4282d;
      }
    }
  }
}
</style>