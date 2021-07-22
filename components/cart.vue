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
            <div class="quantity mt-5 mb-5" style="font-size: 14px">
              <span>Quantity:</span>
              <span>
                <!-- <main-quantity></main-quantity> -->
                <span class="quantity mx-1">
                  <span>
                    <v-icon
                      @click="count('minus')"
                      :class="{counterIsOne: counter===1, counterIsNotOne: counter !== 1}"
                      style="border-radius: 12px"
                    >mdi-minus</v-icon>
                  </span>
                  <span class="font-weight-bold px-2">{{counter}}</span>
                  <span>
                    <v-icon
                      @click="count('add')"
                      :class="{counterIsMax: counter===maxCount, counterIsNotMax: counter !== maxCount}"
                      style="border-radius: 12px"
                    >mdi-plus</v-icon>
                  </span>
                </span>
                <!--
                <v-select
                  style="max-width: 80px; display: inline-block; border-radius: 0px;"
                  dense
                  height="30"
                  class="mb-0 pb-0 ml-3"
                  outlined
                  v-model="orderNumber"
                  :items="['1', '2', '3', '4', '5']"
                  color="ZameriaAsh"
                  :placeholder="orderNumber"
                ></v-select>-->
              </span>
            </div>
          </div>
        </v-col>
      </v-row>
      <v-divider class="mx-2"></v-divider>
      <div style="display: flex" class="blue--text mx-2">
        <span style="flex-grow: 1;" class="mr-0 pr-0">
          <v-btn text style="font-size: 9px" class="ml-0 pl-0 blue--text" @click="moveToWishlist">
            <b>Move to Wishlist</b>
          </v-btn>
        </span>
        <span>
          <v-btn text style="font-size: 9px; " class="mr-0 pr-0 blue--text" @click="removeProductFromCart">
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
  name: "cart",
  props: ["productData"],
  computed: {
    product() {
      return this.productData.product;
    },
    productQuantity() {
      let { details: {quantity} } = this.productData;
      return Number(quantity);
    }
  },
  data() {
    return {
      counter: this.productData.details.quantity,
      maxCount: 30,
      disable: false
    };
  },
  watch: {
    orderNumber: function(newVal) {
      if (newVal === 0) {
        this.disable = true;
      } else {
        this.disable = false;
      }
    }
  },
  methods: {
    count(type) {
      if (type === "minus") {
        if (this.counter > 1) {
          this.counter -= 1;
        }
      } else {
        if (this.counter < this.maxCount) {
          this.counter += 1;
        }
      }
    },
    async removeProductFromCart() {
      try {
        await this.$store.dispatch('cart/removeCartItem', this.productData.details.id)
      } catch (err) {
        console.log(err)
      }
    },
    async moveToWishlist() {
      try {
        let dataDetails = {
          product: this.product.id
        };
        await this.$store.dispatch("wishlist/addWishlist", dataDetails);
        await this.$store.dispatch(
          "cart/removeCartItem",
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
.quantity fieldset {
  height: 35px;
}

.quantity .v-select__slot {
  height: 27px;
}

.quantity .v-input__icon {
  margin-top: -5px;
}
.quantity .v-input__icon--append {
  margin-top: -5px;
}
</style>
