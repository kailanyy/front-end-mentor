<template>
  <header class="header fixed top-0 inset-x-0 p-4 bg-white shadow-md" :class="{ 'is-hidden': isScrollingDown }">
    <div class="flex justify-between items-center">
      <h1 class="mr-4">Kailany Souza</h1>
      <div>
        <a alt="contato" class="btn bg-[#DC84F3] hover:bg-[#e58ffa]" href="#">contato</a>
      </div>
    </div>
  </header>
</template>
<script>
import { ref, onMounted, onUnmounted } from 'vue';
export default {
  setup() {
    const isScrollingDown = ref(false);
    let lastScrollTop = 0;

    const handleScroll = () => {
      const scrollTop = window.scrollY || window.pageYOffset;

      isScrollingDown.value = scrollTop > lastScrollTop;
      lastScrollTop = scrollTop;
    };

    onMounted(() => {
      window.addEventListener('scroll', handleScroll);
    });

    onUnmounted(() => {
      window.removeEventListener('scroll', handleScroll);
    });

    return {
      isScrollingDown,
    };
  },
};
</script>

<style scoped>
@font-face {
  font-family: 'Inter-Light';
  src: url('../assets/NewsletterSignUpForm/fonts/Inter-Light.ttf') format('truetype')
}

@font-face {
  font-family: 'Inter-ExtraLight';
  src: url('../assets/NewsletterSignUpForm/fonts/Inter-ExtraLight.ttf') format('truetype')
}

@font-face {
  font-family: 'Inter-Regular';
  src: url('../assets/NewsletterSignUpForm/fonts/Inter-Regular.ttf') format('truetype')
}

@font-face {
  font-family: 'Inter-SemiBold';
  src: url('../assets/NewsletterSignUpForm/fonts/Inter-SemiBold.ttf') format('truetype')
}

@font-face {
  font-family: 'Inter-Thin';
  src: url('../assets/NewsletterSignUpForm/fonts/Inter-Thin.ttf') format('truetype')
}

header h1 {
  margin-right: auto;
}

nav a:hover {
  cursor: pointer;
}

body {
  height: 300vh;
  background: #616161;
  background: linear-gradient(#9bc5c3, #616161);
}

.header {
  transform: translateY(0);
  transition: transform 300ms linear;
  z-index: 1;
}

.header.is-hidden {
  transform: translateY(-100%);
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