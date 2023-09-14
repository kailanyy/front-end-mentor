<template>
  <div v-if="subscribed === false"
    class="md:bg-newsletter-charcoal-grey md:h-full md:w-full flex justify-center md:items-center flex-col">
    <img class="block md:hidden rounded-2xl w-full max-w-lg self-center"
      src="@/assets/NewsletterSignUpForm/images/illustration-sign-up-mobile.svg">
    <div class="bg-newsletter-white rounded-3xl md:p-4 flex flex-col-reverse md:flex-row md:items-stretch items-center">
      <div class="max-w-lg p-8">
        <h1 class="text-newsletter-charcoal-grey text-5xl mb-4 font-bold font-roboto">Stay updated!</h1>
        <p class="mb-4">Join 60,000+ product managers receiving monthly updates on:</p>
        <ul>
          <li v-for="item in items" :key="item.message" class="flex items-stretch text-sm mb-2">
            <img class="mr-2" src="@/assets/NewsletterSignUpForm/images/icon-list.svg" alt="item in the list of messages that will be received"> {{ item.message }}
          </li>
        </ul>

        <div class="mb-2 mt-8 text-sm flex justify-between">
          <h1 class="font-semibold">
            Email address
          </h1>
          <div class="input-errors" v-if="v$.email.$errors.length">
            <div class="error-msg text-newsletter-tomato">{{ v$.email.$errors[0].$message }}</div>
          </div>
        </div>

        <div :class="{ error: v$.email.$errors.length }">
          <input type="text" placeholder="email@company.com" v-model="state.email"
            class="outline-0 border w-full h-12 rounded-lg border-inherit p-3.5 mb-4"
            :class="v$.email.$errors.length > 0 ? 'bg-[#ff44442a] border-newsletter-dark-slate-grey placeholder-newsletter-dark-slate-grey' : 'border-newsletter-grey placeholder-newsletter-grey'">
        </div>

        <button @click.prevent="subscribe"
          class="bg-newsletter-charcoal-grey rounded-lg text-newsletter-white p-3.5 font-semibold w-full text-sm hover:bg-newsletter-tomato focus:outline-none">
          Subscribe to monthly newsletter
        </button>
      </div>
      <div>
        <img class="hidden md:block" src="@/assets/NewsletterSignUpForm/images/illustration-sign-up-desktop.svg">
      </div>
    </div>
  </div>
  <NewsletterSuccess v-else :email="state.email" @dismiss="subscribed = false" />
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
      email: ''
    })

    const emailValidationRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

    const rules = computed(() => {
      return {
        email: {
          required: helpers.withMessage('Please insert your email below', required),
          emailPattern: helpers.withMessage('Invalid email format', (value) =>
            emailValidationRegex.test(value)
          )
        },
      }
    })

    const v$ = useVuelidate(rules, state)

    const items = [
      { message: "Product discovery and building what matters" },
      { message: "Measuring to ensure updates are a success" },
      { message: "And much more!" },
    ]

    async function subscribe() {
      const invalid = await v$.value.$validate().then(valid => valid === false)

      if (invalid) return;

      subscribed.value = true
    }

    return { subscribe, subscribed, state, v$, items, email }
  }
}

</script>


<style></style>