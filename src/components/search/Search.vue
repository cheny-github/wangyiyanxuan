<template>
    <div class="search-wrapper" :style="{width}">
        <span>
          <i class="iconfont iconsousuo"></i> 搜索商品，共2222款好物
        </span>
    </div>
</template>

<script>
export default {
    props:['width']
}
</script>

<style lang="less" scoped>
@import '../../assets/mixins.less';
    // 搜索
    .search-wrapper {
      width: 221px;
      height: 28px;
    //   margin: 0 9px;
      background-color: #ededed;
      border-radius: 3px;
      line-height: 28px;
      text-indent: 22px;
      font-size: 14px; //fz
      color: #aaaaaa;
    }
</style>