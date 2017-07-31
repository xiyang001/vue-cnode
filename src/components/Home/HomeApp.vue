<template>
  <div class="home">
    <ul>
      <li><router-link to="/home/all">全部</router-link></li>
      <li><router-link to="/home/ask">问答</router-link></li>
      <li><router-link to="/home/job">招聘</router-link></li>
      <li><router-link to="/home/good">精华</router-link></li>
      <li><router-link to="/home/share">分享</router-link></li>
    </ul>
    <div class="homePages">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'home',
    data () {
      return {
        msg: 'Hello'
      }
    },
    created () {
      // 点击home路由重定向到/home/all
      location.hash = '/home/all'
      console.log(this.$route)
    }
  }
</script>

<style lang="stylus">
  .home
    height 100%
    display flex
    flex-direction column
    ul
      flex 0 0 0.75rem
      display flex
      background #3399FF
      li
        flex 1
        height 0.75rem
        line-height 0.75rem
        text-align center
        a
          color #fff
          display block
          width 100%
          height 100%
        a.router-link-exact-active,a.router-link-active
          color #990066
    .homePages
      flex 1

</style>
