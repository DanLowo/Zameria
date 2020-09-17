<template>
  <div class="register">
    <div class="auth-header" align="center">
      <span class="close-icon">
          <v-icon @click="$router.back()">mdi-close</v-icon>
      </span>
      <span class="fa fa-user-o mb-3" style="font-size: 40px"></span>
      <p class="font-weight-bold">REGISTER</p>
    </div>

    <div class="mt-14 mx-6">
      <form @submit.prevent="submit">
        <label for="firstName">
          <b>First name</b>
        </label>
        <input
          type="text"
          required
          v-model="firstName"
          class="zameria-light-form"
          placeholder="First name"
          id="firstName"
        />

        <label for="lastName">
          <b>Last name</b>
        </label>
        <input
          type="text"
          required
          v-model="lastName"
          class="zameria-light-form"
          placeholder="Last name"
          id="lastName"
        />

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

        <label for="password">
          <b>Password</b>
        </label>
        <span @click="changePasswordFieldType" :class="passwordFieldIcon"></span>
        <input
          :type="passwordFieldType"
          required
          v-model="password"
          class="zameria-light-form mt-0 mb-1"
          placeholder="Password"
          id="password"
        />
        <span
          v-show="passwordLengthValid"
          style="font-size: 13px"
          class="fa fa-exclamation-circle"
        >Your password needs to be at least 6 characters.</span>

        <p style="font-size: 14px" class="font-weight-bold mt-7 mb-2">
          What are you mostly intrested in?
          <span style="font-size: 11px">(optional)</span>
        </p>
        <p
          style="font-size: 12px"
        >We'll use the information to make more personalized recommendations.</p>

        <input
          type="checkbox"
          v-model="preference.women"
          name="women"
          id="women"
        />
        <label for="women">Women's fashion</label>
        <br />
        <input type="checkbox" v-model="preference.men" name="men" id="men"/>
        <label for="men">Men's fashion</label>
        <br />
        <input type="checkbox" v-model="preference.kids" name="kids" id="kids"/>
        <label for="kids">Kid's fashion</label>

        <v-divider class="mt-5 mb-5"></v-divider>

        <input v-model="emailList" type="checkbox" name="emailList" id="emailList" />
        <label
          for="emailList"
        >Yes, I wish to recieve emails about special offers, new products and exclusive promotions, I can cancel my subscription at any time. (optional)</label>

        <br> <br>
        <input required type="checkbox" name="agreements" id="agreements" />
        <label for="agreements">
          Yes, I agree to the
          <nuxt-link to="/agreements/terms-of-use">Terms and Conditions</nuxt-link> and Zameria's
          <nuxt-link to="/agreements/privacy-policy">Privacy Policy.</nuxt-link>
        </label>

        <v-btn class="mt-7 text-capitalize" height="43" type="submit" dark depressed color="ZameriaRed" block>Register</v-btn>

      </form>

      <authStrategy align="center" title="Register"></authStrategy>

    </div>
        <div align="center" style="height: 35vh" class="mt-10 mb-7 px-7 pt-9">
      <p class="font-weight-bold">ALREADY A CUSTOMER?</p>
      <v-btn tile color="black" dark depressed block to="/auth/login" height="43" class="mt-2 text-capitalize">Login here</v-btn>
    </div>
  </div>
</template>

<script>

import authStrategy from "@/components/authStrategy"

export default {
  components: {
    authStrategy
  },
  data() {
    return {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      preference: {
        men: false,
        women: false,
        kids: true
      },
      emailList: true,
      passwordLengthValid: false,
      passwordFieldType: "password",
      passwordFieldIcon: "fa fa-eye-slash input-icon"
    };
  },

  watch: {
    password: function() {
      if (this.password.length <= 5) {
        this.passwordLengthValid = true;
      } else {
        this.passwordLengthValid = false;
      }
    }
  },

  methods: {
    changePasswordFieldType() {
      if (this.passwordFieldType === "password") {
        this.passwordFieldType = "text";
        this.passwordFieldIcon = "fa fa-eye input-icon";
      } else {
        this.passwordFieldType = "password";
        this.passwordFieldIcon = "fa fa-eye-slash input-icon";
      }
    },
    
    submit() {
      let data = {
        email: this.email,
        firstName: this.firstName,
        lastName: this.lastName,
        password: this.password,
        emailList: this.emailList,
        preference: this.preference
      }
    }
  }
};
</script>

<style>
</style>