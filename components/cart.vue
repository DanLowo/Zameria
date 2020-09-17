<template>
  <div class="cart">
    <v-card flat v-for="i in 3" :key="i">
      <div class="mt-5 mx-3 mb-3">
        <v-row class="px-2">
          <v-col cols="5">
            <v-img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png"
              aspect-ratio="1.2"
              alt="na"
            ></v-img>
          </v-col>
          <v-col cols="7" class="py-2">
            <h4>Addidas Spec 2</h4>
          </v-col>
        </v-row>
        <!-- <v-divider></!-->
        <v-container style="display: flex">
          <v-icon color="ZameriaRed" class="mr-1">mdi-heart-multiple-outline</v-icon>
          <!-- <v-divider vertical  color="red"></v-divider> -->
          <v-btn class="ml-2" text>
            <v-icon color="ZameriaRed">mdi-delete-outline</v-icon>
            <span class="font-weight-bold ZameriaRed--text">REMOVE</span>
          </v-btn>
          <span style="flex-grow: 1"></span>

          <v-btn :disabled="disable" icon @click="orderNumber -= 1">
            <v-icon color="ZameriaRed" size="18">mdi-minus-circle</v-icon>
          </v-btn>
          <span style="margin-top: 6px" class="mx-1 font-weight-bold">{{orderNumber}}</span>
          <v-btn icon @click="orderNumber += 1">
            <v-icon color="ZameriaRed" size="18">mdi-plus-circle</v-icon>
          </v-btn>
        </v-container>
      </div>
      <v-divider></v-divider>
    </v-card>

    <div class="mt-8 px-2">
      <div style="display: flex">
        <h4 style="flex-grow: 1">Total</h4>
        <span class="font-weight-bold"># 36,890</span>
      </div>
      <p style="font-size: 12px" class="mb-2 mt-2" align="right">Delivery fee not included yet</p>
      <v-btn block height="40" depressed color="ZameriaRed" dark>CHECKOUT</v-btn>
    </div>
  </div>
</template>

<script>
export default {
  name: "cart",
  data() {
    return {
      orderNumber: 1,
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
</style>