<template>
  <div class="bg-newsletter-charcoal-grey h-full w-full flex justify-center items-center">
    <div class="bg-newsletter-white rounded-3xl p-4 flex items-stretch">
      <div class="max-w-sm p-4">
        <img src="@/assets/NewsletterSignUpForm/images/icon-list.svg" width="40" class="mb-4">
        <h1 class="text-newsletter-charcoal-grey text-5xl mb-4 font-bold font-roboto">Thanks for subscribing!</h1>
        <p class="mb-4">A confirmation email has been sent to
          <strong>{{ email }}</strong>. Please open it and click the
          button inside to confirm your subscription.
        </p>
        <button
          class="bg-newsletter-charcoal-grey rounded-lg text-newsletter-white p-3.5 font-semibold w-full text-sm hover:bg-newsletter-tomato focus:outline-none">
          Dismiss message
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    email: ''
  }
}
</script>

<style></style>