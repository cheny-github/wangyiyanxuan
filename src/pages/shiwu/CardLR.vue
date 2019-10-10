<template>
  <div>
    <div class="wrapper">
      <div class="left">
        <div class="avatar">
          <img
            data-v-b9fc18ce
            :src="topic.avatar"
            alt
            lazy="loaded"
          />
          <span class="userName">{{topic.nickname}}</span>
        </div>
        <div class="desc">
          <div class="title">{{topic.title}}</div>
          <div class="hint">{{topic.subTitle}}</div>
        </div>
        <ViewCount :count="topic.readCount"></ViewCount>
      </div>
      <div class="right">
        <img
          data-v-017cf1c5
          :src="topic.picUrl"
          alt
          :data-src="topic.picUrl"
          lazy="loaded"
        />
      </div>
    </div>

    <div class="seprator"></div>
  </div>
</template>

<script>
import ViewCount from "./ViewCount";
export default {
  components: {
    ViewCount
  },
  props:['topic'],
};
</script>
<style lang="less" scoped>
.wrapper {
  padding: 17px 15px;
  display: flex;
  justify-content: space-between;
  .left {
    flex: 1;
    display: flex;
    flex-direction: column;
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
    .desc {
      .title {
        font-size: 18px;
        line-height: 26px;
      }
      .hint {
        font-size: 14px;
        color: #7f7f7f;
        margin-bottom: 17px;
      }
    }
  }
  .right {
    width: 137px;
    height: 137px;
    img {
      width: 100%;
      height: 100%;
      border-radius: 3px;
    }
  }
}
.seprator {
  height: 10px;
  width: 100vw;
  background-color: #f4f4f4;
}
</style>