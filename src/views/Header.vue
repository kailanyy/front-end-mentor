<template>
  <header class="mb-8 m-0 p-4 bg-[#617f66] text-white">
    <h1 class="pl-8">Kailany Souza</h1>
    <nav class="flex justify-items-end items-center text-white font-InterSemiBold tracking-[1px]">
      <a href="">contato</a>
    </nav>
  </header>
</template>

<script>
import Sidebar from "./Sidebar.vue";
export default {
  components: { Sidebar },
  data() {
    return {}
  }
}
</script>

<style scoped>
@font-face {
  font-family: 'Inter-Light';
  src: url('../assets/NewsletterSignUpForm/fonts/Inter-Light.ttf') format('truetype')
}

@font-face {
  font-family: 'Inter-ExtraLight';
  src: url('../assets/NewsletterSignUpForm/fonts/Inter-ExtraLight.ttf') format('truetype')
}

@font-face {
  font-family: 'Inter-Regular';
  src: url('../assets/NewsletterSignUpForm/fonts/Inter-Regular.ttf') format('truetype')
}

@font-face {
  font-family: 'Inter-SemiBold';
  src: url('../assets/NewsletterSignUpForm/fonts/Inter-SemiBold.ttf') format('truetype')
}

@font-face {
  font-family: 'Inter-Thin';
  src: url('../assets/NewsletterSignUpForm/fonts/Inter-Thin.ttf') format('truetype')
}

header h1 {
  margin-right: auto;
}

nav a:hover {
  cursor: pointer;
}
</style>