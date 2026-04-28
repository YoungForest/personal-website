import { defineConfig } from 'vitepress'
import { readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'

const iconsDir = fileURLToPath(new URL('../public/icons', import.meta.url))
const leetcodeIcon = readFileSync(`${iconsDir}/leetcode.svg`, 'utf-8')
const lccnIcon = readFileSync(`${iconsDir}/lccn.svg`, 'utf-8')
const codeforcesIcon = readFileSync(`${iconsDir}/code-forces.svg`, 'utf-8')

export default defineConfig({
  title: 'Sen Yang',
  description: "Sen Yang's personal site — SDE @ Microsoft, Dublin.",
  lang: 'en-US',
  cleanUrls: true,
  lastUpdated: true,
  srcExclude: ['README.md'],

  head: [
    ['link', { rel: 'icon', href: '/profile.jpeg' }],
    ['meta', { name: 'author', content: 'Sen Yang' }],
    ['meta', { property: 'og:title', content: 'Sen Yang' }],
    ['meta', { property: 'og:description', content: "Sen Yang's personal site." }],
    ['meta', { property: 'og:image', content: 'https://youngforest.me/profile.jpeg' }],
    ['meta', { property: 'og:url', content: 'https://youngforest.me' }],
    ['meta', { property: 'og:type', content: 'website' }]
  ],

  sitemap: {
    hostname: 'https://youngforest.me'
  },

  themeConfig: {
    logo: '/profile.jpeg',
    siteTitle: 'Sen Yang',

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Archive', link: '/posts/' },
      { text: 'Mock Interviews', link: '/mock/' },
      {
        text: 'Tools',
        items: [
          { text: 'CNKI2BIB 知网参考文献转换', link: 'https://cnki2bib.youngforest.me/' },
          { text: 'Online TOTP Generator', link: 'https://totp.youngforest.me/' }
        ]
      },
      {
        text: 'Blog',
        items: [
          { text: 'English Blog', link: 'https://youngforest.github.io/en/' },
          { text: '中文博客', link: 'https://youngforest.github.io' }
        ]
      }
    ],

    sidebar: {
      '/posts/': [
        {
          text: 'Posts',
          items: [
            { text: '2018 总结 与 2019 愿望', link: '/posts/2018-summary-and-2019-resolutions' },
            { text: '2019 总结 与 2020 愿望', link: '/posts/2019-summary-and-2020-resolutions' },
            { text: '2020 总结 与 2021 愿望', link: '/posts/2020-summary-and-2021-resolutions' },
            { text: '2017 resolutions', link: '/posts/2017-resolutions' },
            { text: '我的投资故事（一）', link: '/posts/investment' },
            { text: '我的本科四年', link: '/posts/my-4-years-college' },
            { text: '我的研究生三年', link: '/posts/my-3-years-master' },
            { text: '2021 暑期实习面试总结', link: '/posts/2021-summer-intern-interview-summary' },
            { text: 'Travis CI + Hexo 自动部署', link: '/posts/2021-10-09-Travis-CI-Hexo-automatically-deploy' },
            { text: 'How to prepare for a tech interview', link: '/posts/2021-10-13-Tech-Interview' },
            { text: 'pair as key in unordered_map', link: '/posts/2020-05-27-best-implement-to-use-pair-as-key-to-std-unordered-map-in-C' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/YoungForest' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/sen-yang-a20a02137/' },
      { icon: 'twitter', link: 'https://twitter.com/youngforest' },
      { icon: { svg: leetcodeIcon }, link: 'https://leetcode.com/YoungForest', ariaLabel: 'LeetCode' },
      { icon: { svg: lccnIcon }, link: 'https://leetcode-cn.com/u/YoungForest', ariaLabel: 'LeetCode CN' },
      { icon: { svg: codeforcesIcon }, link: 'https://codeforces.com/profile/_beginner', ariaLabel: 'Codeforces' }
    ],

    search: {
      provider: 'local'
    },

    editLink: {
      pattern: 'https://github.com/YoungForest/personal-website/edit/main/:path',
      text: 'Edit this page on GitHub'
    },

    footer: {
      message: 'Released under the MIT License.',
      copyright: `Copyright © 2017-${new Date().getFullYear()} Sen Yang`
    },

    lastUpdated: {
      text: 'Last updated',
      formatOptions: {
        dateStyle: 'medium'
      }
    }
  }
})
