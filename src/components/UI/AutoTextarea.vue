<template>
  <textarea ref="textarea" @input="autoHeight" :value="modelValue"></textarea>
</template>

<script>
export default {
  name: "AutoTextarea",
  props: {
    modelValue: String,
  },
  emits: ['update:modelValue'],
  methods: {
    autoHeight(event) {
      this.$emit('update:modelValue', event.currentTarget.value)
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
