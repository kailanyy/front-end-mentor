<template>
  <nav v-if="isOpen" class="absolute z-10 top-0 left-0 w-full md:mt-16 font-LeagueSpartanRegular md:hidden">
    <ul class="flex bg-white shadow-md p-2 space-x-2 h-[100px] justify-center items-center">
      <li v-for="(item, index) in dropdownItems" :key="index">
        <button class="px-4 py-2 text-gray-800 font-bold cursor-pointer">{{ item.text }}</button>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: {
    isOpen: Boolean,
    dropdownItems: Array,
  },
  data() {
    return {
    };
  },
};
</script>

<style scoped></style>