<template>
  <div class="main-info">
    <div class="container">
      <div class="main-info__inner">
        <ContactsList/>
        <MainSkills/>
      </div>
    </div>
  </div>
</template>

<script>
import MainSkills from "@/components/MainSkills";
import ContactsList from "@/components/ContactsList";

export default {
  name: "MainInfo",
  components: {
    ContactsList,
    MainSkills,
  }
}
</script>

