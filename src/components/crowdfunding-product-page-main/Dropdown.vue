<template>
  <div class="z-50 absolute flex md:hidden sm:block">
    <img @click="toggle" class="md:hidden sm:block cursor-pointer" src="./starter/images/icon-hamburger.svg">
    <div v-show="dropdownActive"
      class="bg-white text-black font-commissionerRegular z-50 flex flex-col justify-center absolute rounded-md shadow-md h-[150px] w-[200px] right-0 top-10">
      <slot />
    </div>
  </div>
</template>
  <!-- <div @click="open = !open" class="cursor-pointer">
    <img v-if="!open" class="md:hidden sm:block" src="./starter/images/icon-hamburger.svg">
    <img v-else class="md:hidden sm:block" src="./starter/images/icon-close-menu.svg">
  </div>
  
  <div class="flex absolute">
    <div v-if="open"">
    </div>
  </div> -->
<script>
export default {
  props: ["dropdownActive"],
  setup(props, { emit }) {
    const toggle = () => {
      emit('toggle')
    }
    return { toggle, open: false }
  }
}
</script>

<style></style>