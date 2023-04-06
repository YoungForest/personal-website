---
pageClass: home-page
# some data for the components

name: Sen Yang
profile: /profile.jpeg

socials:
  - title: github
    icon: "/icons/github.svg"
    link: https://github.com/YoungForest
  - title: linkedin
    icon: "/icons/linkedin-mono.svg"
    link: https://www.linkedin.com/in/sen-yang-a20a02137/
  - title: leetcode
    icon: "/icons/leetcode.svg"
    link: https://leetcode.com/YoungForest
  - title: leetcode-cn
    icon: "/icons/lccn.svg"
    link: https://leetcode-cn.com/u/YoungForest
  - title: twitter
    icon: "/icons/twitter.svg"
    link: https://twitter.com/youngforest
  - title: CodeForces
    icon: "/icons/code-forces.svg"
    link: https://codeforces.com/profile/_beginner

bio: SDE in Microsoft, Dublin
email: sen.yang96@outlook.com
---

<ProfileSection :frontmatter="$page.frontmatter" />

## About Me

I am a SDE, currently working in Microsoft, Dublin.
Before that, I got my Computer Science and Engineering master and bachelor degree from Beihang University and worked in Amazon, Beijing.

## Awards & Honors

LeetCode max rating 2606, rank 270 in world.

## Groups

- [Cruel Coding Club](http://board.cruelcoding.com/)
- [Free Style System design](https://system.youngforest.me/)
- [Free Style Coding](https://justyy.com/lc-score-board/)

<!-- Custom style for this page -->

<style lang="stylus">

.theme-container.home-page .page
  font-size 14px
  font-family "lucida grande", "lucida sans unicode", lucida, "Helvetica Neue", Helvetica, Arial, sans-serif;
  p
    margin 0 0 0.5rem
  p, ul, ol
    line-height normal
  a
    font-weight normal
  .theme-default-content:not(.custom) > h2
    margin-bottom 0.5rem
  .theme-default-content:not(.custom) > h2:first-child + p
    margin-top 0.5rem
  .theme-default-content:not(.custom) > h3
    padding-top 4rem

  /* Override */
  .md-card
    margin-top 0.5em
    .card-image
      padding 0.2rem
      img
        max-width 120px
        max-height 120px
    .card-content p
      -webkit-margin-after 0.2em

@media (max-width: 419px)
  .theme-container.home-page .page
    p, ul, ol
      line-height 1.5

    .md-card
      .card-image
        img
          width 100%
          max-width 400px

</style>
