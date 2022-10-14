const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'GlobFolio',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: 'Proposition to mentoring based in projects',

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    smoothScroll: true,
    sidebarDepth: 2,
    nav: [
      /*{
        text: 'Config',
        link: '/config/'
      },*/
      {
        text: 'Introducción',
        link: '/roadmap/',
      },
      {
        text: 'Proyectos',
        link: '/projects/'
      },
    ],
    sidebar: {
      /*'/guide/': [
        {
          title: 'Guide',
          collapsable: false,
          children: [
            '',
            'using-vue',
          ]
        }
      ],*/
      '/roadmap/': [
        {
          title: 'Introducción',
          collapsable: true,
          children: [
            '',
            '../projects/',
            '../projects/retrospective-table',
            '../projects/demo',
          ]
        }
      ],
      '/projects/': [
        {
          title: 'Proyectos',
          collapsable: true,
          children: [
            '../roadmap/',
            '',
            'retrospective-table',
            'demo',
          ]
        }
      ],
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
