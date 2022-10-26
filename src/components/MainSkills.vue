<template>
  <div class="main-skills">
    <div class="title title--start title--mb-md">Skills</div>
    <div class="main-skills__wrapper">
<!--      <skill-progress
          v-for="skill in skills"
          :key="skill.id"
          :name="skill.attributes.name"
          :progress="skill.attributes.progress"
          :image="skill.attributes.image.data.attributes.url"
          class="main-skills__item"/>-->

      <div
          v-for="skill in mainSkills"
          :key="skill.id"
          class="main-skills__item">
        <img :src="require('@/assets/images/icons/' + skill.icon)" alt="icon" class="main-skills__icon">
        <div class="main-skills__name">
          {{ skill.name }}
        </div>
      </div>

    </div>
  </div>
</template>

<script>
// import SkillProgress from "@/components/SkillProgress";

export default {
  name: "MainSkills",
  components: {
    // SkillProgress
  },
  data() {
    return {
      skills: [],
      mainSkills: [
        { id: 1, icon: 'html.svg', name: 'HTML/PUG' },
        { id: 2, icon: 'css.svg', name: 'CSS/SCSS' },
        { id: 3, icon: 'js.svg', name: 'JavaScript' },
        { id: 4, icon: 'axios.svg', name: 'Axios' },
        { id: 5, icon: 'vue.svg', name: 'Vue.js' },
        { id: 6, icon: 'vue.svg', name: 'Vuex' },
        { id: 7, icon: 'pinia.svg', name: 'Pinia' },
        { id: 8, icon: 'vite.svg', name: 'Vite' },
        { id: 9, icon: 'nuxt.svg', name: 'Nuxt.js' },
        { id: 10, icon: 'tailwind.svg', name: 'Tailwind' },
        { id: 11, icon: 'github.svg', name: 'Git' },
      ]
    }
  },
  methods: {
    async getSkills() {
      try {
        const query = this.$qs.stringify(
            {
              populate: 'image',
            },
            {
              encodeValuesOnly: true
            }
        );

        const response = await this.axios.get(`skills?${query}`);
        this.skills = response.data.data;
      } catch (e) {
        console.log(e)
      }
    }
  },
  async mounted() {
    await this.getSkills();
  }
}
</script>

<style scoped>

</style>
