<template>
  <div class="change-password">
    <v-app-bar color="white" id="cus-nav-bar">
      <v-icon @click="$router.back()" style="font-size: 33px">mdi-chevron-left</v-icon>
      <v-toolbar-title style="font-size: 18px" class="mx-2">Change Password</v-toolbar-title>
    </v-app-bar>

    <div style="margin-bottom: 40vh" class="mt-5 pt-4 mx-4">
      <v-form>
        <v-text-field label="Current Password" append-icon="mdi-eye" color="ZameriaLightRed" v-model="currentPassword"></v-text-field>

        <v-text-field label="New Password" append-icon="mdi-eye" color="ZameriaLightRed" v-model="newPassword"></v-text-field>

        <v-text-field label="Confirm Password" append-icon="mdi-eye" color="ZameriaLightRed" v-model="comfirmPassword"></v-text-field>

        <v-btn type="submit" class="mt-5" height="43" depressed dark block tile color="black">Save</v-btn>
      </v-form>
    </div>
  </div>
</template>

<script>
export default {
  layout: "nonavbar",
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