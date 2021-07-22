<template>
  <div class="wishlist">
    <div v-if="wishlistItems.length !== 0" class="wishlist-items mb-14">
      <h5 class="py-3 px-3 mt-1 ZameriaAsh font-weight-light" align="center">
        <u>Account / Wishlist</u>
      </h5>
      <div class="mx-2 Wishlist-available">
        <WishList v-for="(item, k) in wishlistItems" :key="k" :productData="item" />
      </div>
    </div>

    <div v-else class="mb-16">
      <h5 class="py-3 px-3 mt-1 ZameriaAsh font-weight-light" align="center">
        <nuxt-link to="/faqs#Returns & Refund" class="ZameriaGrey--text">Return & Refund Policies</nuxt-link>
      </h5>
      <div class="mx-3 mt-5 wishlist-empty" align="center">
        <v-img :src="require('@/assets/images/core-values.png')" aspect-ratio="1.3"></v-img>
        <div class="mx-10 mt-15">
          <p align="center" style="font-size: 14px">
            You currently do not have any items
            <br />added in your Wishlist.
          </p>
          <v-btn
            to="/#shop"
            outlined
            depressed
            tile
            class="ZameriaRed--text mt-5"
            block
            height="40"
          >START SHOPPING</v-btn>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import WishList from "@/components/wishlist";

export default {
  layout: 'nofooter',
  components: {
    WishList
  },
  async asyncData({ store }) {
    try {
      await store.dispatch("products/getProducts");
      await store.dispatch("wishlist/getWishlist");
      let allProducts = store.state.products.allProducts.products;
      await store.commit("wishlist/getWishlistItems", allProducts);
    } catch (err) {}
  },
  computed: {
    wishlistItems() {
      return this.$store.state.wishlist.items
    }
  },
  data() {
    return {
      wishListEmpty: false
    };
  }
};
</script>

<style>
</style>