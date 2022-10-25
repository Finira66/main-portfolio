<template>
  <div class="last-works">
    <div class="container">
      <div class="title last-works__title">
        Last Works
      </div>

      <div class="cards-grid">
<!--        <PortfolioCard
            v-for="work in works"
            :key="work.id"
            :name="work.attributes.name"
            :link="work.attributes.link"
            :image="work.attributes.image.data.attributes.url"
        />-->

        <PortfolioCard
            v-for="work in filteredCards"
            :key="work.id"
            :name="work.name"
            :link="work.link"
            :image="require('@/assets/images/works/' + work.image)"
        />
      </div>

      <router-link to="/portfolio" class="button last-works__button">Show all</router-link>

    </div>
  </div>
</template>

<script setup>
import PortfolioCard from "@/components/PortfolioCard";
import {usePortfolioStore} from "@/store/portfolio";

const store = usePortfolioStore();

const filteredCards = store.works.sort((a, b) => b.id - a.id).slice(0, 3);

/*export default {
  name: "LastWorks",
  components: {PortfolioCard},
  data() {
    return {
      works: [],
      pageNumber: 1,
      pageSize: 6,
    }
  },
  methods: {
    async getLastWorks() {
      try {
        const query = this.$qs.stringify(
            {
              populate: 'image',
              sort: "createdAt:DESC",
              pagination: {
                page: this.pageNumber,
                pageSize: this.pageSize
              }
            },
            {
              encodeValuesOnly: true
            }
        );

        const response = await this.axios.get(`works?${query}`)
        this.works = response.data.data

      } catch (e) {
        console.log(e);
      }
    }
  },
  async mounted() {
    await this.getLastWorks();
  }
}*/
</script>

<style scoped>

</style>
