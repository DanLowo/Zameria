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
      if (strategy === "google") {
        const googleUser = await this.$gAuth.signIn();
        console.log(googleUser.getId());
        let {It, Ve, xS, gJ} = googleUser.getBasicProfile()

        let userDetails = {
          id: xS,
          email: It,
          username: Ve,
          picture: gJ,
          // phone_no: data.phone_no,
          // user_type: data.user_type,
          // first_name: data.consumer.first_name,
          // last_name: data.consumer.last_name
        };
        this.$auth.setUser(userDetails);
        this.$router.push('/')
      }
    }
  }
};
</script>

<style>
</style>