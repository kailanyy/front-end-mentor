<template>
  <header class="fixed top-0 inset-x-0  ">
    <div class="flex sm:justify-between md:justify-start text-white m-[4.7vh]">
      <img class="sm:block md:hidden sm:object-contain cursor-pointer" @click="toggleDropdown" v-if="!isDropdownOpen"
        src="./assets/images/icon-hamburger.svg" alt="">
      <img class="sm:block md:hidden sm:object-contain cursor-pointer z-50" @click="toggleDropdown" v-else
        src="./assets/images/icon-close.svg" alt="">
      <h1 class="md:mr-14 text-3xl font-LeagueSpartanRegular sm:mr-[40%]">room</h1>
      <ul class="flex gap-[20px] font-LeagueSpartanRegular text-lg items-center sm:hidden md:flex">
        <li v-for="(item, index) in dropdownItems" :key="index">
          <a class="cursor-pointer font-bold">{{ item.text }}</a>
        </li>
      </ul>
      <Dropdown :isOpen="isDropdownOpen" :dropdownItems="dropdownItems" />
    </div>
  </header>
</template>

<script>
import Dropdown from './Dropdown.vue';

export default {
  components: {
    Dropdown,
  },
  data() {
    return {
      isDropdownOpen: false,
      dropdownItems: [
        { text: 'home' },
        { text: 'shop' },
        { text: 'about' },
        { text: 'contact' },
      ],
    };
  },
  methods: {
    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen;
    },
  },
};
</script>

<style scoped>
ul {
  li {
    position: relative;
    list-style: none;

    a {
      position: relative;
      text-decoration: none;
      color: inherit;
      background-size: 200% 100%;
      background-position: -100%;
      background-clip: text;
      transition: all 0.3s ease-in-out;
    }

    a:hover {
      background-position: 0;

      &::before {
        width: 100%;
      }
    }

    a::before {
      content: '';
      background: white;
      display: block;
      position: absolute;
      bottom: -10px;
      left: 50%;
      transform: translateX(-50%);
      width: 0;
      height: 2px;
      transition: all 0.3s ease-in-out;
    }
  }
}
</style>