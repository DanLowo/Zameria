<template>
  <div class="login">
    <div class="auth-header" align="center">
      <span class="close-icon">
        <v-icon @click="$router.back()">mdi-close</v-icon>
      </span>
      <span class="fa fa-user-o mb-3" style="font-size: 40px"></span>
      <p class="font-weight-bold">LOG IN</p>
    </div>

    <div class="mt-14 mx-6">
      <authStrategy align="center" title="Register" type="login"></authStrategy>
      <Alert v-show="alert.show" :message="alert.message" :type="alert.type" />
      <form @submit.prevent="submit">
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
          class="zameria-light-form"
          placeholder="Password"
          id="password"
        />

        <v-btn
          class="mt-2 text-capitalize"
          height="43"
          type="submit"
          dark
          depressed
          color="ZameriaRed"
          block
        >Login</v-btn>
      </form>

      <authStrategy align="center" title="Login"></authStrategy>

      <p align="center" class="mt-10 font-weight-bold" style="font-size: 14px">
        <nuxt-link to="/auth/reset-password" style="color: black">Forgotten your password?</nuxt-link>
      </p>
    </div>

    <div align="center" style="height: 35vh" class="mt-9 px-7 pt-9">
      <p class="font-weight-bold">NEW CUSTOMER?</p>
      <v-btn
        tile
        depressed
        block
        to="/auth/register"
        height="43"
        class="mt-2 text-capitalize"
        dark
        color="black"
      >Register here</v-btn>
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
  data() {
    return {
      email: "",
      password: "",
      passwordFieldType: "password",
      passwordFieldIcon: "fa fa-eye-slash input-icon",
      alert: {
        show: false,
        type: "error",
        message: ""
      }
    };
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

    async submit() {
      this.alert = {
        show: false,
        type: "error",
        message: ""
      };
      let details = {
        email: this.email,
        password: this.password
      };

      this.$auth
        .loginWith("local", {
          data: details
        })
        .then(res => {
          let data = res.data;
          let userDetails = {
            email: data.email,
            username: data.username,
            phone_no: data.phone_no,
            user_type: data.user_type,
            first_name: data.consumer.first_name,
            last_name: data.consumer.last_name
          };
          this.$auth.setUser(userDetails);
        })
        .catch(err => {
          this.alert = {
            show: true,
            type: "error",
            message: "Invalid Credentials"
          };
        });
    }
  }
};
</script>

<style>
</style>
