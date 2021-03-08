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

        <label for="number">
          <b>Phone Number</b>
        </label>
        <input
          type="number"
          required
          v-model="phone_no"
          class="zameria-light-form"
          placeholder="Phone Number"
          id="number"
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
          class="fa fa-exclamation-circle red--text"
        >Your password needs to be at least 6 characters.</span>

        <div class="mt-4"></div>
        <label for="confirmPassword">
          <b>Confirm Password</b>
        </label>
        <span @click="changePasswordFieldType1" :class="passwordFieldIcon1"></span>
        <input
          :type="passwordFieldType1"
          required
          v-model="confirmPassword"
          class="zameria-light-form mb-1"
          placeholder="Confirm Password"
          id="confirmPassword"
        />
        <span
          v-show="match"
          style="font-size: 13px"
          class="fa fa-exclamation-circle red--text"
        >Passwords doesn't match...</span>

        <p style="font-size: 14px" class="font-weight-bold mt-7 mb-2">
          What are you mostly intrested in?
          <span style="font-size: 11px">(optional)</span>
        </p>
        <p
          style="font-size: 12px"
        >We'll use the information to make more personalized recommendations.</p>

        <input type="checkbox" v-model="preference.women" name="women" id="women" />
        <label for="women">Women's fashion</label>
        <br />
        <input type="checkbox" v-model="preference.men" name="men" id="men" />
        <label for="men">Men's fashion</label>
        <br />
        <input type="checkbox" v-model="preference.kids" name="kids" id="kids" />
        <label for="kids">Kid's fashion</label>

        <v-divider class="mt-5 mb-5"></v-divider>

        <input v-model="emailList" type="checkbox" name="emailList" id="emailList" />
        <label
          for="emailList"
        >Yes, I wish to recieve emails about special offers, new products and exclusive promotions, I can cancel my subscription at any time. (optional)</label>

        <br />
        <br />
        <input required type="checkbox" name="agreements" id="agreements" />
        <label for="agreements">
          Yes, I agree to the
          <nuxt-link to="/agreements/terms-of-use">Terms and Conditions</nuxt-link>and Zameria's
          <nuxt-link to="/agreements/privacy-policy">Privacy Policy.</nuxt-link>
        </label>

        <v-btn
          class="mt-7 text-capitalize"
          height="43"
          type="submit"
          dark
          depressed
          color="ZameriaRed"
          block
        >Register</v-btn>
      </form>

      <authStrategy align="center" title="Register"></authStrategy>
    </div>
    <div align="center" style="height: 35vh" class="mt-10 mb-7 px-7 pt-9">
      <p class="font-weight-bold">ALREADY A CUSTOMER?</p>
      <v-btn
        tile
        color="black"
        dark
        depressed
        block
        to="/auth/login"
        height="43"
        class="mt-2 text-capitalize"
      >Login here</v-btn>
    </div>
  </div>
</template>

<script>
import authStrategy from "@/components/authStrategy";

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
      phone_no: "",
      confirmPassword: "",
      preference: {
        men: false,
        women: false,
        kids: true
      },
      emailList: true,
      passwordLengthValid: false,
      match: false,
      passwordFieldType: "password",
      passwordFieldType1: "password",
      passwordFieldIcon: "fa fa-eye-slash input-icon",
      passwordFieldIcon1: "fa fa-eye-slash input-icon"
    };
  },

  watch: {
    password: function() {
      if (this.password.length <= 5) {
        this.passwordLengthValid = true;
      } else {
        this.passwordLengthValid = false;
      }
    },

    confirmPassword: function(){
      if(this.password !== this.confirmPassword){
        this.match = true
      } else {
        this.match = false
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
    changePasswordFieldType1() {
      if (this.passwordFieldType1 === "password") {
        this.passwordFieldType1 = "text";
        this.passwordFieldIcon1 = "fa fa-eye input-icon";
      } else {
        this.passwordFieldType1 = "password";
        this.passwordFieldIcon1 = "fa fa-eye-slash input-icon";
      }
    },
    async submit() {
      let details = {
        email: this.email,
        password: this.password,
        user_type: "consumer",
        consumer: {
          firstName: this.firstName,
          lastName: this.lastName
        },
        phone_no: this.phone_no
        // emailList: this.emailList,
        // preference: this.preference
      };

      try {
        let { data } = await this.$axios.post(
          "/accounts/signup/create_account",
          details
        );
        console.log(data);
      } catch (err) {
        console.log("e");
      }
    }
  }
};
</script>

<style>
</style>
