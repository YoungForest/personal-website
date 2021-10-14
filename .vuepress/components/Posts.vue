<template>
  <div class="post-container">
    <router-link v-for="page in pages" :to="page.path">
      <div class="post-card">
        <!-- <img class="article-image" src="../public/images/blog_hero_image.jpg" /> -->
        <div class="page-detail">
          <div class="page-title">{{ page.title }}</div>
          <div class="page-description">{{ page.frontmatter.description }}</div>
          <!-- <div class="page-excerpt">{{ page.excerpt }}</div> -->
          <div class="page-author" v-if="page.frontmatter.author">Author: {{ page.frontmatter.author }}</div>
        </div>
      </div>
    </router-link>
  </div>
</template>
<script>
export default {
  data() {
    return {
      pages: []
    }
  },
  mounted() {
    this.$site.pages.forEach(page => {
      if (page.frontmatter.type === 'article') {
        this.pages.push(page)
      }
    })
  }
}
</script>

<style scoped>
.post-container {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
}
.post-card {
  width: 600px;
  margin: 10px;
  border: 1px solid #ccc;
  border-radius: 3px;
  padding: 10px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}
.page-title {
  font-size: 1.2em;
  font-weight: bold;
}
.page-detail {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.page-author {
  font-size: 0.8em;
}
.article-image {
  height: 100%;
}
.page-description {
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 10px;
}
</style>