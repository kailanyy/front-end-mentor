import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from '@/router/router'

import { OhVueIcon, addIcons } from "oh-vue-icons";
import { MdClearRound, MdDensitymediumRound } from "oh-vue-icons/icons";

addIcons(MdClearRound, MdDensitymediumRound);


const app = createApp(App).use(router)

app.component("v-icon", OhVueIcon);

app.mount('#app')
