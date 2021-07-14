<template>
  <div class="oauth-login mt-5">
    <p style="font-size: 15px">{{title}} with:</p>
    <v-btn
      small
      style="color: #1aa260; box-shadow: 0px 0px 0px 0px grey"
      color="ZameriaAsh"
      class="mr-5"
      fab
      @click="authStrategy('google')"
    >
      <span style="font-size: 20px" class="fa fa-google"></span>
    </v-btn>
    <v-btn
      small
      style="color: #3b5998;  box-shadow: 0px 0px 0px 0px grey"
      color="ZameriaAsh"
      class="mr-5"
      fab
      @click="authStrategy('facebook')"
    >
      <span style="font-size: 20px" class="fa fa-facebook"></span>
    </v-btn>
    <v-btn small fab style="color: #c8232c;  box-shadow: 0px 0px 0px 0px grey" color="ZameriaAsh">
      <span style="font-size: 20px" class="fa fa-pinterest-p"></span>
    </v-btn>
  </div>
</template>

<script>
export default {
  name: "authStrategy",
  props: ["title"],
  methods: {
    async authStrategy(strategy) {

      let googleAuth = this.$gAuth;
      let authStore = this.$auth;
      let router = this.$router;
      let authCode;

      // call this function after getting authCode
      async function signInUser() {
        try {
          const googleUser = await googleAuth.signIn();
          let { It, Ve, xS, gJ } = googleUser.getBasicProfile();

          let userDetails = {
            id: xS,
            email: It,
            username: Ve,
            picture: gJ,
            authCode
          };

          authStore.setUser(userDetails);
          router.push("/");
        } catch (error) {
          console.log(error)
        }
      }

      if (strategy === "google") {
        try {
          const code = await this.$gAuth.getAuthCode();
          authCode = code;

          setTimeout(function() {
            signInUser();
          }, 500);
        } catch (error) {
          console.log(err)
        }
      }
    }
  }
};
</script>

<style>
</style>