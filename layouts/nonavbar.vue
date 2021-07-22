<template>
    <v-app>
      <Nuxt />
    </v-app>
</template>

<script>


export default {
  async fetch(){
    try {
      await this.$store.dispatch('products/getProducts')
      await this.$store.dispatch('cart/getCart')
      await this.$store.dispatch("wishlist/getWishlist");
    } catch (err) {
      console.log(err)
    }
  },
};
</script>
<style lang="scss">
@import "~/scss/custom.scss";
</style>
