import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import './custom.css'
import enhanceApp from './enhance.js'
import Comment from './components/Comment.vue'
import BackToTop from './components/BackToTop.vue'
import ReadingProgress from './components/ReadingProgress.vue'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // 添加评论组件
      'doc-footer-before': () => h(Comment),
      // 添加返回顶部组件
      'layout-bottom': () => h(BackToTop),
      // 添加阅读进度条
      'nav-bar-content-after': () => h(ReadingProgress)
    })
  },
  enhanceApp({ app, router, siteData }) {
    // 注册全局组件
    app.component('Comment', Comment)
    app.component('BackToTop', BackToTop)
    app.component('ReadingProgress', ReadingProgress)
    
    // 调用增强功能
    enhanceApp({ app, router, siteData })
    
    // 添加路由守卫
    router.onBeforeRouteChange = (to) => {
      // 可以在这里添加页面切换动画或其他逻辑
      console.log('Before route change:', to)
    }
    
    router.onAfterRouteChanged = (to) => {
      // 页面切换后的逻辑
      console.log('After route changed:', to)
    }
  }
}