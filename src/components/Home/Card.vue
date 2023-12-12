<template>
  <div class="flex">
    <router-link :to="to"
      class="card bg-card-home flex md:flex-row items-center border-2 border-[#617f66] m-4 p-4 cursor-pointer hover:translate-y-1 duration-100 max-w-md min-h-[217.99px]"
      @click="openModal = true">
      <div class="cards font-InterRegular bg-card-home">
        <h2 class="title-card bg-card-home text-[#617f66] highlight md:text-2xl font-bold">{{ title }}</h2>
        <p class="text-md font-InterLight">{{ description }}</p>
      </div>
      <img :src="image" class="md:w-52 w-36 rounded-lg max-w-screen-sm">
    </router-link>
  </div>
</template>

<script>
import NewsletterSignUpForm from '../NewsletterSignUpForm/NewsletterSignUpForm.vue';
import { ref } from 'vue';

export default {
  props: {
    title: '',
    description: '',
    to: '',
    image: ''
  },
  setup() {
    const openModal = ref(false);

    const closeModal = () => {
      openModal.value = false;
    }

    return { NewsletterSignUpForm, openModal, closeModal }
  }
}
</script>

<style scoped>
.card:hover {
  background-color: #617f66;
}
</style>