<template>
  <div v-show="modalActive"
    class="overflow-auto min-h-fit max-h-[90vh] flex flex-col items-center fixed z-50 bg-white rounded-md p-10 m-10 shadow-md">
    <img @click="close" class="cursor-pointer absolute left-[95%]" src=".../../starter/images/icon-close-modal.svg"
      alt="icon close modal">
    <slot />
  </div>
</template>

<script>
import { watch } from 'vue'
export default {
  props: ["modalActive"],
  setup(props, { emit }) {
    watch(
      () => props.modalActive,
    )
    const close = () => {
      emit('close')
    }
    return { close }
  }
}
</script>

<style></style>