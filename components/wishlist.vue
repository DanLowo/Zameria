<template>
  <div class="cart">
    <v-card flat class="pa-3 pt-4">
      <v-row>
        <v-col cols="3" class="mb-0 pb-0">
          <v-img
            alt="image"
            src="https://dj7u9rvtp3yka.cloudfront.net/products/PIM-1574136421601-08a29384-4a90-4ad9-8aa8-c289b92686b4_v1-small.jpg"
          ></v-img>
        </v-col>
        <v-col cols="9" class="mb-0 pb-0">
          <div>
            <div style="font-size: 14px" class="mb-1 name-of-product">
              <b>{{product.name}}</b>
            </div>
            <div style="font-size: 13px; color: red" class="discount">
              <span>
                <b>N{{product.price}}</b>
              </span>
              <span class="grey--text ml-2">
                <del>N20,000</del>
              </span>
            </div>
            <div class="color-and-size mr-7" style="font-size: 13px; display: flex">
              <span style="flex-grow: 1">Color: {{'Red'}}</span>
              <span>Size: 36.6 EU</span>
            </div>

          </div>
        </v-col>
      </v-row>
      <v-divider class="mx-2"></v-divider>
      <div style="display: flex" class="blue--text mx-2">
        <span style="flex-grow: 1;" class="mr-0 pr-0">
          <v-btn text style="font-size: 9px" class="ml-0 pl-0 blue--text" @click="moveToCart">
            <b>Move to Cart</b>
          </v-btn>
        </span>
        <span>
          <v-btn
            text
            style="font-size: 9px; "
            class="mr-0 pr-0 blue--text"
            @click="removeProductFromWishlist"
          >
            <v-icon small>mdi-close</v-icon>
            <b>Remove</b>
          </v-btn>
        </span>
      </div>
      <v-divider></v-divider>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "wishlist",
  props: ["productData"],
  computed: {
    product() {
      return this.productData.product;
    },
  },
  data() {
    return {
    };
  },
  methods: {
    async removeProductFromWishlist() {
      try {
        await this.$store.dispatch(
          "wishlist/removeWishlistItem",
          this.productData.details.id
        );
      } catch (err) {
        console.log(err);
      }
    },
    async moveToCart() {
      try {
        let dataDetails = {
          product: this.product.id,
          quantity: 1
        };
        await this.$store.dispatch("cart/addCart", dataDetails);
        await this.$store.dispatch(
          "wishlist/removeWishlistItem",
          this.productData.details.id
        );
      } catch (err) {
        console.log(err);
      }
    }
  }
};
</script>

<style>
</style>