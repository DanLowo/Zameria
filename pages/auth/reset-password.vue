<template>
  <div class="reset-password" style="margin-bottom: 90px">
    <div class="auth-header" align="center">
        <span class="close-icon"> <v-icon @click="$router.back()">mdi-close</v-icon> </span>
      <span class="fa fa-refresh mb-3" style="font-size: 30px"></span>
      <p class="font-weight-bold">FORGOTTEN YOUR PASSWORD?</p>
    </div>

    <div class="mt-10 mx-4">
      <p
        style="font-size: 15px"
      >That's ok - enter the email address linked to you Zameria account. If you're in our system, we'll send you a link to reset your password.</p>

      <form class="mt-5" @submit.prevent="submit">
        <label for="email">
          <b>Email address</b>
        </label>
        <input
          type="email"
          required
          v-model="email"
          class="zameria-light-form"
          placeholder="Email address"
          id="email"
        />

        <v-btn class="text-capitalize" height="43" type="submit" dark depressed color="ZameriaRed" block>Reset Password</v-btn>
      </form>

      <p align="center" class="mt-8 font-weight-bold" style="font-size: 14px">
        <nuxt-link to="/auth/login" style="color: black"> Back to Login</nuxt-link>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: ""
    };
  },
  methods: {
    submit() {}
  }
};
</script>

<style>
</style>