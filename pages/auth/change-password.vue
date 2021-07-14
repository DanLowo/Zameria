<template>
  <div class="change-password">
    <v-app-bar color="white" id="cus-nav-bar">
      <v-icon @click="$router.back()" style="font-size: 33px">mdi-chevron-left</v-icon>
      <v-toolbar-title style="font-size: 18px" class="mx-2">Change Password</v-toolbar-title>
    </v-app-bar>

    <div style="margin-bottom: 40vh" class="mt-5 pt-4 mx-4">


      <Alert v-show="alert.show" :message="alert.message" :type="alert.type" />

      <!-- form to verify the email address -->
      <form class="mt-5" @submit.prevent="submitEmail" v-if="viewForm === 'email'">
        <label for="email">
          <b>Email address</b>
        </label>
        <v-text-field
          id="email"
          disabled="true"
          value="$store.state.auth.user.email"
          color="ZameriaLightRed"
          v-model="email"
        />

        <v-btn
          class="text-capitalize"
          height="43"
          type="submit"
          dark
          depressed
          color="ZameriaRed"
          block
        >Verify Email Address</v-btn>
      </form>

      <!-- form to verify the auth code -->
      <form class="mt-5" @submit.prevent="submitAuthCode" v-else-if="viewForm === 'code'">
        <label for="authCode">
          <b>Auth Code</b>
        </label>
        <v-text-field
          type="number"
          id="authCode"
          color="ZameriaLightRed"
          v-model="authCode"
        />

        <v-btn
          class="text-capitalize"
          height="43"
          type="submit"
          dark
          depressed
          color="ZameriaRed"
          block
        >Verify Code</v-btn>
      </form>
 
      <!-- form to finally reset password -->
      <form class="mt-5" @submit.prevent="submitResetPassword" v-else>
        <label for="password">
          <b>Reset Password</b>
        </label>
        <v-text-field
          id="password"
          color="ZameriaLightRed"
          v-model="password"
        />

        <v-btn
          class="text-capitalize"
          height="43"
          type="submit"
          dark
          depressed
          color="ZameriaRed"
          block
        >Reset Password</v-btn>
      </form>

      <!-- <v-form>
        <v-text-field
          label="Current Password"
          append-icon="mdi-eye"
          color="ZameriaLightRed"
          v-model="currentPassword"
        ></v-text-field>

        <v-text-field
          label="New Password"
          append-icon="mdi-eye"
          color="ZameriaLightRed"
          v-model="newPassword"
        ></v-text-field>

        <v-text-field
          label="Confirm Password"
          append-icon="mdi-eye"
          color="ZameriaLightRed"
          v-model="comfirmPassword"
        ></v-text-field>

        <v-btn type="submit" class="mt-5" height="43" depressed dark block tile color="black">Save</v-btn>
      </v-form> -->
    </div>
  </div>
</template>

<script>
import Alert from "@/components/alert";
export default {
  middleware: 'authorization',
  layout: "nonavbar",
    components: {
    Alert
  },
  data() {
    return {
      passwordFieldType1: "password",
      passwordFieldIcon1: "fa fa-eye-slash input-icon",
      passwordFieldType2: "password",
      passwordFieldIcon2: "fa fa-eye-slash input-icon",
      passwordFieldType3: "password",
      passwordFieldIcon3: "fa fa-eye-slash input-icon",

      // states for change password
      email: this.$store.state.auth.user.email,
      authCode: "",
      viewForm: "email",
      password: "",
      alert: {
        show: false,
        type: "",
        message: ""
      }
    };
  },
  methods: {
    changePasswordFieldType(number) {
      if (number === 1) {
        if (this.passwordFieldType1 === "password") {
          this.passwordFieldType1 = "text";
          this.passwordFieldIcon1 = "fa fa-eye input-icon";
        } else {
          this.passwordFieldType1 = "password";
          this.passwordFieldIcon1 = "fa fa-eye-slash input-icon";
        }
      } else if (number === 2) {
        if (this.passwordFieldType2 === "password") {
          this.passwordFieldType2 = "text";
          this.passwordFieldIcon2 = "fa fa-eye input-icon";
        } else {
          this.passwordFieldType2 = "password";
          this.passwordFieldIcon2 = "fa fa-eye-slash input-icon";
        }
      } else {
        if (this.passwordFieldType3 === "password") {
          this.passwordFieldType3 = "text";
          this.passwordFieldIcon3 = "fa fa-eye input-icon";
        } else {
          this.passwordFieldType3 = "password";
          this.passwordFieldIcon3 = "fa fa-eye-slash input-icon";
        }
      }
    },

    async submitEmail() {
      this.alert = {
        show: false,
        type: "",
        message: ""
      };
      try {
        let { data } = await this.$axios.post("/accounts/forgotpassword/1/", {
          email: this.email
        });
        this.alert = {
          show: true,
          type: "success",
          message: "Check your email for verification code"
        };
        this.viewForm = 'code'
      } catch (error) {
        this.alert = {
          show: true,
          type: "error",
          message: error.response.data.detail
        };
      }
    },

    async submitAuthCode() {
      this.alert = {
        show: false,
        type: "",
        message: ""
      };
      try {
        let { data } = await this.$axios.post("/accounts/forgotpassword/2/", {
          email: this.email,
          auth_code: this.authCode
        });
        this.alert = {
          show: true,
          type: "success",
          message: "Verification successful, reset password now"
        };
        this.viewForm = 'password'
      } catch (error) {
        this.alert = {
          show: true,
          type: "error",
          message: 'Invalid verification code'
        };
      }
    },

    async submitResetPassword() {
      this.alert = {
        show: false,
        type: "",
        message: ""
      };
      try {
        let { data } = await this.$axios.post("/accounts/forgotpassword/3/", {
          email: this.email,
          auth_code: this.authCode,
          password: this.password
        });
        await this.$auth.logout();
        this.$router.push('/auth/login')
      } catch (error) {
        this.alert = {
          show: true,
          type: "error",
          message: error.response.data.detail
        };
      }
    }
  }
};
</script>

<style>
</style>