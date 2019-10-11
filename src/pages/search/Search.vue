<template>
  <div>
      search
  </div>
</template>

<script>
export default {
    beforeCreate(){
        this.$bus.$emit('showFooter',false)
    },

    
    destroyed(){
        this.$bus.$emit('showFooter',true)
    }
}
</script>

<style lang="less" scoped>
    
</style>