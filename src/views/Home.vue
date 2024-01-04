<template>
  <div>
    <Header />
    <section class="absolute w-full h-full z-0 font-PoppinsRegular">
      <div class="home-content table w-[100%] h-[100%] min-h-[100%] text-center">
        <div class="table-cell align-middle">
          <div class="mr-auto ml-auto">
            <h1 class="text-4xl uppercase text-white">Kailany Souza</h1>
            <h1 class="uppercase text-white">Desenvolvedora Full-Stack</h1>
            <button data-toggle="closed" @click="toggleSections"
              class="hover:bg-[#e58ffa] trigger btn bg-[#DC84F3] transition ease-in-out delay-150 hover:scale-110">
              Desafios do Frontend Mentor
            </button>
          </div>
        </div>
        <v-icon name="md-keyboardarrowdown" animation="float" color="white" scale="2"
          class="z-40 absolute bottom-[100px] left-[665px] cursor-pointer" @click="toggleSections" />
      </div>
    </section>

    <section id="portfolio" class="flex justify-center ">
      <div class="portfolio flex flex-col justify-center w-[90%] h-[100%] min-h-[100%] text-center bg-[#F3CCF3]">
        <div class="  table-cell align-middle">
          <div class="flex justify-center">
            <!-- <h1 class="font-PoppinsRegular">Portfolio</h1> -->
            <carousel class="reveal flex flex-col" :items-to-show="1">
              <slide v-for="(card, index) in cards" :key="index">
                <Card :title="card.title" :description="card.description" :to="card.to" :image="card.image" :index="index"
                  :currentIndex="currentIndex" />
              </slide>
              <template #addons>
                <!-- <navigation /> -->
                <pagination />
              </template>
            </carousel>
          </div>
        </div>
        <div class="z-40 fixed bottom-20 right-24 " v-show="showBackToTop" @click="scrollToTop">
          <v-icon name="bi-arrow-up-circle-fill" scale="2.5" color="white"
            class="border-white border-2 rounded-3xl cursor-pointer" />
        </div>
      </div>
    </section>
    <Footer class="absolute bottom-[-100%]" />
  </div>
</template>

<script>
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
import Card from '../components/Home/Card.vue';
import imageNewsletter from '../assets/Home/image-newsletter.png';
import Header from './Header.vue';
import Footer from './Footer.vue';
import imgCrowdfundingpage from '../assets/NewsletterSignUpForm/images/image-crowdfundingpage.png';

export default {
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
    Card,
    Header,
    Footer,
  },
  data() {
    return {
      showHome: true,
      showBackToTop: true,
      cards: [
        {
          title: 'Room homepage',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pretium sollicitudin ultrices.',
          to: 'RoomHomepageMaster',
          image: imageNewsletter,
        },
        {
          title: 'Newsletter sign-up form',
          description: 'Formulário de inscrição para recebimento de e-mails',
          to: 'NewsletterSignUpForm',
          image: imageNewsletter,
        },
        {
          title: 'Crowdfunding product page',
          description: 'Formulário de inscrição para recebimento de e-mails',
          to: 'CrowdfundingProduct',
          image: imgCrowdfundingpage,
        },
      ],
    };
  },

  methods: {
    reveal() {
      window.addEventListener('scroll', () => {
        var reveals = document.querySelectorAll(".reveal");

        for (var i = 0; i < reveals.length; i++) {
          var windowheight = window.innerHeight;
          var revealTop = reveals[i].getBoundingClientRect().top;
          var revealPoint = 150;

          if (revealTop < windowheight - revealPoint) {
            reveals[i].classList.add("active");
          } else {
            reveals[i].classList.remove("active");
          }
        }
      })
    },

    toggleSections() {
      this.showHome = !this.showHome;
    },

    toggleSections() {
      const portfolioSection = document.getElementById('#portfolio');
      if (portfolioSection) {
        portfolioSection.scrollIntoView({ behavior: 'smooth' });
      }
    },

    handleScroll() {
      const scrollY = window.scrollY;
      const toggleHeight = this.$el.clientHeight * 2;

      if (scrollY > toggleHeight && !this.showBackToTop) {
        this.showBackToTop = true;
      } else if (scrollY <= toggleHeight && this.showBackToTop) {
        this.showBackToTop = false;
      }
    },
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
  },
  mounted() {
    this.reveal();
    window.addEventListener('scroll', reveal);
    window.addEventListener('scroll', this.handleScroll);
  }
}
</script>

