<template>
  <div class="z-50 absolut1e flex md:hidden sm:block">
    <img v-if="!dropdownActive" @click="toggle" class="md:hidden sm:block cursor-pointer"
      src="./starter/images/icon-hamburger.svg">
    <img v-else @click="toggle" class="md:hidden sm:block cursor-pointer" src="./starter/images/icon-close-menu.svg">
    <div v-show="dropdownActive"
      class="bg-white text-black font-commissionerRegular z-50 flex flex-col justify-center absolute rounded-md shadow-md h-[150px] w-[200px] right-0 top-10">
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