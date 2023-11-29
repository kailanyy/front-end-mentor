<template>
  <div class="w-screen flex flex-col items-center bg-gray-100">
    <Header />
    <div class="md:w-9/12 sm:p-6 z-50 lg:w-9/12 bg-gray-100">
      <div class="bg-white rounded-md flex flex-col relative z-50 shadow-sm">
        <div class="px-8 mt-8 mb-6">
          <div class="flex flex-col items-center sm:text-center">
            <img class="z-50 absolute -top-8" src="./starter/images/logo-mastercraft.svg">
            <h1 class="font-bold text-2xl mx-4 mt-4 mb-2 font-commissionerBold z-50">
              Mastercraft Bamboo Monitor Riser
            </h1>
            <span class="text-sm text-dark-gray font-commissionerRegular font-normal">
              A beautiful & handcrafted monitor stand to reduce neck and eye strain.</span>
          </div>
        </div>
        <div class="flex md:justify-between sm:justify-around w-full md:px-8 mb-8 items-center font-commissionerBold">
          <button @click="toggleModal" type="button" class=" flex justify-center items-center h-14 w-44 rounded-full bg-moderate-cyan hover:bg-dark-cyan
            duration-200 text-white text-sm">
            Back this project
          </button>
          <button @click="isActive = !isActive" :class="{ 'text-dark-cyan': !isActive, 'text-dark-cyan': isActive }"
            class="flex sm:flex-col md:flex-row rounded-full md:bg-[#f3f3f3] sm:bg-transparent text-dark-gray font-bold text-sm items-center pr-6 ">
            <img class="md:mr-4 visible" src="./starter/images/icon-bookmark.svg">
            <div class="sm:hidden md:block">
              <span v-if="!isActive" class="md:block">Bookmark</span>
              <span v-else class="md:block text-dark-cyan">Bookmarked</span>
            </div>
          </button>
        </div>
      </div>

      <ProjectStatus :pledgeValue="pledgeValue" />

      <div class="bg-white mt-4 rounded-md p-8 shadow-sm">
        <h1 class="font-commissionerBold text-lg mb-6">About this project</h1>
        <p class="text-sm text-dark-gray mb-6 font-commissionerRegular">
          The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen
          to a more comfortable viewing height. Placing your monitor at eye level has the potential to improve
          your posture and make you more comfortable while at work, helping you stay focused on the task at hand.
        </p>
        <p class="text-sm text-dark-gray font-commissionerRegular mb-8">
          Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your computer
          to allow notepads, pens, and USB sticks to be stored under the stand.
        </p>
        <Cards :toggleModal="toggleModal" />
      </div>
    </div>

    <Transition name="modal-inner">
      <Modal @close="toggleModal" :modalActive="modalActive">
        <div class="w-full">
          <h1 class="font-commissionerBold text-lg mb-2">Back this project</h1>
          <p class="text-sm text-dark-gray mb-6 font-commissionerRegular">
            Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?
          </p>
        </div>
        <div v-for="card in cards " :key="card.title" class="border-2 rounded-md p-7 mb-4 min-w-full"
          :class="{ 'border-inherit': !isSelected(card.id), 'border-dark-cyan': isSelected(card.id) }">
          <div class="flex flex-col justify-between">
            <div class="flex justify-between">
              <div @click="selectedBackerPackage = card.id" class="flex flex-row gap-4 font-commissionerBold mb-4">
                <input :value="card.id" :checked="isSelected(card.id)" type="radio" name="inputSelected"
                  class="h-6 w-6 mr-2">
                <h1 class="hover:text-dark-cyan hover:cursor-pointer">{{ card.title }}</h1>
                <h1 class="text-moderate-cyan font-commissionerRegular hover:font-commissionerBold">{{ card.pledge }}</h1>
              </div>
              <h1 class="text-2xl font-commissionerBold sm:mb-4"> {{ card.amount }}
                <span class="font-commissionerRegular text-dark-gray text-sm">left</span>
              </h1>
            </div>
            <p class="text-sm text-dark-gray">
              {{ card.description }}
            </p>
            <div v-if="isSelected(card.id)" class="flex flex-row items-center justify-between">
              <h1 class="text-dark-gray">
                Enter your plegde
              </h1>
              <div class="flex gap-4">
                <button
                  class="flex p-2 font-commissionerBold text-dark-gray flex-row items-center border-moderate-cyan rounded-full bg-white border-[1.5px] h-12">
                  <p class="ml-4"> $ </p>
                  <input type="number" v-model="pledgeValue" class="w-16 outline-none text-black text-center">
                </button>
                <button type="button" @click="modalSuccess = !modalSuccess; modalActive = !modalActive"
                  class="h-12 w-28 rounded-full bg-moderate-cyan hover:bg-dark-cyan duration-200 text-white text-sm font-commissionerBold">
                  Continue
                </button>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </Transition>
    <Transition name="modal-inner">
      <Modal @close="closeModalSuccess" :modalActive="modalSuccess">
        <div class="flex flex-col items-center w-96">
          <img class="mb-8" src="../crowdfunding-product-page-main/starter/images/icon-check.svg" alt="icon check modal">
          <h1 class="font-commissionerBold text-lg mb-2">Thanks for your support!</h1>
          <p class="text-sm text-dark-gray mb-6 font-commissionerRegular">
            Your pledge brings us one step closer to sharing Mastercraft Bamboo Monitor Riser worldwide.
            You will get an email once our campaign is completed.
          </p>
          <button @click="closeModalSuccess"
            class="h-12 w-28 rounded-full bg-moderate-cyan hover:bg-dark-cyan duration-200 text-white text-sm font-commissionerBold">
            Got it!
          </button>
        </div>
      </Modal>
    </Transition>
  </div>
</template>
<script>
import Header from './Header.vue';
import Modal from './Modal.vue'
import { cards } from './content/cards';
import Cards from './Cards.vue'
import ProjectStatus from './ProjectStatus.vue';

import { ref } from 'vue';

export default {
  components: { Modal, Header, Cards, ProjectStatus },
  setup() {
    const modalActive = ref(false);
    const modalSuccess = ref(false);
    const isActive = ref(false);
    const selectedBackerPackage = ref(false);
    const pledgeValue = ''

    const toggleModal = () => {
      modalActive.value = !modalActive.value
    }

    const closeModalSuccess = () => {
      modalSuccess.value = !modalSuccess.value
    }

    const isSelected = (backerPackageId) => selectedBackerPackage.value === backerPackageId

    return { pledgeValue, cards, isSelected, selectedBackerPackage, Modal, modalActive, toggleModal, closeModalSuccess, isActive, modalSuccess, Header, Cards, ProjectStatus }
  }
}
</script>

<style scoped>
@font-face {
  font-family: 'Commissioner-Bold';
  src: url('../../assets/NewsletterSignUpForm/fonts/Commissioner-Bold.ttf') format('truetype')
}

@font-face {
  font-family: 'Commissioner-Regular';
  src: url('../../assets/NewsletterSignUpForm/fonts/Commissioner-Regular.ttf') format('truetype')
}

input[type='radio'] {
  accent-color: #147b74;
}

.modal-inner-leave-to {
  opacity: 0;
}

.modal-inner-enter-active {
  transition: all 0.2s cubic-bezier(0.52, 0.02, 0.29, 1.02) 0.15s;
}

.modal-inner-leave-active {
  transition: all 0.3s cubic-bezier(0.52, 0.02, 0.29, 1.02);
}

.modal-inner-enter-from {
  opacity: 0;
  transform: scale(0.8);
}

.modal-inner-leave-to {
  transform: scale(0.8);
}
</style>