<template>
  <div v-if="subscribed === false" class="bg-newsletter-charcoal-grey h-full w-full flex justify-center items-center">
    <div class="bg-newsletter-white rounded-3xl p-4 flex items-stretch">
      <div class="max-w-sm p-8">
        <h1 class="text-newsletter-charcoal-grey text-5xl mb-4 font-bold font-roboto">Stay updated!</h1>
        <p class="mb-4">Join 60,000+ product managers receiving monthly updates on:</p>
        <ul>
          <li v-for="item in items" :key="item.message" class="flex items-stretch text-sm mb-2">
            <img class="mr-2" src="@/assets/NewsletterSignUpForm/images/icon-list.svg" alt=""> {{ item.message }}
          </li>
        </ul>

        <div class="mb-2 mt-8 text-sm flex justify-between">
          <h1 class="font-semibold">
            Email address
          </h1>
          <div class="input-errors" v-for="error of v$.email.$errors" :key="error.$uid">
            <div class="error-msg text-newsletter-tomato">{{ error.$message }}</div>
          </div>
        </div>

        <div :class="{ error: v$.email.$errors.length }">
          <input type="text" placeholder="email@company.com" v-model="state.email"
            class="outline-0 border w-full h-12 rounded-lg border-inherit p-3.5 mb-4"
            :class="[v$.email.$errors.length > 0 ? 'bg-[#ff44442a] border-newsletter-dark-slate-grey placeholder-newsletter-dark-slate-grey' : 'border-newsletter-grey placeholder-newsletter-grey']">
        </div>

        <button @click.prevent="subscribe"
          class="bg-newsletter-charcoal-grey rounded-lg text-newsletter-white p-3.5 font-semibold w-full text-sm hover:bg-newsletter-tomato focus:outline-none">
          Subscribe to monthly newsletter
        </button>
      </div>
      <div>
        <img  src="@/assets/NewsletterSignUpForm/images/illustration-sign-up-desktop.svg">
      </div>
    </div>
  </div>
  <template v-else>
    <NewsletterSuccess :email="state.email" />
  </template>
</template>

<script>
import { ref, reactive, computed } from 'vue';
import { useVuelidate } from '@vuelidate/core'
import { required, email, helpers } from '@vuelidate/validators'
import NewsletterSuccess from './NewsletterSuccess.vue';

export default {
  components: {
    NewsletterSuccess
  },

  setup() {

    const subscribed = ref(false);

    const state = reactive({
      props: {
        email: ''
      }
    })

    const rules = computed(() => {
      return {
        email: { required: helpers.withMessage('Valid email required', required) }
      }
    })

    const v$ = useVuelidate(rules, state)

    const items = ([
      { message: "Product discovery and building what matters" },
      { message: "Measuring to ensure updates are a success" },
      { message: "And much more!" },
    ])

    async function subscribe() {
      await v$.value.$validate();
      subscribed.value = true
    }

    return { subscribe, subscribed, state, v$, items, NewsletterSuccess, email }
  }
}

</script>


<style></style>