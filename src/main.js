import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from '@/router/router'
import { VuelidatePlugin } from '@vuelidate/core'

createApp(App).use(router).use(VuelidatePlugin).mount('#app')
