<template>
  <div>
    <div class="wrapper">
      <p class="title">{{topic.title}}</p>
      <p class="hint">{{topic.subTitle}}</p>
      <ul class="list">
        <li class="item" v-for="(item, index) in topic.itemList" :key="index">
          <img
            data-v-64bcca47
            :src="item.itemUrl"
            alt="topic"
            :data-src="item.itemUrl"
            lazy="loaded"
          />
        </li>
      </ul>
      <ViewCount class="viewcount" :count="topic.readCount"></ViewCount>
    </div>
    <div class="seprator"></div>
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
    background-color: #f7f7f7;
}
.wrapper {
  position: relative;
  padding: 15px 15px 40px 15px;
  .viewcount {
    bottom: 10px;
  }
  .title {
    white-space: nowrap;
    font-size: 20px;
    margin-bottom: 15px;
  }
  .hint {
    color: #7f7f7f;
    font-size: 14px;
  }
  .list {
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    .item {
      width: 83px;
      height: 83px;
      margin-bottom: 5px;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>