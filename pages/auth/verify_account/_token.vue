<template>
  <div>
    <div class="auth-header" align="center">
      <span class="close-icon">
        <v-icon @click="$router.back()">mdi-close</v-icon>
      </span>
      <span class="fa fa-user-o mb-3" style="font-size: 40px"></span>
      <p class="font-weight-bold">Verify Account</p>
    </div>
    <div align="center" class="mx-4 mt-10" v-if="verified">
      <h3 style="color: green">Account Verified</h3>
      <v-btn
        @click="$router.push('/auth/login')"
        class="mt-7 text-capitalize"
        height="43"
        type="button"
        dark
        depressed
        color="ZameriaRed"
        block
      >Login</v-btn>
    </div>
    <div align="center" class="mx-4 mt-10" v-else>
      <h3> Incorrect token...</h3>
      <p>Please try again..</p>
    </div>
  </div>
</template>

<script>
export default {
  async fetch() {
    let token = this.$route.params.token;
    console.log(token);
    try {
      let data = await this.$axios.get(`/accounts/activate_account/${token}/`);
      this.verified = true
    } catch (err) {
      this.verified = false
      console.log(err);
    }
  },
  data() {
    return {
      verified: false
    };
  }
};
</script>

<style>
</style>