<template>
  <div class="z-50 absolut1e flex md:hidden sm:block">
    <img v-if="!dropdownActive" @click="toggle" class="md:hidden sm:block cursor-pointer"
      src="./starter/images/icon-hamburger.svg">
    <img v-else @click="toggle" class="md:hidden sm:block cursor-pointer" src="./starter/images/icon-close-menu.svg">
    <div v-show="dropdownActive"
      class=" bg-white m-0 max-w-[95%] left-[50%] ml-[-47.5%] text-black font-commissionerRegular w-full h-[150px] z-50 flex flex-col justify-center absolute rounded-md shadow-md  right-0 top-10">
      <slot />
    </div>
  </div>
</template>
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