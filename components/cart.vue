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
              <b>Nicholas Edison Heel Pedro Maroon Shoe</b>
            </div>
            <div style="font-size: 13px; color: red" class="discount">
              <span>
                <b>N12,000</b>
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
                ></v-select>
              </span>
            </div>
          </div>
        </v-col>
      </v-row>
      <v-divider class="mx-2"></v-divider>
      <div style="display: flex" class="blue--text mx-2">
        <span style="flex-grow: 1;" class="mr-0 pr-0">
          <v-btn text style="font-size: 9px" class="ml-0 pl-0 blue--text">
            <b>Move to Wishlist</b>
          </v-btn>
        </span>
        <span>
          <v-btn text style="font-size: 9px; " class="mr-0 pr-0 blue--text">
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
  data() {
    return {
      orderNumber: "1",
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
.quantity .v-input__icon--append{
  margin-top: -5px;
}
</style>