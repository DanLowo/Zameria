<template>
  <div class="all-products-with-next">
    <div id="products">
      <v-row class="mt-8" v-for="n in rows" :key="n" dense>
        <v-col v-for="i in grid" :key="i" :sm="cols" :md="cols" :lg="cols">
          <nuxt-link :to="{ name: 'item', params: {item: 'addidas-shoe-new'}}">
          <v-img class="grid-img" :height="height" aspect-ratio="1"></v-img>
          </nuxt-link>
          <div>
            <div v-if="wished">
              <v-icon
                v-if="wished"
                size="medium"
                @click="addToWishList"
                color="ZameriaRed"
              >mdi-heart-multiple</v-icon>
              <br />
            </div>
            <div v-else>
              <v-icon size="medium" @click="addToWishList" color="grey">mdi-heart-multiple-outline</v-icon>
              <br />
            </div>

            <div v-if="grid !== 2 || grid !== 1" class="mb-0 pb-0 font-weight-light">
              <p id="wrap-text-3-above">Reebok Nano Blue Original Sneakers</p>
            </div>
            <div v-else class="mb-0 pb-0 font-weight-light">
              <p class="wrap-text">Reebok Nano Blue Original Sneakers</p>
            </div>
            <span style="font-size: 15px">
              <b>N5,000</b>
            </span>
            <div class="font-weight-light" style="font-size: 14px">
              <span class="pr-1">
                <del>N8,500</del>
              </span>
              <span class="ZameriaLightRed--text">60%off</span>
            </div>
          </div>
        </v-col>
      </v-row>

      <div align="center" class="mt-8" v-if=" numberOfPages !== 1 ">
        <p
          class="mb-2 pb-0"
          style="font-size: 14px"
        >Showing page {{page}} of {{numberOfPages}} page(s)</p>
        <v-btn
          width="40%"
          @click="backPage"
          :disabled="backDisabled"
          class="mr-3 text-capitalize"
          tile
          height="40"
          depressed
          outlined
          color="black"
        >
          <b>Previous</b>
        </v-btn>
        <v-btn
          height="40"
          width="40%"
          @click="nextPage"
          :disabled="nextDisabled"
          class="text-capitalize"
          tile
          depressed
          outlined
          color="black"
        >
          <b>Next</b>
        </v-btn>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "allProducts",
  props: ["header", "products", "image", "row", "col", "head", "slide"],
  data() {
    return {
      grid: 1,
      wished: false,
      page: 1,
      currentRow: this.row,
      nextDisabled: false,
      backDisabled: true
    };
  },
  watch: {
    page: function() {
      if (this.page === this.numberOfPages) {
        this.nextDisabled = true;
      } else this.nextDisabled = false;

      if (this.page >= 2) {
        this.backDisabled = false;
      } else this.backDisabled = true;
    }
  },
  computed: {
    numberOfPages: function() {
      let products = Number(this.products);
      let pages = products / 40;
      Math.round(pages);
      return pages;
    },
    rows: function() {
      let r = Number(this.currentRow);
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
    nextPage() {
      this.page += 1;
      let el = document.getElementById("products");
      el.scrollIntoView(true);

      // let addRow = Number(this.currentRow);
      // addRow += 6;
      // this.currentRow = addRow;
    },
    backPage() {
      this.page -= 1;
      let el = document.getElementById("products");
      el.scrollIntoView(true);

      // let previousRow = Number(this.currentRow);
      // previousRow -= 6;
      // this.currentRow = previousRow;
    }
  }
};
</script>

<style>
.grid-img{
  border: 1px solid #e2e2e2;
}
</style>