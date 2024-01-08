<template>
  <transition name="slide">
    <router-link :to="to"
      class="flex md:flex-col items-center w-5/12 h-full p-2 bg-[#F5F5F5] drop-shadow-sm duration-100 min-h-[217.99px]"
      @click="openModal = true">
      <h2 class="title-card text-black highlight md:text-3xl font-bold font-SpaceMonoRegular">{{ title }}</h2>
      <div class="flex justify-center text-center">
        <p class="text-md p-2 mt-4 w-9/12 mb-4 font-SpaceMonoRegular">{{ description }}</p>
      </div>
      <img :src="image" class="w-3/4 rounded-lg md:mt-0">
    </router-link>
  </transition>
</template>

<script>
import { ref } from 'vue';

export default {
  props: {
    title: '',
    description: '',
    to: '',
    image: '',
  },
  setup() {
    const openModal = ref(false);

    const closeModal = () => {
      openModal.value = false;
    }

    return { openModal, closeModal }
  }
}
</script>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.5s;
}

.slide-enter,
.slide-leave-to {
  transform: translateY(20px);
}
</style>