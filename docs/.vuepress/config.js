const path = require('path');

module.exports = {
  dest: path.resolve(__dirname, './dist'),
  title: '我的博客',
  description: 'Write Anything', //网站的描述，它将会以 <meta> 标签渲染到当前页面的 HTML 中,还显示在首页的文章列表上面
  head: [
    [
      'link',
      {
        rel: 'shortcut icon',
        href: '/favicon.ico'
      }
    ]
  ],
  themeConfig: {
    locales: {
      '/': {
        nav: [{
          text: '主页',
          link: '/',
          ariaLabel: '主页'
        }, {
          text: '发现',
          link: '/post/web-page-analysize',
          ariaLabel: '主页'
        }],
        sidebar: [
          '/post/web-page-analysize'
        ]
      },
    }
  },
  chainWebpack(config, isServer) {
    config.resolve.alias.set('@theme', path.resolve(__dirname, 'theme'));
  },
};