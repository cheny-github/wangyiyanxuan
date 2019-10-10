<template>
    <div class="view">
        <i class="iconfont  iconliulan"></i>{{count}}人看过
    </div>
</template>

<script>
export default {
    props:['count']
}

</script>

<style lang="less" scoped>
    // 浏览量
    .view{
        position: absolute;
        bottom: 0;
        font-size: 12px;
        color: #cccccc;
        .iconliulan{
            font-size: 12px;
            color: #cccccc;
        }
    }
</style>