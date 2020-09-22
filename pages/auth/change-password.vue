<template>
  <div class="change-password">
    <v-app-bar color="white" id="cus-nav-bar">
      <v-icon @click="$router.back()" style="font-size: 33px">mdi-chevron-left</v-icon>
      <v-toolbar-title style="font-size: 18px" class="mx-2">Change Password</v-toolbar-title>
    </v-app-bar>

    <div style="margin-bottom: 40vh" class="mt-7 pt-4 mx-6">
      <form @submit.prevent="submit">
        <label for="currentPassword">
          <b>Curernt Password</b>
        </label>
        <span @click="changePasswordFieldType(1)" :class="passwordFieldIcon1"></span>
        <input
          :type="passwordFieldType1"
          required
          v-model="currentPassword"
          class="zameria-light-form"
          placeholder="Current Password"
          id="currentPassword"
        />

        <label for="newPassword">
          <b>New Password</b>
        </label>
        <span @click="changePasswordFieldType(2)" :class="passwordFieldIcon2"></span>
        <input
          :type="passwordFieldType2"
          required
          v-model="newPassword"
          class="zameria-light-form"
          placeholder="New Password"
          id="newPassword"
        />

        <label for="comfirmpassword">
          <b>Comfirm Password</b>
        </label>
        <span @click="changePasswordFieldType(3)" :class="passwordFieldIcon3"></span>
        <input
          :type="passwordFieldType3"
          required
          v-model="comfirmPassword"
          class="zameria-light-form"
          placeholder="Password"
          id="confirmPassword"
        />

        <v-btn tile class="mt-2" height="43" type="submit" dark depressed color="ZameriaRed" block>Change Password</v-btn>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'nonavbar',
  data() {
    return {
      currentPassword: "",
      newPassword: "",
      comfirmPassword: "",
      passwordFieldType1: "password",
      passwordFieldIcon1: "fa fa-eye-slash input-icon",
      passwordFieldType2: "password",
      passwordFieldIcon2: "fa fa-eye-slash input-icon",
      passwordFieldType3: "password",
      passwordFieldIcon3: "fa fa-eye-slash input-icon"
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

    submit() {
      let data = {
        newPassword: this.newPassword,
        currentPassword: this.currentPassword
      };
    }
  }
};
</script>

<style>
</style>