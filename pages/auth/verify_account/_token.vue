<template>
  <div></div>
</template>

<script>
export default {
  async fetch() {
      let token = this.$route.params.token;
      console.log(token)
      try {
          let data = this.$axios.get(`/accounts/activate_account/${token}/`)

          this.$router.push("/auth/login");
      } catch (err) {
          console.log(err)
      }
  },
  data() {
    return {};
  }
};
</script>

<style>
</style>