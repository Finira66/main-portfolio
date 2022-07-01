<template>
  <textarea ref="textarea" @input="autoHeight"></textarea>
</template>

<script>
export default {
  name: "AutoTextarea",
  methods: {
    autoHeight(event) {
      event.target.style.height = "auto";
      event.target.style.height = `${event.target.scrollHeight}px`;
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$el.setAttribute("style", "height",
          `${this.$el.scrollHeight}px`);
    });
  }
}
</script>

<style scoped>

</style>
