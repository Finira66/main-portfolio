<template>
  <div class="contact">
    <div class="title title--start title--mb-md">Contact</div>
    <div class="contact__box">
      <a
          v-for="contact in contacts"
          :key="contact.id"
          :href="contact.attributes.link" class="contact__item">
        <img :src="setImageUrl(contact.attributes.image.data.attributes.url)" alt="icon" class="contact__icon">
        <div class="contact__name">{{ contact.attributes.name }}</div>
      </a>
      <!--      <a href="#" class="contact__item">
              <img src="@/assets/images/icons/mail.svg" alt="" class="contact__icon">
              <div class="contact__name">E-mail</div>
            </a>-->
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactsList",
  data() {
    return {
      contacts: []
    }
  },

  methods: {
    async getContacts() {
      try {
        const query = this.$qs.stringify(
            {
              populate: 'image',
            },
            {
              encodeValuesOnly: true
            }
        )

        const response = await this.axios.get(`contacts?${query}`);
        this.contacts = response.data.data;
      } catch (e) {
        console.log(e);
      }
    },
    setImageUrl(image) {
      return process.env.VUE_APP_URL + image;
    }
  },
  async mounted() {
    await this.getContacts();
  }
}
</script>

<style scoped>

</style>
