<template>
  <div class="cart">
    <NavBar></NavBar>
    <div v-if="cart" class="cart-items mb-14">
      <h5 class="py-3 px-3 mt-1 ZameriaAsh font-weight-light" align="center">
        <u>Account / Wishlist</u>
      </h5>
      <div class="mt-5 Wishlist-available">
        <cart></cart>
      </div>
    </div>

    <div v-else class="mb-14">
      <h5 class="py-3 px-3 mt-1 ZameriaAsh font-weight-light" align="center">
        <nuxt-link to="/faqs#Returns & Refund" class="ZameriaGrey--text">Return & Refund Policies</nuxt-link>
      </h5>
      <div class="mx-3 mt-5 cart-empty" align="center">
        <v-img :src="require('@/assets/images/UnboxingDoodle.png')" aspect-ratio="1.3"></v-img>
        <div class="mx-10">
          <p align="center" style="font-size: 14px">
            <b>Add items to your cart</b>
            <br />Enjoy a hassel free checkout
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
import cart from "@/components/cart";
import NavBar from "@/components/navbar";

export default {
  components: {
    cart,
    NavBar
  },
  data() {
    return {
      cart: true
    };
  }
};
</script>

<style>
</style>