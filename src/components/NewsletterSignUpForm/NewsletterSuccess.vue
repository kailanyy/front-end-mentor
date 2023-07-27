<template>
  <div class="md:bg-newsletter-charcoal-grey h-full w-full flex justify-center items-center flex-col">
    <div class="bg-newsletter-white rounded-3xl p-4 flex md:items-stretch flex-col md:h-auto items-center md:flex-none content-start flex-auto">
      <div class="max-w-sm p-4 flex-auto flex-col justify-center flex">
        <img src="@/assets/NewsletterSignUpForm/images/icon-list.svg" width="50" class="mb-7">
        <h1 class="text-newsletter-charcoal-grey md:text-5xl text-4xl mb-4 font-bold font-roboto">Thanks for
          subscribing!
        </h1>
        <p class="mb-4">A confirmation email has been sent to
          <strong>{{ email }}</strong>. Please open it and click the
          button inside to confirm your subscription.
        </p>
      </div>
      <button
        @click="dismissMessage"
        class="bg-newsletter-charcoal-grey rounded-lg text-newsletter-white p-3.5 mb-4 font-semibold w-full text-sm hover:bg-newsletter-tomato focus:outline-none">
        Dismiss message
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    email: ''
  },

  setup(_, { emit }) {
    const dismissMessage = () => {
      emit('dismiss');
    }

    return { dismissMessage };
  }
}
</script>

<style></style>