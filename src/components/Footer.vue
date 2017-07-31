<template>
  <ul class="footer">
    <li><router-link to="/home">首页</router-link></li>
    <li><router-link to="/release">发布</router-link></li>
    <li><router-link to="/about">关于</router-link></li>
    <li><router-link to="/my">我的</router-link></li>
  </ul>
</template>

<script>
  export default {
    data () {
      return {
        msg: 'Hello'
      }
    }
  }
</script>

<style lang="stylus">
  .footer
    display flex
    flex 0 0 0.8rem
    background-color #ccc
    li
      flex 1
      line-height 0.8rem
      text-align center
      height 100%
      a
        color #fff
        display block
        width 100%
        height 100%
      a.router-link-exact-active,a.router-link-active
        color #990066

</style>
