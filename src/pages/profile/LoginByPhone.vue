<template>
  <div class="wrapper">
      <div class="logo">
          <img data-v-4b5840b8="" src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="netease">
      </div>
      <form >
          <label>
            <div class="input-group">
                <input type="phone" class="phone" placeholder="请输入手机号">
                <div class="line"></div>
            </div>
         </label>
          <label>
            <div class="input-group">
                <input type="phone" class="phone" placeholder="请输入手机验证码">
                <div class="line"></div>
                <button class="btn-getcode">获取验证码</button>
            </div>
         </label>
        <div class="buttom">
            <span class="question">遇到问题？</span>
            <span class="use-password">使用验证码登录</span>
        </div>
      </form>
        <BtnGroup></BtnGroup>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>