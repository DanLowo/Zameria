<template>
  <div class="search" style="margin-bottom: 70px">
    <main-navbar></main-navbar>
    <div  v-show="isDepartment" class="mt-1">
    <v-img
      style="border: 1px solid #e2e2e2"
      :src="require(`@/assets/images/${image}`)"
      alt="32"
      height="230"
    ></v-img>
    </div>
    <div class="mx-2 mt-2 py-2">
      <!-- <div>
        <main-brands></main-brands>
      </div> -->
      <!-- <div class="filter py-2 px-3 mt-3 filter-sort">
        <span class="filter-sort-text">Filter</span>
        <v-icon>mdi-plus</v-icon>
      </div>-->

      <div class="sort-by py-2 px-3 mt-3 filter-sort">
        <span class="filter-sort-text">Sort by</span>
        <v-icon @click="setDialog">mdi-plus</v-icon>
      </div>
    </div>

    <v-dialog v-model="dialog" max-width="600px">
      <v-list>
        <v-list-item v-for="keys in sortKeys" :key="keys" @click="selectSort(keys)">
          <v-list-item-title>{{keys}}</v-list-item-title>
          <v-list-item-icon>
            <v-icon
              class="sort-circle"
              color="ZameriaLightRed"
              v-if="sorts[keys]"
              size="10"
            >mdi-circle</v-icon>
            <v-icon class="sort-circle" color="white" v-else size="10">mdi-circle</v-icon>
          </v-list-item-icon>
          <v-divider></v-divider>
        </v-list-item>
      </v-list>
    </v-dialog>

    <div class="mt-3 mx-2 searched-products">
      <AllProducts products="400" row="20" col="2" head="false"></AllProducts>
    </div>

    <div class="you-might-also-like mt-15">
      <ProductGrid head="true" header="You might also like" slide="true" :images="imageList"></ProductGrid>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import ProductGrid from "@/components/productGrid.vue";
import AllProducts from "@/components/allProducts.vue";

export default {
  components: {
    ProductGrid,
    AllProducts
  },
  data() {
    return {
      dialog: false,
      image: "",
      imageList: ["shoe.jpeg", "shoe2.jpg", "watch.jpg", 'shoes.webp', "shoe.jpeg", "shoe2.jpg",'watch.jpg', 'shoes3.jpg']
    };
  },
  computed: {
    ...mapState("actionss", ["searchText", "sorts"]),
    sortKeys: function() {
      let keys = Object.keys(this.sorts);
      return keys;
    },
    isDepartment: function(){
        switch(this.$route.params.name){
          case 'Women':
            return this.image = "woman.jpg"
          case 'Men':
            return this.image = "man.jpg"
          case 'Girls':
            return this.image = "girl.png"
          case 'Boys':
            return this.image = 'boy.jpg'
          case 'Toddler':
            return this.image = 'toodler.jpg'
          case 'Baby':
            return this.image = 'baby.jpg'
          default:
            return this.$router.push('/')
        }
        return true
    }
  },
  fetch({ params, store, redirect }) {
    switch(params.name){
      case 'Women':
        return this.image = "woman.jpg"
      case 'Men':
        return this.image = "man.jpg"
      case 'Girls':
        return this.image = "girl.png"
      case 'Boys':
        return this.image = 'boy.jpg'
      case 'Toddler':
        return this.image = 'toodler.jpg'
      case 'Baby':
        return this.image = 'baby.jpg'
      default:
        return redirect('/')
    }
  },

  methods: {
    selectSort(type) {
      this.$store.commit("actionss/setSorts", type);
    },
    setDialog() {
      this.dialog = !this.dialog;
    }
  }
};
</script>

<style lang="scss">
@import "~/scss/custom.scss";

.filter-sort {
  border: 1px solid $ZameriaAsh;
  display: flex;
}

.filter-sort-text {
  flex-grow: 1;
}

.sort-circle {
  border: 2px solid grey;
  border-radius: 50%;
  padding: 2px;
}
</style>
