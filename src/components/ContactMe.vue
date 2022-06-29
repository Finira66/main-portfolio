<template>
  <div class="contact-me">
    <div class="container">
      <div class="title title--mb-md contact-me__title">
        Contact Me
      </div>
      <form @submit.prevent="submit" class="form">
        <div class="form__items">
          <div class="form-area form__item">
            <div class="form-label">What is your name? <span>*</span></div>
            <input
                type="text"
                class="input"
                required
                v-model="name"
                @focus="handleFocus"
                @blur="handleBlur">
          </div>
          <div class="form-area form__item">
            <div class="form-label">What it your email? <span>*</span></div>
            <input
                type="text"
                class="input"
                required
                v-model="email"
                @focus="handleFocus"
                @blur="handleBlur">
          </div>
          <div class="form-area form__item">
            <div class="form-label form-label--top">Write your message here <span>*</span></div>
            <textarea
                class="textarea"
                required
                v-model="message"
                @focus="handleFocus"
                @blur="handleBlur"
                rows="6"
            ></textarea>
          </div>
        </div>
        <button class="button form__button">send message</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactMe",
  data() {
    return {
      name: '',
      email: '',
      message: ''
    }
  },
  methods: {
    handleFocus(e) {
      const input = e.target;
      const label = e.target.previousSibling;
      label.classList.add('active');
      input.classList.add('active');
    },
    handleBlur(e) {
      const input = e.target;
      const label = e.target.previousSibling;
      if (input.value.length === 0) {
        label.classList.remove('active');
        input.classList.remove('active');
      }
    },
    submit() {
      console.log('submit')
    }
  }
}
</script>
