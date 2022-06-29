<template>
  <div class="main-skills">
    <div class="title title--start title--mb-md">Skills</div>
    <div class="main-skills__wrapper">
      <skill-progress
          v-for="skill in skills"
          :key="skill.id"
          :name="skill.attributes.name"
          :progress="skill.attributes.progress"
          :image="skill.attributes.image.data.attributes.url"
          class="main-skills__item"/>
    </div>
  </div>
</template>

<script>
import SkillProgress from "@/components/SkillProgress";

export default {
  name: "MainSkills",
  components: {
    SkillProgress
  },
  data() {
    return {
      skills: []
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
