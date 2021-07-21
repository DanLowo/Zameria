<template>
  <div>
    <!-- Product grid for scrollable products -->
    <div v-if="slides" class="mx-2">
      <div v-show="heads" style="display: flex;">
        <span class="font-weight-bold text-uppercase grid-header" style="flex-grow: 1; font-size: 14px">
          <b>{{ header }}</b>
        </span>
        <span
          style="font-size: 14px; text-decoration: none"
          class="ZameriaRed--text"
          @click="sendRoute(header)"
        >
          <b>See More</b>
        </span>
      </div>
      <div class="slide-products mt-3">
        <div v-for="(product, k) in allProducts" :key="k" class="mr-2" style="display: inline-block" @click="setProductToView(product)">
          <nuxt-link :to="{ name: 'item', params: {item: 'addidas-shoe-new'}}">
            <v-img class="grid-img-slide" aspect-ratio="1"  :src="require(`@/assets/images/${images[0]}`)" ></v-img>
          </nuxt-link>
          <div>

            <div v-if="grid !== 2 || grid !== 1" class="mb-0 pb-0 font-weight-light">
              <p id="wrap-text-3-above">{{product.name}}</p>
            </div>
            <div v-else class="mb-0 pb-0 font-weight-light">
              <p class="wrap-text">{{product.name}}</p>
            </div>
            <span style="font-size: 18px" class="font-weight-bold">
              <b>N{{product.price}}</b>
            </span>
            <div style="font-size: 13px">
              <span class="pr-1 grey--text font-weight-bold">
                <del>N20,000</del>
              </span>
              <span class="ZameriaRed--text font-weight-bold" style="font-size: 12px">60%off</span>
            </div>
          </div>
        </div>
      </div>
    </div>


    <!-- gird display -->
    <div v-else class="productGrid mx-2">
      <div v-show="heads" style="display: flex">
        <span class="text-uppercase" style="flex-grow: 1; font-size: 14px">
          <b>{{ header }}</b>
        </span>
        <span
          style="font-size: 14px; text-decoration: nonene"
          class="ZameriaLightRed--text font-weight-bold"
          @click="sendRoute(header)"
        >See More</span>
      </div>
      <v-row v-for="n in rows" :key="n" dense>
        <v-col class="mt-3" v-for="i in grid" :key="i" :sm="cols" :md="cols" :lg="cols">
          <nuxt-link :to="{ name: 'item', params: {item: 'addidas-shoe-new'}}">
            <v-img
              class="grid-img"
              :height="height"
              aspect-ratio="1"
              style="border: 1px solid #E2E2E2"
            ></v-img>
          </nuxt-link>
          <div>
            <div v-if="grid !== 2 || grid !== 1" align="center" class="mb-0 pb-0 font-weight-light">
              <p class="font-weight-bold">Reebok Nano Blue Original Sneakers</p>
            </div>
            <div v-else class="mb-0 pb-0 font-weight-light">
              <p class="font-weight-bold">Reebok Nano Blue Original Sneakers</p>
            </div>
            <span style="font-size: 15px">
              <b>N5,000</b>
            </span>
            <div style="font-size: 14px">
              <span class="pr-1 font-weight-light">
                <del>N8,500</del>
              </span>
              <span class="ZameriaLightRed--text" style="font-size: 13px">60%off</span>
            </div>
          </div>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
export default {
  // name: "product-grid",
  props: ["header", "images", "row", "col", "head", "slide"],
  data() {
    return {
      grid: 1,
      wished: false
    };
  },
  computed: {
    allProducts() {
      return this.$store.state.products.allProducts.products
    },
    rows: function() {
      let r = Number(this.row);
      return r;
    },
    heads: function() {
      if (this.head === "false") {
        return false;
      } else {
        return true;
      }
    },
    slides: function() {
      if (this.slide === "true") {
        return true;
      } else {
        return false;
      }
    },
    cols: function() {
      let col = Number(this.col);
      this.grid = col;
      switch (col) {
        case 1:
          return 12;
        case 2:
          return 6;
        case 3:
          return 4;
      }
    },
    height: function() {
      switch (this.grid) {
        case 2:
          return 220;
        case 3:
          return 150;
      }
    }
  },
  methods: {
    addToWishList() {
      this.wished = !this.wished;
    },
    sendRoute(header) {
      this.$store.commit("actionss/setSearch", header);
      this.$router.push(`/search/${header}`);
    },
    setProductToView(product){
      this.$store.commit('products/setProduct', product)
    }
  }
};
</script>

<style lang="scss">
@import "~/scss/custom.scss";

.grid-header{
  font-family: "SemiBold Font";
}

.grid-img-slide {
  border: 1px solid $ZameriaAsh;
  height: 163.66px;
  width: 116.95px;
  // height: 150px;
}

// .grid-img-slide {
//   border: 1px solid $ZameriaAsh;
//   height: 163.66px;
//   width: 116.95px;
//   // height: 150px;
// }

#wrap-text-3-above {
  margin-block-start: 0em;
  margin-block-end: 0em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  white-space: normal;
  width: 120px;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 14px;
}

#wrap-text-3-above-2 {
  margin-block-start: 0em;
  margin-block-end: 0em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  white-space: normal;
  width: 155px;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 14px;
}

.wrap-text {
  margin-block-start: 0em;
  margin-block-end: 0em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  white-space: normal;
  width: 150px;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 14px;
}

.slide-products {
  overflow-x: auto;
  overflow-y: hidden;
  white-space: nowrap;
}
.slide-products::-webkit-scrollbar {
  display: none;
}
</style>
