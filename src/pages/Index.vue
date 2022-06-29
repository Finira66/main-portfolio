<template>
  <AboutMe/>
  <MainInfo/>
  <LastWorks/>
  <ContactMe/>
</template>

<script>
import AboutMe from '@/components/AboutMe.vue'
import MainInfo from "@/components/MainInfo";
import LastWorks from "@/components/LastWorks";
import ContactMe from "@/components/ContactMe";

export default {
  name: "IndexPage",
  components: {
    AboutMe,
    MainInfo,
    LastWorks,
    ContactMe
  }
}
</script>

<style scoped>

</style>
