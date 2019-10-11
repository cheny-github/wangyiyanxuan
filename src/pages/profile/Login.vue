<template>
  <div class="wrapper">
    <div class="logo">
      <img
        data-v-3af1304a
        src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png"
        alt="netease"
      />
    </div>
    
    <BtnGroup class="btn-group"
      :btnContent="btnContent"
      @primary-click="handlePrimaryClick" @default-click="handleDefaultClick"></BtnGroup>
    <div class="other-login-way">
      <span class="iconfont iconweixin"></span>
      <span>微信</span>
      <span>|</span>
      <span class="iconfont iconqq"></span>
      <span>QQ</span>
      <span>|</span>
      <span class="iconfont iconweibo"></span>
      <span>微博</span>
      <span>|</span>
    </div>
  </div>
</template>

<script>
import BtnGroup from "./components/BtnGroup";
export default {
  name: "Login",
  components: {
    BtnGroup
  },
  methods:{
    // 跳转到手机号登录
    handlePrimaryClick(ev){
      this.$router.replace('/profile/loginby/phone')
    },
    // 跳转到邮箱登录
    handleDefaultClick(ev){
       this.$router.replace('/profile/loginby/email')
    }
  },
  computed:{
    btnContent(){
      return ({
        primaryText:'手机号登录',
        defaultText:'邮箱登录',
        hintText:'手机号快速注册&gt;'
      })
    }
  }
};
</script>

<style lang="less" scoped>
.wrapper {
  width: 100%;
  height: 100%;
  position: relative;
  .logo {
    position: absolute;
    top: 82px;
    left: 116px;
    img {
      width: 135px;
      height: 50px;
    }
  }
  .btn-group {
    position: absolute;
    top: 227px;
  }
  .other-login-way {
    width: 100vw;
    box-sizing: border-box;
    padding: 0 68px;
    display: flex;
    justify-content: space-between;
    font-size: 16px;
    color: #7f7f7f;
    position: absolute;
    bottom: 42px;
  }
}
</style>