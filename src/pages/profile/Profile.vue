<template>
  <div class="wrapper">
    <header class="header" :style="{backgroundColor:headerBGC}" >
      <div class="left" >
        <i class="iconfont iconshouye" @click="goHome"></i>
      </div>
      <div class="center">网易严选</div>
      <div class="right">
        <i class="iconfont iconsousuo"></i>
        <i class="iconfont icongouwuche"></i>
      </div>
    </header>
    <div class="content" :style="{backgroundColor:contentBGC}">
      <div class="field-error">
        <p v-for="(errorText, index) in errorFields" :key="index">{{errorText}}</p>
      </div>
      <router-view :changeColor="changeColor"></router-view>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      headerBGC:'#fff',
      contentBGC:'#f2f5f4',
      errorFields:[]
    }
  },
  methods:{
    // theme = false  头部白色 内容区灰色
    // theme =true 内容区白色 头部灰色
    changeColor(theme =false){
      if (theme) {
        this.headerBGC = '#fff'
        this.contentBGC='#f2f5f4'
      }else{
        this.headerBGC = '#f2f5f4'
        this.contentBGC='#fff'
      }
    },
    goHome(){
      this.$bus.$emit('setFooterIndex',0)
      this.$router.replace('/')
    }
  },
  mounted(){
    this.$bus.$on('setErrorFields',(errorFields)=>{
      this.errorFields = errorFields
    })
  }
};
</script>

<style lang="less" scoped>
.field-error{
  position: absolute;
  width: 100vw;
  text-align: center;
  color: #b4282d;
  font-size: 14px;
  line-height: 20px;
  top: 164px;
}
.header {
  height: 44px;
  padding: 0 17px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  box-sizing: border-box;
  .left {
    font-size: 26px;
  }
  .center {
    font-size: 20px;
    font-weight: bold;
  }
  .right {
    display: flex;
    align-items: center;
    font-size: 24px;
    .iconsousuo {
      margin-right: 18px;
    }
  }
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 3;
}
.content {
  padding-top: 44px;
  box-sizing: border-box;
  background-color: #f2f5f4;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;
}
</style>
