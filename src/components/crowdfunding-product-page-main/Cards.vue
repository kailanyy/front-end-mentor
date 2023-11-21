<template>
  <div class="border-2 rounded-md p-7 mb-4" v-for=" card in cards " :key="card.title">
    <div class="flex sm:flex-col justify-between mb-6">
      <h1 class="font-commissionerBold ">
        {{ card.title }}
      </h1>
      <h1 class="text-moderate-cyan font-commissionerRegular">
        {{ card.pledge }}
      </h1>
    </div>
    <p class="text-sm text-dark-gray">
      {{ card.description }}
    </p>
    <div class="flex sm:flex-col justify-between mt-6">
      <h1 class="font-commissionerBold text-2xl sm:mb-4">
        {{ card.amount }}
        <span class="font-commissionerRegular text-dark-gray text-sm">
          left
        </span>
      </h1>
      <button @click="toggleModal"
        class="flex justify-center items-center cursor-pointer h-14 w-44 rounded-full bg-moderate-cyan hover:bg-dark-cyan duration-200 text-white text-sm">
        Select Reward
      </button>
    </div>
  </div>
</template>

<script>
import { cards } from './content/cards';

export default {
  props: ["toggleModal"],
  setup() {
    return { cards }
  }
}
</script>

<style></style>