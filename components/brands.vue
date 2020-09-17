<template>
  <div class="brands mb-2 mt-3">
    <h4 align="center" class="mb-3">FEATURED STORES</h4>
    <v-carousel
      cycle
      interval="4000"
      :show-arrows="false"
      hide-delimiters
      height="118"
      v-model="carouselPosition"
    >
      <v-carousel-item v-for="(stores, k) in storess" :key="k">
        <v-row dense>
          <v-col v-for="store in stores.name" cols="4" :key="store" sm="4" md="4" lg="4">
            <nuxt-link :to="'/store/' + store">
              <v-img style="border: 1px solid #E2E2E2" aspect-ratio="1"></v-img>
            </nuxt-link>
          </v-col>
        </v-row>
      </v-carousel-item>
    </v-carousel>
    <div align="center" class="carousel-circles">
      <v-icon
        v-for="i in brands"
        :style=" [i === brands[carouselPosition] ? {'font-size': '9px'} : {'color': ZameriaAsh, 'font-size': '9px'}] "
        :key="i"
        class="mr-1"
      >mdi-circle</v-icon>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      brands: ["Nike", "Addidas", "Supreme"],
      carouselPosition: 0,
      ZameriaAsh: "#E2E2E2",
      ZameriaLightRed: "#FF554D",
      storess: [
        {
          name: ["Nike", "Addidas", "Supreme"]
        },
        {
          name: ["Jordan", "Vitton", "Samsung"]
        },
        {
          name: ["Supreme", "Vitton", "Nike"]
        }
      ]
    };
  }
};
</script>

<style>
</style>