module.exports = {
  title: "Sen Yang",
  description: "My personal site.",
  head: [["link", { rel: "icon", href: `/logo.png` }]],
  dest: "./dist",
  themeConfig: {
    search: false,
    nav: [
      { text: "About", link: "/" },
      { text: "Technical Interview Mock", link: "/mock/" },
      { text: "CNKI2BIB 知网参考文献转换工具", link: "https://cnki2bib.youngforest.me/" },
      { text: "Online TOTP Generator", link: "https://totp.youngforest.me/" },
      { text: "Blog", link: "https://youngforest.github.io/en/" },
      { text: "中文博客（My Chinese Blog)", link: "https://youngforest.github.io" }
    ],
    // sidebar: 'auto',
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
    ['@vuepress/blog']
  ],
  head: [
    [
      // https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9046219176772396
      "script",
      {
        "data-ad-client": "ca-pub-9046219176772396",
        async: true,
        src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9046219176772396",
        crossorigin: "anonymous"
      },
    ],
  ],
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

