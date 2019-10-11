<template>
  <div class="wrapper">
    <button
      class="btn btn-primary"
      @click="btnPrimaryClick($event)"
      v-html="btnContent.primaryText"
      v-animate="'fadeIn'"
    ></button>
    <button
      class="btn btn-default"
      @click="btnDefaultClick($event)"
      v-html="btnContent.defaultText"
      v-animate="'bounceInRight'"
    ></button>
    <div class="hint" v-html="btnContent.hintText">
      <i class="iconfont iconjiantouyou"></i>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    btnContent: {
      primaryText: String,
      defaultText: String,
      hintText: String
    }
  },
  methods: {
    btnPrimaryClick(event) {
      this.$emit("primary-click", event);
    },
    btnDefaultClick() {
      this.$emit("default-click", event);
    }
  }
};
</script>

<style lang="less" scoped>
.wrapper {
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.btn {
  width: 341px;
  height: 50px;
  margin-bottom: 15px;
  text-align: center;
  line-height: 50px;
  outline: none;
  border: 1px solid #b4282d;
  transition: transform 0.1s;
  &.btn-primary {
    background-color: #b4282d;
    color: #ffffff;
    font-weight: bold;
  }
  &.btn-default {
    background-color: #fff;
    color: #b4282d;
  }
  &.active {
    transform: translateY(10px);
  }
}
.hint {
  margin-top: 5px;
  font-size: 12px;
}
</style>