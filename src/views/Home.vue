<template>
  <Header />
  <div class="p-8">
    <p class="text-xl text-center">Desenvolvedora Full-Stack</p>
  </div>
  <div class="flex flex-col items-center">
    <h1 class="mt-8 text-2xl tracking-wide">Desafios do Frontend Mentor</h1>
    <ul class="flex items-center m-auto mb-4 md:mb-0 tracking-wide">
      <li>ipsum</li>
      <li>ipsum</li>
      <li>ipsum</li>
      <li>ipsum</li>
    </ul>
  </div>

  <div class="m-0 cursor-pointer">
    <div class="flex flex-row items-center justify-around m-0">
      <Card v-for="card in cards" :title="card.title" :description="card.description" :key="card.title" :to="card.to"
        :image="card.image" />
    </div>
    <div class="ml-2 mt-0">
      <a href="">Ver Mais</a>
      <v-icon class="m-0" name="bi-arrow-right-short" />
    </div>
  </div>
  <Footer />
</template>

<script>
import Card from "../components/Home/Card.vue";
import image from '../assets/NewsletterSignUpForm/images/desktop-design.jpg'
import Header from "./Header.vue";
import Footer from './Footer.vue';

export default {
  components: { Card, Header, Footer },
  setup() {
    const cards = ([
      { title: 'Newsletter sign-up form', description: 'Formulário de inscrição para recebimento de e-mails', to: 'about', image: image },
      { title: 'Em construção', description: 'Mais desafios estão sendo desenvolvidos enquanto você lê isso aqui :)', to: 'about', image: image },
    ])
    return { cards }
  }
}
</script>

<style scoped>
ul li {
  width: min-content;
}

h1,
h2 {
  font-family: 'Inter-Regular';
  color: #1B0811;
}

p,
ul li {
  font-family: 'Inter-Light';
  color: #1B0811;
}

nav a,
ul li {
  margin-right: 20px;
}

ul li:hover,
span:hover {
  color: #d41d6c;
  cursor: pointer;
}

ul li:hover::after,
ul li:hover {
  transform: scaleX(1);
}

ul li::after {
  transition: 0.25s ease;
  content: "";
  display: block;
  width: 100%;
  height: 2px;
  background-color: #d41d6c;
  transform: scaleX(0);
  position: absolute;
  bottom: 0px;
  left: 0;
}
</style>
