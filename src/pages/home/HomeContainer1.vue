<template>
   <div class="container1">
    <div class="header">

        <slot class="title" name="title">{{title}}</slot>
        <div class="more" v-if="isShowMore">更多&gt;</div>
    </div>
    <slot></slot>
   </div>
</template>

<script>
export default {
    props:{
        title:String,
        isShowMore:Boolean
    }
}
</script>

<style lang="less" scoped>
@import '../../assets/mixins.less';
    // 10个padding的容器
.container1{
    padding: 15px;
    box-sizing: border-box;
    width: 100%;
    .seprator();
    &::after{
        left: -16px;
    }
    .header{
        display: flex;
        justify-content: space-between;
        font-size: 16px;
        height: 16px;
        padding-bottom: 16px;
        line-height: 16px;
        color: #333;
    }
}

</style>