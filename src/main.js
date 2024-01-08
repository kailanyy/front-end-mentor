import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from '@/router/router'

import { OhVueIcon, addIcons } from "oh-vue-icons";
import { MdClearRound, MdDensitymediumRound, CoLinkedin, CoGithub, MdEmail, BiArrowUpCircleFill, MdKeyboardarrowdown } from "oh-vue-icons/icons";


import { carousel, slide } from 'vue-carousel'; 

addIcons(MdClearRound, MdDensitymediumRound, CoLinkedin, CoGithub, MdEmail, BiArrowUpCircleFill, MdKeyboardarrowdown);


const app = createApp(App).use(router)

app.component("v-icon", OhVueIcon);

app.component('carousel', carousel);
app.component('slide', slide);


app.mount('#app')
