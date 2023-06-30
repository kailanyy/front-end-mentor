<template>
  <div class="bg-[#36384d] h-full w-full flex justify-center items-center">
    <div class="bg-slate-50 rounded-3xl p-4 flex items-stretch">
      <div class="max-w-sm p-8">
        <h1 class="text-[#232742] text-5xl mb-4 font-bold font-roboto">Stay updated!</h1>
        <p class="mb-4">Join 60,000+ product managers receiving monthly updates on:</p>

        <ul>
          <li v-for="item in items" :key="item.message" class="flex items-stretch text-sm mb-2">
            <img class="mr-2" :src="imagePath"> {{ item.message }}
          </li>
        </ul>

        <h1 class="font-semibold text-sm mb-2 mt-8">
          Email address
        </h1>

        <div>
          <input type="text" placeholder="email@company.com" v-model="email"
            class="outline-0 border-2 w-full h-12 rounded-lg border-inherit p-3.5 mb-4">
            <div class="input-errors" v-for="error of v$.email.$errors" :key="error.$uid">
              <div class="error-msg">{{ error.$message }}</div>
            </div>
        </div>

        <button @click.prevent="subscribe" class="bg-[#232742] rounded-lg text-white p-3.5 font-semibold w-full text-sm">
          Subscribe to monthly newsletter
        </button>
      </div>

      <div>
        <img width="324" src="@/assets/NewsletterSignUpForm/images/illustration-sign-up-desktop.svg">
      </div>
    </div>
  </div>
</template>

<script>
import iconList from "@/assets/NewsletterSignUpForm/images/icon-list.svg"

export default {
  methods: {
    subscribe() {
      this.subscribed = true
      console.log('email:', this.email);
    }
  },
  setup() {
    return { v$: useVuelidate() }
  },
  data() {
    return {
      subscribed: false,
      imagePath: iconList,
      firstname: "",
      items: [
        { message: "Product discovery and building what matters" },
        { message: "Measuring to ensure updates are a success" },
        { message: "And much more!" }
      ],
      email: '',
      validations() {
        return {
          firstname: { required },
          email: { required },
        }
      }
    }
  }
}

</script>

<style></style>