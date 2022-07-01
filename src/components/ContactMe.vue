<template>
  <div class="contact-me">
    <div class="container">
      <div class="title title--mb-md contact-me__title">
        Contact Me
      </div>
      <form
          enctype="multipart/form-data"
          method="post"
          @submit.prevent="submit('https://strapifront-wm46.onrender.com/send.php')"
          class="form">
        <div class="form__items">
          <div class="form-area form__item">
            <div class="form-label">What is your name? <span>*</span></div>
            <input
                type="text"
                class="input"
                required
                name="name"
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
                name="email"
                v-model="email"
                @focus="handleFocus"
                @blur="handleBlur"
            >
          </div>
          <div class="form-area form__item">
            <div class="form-label form-label--top">Write your message here <span>*</span></div>
            <auto-textarea
                class="textarea"
                required
                name="message"
                v-model="message"
                maxlength="600"
                @focus="handleFocus"
                @blur="handleBlur"
            ></auto-textarea>
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
    async submit(php) {
      await this.axios.post('https://strapifront-wm46.onrender.com/send.php', {
        'name': this.name,
        'email': this.email,
        'message': this.message
      }).then(response => {
        console.log('success', response)
      }).catch(error => {
        console.log(error.response)
      });


      /*console.log("Отправка запроса");

      let req = new XMLHttpRequest();
      req.open('POST', php, true);
      req.onload = function () {
        if (req.status >= 200 && req.status < 400) {
          let json = JSON.parse(this.response);

          // ЗДЕСЬ УКАЗЫВАЕМ ДЕЙСТВИЯ В СЛУЧАЕ УСПЕХА ИЛИ НЕУДАЧИ
          if (json.result == "success") {
            // Если сообщение отправлено
            alert("Данные отправлены");
          } else {
            // Если произошла ошибка
            alert("Ошибка. Сообщение не отправлено");
          }
          // Если не удалось связаться с php файлом
        } else {
          alert("Ошибка сервера. Номер: " + req.status);
        }
      };*/
    }
  }
}
</script>
