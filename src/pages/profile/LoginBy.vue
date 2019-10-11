<template>
  <div class="wrapper">
    <div class="logo">
      <img
        data-v-4b5840b8
        src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png"
        alt="netease"
      />
    </div>
    <form class="form" @submit.prevent>
      <label>
        <div class="input-group">
          <input
            :type="logway"
            class="phone"
            :placeholder="logway ==='phone' ? '请输入手机号':'请输入邮箱'"
            v-model="username"
          />
          <div class="line"></div>
        </div>
      </label>
      <label>
        <div class="input-group">
          <input
            :type="usePassword ? 'number' : 'password'"
            class="phone"
            :placeholder="codePlaceholder"
            v-model="code"
          />
          <div class="line"></div>
          <button class="btn-getcode" v-if="usePassword"
            v-animate="'fadeIn'"
            ref="btn"
           >获取验证码</button>
        </div>
      </label>
      <div class="buttom">
        <span class="question">遇到问题？</span>
        <span class="use-password" @click="handleClick">{{textContent}}</span>
      </div>
    </form>
    <BtnGroup
      ref="btn"
      v-on:primary-click="handleBtnPrimaryClick"
      :btnContent="btnContent"
      @default-click="handleBtnDefaultClick"
    ></BtnGroup>
  </div>
</template>

<script>
import BtnGroup from "./components/BtnGroup";
export default {
  name: "LoginBy",
  props: {
    changeColor: {
      type: Function,
      required: true
    }
  },
  components: {
    BtnGroup
  },
  data() {
    return {

      // 登录方式
      logway: "phone",
      // 使用密码登录还是使用密码登录
      usePassword:false,
      // 邮箱还是手机号 取决于logway
      username: "",
      // 验证码 或则密码 取决于usePassword
      code: "",
      // 用户名合法
      isUsernameValidate: true,
      // 验证码合法
      isCodeValidate: true,
      btnContent: {
        primaryText: "登录",
        defaultText: "其他登录方法",
        hintText: "注册账号"
      },




      // 交互相关
      animate:false,
    };
  },
  methods: {
    // 登录按钮点击
    handleBtnPrimaryClick(ev) {
      if (this.isAllFieldsOK && this.username && this.code) {
        alert('正在登录')
      }
    },
    handleBtnDefaultClick(ev) {
      this.logway = this.logway === "phone" ? "email" : "phone";
      this.$router.replace("/profile/loginby/" + this.logway);
    },
    setErrorFields(errorFields) {
      this.$bus.$emit("setErrorFields", errorFields);
    },
    handleClick(){
      if (this.logway === 'phone') {
        this.code = ''
        this.usePassword =!this.usePassword
      }else{ //忘记密码
        alert('正在跳转到找回密码页面');
      }
    }
  },
  computed: {
    // 校验字段失败的消息
    errorTextList() {
      const result = [];

      if (!this.isUsernameValidate) {
        if (this.logway === "phone") {
          result.push("手机号不合法");
        }else{
          result.push('邮箱格式不正确')
        }
      }
      if (!this.isCodeValidate) {
        if (!this.usePassword) { //使用验证码登录，对验证进行校验
          result.push('验证码格式错误')
        }else{ //使用密码登录
          result.push('密码格式不正确')
        }
 
      }
      return result;
    },
    // 是否整个表单校验通过
    isAllFieldsOK(){
        return this.isUsernameValidate && this.isCodeValidate
    },
    // 右下角文本内容
    textContent(){
      if (this.logway === "email") {
        return '忘记密码'
      }
      if(!this.usePassword){
        return '使用验证码快捷登录'
      }else{
        return '使用密码验证码登录'
      }
    },
    codePlaceholder(){
      if (this.logway === "email" || this.usePassword) {
        return '请输入验证码'
      }else{
        return '请输入密码'
      }
    }


  },
  watch: {
    // 发送错误信息
    errorTextList(value) {
      this.setErrorFields(value);
    },
    // 实时校验用户名（手机号/邮箱，取决于登录方式）
    username(value){
      if (this.logway === 'phone') { //手机号登录
          this.isUsernameValidate = /^1[35789]\d{9}$/.test(value)
      }else{
          this.isUsernameValidate = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([a-zA-Z]{2,4})$/.test(value)
      }
        this.username === '' ? this.isUsernameValidate = true :''
    },
    // 密码/验证码,校验
    code(value){
      if (!this.usePassword) {
        this.isCodeValidate = /\d{4,10}/.test(value)
      }else{
        this.isCodeValidate = /\s\S{6,}/.test(value)
      }
      if (this.code === '') {
        this.isCodeValidate = true
      }
    },
    // 按钮动画
  },
  created() {
    this.logway = this.$route.params.logway;
    this.changeColor();
  },
};
</script>

<style lang="less" scoped>
.logo {
  margin-top: 28px;
  text-align: center;
  img {
    width: 96px;
    height: 33px;
  }
}

.form {
  margin-top: 85px;
  margin-bottom: 35px;
  padding: 19px;
  .input-group {
    margin-top: 27px;
    display: block;
    position: relative;
    input {
      border: none;
      font-size: 16px;
      width: 100%;
      outline: none;
      // &::placeholder{
      // }
    }
    .line {
      width: 100%;
      margin-top: 14px;
      height: 1px;
      background-color: #f4f4f4;
    }
    .btn-getcode {
      outline: none;
      border: 1px solid #999;
      border-radius: 3px;
      text-align: center;
      position: absolute;
      bottom: 0;
      right: 0;
      font-size: 14px;
      padding: 3px 6px;
      background-color: #fff;
    }
  }
}
.buttom {
  margin-top: 16px;
  font-size: 13px;
  display: flex;
  justify-content: space-between;
}
</style>