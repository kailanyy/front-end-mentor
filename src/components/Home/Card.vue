<template>
  <div class="card flex flex-row items-center m-4 p-4 rounded-2xl">
    <div @click="toggleModal = !toggleModal" class="cards">
      <h2 class="title-card highlight md:text-2xl font-bold">{{ title }}</h2>
      <p class="text-md text-card">{{ description }}</p>
    </div>

    <img :src="image" class="md:w-72 w-36 rounded-lg shadow-lg">

    <div v-if="toggleModal"
      class="p-8 fixed overflow-x-hidden overflow-y-auto inset-0 flex justify-center items-center z-50 drop-shadow-md">
      <div class="relative mx-auto w-auto max-w-2xl">
        <div class="flex md:flex-row flex-col items-center w-full rounded shadow-2xl">
          <div class="flex flex-col w-full md:w-auto items-end mr-4 md:mr-0">
            <v-icon name="bi-x-lg" fill="black" @click="toggleModal = false" class="cursor-pointer mt-2" />
          </div>
          <img :src="image" class="p-4 w-80">
          <div class="flex flex-col justify-center items-center">
            <p class="text-2xl font-bold text-center">Header Text</p>
            <span class="m-4 md:m-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
            <router-link :to="{ name: 'about' }"
              class="rounded-md bg-gray-500 hover:bg-emerald-500 duration-200 text-white px-4 mt-4 mb-3">
              Button
            </router-link>
          </div>
        </div>
      </div>
    </div>

    <div v-if="toggleModal" class="absolute inset-0 z-40 opacity-80 bg-neutral-50"></div>
  </div>
</template>

<script>
import NewsletterSignUpForm from '../NewsletterSignUpForm/NewsletterSignUpForm.vue';
export default {
  props: {
    title: '',
    description: '',
    to: '',
    image: ''
  },
  data() {
    return { NewsletterSignUpForm, toggleModal: false }
  }
}
</script>

<style scoped>
div h2,
p,
.title-card {
  font-family: 'Inter-Regular';
  color: #1B0811;
}

.text-card {
  font-family: 'Inter-Light';
}

.card,
.text-card,
.title-card {
  background-color: #f4ebf0;
}

.highlight {
  z-index: 5;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}

.highlight::before {
  content: "";
  height: 30%;
  width: 100%;
  display: block;
  z-index: -5;
  opacity: 30%;
  position: absolute;
  transition: all 0.3s ease;
  background: #d41d6c;
}

.cards:hover>.highlight::before {
  transition: all 0.3s ease;
  height: 50%;
  width: 100%;
}

/* .title-card:hover:after,
.title-card:hover {
  transform: scaleX(1);
}

.title-card:after {
  transition: 0.25s ease;
  content: "";
  display: block;
  width: 33%;
  height: 20px;
  background-color: #d41d6c;
  transform: scaleY(0);
  position: absolute;
  bottom: 0px;
  left: 0;
  opacity: 30%;
} */
</style>