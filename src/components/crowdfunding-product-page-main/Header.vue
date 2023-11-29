<template>
  <div class="flex flex-col justify-between justify-items-end items-center relative">
    <img class="md:w-screen z-10 hidden md:block" src="./starter/images/image-hero-desktop.jpg">
    <img class="md:hidden" src="./starter/images/image-hero-mobile.jpg">
    <div class="flex absolute w-full text-white font-commissionerRegular m-4">
      <nav class="flex justify-center gap-8 w-full z-10 mx-12 items-center">
        <h1 class="w-[70%] font-commissionerBold sm:text-2xl">crowdfund</h1>
        <a href="" class="hidden md:block">About</a>
        <a href="" class="hidden md:block">Discover</a>
        <a href="" class="hidden md:block">Get Started</a>
        <Dropdown @toggle="toggleDropdown" :dropdownActive="dropdownActive">
          <div class="grid grid-cols-1 divide-y gap-4">
            <div @click="toggleDropdown">
              <h1 class="cursor-pointer ml-6">About</h1>
            </div>
            <div>
              <h1 class="cursor-pointer ml-6">Discover</h1>
            </div>
            <div>
              <h1 class="cursor-pointer ml-6">Get Started</h1>
            </div>
          </div>
        </Dropdown>
      </nav>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import Dropdown from './Dropdown.vue';

export default {
  components: { Dropdown },
  setup() {
    const dropdownActive = ref(true);
    const toggleDropdown = () => {
      dropdownActive.value = !dropdownActive.value
    }
    return { Dropdown, toggleDropdown, dropdownActive }
  }
}
</script>

<style></style>
