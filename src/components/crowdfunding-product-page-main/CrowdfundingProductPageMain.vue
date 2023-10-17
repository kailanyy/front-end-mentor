<template>
  <div class="bg-gray-100 md:h-screen md:w-screen">
    <header class="flex justify-items-end items-center">
      <div class="flex relative justify-around">
        <img class="md:w-screen z-10 hidden md:block" src="./starter/images/image-hero-desktop.jpg">
        <img class="md:hidden" src="./starter/images/image-hero-mobile.jpg">
        <div class="flex absolute w-full text-white font-commissionerRegular m-4">
          <nav class="flex justify-end gap-8 w-full z-10 mx-12 items-center">
            <h1 class="w-full font-commissionerBold sm:text-2xl">crowdfund</h1>
            <a class="hidden md:block">About</a>
            <a class="hidden md:block">Discover</a>
            <a class="hidden md:block">Get Started</a>
            <Dropdown />
          </nav>
        </div>
      </div>
    </header>

    <div class="md:absolute md:top-8 md:p-24 p-5 bg-gray-100 z-50">
      <div class="bg-white rounded-md flex flex-col relative z-50 shadow-sm">
        <div class="px-8 mt-8 mb-6">
          <div class="flex flex-col items-center sm:text-center">
            <img class="z-50 absolute -top-8" src="./starter/images/logo-mastercraft.svg">
            <h1 class="font-bold text-2xl mx-4 mt-4 mb-2 font-commissionerBold z-50">Mastercraft Bamboo Monitor Riser</h1>
            <span class="text-sm text-dark-gray font-commissionerRegular font-normal">
              A beautiful & handcrafted monitor stand to reduce neck and eye strain.</span>
          </div>
        </div>

        <Modal :cards="cards" />

        <div class="flex md:justify-between sm:justify-around w-full md:px-8 mb-8 items-center font-commissionerBold">
          <!-- <button @click="openModal = !openModal"
            class="flex justify-center items-center h-14 w-44 rounded-full bg-moderate-cyan hover:dark-cyan duration-200 text-white text-sm">
            Back this project
          </button> -->
          <!-- {{ console.log(cards) }} -->
          <!-- <button
            class="flex sm:flex-col md:flex-row rounded-full bg-[#f3f3f3] text-dark-gray font-bold text-sm items-center md:w-40 sm:invisible md:visible ">
            <img class="md:mr-4 visible" src="./starter/images/icon-bookmark.svg">
            <span class="md:visible">Bookmark</span>
          </button> -->
        </div>
      </div>

      <div class="bg-white rounded-md p-2 mt-4  shadow-sm">
        <div
          class="sm:flex sm:flex-col md:flex-row content-center md:justify-start inline-grid grid-cols-3 md:gap-x-20 flex-wrap md:mx-8 mt-4 mb-4">
          <div class="text-2xl -mb-2 sm:mb-4" v-for="backer in backers" :title="backer.title" :key="backer.title">
            <p class="font-commissionerBold">{{ backer.title }}</p>
            <p class="font-commissionerRegular text-dark-gray text-sm sm:text-xs sm:mt-1">{{ backer.description }}</p>
          </div>
        </div>
        <div class="bg-[#f3f3f3] rounded-full mb-8 mx-8">
          <div class="flex bg-moderate-cyan h-2 w-10/12 rounded-full"></div>
        </div>
      </div>

      <div class="bg-white mt-4 rounded-md p-8 shadow-sm">
        <h1 class="font-commissionerBold text-lg mb-6">About this project</h1>
        <p class="text-sm text-dark-gray mb-6 font-commissionerRegular">The Mastercraft Bamboo Monitor Riser is a sturdy
          and stylish platform that
          elevates your screen
          to a more comfortable viewing height. Placing your monitor at eye level has the potential to improve
          your posture and make you more comfortable while at work, helping you stay focused on the task at hand.
        </p>
        <p class="text-sm text-dark-gray font-commissionerRegular mb-8">Featuring artisan craftsmanship, the simplicity of
          design creates extra desk
          space below your
          computer
          to allow notepads, pens, and USB sticks to be stored under the stand.
        </p>

        <div class="border-2 rounded-md p-7 mb-4" v-for="card in cards" :key="card.title">
          <div class="flex sm:flex-col justify-between mb-6">
            <h1 class="font-commissionerBold">{{ card.title }}</h1>
            <h1 class="text-moderate-cyan font-commissionerRegular">{{ card.pledge }}</h1>
          </div>
          <p class="text-sm text-dark-gray">
            {{ card.description }}
          </p>
          <div class="flex sm:flex-col justify-between mt-6">
            <h1 class="font-commissionerBold text-2xl sm:mb-4"> {{ card.amount }}
              <span class="font-commissionerRegular text-dark-gray text-sm">left</span>
            </h1>
            <button
              class="flex justify-center items-center h-14 w-44 rounded-full bg-moderate-cyan hover:dark-cyan duration-200 text-white text-sm">
              Select Reward
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
 
<script>
import Dropdown from './Dropdown.vue'
import Modal from './Modal.vue'

export default {
  components: { Modal, Dropdown },
  setup() {
    const backers = ([
      { title: '$89,914', description: 'of $100,000 backed' },
      { title: '5,007', description: 'total backers' },
      { title: '56', description: 'days left' }
    ])
    const cards = (
      [{
        title: 'Bamboo Stand', pledge: 'Pledge $25 or more',
        description: "You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list.",
        amount: '101'
      },
      {
        title: 'Black Edition Stand', pledge: 'Pledge $75 or more',
        description: "You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
        amount: '64'
      },
      {
        title: 'Mahogany Special Edition', pledge: 'Pledge $200 or more',
        description: "You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
        amount: '0'
      }
      ]
    )

    return { backers, cards, Modal }
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
</style>