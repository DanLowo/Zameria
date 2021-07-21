<template>
  <div class="oauth-login mb-5">
    <p style="font-size: 15px">{{title}} with:</p>
    <v-btn
      small
      style="color: #1aa260; box-shadow: 0px 0px 0px 0px grey"
      color="ZameriaAsh"
      class="mr-5"
      fab
      @click="type=='register' ? googleAuthRegister() : googleAuthSignIn()"
    >
      <span style="font-size: 20px" class="fa fa-google"></span>
    </v-btn>
    <!-- <v-btn
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
    </v-btn> -->
  </div>
</template>

<script>
import firebase from "firebase";
export default {
  name: "authStrategy",
  props: ["title", "type"],
  methods: {
    async googleAuthRegister() {
      let axios = this.$axios;
      let auth = this.$auth;
      let router = this.$router;
      try {
        let provider = new firebase.auth.GoogleAuthProvider();
        firebase
          .auth()
          .signInWithPopup(provider)
          .then(async result => {
            let {
              user: { displayName, email, Aa }
            } = result;
            let userDetails = {
              email: email,
              user_type: "consumer",
              consumer: {
                first_name: "",
                last_name: ""
              },
              username: displayName,
              google_auth: Aa
            };
            try {
              let { data } = await axios.post(
                "/accounts/signup/create_account/",
                userDetails
              );
              console.log(data);
              auth.strategy.token.set(data.token)
              auth.setUser(data);
              router.push('/')
            } catch (err) {
              console.log(err);
            }
          })
          .catch(e => {
            console.log(e);
          });
      } catch (error) {
        console.log(err);
      }
    },
    async googleAuthSignIn() {
      let axios = this.$axios;
      let auth = this.$auth;
      let router = this.$router;
      try {
        let provider = new firebase.auth.GoogleAuthProvider();
        firebase
          .auth()
          .signInWithPopup(provider)
          .then(async result => {
            let {
              user: { email, Aa }
            } = result;
            let userDetails = {
              email: email,
              google_auth: Aa
            };
            try {
              let { data } = await axios.post(
                "/accounts/login/",
                userDetails
              );
              console.log(data);
              auth.strategy.token.set(data.token)
              auth.setUser(data);
              router.push('/')
            } catch (err) {
              console.log(err);
            }
          })
          .catch(e => {
            console.log(e);
          });
      } catch (error) {
        console.log(err);
      }
    }
  }
};
</script>

<style>
</style>