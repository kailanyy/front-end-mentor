<template>
  <div class=" bg-white rounded-md p-2 mt-4 shadow-sm">
    <div
      class="sm:flex sm:flex-col md:flex-row content-center md:justify-start inline-grid grid-cols-3 md:gap-x-20 flex-wrap md:mx-8 mt-4 mb-4">
      <div class="text-2xl -mb-2 sm:mb-4" v-for=" backer  in  backers " :title="backer.title" :key="backer.title">
        <p class="font-commissionerBold">{{ pledgeValue }}</p>
        <p class="font-commissionerRegular text-dark-gray text-sm sm:text-xs sm:mt-1">{{ backer.description }}
        </p>
      </div>
    </div>
    <div class="bg-[#f3f3f3] rounded-full mb-8 mx-8">
      <div class="flex bg-moderate-cyan h-2 w-10/12 rounded-full"></div>
    </div>
  </div>
</template>

<script>
import { backers } from './content/project-status';
import { watch } from 'vue'

export default {
  props: {
    pledgeValue: Number
  },
  setup(props) {
    watch(
      () => props.pledgeValue,
    )
    return { backers }
  }
}
</script>