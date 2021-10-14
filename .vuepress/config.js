module.exports = {
  title: "Sen Yang",
  description: "My personal site.",
  head: [["link", { rel: "icon", href: `/logo.png` }]],
  base: "/",
  dest: "./dist",
  // theme: '@vuepress/theme-blog', // https://web.archive.org/web/20210117185731/https://vuepress-theme-blog.ulivz.com/#quick-start
  themeConfig: {
    search: false,
    nav: [
      { text: "About", link: "/about/" },
      { text: 'Articles', link: '/' },
      { text: "CNKI2BIB 知网参考文献转换工具", link: "https://cnki2bib.youngforest.me/" },
      { text: "Blog", link: "https://youngforest.github.io/en/" },
      { text: "中文博客（My Chinese Blog)", link: "https://youngforest.github.io" }
    ],
    sidebar: {
      '/guide/': genSidebarConfig('Guide')
    },
    lastUpdated: 'Last Updated'
  },

  markdown: {
    // options for markdown-it-anchor
    anchor: { permalink: false },
    extendMarkdown: md => {
      md.use(require("markdown-it-katex"));
    }
  },

  plugins: ['@vuepress/blog', {
    directories: [
      {
        id: 'post', // Unique ID of current classification
        dirname: '_posts', // Target directory
        path: '/post/', // Posts context path
        itemPermalink: '/post/:year/:month/:day/:slug', // Requires if path is not '/'
      },
    ],
  }]
};

function genSidebarConfig(title) {
  return [
    {
      title,
      collapsable: false,
      children: [
        '',
        'getting-started',
        'customize',
        'advanced',
      ]
    }
  ]
}

