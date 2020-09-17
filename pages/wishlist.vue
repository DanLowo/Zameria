<template>
  <div class="wishlist">
    <NavBar></NavBar>
    <div v-if="!wishListEmpty" class="wishlist-items mb-14">
      <h5 class="py-3 px-3 mt-1 ZameriaAsh font-weight-light" align="center">
        <u>Account / Wishlist</u>
      </h5>
      <div class="mx-2 Wishlist-available">
        <WishList row="3"></WishList>
      </div>
    </div>

    <div v-else class="mb-16">
      <h5 class="py-3 px-3 mt-1 ZameriaAsh font-weight-light" align="center">
        <nuxt-link to="/faqs#Returns & Refund" class="ZameriaGrey--text">Return & Refund Policies</nuxt-link>
      </h5>
      <div class="mx-3 mt-5 wishlist-empty" align="center">
        <v-img :src="require('@/assets/images/LovingDoodle.png')" aspect-ratio="1.3"></v-img>
        <div class="mx-10">
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
import NavBar from "@/components/navbar";

export default {
  components: {
    WishList,
    NavBar
  },
  data() {
    return {
      wishListEmpty: true
    };
  }
};
</script>

<style>
</style>