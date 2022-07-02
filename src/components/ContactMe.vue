<template>
  <div class="contact-me">
    <div class="container">
      <div class="title title--mb-md contact-me__title">
        Contact Me
      </div>
      <form
          @submit.prevent="submit()"
          class="form">
        <div class="form__items">
          <div class="form-area form__item">
            <div class="form-label">What is your name? <span>*</span></div>
            <input
                type="text"
                class="input"
                name="name"
                v-model="form.name"
                @focus="handleFocus"
                @blur="handleBlur">
          </div>
          <div class="form-area form__item">
            <div class="form-label">What it your email? <span>*</span></div>
            <input
                type="text"
                class="input"
                name="email"
                v-model="form.email"
                @focus="handleFocus"
                @blur="handleBlur"
            >
          </div>
          <div class="form-area form__item">
            <div class="form-label form-label--top">Write your message here <span>*</span></div>
            <auto-textarea
                class="textarea"
                name="message"
                v-model="form.message"
                maxlength="600"
                @focus="handleFocus"
                @blur="handleBlur"
            ></auto-textarea>
          </div>

          <p class="error-text">
            {{ errorText }}
          </p>

        </div>

        <button class="button form__button">send message</button>
      </form>
    </div>
  </div>
</template>

<script>
// const querystring = require("querystring");

export default {
  name: "ContactMe",
  data() {
    return {
      errorText: '',
      form: {
        name: '',
        email: '',
        message: '',
      }
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
    async submit() {

      if (this.form.name === '') {
        this.errorText = '* Write name'
        return
      }
      if (this.form.email === '' || !this.form.email.includes('@')) {
        this.errorText = '* Write e-mail'
        return
      }
      if (this.form.message === '') {
        this.errorText = '* Write message'
        return
      }

      this.axios.post('http://localhost:1337/api/requests', {
        "data": this.form
      })
      .then(response => {
        console.log('success', response)
      })
      .catch(error => {
        console.log(error.response.data.error.message)
      });
    }
  }
}
</script>

<style lang="scss" scoped>
.error-text {
  margin: rem(30px) 0 0 0;
  color: #d21f1f;;
}
</style>
