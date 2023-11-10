<template>
  <div>
    <div class="auth-header" align="center">
      <span class="close-icon">
        <v-icon @click="$router.push('/')">mdi-close</v-icon>
      </span>
      <span class="fa fa-user-o mb-3" style="font-size: 40px"></span>
      <p class="font-weight-bold">REGISTER</p>
    </div>
    <div class="register" v-show="!registered">
      <div class="mt-7 mx-6">
        <authStrategy align="center" title="Register" type="register" :registered="registered"></authStrategy>
        <Alert v-show="alert.show" :message="alert.message" :type="alert.type" />
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

          <label for="h_email">
            <b>House address</b>
          </label>
          <input
            type="text"
            required
            v-model="address"
            class="zameria-light-form"
            placeholder="House address"
            id="address"
          />

<!--          <label for="password">-->
<!--            <b>Password</b>-->
<!--          </label>-->
<!--          <span @click="changePasswordFieldType" :class="passwordFieldIcon"></span>-->
<!--          <input-->
<!--            :type="passwordFieldType"-->
<!--            required-->
<!--            v-model="password"-->
<!--            class="zameria-light-form mt-0 mb-1"-->
<!--            placeholder="Password"-->
<!--            id="password"-->
<!--          />-->
          <span
            v-show="passwordLengthValid"
            style="font-size: 13px"
            class="fa fa-exclamation-circle red--text"
          >Your password needs to be at least 6 characters.</span>

          <div class="mt-4"></div>
<!--          <label for="confirmPassword">-->
<!--            <b>Confirm Password</b>-->
<!--          </label>-->
<!--          <span @click="changePasswordFieldType1" :class="passwordFieldIcon1"></span>-->
<!--          <input-->
<!--            :type="passwordFieldType1"-->
<!--            required-->
<!--            v-model="confirmPassword"-->
<!--            class="zameria-light-form mb-1"-->
<!--            placeholder="Confirm Password"-->
<!--            id="confirmPassword"-->
<!--          />-->
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

    <div v-show="registered" id="verify-account" align="center" class="mt-7 mx-3">
      <h2>ACCOUNT CREATED</h2>
      <p>Please check you email to <br/> verify your account</p>
    </div>
  </div>
</template>

<script>
import authStrategy from "@/components/authStrategy";
import Alert from "@/components/alert";


export default {
  components: {
    authStrategy,
    Alert
  },
  computed: {
    registered() {
      return this.$store.state.actionss.authRegistered
    }
  },
  data() {
    return {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      phone_no: "",
      address: "",
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
      passwordFieldIcon1: "fa fa-eye-slash input-icon",
      alert: {
        show: false,
        type: "error",
        message: ""
      }
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

    confirmPassword: function() {
      if (this.password !== this.confirmPassword) {
        this.match = true;
      } else {
        this.match = false;
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
      this.alert = {
        show: false,
        type: "error",
        message: ""
      };

      let details = {
        emailAddress: this.email,
        password: this.password,
        user_type: "consumer",
        firstName: this.firstName,
        lastName: this.lastName,
        phoneNumber: this.phone_no,
        address: this.address
        // emailList: this.emailList,
        // preference: this.preference
      };

      try {
        let { data } = await this.$axios.post(
          "/final_year_project/register_user",
          details
        );
        console.log(data.data.registrationOptions)
        const authAttr = await window.SimpleWebAuthnBrowser.startRegistration(data.data.registrationOptions)
        console.log(authAttr)
        // await this.$store.commit('actionss/setRegistered')
      } catch (err) {
        console.log(err)
        // if (err.response.data.email) {
        //   console.log(err.response.data.email[0]);
        //   this.alert = {
        //     show: true,
        //     type: "error",
        //     message: err.response.data.email[0]
        //   };
        //   window.scrollTo(0, 0);
        // }
      }
    }
  }
};
</script>

<style>
</style>
