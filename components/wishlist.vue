<template>
  <div class="wishlist-view">
    <v-row v-for="n in rows" :key="n" dense>
      <v-col class="mt-3" v-for="i in 2" :key="i" sm="6" md="6" lg="6">
        <v-img class="grid-img" height="220" aspect-ratio="1"></v-img>
        <br />
        <span class="nowrap-text font-weight-light">Reebok Nano Blue Ori..</span>
        <br />
        <span style="font-size: 15px">
          <b>N5,000</b>
        </span>
        <div class="font-weight-light" style="font-size: 14px">
          <span class="pr-1">
            <del>N8,500</del>
          </span>
          <span class="ZameriaLightRed--text">60%off</span>
        </div>
        <v-btn block outlined depressed height="40" tile class="ZameriaRed--text mt-3">
            ADD TO CART
        </v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "WishList",
  props: ["products", "image", "row"],
  data() {
    return{
      grid: 1
    }
  },
  computed: {
    rows: function() {
      let r = Number(this.row);
      return r;
    },
  }
};
</script>

<style lang="scss">
@import "~/scss/custom.scss";

.grid-img {
  border: 1px solid $ZameriaAsh;
}
</style>