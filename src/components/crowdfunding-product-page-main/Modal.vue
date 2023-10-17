<template>
  <div>
    <div @click="open = !open">
      <button
        class="flex justify-center items-center h-14 w-44 rounded-full bg-moderate-cyan hover:dark-cyan duration-200 text-white text-sm">
        Back this project
      </button>
    </div>
    <div v-if="open" class="rounded-md p-10 shadow-md">
      <h1 class="font-commissionerBold text-lg  mb-2">Back this project</h1>
      <p class="text-sm text-dark-gray mb-6 font-commissionerRegular">
        Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?
      </p>
      <div v-for="card in cards" :key="card.title" class="border-2 rounded-md p-7 mb-4">
        <div class="flex flex-row justify-between">
          <div class="flex flex-row gap-4">
            <input type="radio" class="h-6 w-6 mr-2">
            <h1 class="font-commissionerBold">{{ card.title }}</h1>
            <h1 class="text-moderate-cyan font-commissionerBold">{{ card.pledge }}</h1>
          </div>
          <h1 class="font-commissionerBold text-2xl sm:mb-4"> {{ card.amount }}
            <span class="font-commissionerRegular text-dark-gray text-sm">left</span>
          </h1>
        </div>
        <p class="text-sm text-dark-gray">
          {{ card.description }}
        </p>
        <div class="flex flex-row items-center">
          <h1 class="text-dark-gray">
            Enter your plegde
          </h1>
          <div>
            <button
              class="flex p-2 font-commissionerBold text-dark-gray flex-row items-center border-moderate-cyan rounded-full bg-white border-[1.5px] h-12">
              <p class="ml-4">
                $
              </p>
              <input type="number" class="w-16 outline-none text-black text-center">
            </button>
            <button class="h-12 w-28 rounded-full bg-moderate-cyan hover:dark-cyan duration-200 text-white text-sm">
              Continue
            </button>
          </div>

        </div>
      </div>
      <div class="top-0 left-0 -z-10 absolute bg-black opacity-30"></div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  props: {
    cards: {
      type: Array,
      default: () => {
        return []
      }
    }
  },

  setup() {
    const open = ref(false);

    const close = () => {
      open.value = false;
    }

    return { open, close }
  }
}
</script>

<style></style>