<template>
  <div class="portfolio">
    <div class="container">

      <router-link to="/" class="button portfolio__button">
        <svg class="button__back-icon" width="7" height="11" viewBox="0 0 7 11" fill="" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M5.70643 0.292787C5.8939 0.480314 5.99922 0.734622 5.99922 0.999786C5.99922 1.26495 5.8939 1.51926 5.70643 1.70679L2.41343 4.99979L5.70643 8.29279C5.80194 8.38503 5.87812 8.49538 5.93053 8.61738C5.98294 8.73939 6.01053 8.87061 6.01168 9.00339C6.01283 9.13616 5.98753 9.26784 5.93725 9.39074C5.88697 9.51364 5.81272 9.62529 5.71883 9.71918C5.62493 9.81307 5.51328 9.88733 5.39038 9.93761C5.26749 9.98789 5.13581 10.0132 5.00303 10.012C4.87025 10.0109 4.73903 9.9833 4.61703 9.93089C4.49502 9.87848 4.38468 9.8023 4.29243 9.70679L0.292431 5.70679C0.10496 5.51926 -0.000355951 5.26495 -0.000355939 4.99979C-0.000355927 4.73462 0.10496 4.48031 0.292431 4.29279L4.29243 0.292787C4.47996 0.105315 4.73427 -5.58392e-08 4.99943 -4.42485e-08C5.26459 -3.26578e-08 5.5189 0.105316 5.70643 0.292787Z" fill=""/>
        </svg>
        Back
      </router-link>

        <div class="title portfolio__title">Portfolio</div>

      <div class="portfolio__inner">
        <div class="cards-grid">
<!--          <PortfolioCard
              v-for="work in works"
              :key="work.id"
              :name="work.attributes.name"
              :link="work.attributes.link"
              :image="work.attributes.image.data.attributes.url"
          />-->

          <PortfolioCard
              v-for="work in store.works"
              :key="work.id"
              :name="work.name"
              :link="work.link"
              :image="require('@/assets/images/works/' + work.image)"
          />

        </div>
        <div class="observer" ref="observerLine"></div>
      </div>
    </div>
  </div>
</template>


<script>
  export default {
    name: "PortfolioPage",
  }
</script>

<script setup>
import PortfolioCard from "@/components/PortfolioCard";
import {usePortfolioStore} from "@/store/portfolio";

const store = usePortfolioStore();


/*export default {
  name: "PortfolioPage",
  components: {
    PortfolioCard,
  },
  data() {
    return {
      pageNumber: 1,
      pageSize: 6,
      works: [],
      observer: null,
    }
  },
  methods: {
    async getWorks(observer) {
      try {
        if (observer) {
          this.pageNumber++;
        }
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

        this.works = [...this.works, ...response.data.data]
      } catch (e) {
        console.log(e);
      }
    }
  },
  async mounted() {
    await this.getWorks();

    const options = {
      root: document.querySelector("#scrollArea"),
      rootMargin: "0px",
      threshold: 1.0
    }

    this.observer = new IntersectionObserver(([entry]) => {
      if (entry && entry.isIntersecting) {
        this.getWorks(true);
      }
    }, options)
    const observerElement = this.$refs.observerLine;
    this.observer.observe(observerElement);

  }
}*/
</script>
