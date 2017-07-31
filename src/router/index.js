import Vue from 'vue'
import Router from 'vue-router'
// 主页
import HomeApp from '@/components/Home/HomeApp'
import All from '@/components/Home/All'
import Ask from '@/components/Home/Ask'
import Good from '@/components/Home/Good'
import Job from '@/components/Home/Job'
import Share from '@/components/Home/Share'
// 发布
import Release from '@/components/Release/Release'
import About from '@/components/About/About'
import My from '@/components/My/My'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: HomeApp,
      children: [
        {
          path: 'all',
          component: All
        },
        {
          path: 'ask',
          component: Ask
        },
        {
          path: 'good',
          component: Good
        },
        {
          path: 'job',
          component: Job
        },
        {
          path: 'share',
          component: Share
        }
      ]
    },
    {
      path: '/release',
      component: Release
    },
    {
      path: '/about',
      component: About
    },
    {
      path: '/my',
      component: My
    }
  ]
})
