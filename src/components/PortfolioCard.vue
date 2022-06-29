<template>
  <a :href="link" target="_blank" class="portfolio-card">
    <img :src="imageUrl" alt="img" class="portfolio-card__img">
    <div class="portfolio-card__info">
      <div class="portfolio-card__title">{{ name }}</div>
    </div>
  </a>
</template>

<script>
export default {
  props: ['name', 'image', 'link'],
  name: "PortfolioCard",
  computed: {
    imageUrl() {
      return process.env.VUE_APP_URL + this.image
    }
  }
}
</script>

<style scoped>

</style>
