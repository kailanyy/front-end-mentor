import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  { path: '', name: 'home', component: () => import("@/views/Home.vue") },
  { path: '/NewsletterSignUpForm', name: 'NewsletterSignUpForm', component: () => import("../components/NewsletterSignUpForm/NewsletterSignUpForm.vue") },
  { path: '/RoomHomepageMaster', name: 'RoomHomepageMaster', component: () => import("../components/RoomHomepageMaster/RoomHomepageMaster.vue") },
]

export default createRouter({
  routes,
  history: createWebHistory(),
})
