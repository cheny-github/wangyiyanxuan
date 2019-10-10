<template>
  <div>
    <div class="wrapper">
      <div class="avatar">
        <img
          :src="topic.avatar"
          alt
        />
        <div class="username">{{topic.nickname}}</div>
      </div>
      <div class="title">{{topic.title}}</div>
      <div class="img">
        <img
          :src="topic.picUrl"
          alt
        />
      </div>
      <ViewCount class="viewcount" :count="topic.readCount"></ViewCount>
    </div>
    <div class="seprator">

    </div>
  </div>
</template>

<script>
import ViewCount from "./ViewCount";

export default {
  props:['topic'],
  components: {
    ViewCount
  }
};
</script>

<style lang="less" scoped>
.seprator{
    height: 10px;
    width: 100vw;
    background-color: #f4f4f4;
}
.viewcount{
    bottom: 5px;
}
.wrapper {
  padding: 15px;
  position: relative;
  .avatar {
    margin-bottom: 14px;
    font-size: 14px;
    display: flex;
    align-items: center;
    img {
      width: 26px;
      height: 26px;
      border-radius: 50%;
      margin-right: 6px;
    }
  }
  .title {
    font-size: 20px;
    line-height: 32px;
  }
  .img {
    img {
      width: 100%;
      border-radius: 3px;
    }
    margin-bottom: 12px;
    margin-top: 6px;
  }
}
</style>