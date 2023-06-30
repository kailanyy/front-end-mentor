<script setup>
</script>

<template>
  <div>
    <router-link :to="{name: 'home'}">home</router-link>
    <router-link :to="{name: 'about'}">about</router-link>
  </div>
  <router-view /> <!-- <Home /> -->
</template>

<style scoped>
@font-face {
  font-family: "Roboto";
  src: local("Roboto"),
    url(./assets/NewsletterSignUpForm/fonts/Roboto-Bold.ttf) format("truetype");
  font-weight: bold; /* 700 */
}

@font-face {
  font-family: "Roboto";
  src: local("Roboto"),
    url(./assets/NewsletterSignUpForm/fonts/Roboto-Regular.ttf) format("truetype");
  font-weight: normal; /* 400 */
}
</style>
