<template>
  <div :key="currentIndex">
    <div class="md:grid md:grid-cols-2 sm:flex sm:flex-col">
      <div class="relative">
        <Header class="z-50" />
        <div class="relative cursor-pointer flex">
          <img :src="section[currentIndex].slide" alt="" class="w-full h-auto" />
          <ul class="right-0 -bottom-0 flex absolute">
            <li>
              <button @click="prevSection"
                class="bg-black hover:bg-very-dark-gray w-[30px] h-[50px] items-center justify-center flex"><img
                  src="./assets/images/icon-angle-left.svg" alt="">
              </button>
            </li>
            <li>
              <button @click="nextSection"
                class="bg-black hover:bg-very-dark-gray w-[30px] h-[50px] items-center justify-center flex"><img
                  src="./assets/images/icon-angle-right.svg" alt="">
              </button>
            </li>
          </ul>
        </div>
      </div>
      <section class="flex flex-col items-center justify-center font-LeagueSpartan">
        <div class="w-[60%] sm:w-[100%] sm:p-[8%]">
          <h1 class="font-bold text-4xl mb-4 w-[80%] sm:w-[100%]">{{ section[currentIndex].title }}</h1>
          <p class="text-dark-gray text-sm font-medium">
            {{ section[currentIndex].description }}
          </p>
          <button class="flex items-center mt-4 cursor-pointer uppercase tracking-[10px] font-bold mr-4 hover:opacity-75">
            Shop now
            <img src="./assets/images/icon-arrow.svg" class="hover:text-dark-gray" alt="">
          </button>
        </div>
      </section>
    </div>
    <section class="flex justify-center sm:flex-col md:flex-row sm:mt-8 md:mt-0">
      <img src="./assets/images/image-about-dark.jpg" alt="">
      <div class="m-[3%] sm:p-[8%] md:p-0">
        <h1 class="font-bold text-md uppercase mb-2 tracking-[8px] sm:tracking-widest">About our furniture</h1>
        <p class="text-dark-gray text-sm font-medium w-[85%] sm:w-[100%]">
          Our multifunctional collection blends design and function to suit your individual taste.
          Make each room unique, or pick a cohesive theme that best express your interests and what
          inspires you. Find the furniture pieces you need, from traditional to contemporary styles
          or anything in between. Product specialists are available to help you create your dream space.
        </p>
      </div>
      <img src="./assets/images/image-about-light.jpg" alt="">
    </section>
  </div>
</template>

<script>
import Header from './Header.vue';
import imageHero1 from './assets/images/desktop-image-hero-1.jpg';
import imageHero2 from './assets/images/desktop-image-hero-2.jpg';
import imageHero3 from './assets/images/desktop-image-hero-3.jpg';
export default {
  components: {
    Header
  },
  data() {
    return {
      currentIndex: 0,
      section: [
        {
          title: 'Discover innovative ways to decorate',
          description: 'We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.',
          slide: imageHero1
        },
        {
          title: 'We are available all across the globe',
          description: "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
          slide: imageHero2
        },
        {
          title: 'Manufactured with the best materials',
          description: "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
          slide: imageHero3
        },
      ],
    };
  },
  methods: {
    nextSection() {
      this.currentIndex = (this.currentIndex + 1) % this.section.length;
    },
    prevSection() {
      this.currentIndex = (this.currentIndex - 1 + this.section.length) % this.section.length;
    },
  },
};
</script>