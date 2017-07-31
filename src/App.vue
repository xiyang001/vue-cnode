<template>
  <div id="app">
    <Headers/>
    <div class="main">
      <router-view></router-view>
    </div>
    <Footers/>
  </div>
</template>

<script>
import './common/rem'
import Headers from '@/components/Header'
import Footers from '@/components/Footer'
export default {
  name: 'app',
  components: {
    Footers,
    Headers
  }
}
</script>

<style lang="stylus">
@import "common/base.styl"
html,body
  height 100%
#app
  height 100%
  display flex
  flex-direction column
  .main
    flex 1
</style>
