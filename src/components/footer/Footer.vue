<template>
  <div>
    <footer class="footer">
      <div class="nav-item" :class="{active:activeIndex===0}"
       @click="navTo(0,'/')">
        <i class="iconfont iconshouye"></i>
        <span class="text">首页</span>
      </div>
      <div class="nav-item" :class="{active:activeIndex===1}" 
      @click="navTo(1,'/category')">
        <i class="iconfont iconiconset0497"></i>
        <span class="text">分类</span>
      </div>
      <div class="nav-item" :class="{active:activeIndex===2}"
       @click="navTo(2,'/shiwu')">
        <i class="iconfont icontupian"></i>
        <span class="text">识物</span>
      </div>
      <div class="nav-item" :class="{active:activeIndex===3}" 
      @click="navTo(3,'/cart')">
        <i class="iconfont icongouwuche"></i>
        <span class="text">购物车</span>
      </div>
      <div class="nav-item" :class="{active:activeIndex===4}"
       @click="navTo(4,'/profile')">
        <i class="iconfont icongerenzhongxin"></i>
        <span class="text">个人</span>
      </div>
    </footer>
  </div>
</template>

<script>
//key :path,value :activeIndex 
const pathMap={
    '/':0,
    '/category':1,
    '/shiwu':2,
    '/cart':3,
    '/profile':4,
}
export default {
    data() {
        return {
        activeIndex: 0
        };
    },
    methods:{
        navTo(index,path){
            if (path === this.$route.path) {
                return
            }
            this.activeIndex =index
            this.$router.replace(path)
        }
    },
    beforeMount(){
        this.activeIndex = pathMap[this.$route.path]
    },

};
</script>

<style lang="less" scoped>
//footer
.footer {
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
  .nav-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    .text {
      margin-top: 5px;
    }
    &.active {
      color: #b5262d;
    }
    .iconfont{
        font-weight: bold !important;
    }
  }
}
</style>