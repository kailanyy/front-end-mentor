<template>
  <div class="flex justify-end cursor-pointer">
    <div @click="open = !open" class="p-2 z-10 w-full cursor-pointer">
      <v-icon v-if="!open" name="md-densitymedium-round" scale="1" fill="black" />
      <v-icon v-else name="md-clear-round" fill="black" />
    </div>
    <div class="flex absolute bg-white rounded-bl-2xl top-10">
      <div v-if="open" class="flex flex-col items-center justify-center p-10 h-96">
        <span>Lorem ipsum</span>
        <span>Lorem ipsum</span>
        <span>Lorem ipsum</span>
      </div>
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

<style></style>