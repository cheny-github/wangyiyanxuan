<template>
  <div id="app">
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from 'components/footer/Footer'
export default {
  name: 'app',
  components: {
    Footer
  }
}
</script>

<style lang="stylus">
#app
  min-width 100%
  min-height 100%
  overflow-x hidden
  position relative
</style>
