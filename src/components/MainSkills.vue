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
        { id: 1, icon: 'world.svg', name: 'HTML/CSS' },
        { id: 2, icon: 'js.svg', name: 'JavaScript' },
        { id: 3, icon: 'vue.svg', name: 'Vue.js' },
        { id: 4, icon: 'nuxt.svg', name: 'Nuxt.js' },
        { id: 5, icon: 'tailwind.svg', name: 'Tailwind' },
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
