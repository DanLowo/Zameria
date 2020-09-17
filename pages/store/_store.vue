<template>
  <div class="stores" style="margin-bottom:120px">
    <main-navbar></main-navbar>
    <div class="mt-2">
      <v-img class="store-banner"></v-img>
    </div>

    <div class="mt-3 mx-2 mt-10 go">
      <p style="font-size: 16px">{{storeName}}</p>
    </div>
    <AllProducts class="mx-2" products="400" row="20" col="2" head="false"></AllProducts>
  </div>
</template>

<script>
import AllProducts from "@/components/allProducts.vue";

export default {
  components: {
    AllProducts
  },
  data() {
    return {
      storeName: ""
    };
  },
  async fetch() {
    let value = this.$route.params.store;
    this.storeName = value;
    // value = value.replace(/-/g, " ");
    // store.commit("actionss/setSearch", value);
  }
};
</script>

<style>
.store-banner {
  border: 1px solid #e2e2e2;
  height: 175px;
}

.go {
  margin-bottom: -28px;
}
</style>