<template>
  <div class="header">
    <!--<canvas id="canvas" ref="canvas">-->
      <!--CNODE-->
    <!--</canvas>-->
    CNODE
  </div>
</template>

<script>
  export default {
    data () {
      return {
        msg: 'header'
      }
    },
    /* 页面初始化 */
    created () {

    },
    // 页面挂载之后
    mounted () {

    },
    methods: {

    }
  }
</script>

<style lang="stylus">
  .header
    text-align center
    line-height 60px
    height 1.1rem
    line-height 1.1rem
    color #fff
    font-size 0.35rem
    background #0000FF
    #canvas
      width 100%
      height 60px
</style>
