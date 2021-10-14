module.exports = {
  title: "Sen Yang",
  description: "My personal site.",
  head: [["link", { rel: "icon", href: `/logo.png` }]],
  dest: "./dist",
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
  // https://vuepress-plugin-blog.billyyyyy3320.com/guide/getting-started
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
    ['@vuepress/blog', {
      directories: [
        {
          id: 'post', // Unique ID of current classification
          dirname: '_posts', // Target directory
          path: '/post/', // Posts context path
          itemPermalink: '/post/:year/:month/:day/:slug', // Requires if path is not '/'
          pagination: {
            perPagePosts: 2,
          },
        },
      ],
      frontmatters: [
        {
          // Unique ID of current classification
          id: 'tag',
          // Decide that the frontmatter keys will be grouped under this classification
          keys: ['tag'],
          // Path of the `entry page` (or `list page`)
          path: '/tag/',
          // Layout of the `entry page`
          layout: 'Tags',
          // Layout of the `scope page`
          scopeLayout: 'Tag',
          pagination: {
            perPagePosts: 3
          }
        },
        {
          id: "location",
          keys: ['location'],
          path: '/location/',
          frontmatter: { title: 'Location' },
        }
      ],
      sitemap: {
        hostname: 'https://youngforest.me'
      },
    }]
  ]
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