<style scoped>
section {
  min-height: 100vh;
  display: flex;
  bottom: 0;

  .home-content {
    background-color: #DC84F3;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 100 60'%3E%3Cg %3E%3Crect fill='%23DC84F3' width='11' height='11'/%3E%3Crect fill='%23e184f0' x='10' width='11' height='11'/%3E%3Crect fill='%23e684ed' y='10' width='11' height='11'/%3E%3Crect fill='%23ea84ea' x='20' width='11' height='11'/%3E%3Crect fill='%23ee84e7' x='10' y='10' width='11' height='11'/%3E%3Crect fill='%23f284e4' y='20' width='11' height='11'/%3E%3Crect fill='%23f685e1' x='30' width='11' height='11'/%3E%3Crect fill='%23f985de' x='20' y='10' width='11' height='11'/%3E%3Crect fill='%23fc86db' x='10' y='20' width='11' height='11'/%3E%3Crect fill='%23ff87d8' y='30' width='11' height='11'/%3E%3Crect fill='%23ff87d5' x='40' width='11' height='11'/%3E%3Crect fill='%23ff88d2' x='30' y='10' width='11' height='11'/%3E%3Crect fill='%23ff89cf' x='20' y='20' width='11' height='11'/%3E%3Crect fill='%23ff8bcc' x='10' y='30' width='11' height='11'/%3E%3Crect fill='%23ff8cca' y='40' width='11' height='11'/%3E%3Crect fill='%23ff8dc7' x='50' width='11' height='11'/%3E%3Crect fill='%23ff8fc5' x='40' y='10' width='11' height='11'/%3E%3Crect fill='%23ff90c2' x='30' y='20' width='11' height='11'/%3E%3Crect fill='%23ff92c0' x='20' y='30' width='11' height='11'/%3E%3Crect fill='%23ff94bd' x='10' y='40' width='11' height='11'/%3E%3Crect fill='%23ff95bb' y='50' width='11' height='11'/%3E%3Crect fill='%23ff97b9' x='60' width='11' height='11'/%3E%3Crect fill='%23ff99b7' x='50' y='10' width='11' height='11'/%3E%3Crect fill='%23ff9bb5' x='40' y='20' width='11' height='11'/%3E%3Crect fill='%23ff9db3' x='30' y='30' width='11' height='11'/%3E%3Crect fill='%23ff9fb1' x='20' y='40' width='11' height='11'/%3E%3Crect fill='%23ffa1b0' x='10' y='50' width='11' height='11'/%3E%3Crect fill='%23ffa3ae' x='70' width='11' height='11'/%3E%3Crect fill='%23ffa6ad' x='60' y='10' width='11' height='11'/%3E%3Crect fill='%23ffa8ab' x='50' y='20' width='11' height='11'/%3E%3Crect fill='%23ffaaaa' x='40' y='30' width='11' height='11'/%3E%3Crect fill='%23ffaca9' x='30' y='40' width='11' height='11'/%3E%3Crect fill='%23ffaea8' x='20' y='50' width='11' height='11'/%3E%3Crect fill='%23ffb1a8' x='80' width='11' height='11'/%3E%3Crect fill='%23ffb3a7' x='70' y='10' width='11' height='11'/%3E%3Crect fill='%23ffb5a7' x='60' y='20' width='11' height='11'/%3E%3Crect fill='%23ffb7a6' x='50' y='30' width='11' height='11'/%3E%3Crect fill='%23ffbaa6' x='40' y='40' width='11' height='11'/%3E%3Crect fill='%23ffbca6' x='30' y='50' width='11' height='11'/%3E%3Crect fill='%23ffbea6' x='90' width='11' height='11'/%3E%3Crect fill='%23ffc0a6' x='80' y='10' width='11' height='11'/%3E%3Crect fill='%23ffc3a6' x='70' y='20' width='11' height='11'/%3E%3Crect fill='%23ffc5a7' x='60' y='30' width='11' height='11'/%3E%3Crect fill='%23ffc7a7' x='50' y='40' width='11' height='11'/%3E%3Crect fill='%23ffc9a8' x='40' y='50' width='11' height='11'/%3E%3Crect fill='%23ffcba9' x='90' y='10' width='11' height='11'/%3E%3Crect fill='%23ffceaa' x='80' y='20' width='11' height='11'/%3E%3Crect fill='%23ffd0ab' x='70' y='30' width='11' height='11'/%3E%3Crect fill='%23ffd2ac' x='60' y='40' width='11' height='11'/%3E%3Crect fill='%23ffd4ae' x='50' y='50' width='11' height='11'/%3E%3Crect fill='%23ffd6af' x='90' y='20' width='11' height='11'/%3E%3Crect fill='%23ffd8b1' x='80' y='30' width='11' height='11'/%3E%3Crect fill='%23ffdab2' x='70' y='40' width='11' height='11'/%3E%3Crect fill='%23ffdcb4' x='60' y='50' width='11' height='11'/%3E%3Crect fill='%23ffdeb6' x='90' y='30' width='11' height='11'/%3E%3Crect fill='%23ffe0b8' x='80' y='40' width='11' height='11'/%3E%3Crect fill='%23ffe2ba' x='70' y='50' width='11' height='11'/%3E%3Crect fill='%23ffe3bc' x='90' y='40' width='11' height='11'/%3E%3Crect fill='%23ffe5bf' x='80' y='50' width='11' height='11'/%3E%3Crect fill='%23FFE7C1' x='90' y='50' width='11' height='11'/%3E%3C/g%3E%3C/svg%3E");
    background-attachment: fixed;
    background-size: cover;
    position: relative;
    overflow: hidden;
    height: 90%;
    width: 90%;
    top: 5%;
    bottom: 5%;
    left: 5%;
    right: 5%;
    z-index: 3;
  }
}

@keyframes transitionReveal {
  0% {
    opacity: 0;
    transform: translateY(250px);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.reveal {
  position: relative;
  opacity: 0;
}

.reveal.active {
  animation: transitionReveal 0.8s ease 0s 1 normal forwards;
  opacity: 1;
}

.portfolio {
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 1;
  bottom: -100%;
}

.btn {
  border-radius: 999px;
  color: #FFFFFF;
  cursor: pointer;
  font-size: 14px;
  line-height: 24px;
  opacity: 1;
  outline: 0 solid transparent;
  padding: 8px 18px;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  width: fit-content;
  word-break: break-word;
  border: 0;
}
</style>