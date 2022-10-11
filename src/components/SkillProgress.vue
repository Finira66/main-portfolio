<template>
  <div class="skill-progress">
    <div class="skill-progress__top">
      <img :src="image" alt="icon" class="skill-progress__icon">
      <div class="skill-progress__name">{{ name }}</div>
    </div>
    <div class="progress">
      <progress max="100" :value="progress"></progress>
      <div class="progress-bg">
        <div class="progress-bar"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SkillProgress",
  props: {
    name: {
      type: String,
      required: true
    },
    progress: {
      type: Number,
      required: true
    },
    image: {
      type: String,
      required: true
    }
  },
  /*computed: {
    iconUrl() {
      return process.env.VUE_APP_URL + this.image
    }
  }*/
}
</script>

