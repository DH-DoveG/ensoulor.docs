import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'ensoulor.docs',
  description: 'Ensoulor资料站',
  lang: 'zh-CN',

  markdown: {
    image: {
      // 图片懒加载
      lazyLoading: true
    }
  },

  srcExclude: ['README.md', 'LICENSE', 'LICENSE-CODE'],

  // 实验性功能
  metaChunk: true,

  // 路由重写
  rewrites: {
    // 卡灵时代 KLSD
    'project/klsd/(.*)': 'klsd/(.*)',
    // 花种 SOF
    'project/sof/(.*)': 'sof/(.*)',
    // 百舸争流 HOBCAS
    'project/hobcas/(.*)': 'hobcas/(.*)',
    // 挖掘者 Digger
    'project/digger/(.*)': 'digger/(.*)'
  },

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],

    search: {
      provider: 'local'
    }
  }
})
