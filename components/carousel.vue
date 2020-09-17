<template>
  <div>
    <v-carousel
      cycle
      interval="4000"
      :show-arrows="false"
      hide-delimiters
      height="300"
      v-model="carouselPosition"
    >
      <v-carousel-item v-for="(core, i) in slides" :key="i">
        <v-sheet height="100%">
          <v-row class="fill-height" align="center" justify="center">
            <div class="display-3">
              <v-img :src="require(`@/assets/images/${core}`)" aspect-ratio="4"></v-img>
            </div>
          </v-row>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
    <div align="center" v-if="circle === 'true' " class="carousel-circles">
      <v-icon
        v-for="i in slides"
        :style=" [i === slides[carouselPosition] ? {'font-size': '9px'} : {'color': ZameriaAsh, 'font-size': '9px'}] "
        :key="i"
        class="mr-1"
      >mdi-circle</v-icon>
    </div>
  </div>
</template>

<script>
export default {
  name: "carousel",
  props: ["circle"],
  data() {
    return {
      slides: [
        "core-values.png",
        "stand-for-something.png",
        "LovingDoodle.png"
      ],
      carouselPosition: 0,
      ZameriaAsh: "#E2E2E2",
      ZameriaLightRed: "#FF554D"
    };
  }
};
</script>

<style>
</style>