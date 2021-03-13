<template>
  <div class="cart">
    <div v-if="cart" class="cart-items">
      <nuxt-link to="/wishlist">
        <h5 class="py-3 px-3 mt-1 ZameriaAsh black--text font-weight-light" align="center">
          <u>Account / Wishlist</u>
        </h5>
      </nuxt-link>

      <div class="mt-3 Wishlist-available">
        <p style="display: flex" class="mx-2">
          <span style="flex-grow: 1; font-size: 14px">
            <b>Shopping Cart</b>
          </span>
          <span style="font-size: 13px">Order Total: N45,350</span>
        </p>
        <v-divider></v-divider>
        <cart v-for="i in 3" :key="i"></cart>
      </div>

      <div class="mt-8 mx-2 mr-3">
        <p style="font-size: 15px">
          <b>PRICE SUMMARY</b>
        </p>
        <div class="mt-4">
          <div style="display: flex">
            <span class="summary-title">Price</span>
            <span class="summary-value">N12,000</span>
          </div>
          <div style="display: flex" class="mt-3">
            <span class="summary-title">Discount</span>
            <span class="summary-value green--text">N2,000</span>
          </div>
          <div style="display: flex" class="mt-3">
            <span class="summary-title">Shipping Fee</span>
            <span class="summary-value">N800</span>
          </div>
          <div style="display: flex" class="mt-3">
            <span class="summary-title"> <b> Grand Total </b> </span>
            <span class="summary-value"> <b> N10,800 </b> </span>
          </div>
        </div>
      </div>

      <div class="mt-12 mx-2" style="margin-bottom: 80px" align="center">
        <p style="font-size: 13px" class="black--text mb-2" align="left">EASY AND SECURE PAYMENTS</p>
        <span>
          <v-img
            style="display: inline-block"
            height="50"
            class="mr-5"
            width="70"
            src="https://www.mastercard.co.za/content/dam/mccom/global/logos/logo-mastercard-mobile.svg"
          ></v-img>
        </span>
        <span>
          <v-img
            style="display: inline-block; margin-bottom: -12px"
            height="70"
            class="mr-5"
            width="90"
            src="https://www.visa.co.za/dam/VCOM/global/pay-with-visa/images/visa-secure-logo-800x450.png"
          ></v-img>
        </span>
        <span>
          <v-img
            style="display: inline-block; margin-bottom: -6px"
            height="50"
            width="70"
            src="https://www.howwemadeitinafrica.com/wp-content/uploads/2019/08/verve-logo.png"
          ></v-img>
        </span>
        <v-divider class="mt-4" style="width: 100vw"></v-divider>
      </div>

      <v-bottom-navigation fixed class="white--text" height="49">
        <v-btn block height="49" color="black" class="white--text">
          <span class="white--text text-uppercase" style="font-size: 14px">Checkout</span>
        </v-btn>
      </v-bottom-navigation>

    </div>

    <div v-else class="mb-14">
      <h5 class="py-3 px-3 mt-1 ZameriaAsh font-weight-light" align="center">
        <nuxt-link to="/faqs#Returns & Refund" class="ZameriaGrey--text">Return & Refund Policies</nuxt-link>
      </h5>
      <div class="mx-3 mt-5 cart-empty" align="center">
        <v-img :src="require('@/assets/images/core-values.png')" aspect-ratio="1.3"></v-img>
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

export default {
  layout: "nofooter",
  components: {
    cart
  },
  data() {
    return {
      cart: true
    };
  }
};
</script>

<style>
.summary-title {
  font-size: 15px;
  display: inline-block;
  flex-grow: 1;
}

.summary-value {
  font-size: 15px;
}
</style>
