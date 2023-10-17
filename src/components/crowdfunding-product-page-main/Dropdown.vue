<template>
  <div @click="open = !open" class="cursor-pointer">
    <img v-if="!open" class="md:hidden sm:block" src="./starter/images/icon-hamburger.svg">
    <img v-else class="md:hidden sm:block" src="./starter/images/icon-close-menu.svg">
  </div>
  <div class="flex absolute bg-white rounded-md top-10 shadow-md">
    <div v-if="open" class="flex flex-col justify-center items-start w-48 h-28 m-3 text-black">
      <span class="cursor-pointer mb-4">About</span>
      <span class="cursor-pointer mb-4">Discover</span>
      <span class="cursor-pointer">Get Started</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return { open: false }
  }
}
</script>

<style scoped>
</style>