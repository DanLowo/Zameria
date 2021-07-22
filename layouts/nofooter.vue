<template>
    <v-app>
        <main-navbar></main-navbar>
      <Nuxt />
    </v-app>
</template>

<script>


export default {
  async fetch(){
    try {
      await this.$store.dispatch('products/getProducts')
      await this.$store.dispatch('cart/getCart')
    } catch (err) {
      console.log(err)
    }
  },
};
</script>
<style lang="scss">
@import "~/scss/custom.scss";
</style>
