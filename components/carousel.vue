<template>
  <div>
    <v-carousel
      cycle
      interval="4000"
      :show-arrows="false"
      hide-delimiters
      height="320"
      v-model="carouselPosition"
    >
      <v-carousel-item v-for="(core, i) in slides" :key="i">
            <div>
              <v-img :src="require(`@/assets/images/${core}`)" aspect-ratio="1"></v-img>
            </div>
      </v-carousel-item>
    </v-carousel>
    <div align="center" v-if="circle === 'true' " class="carousel-circles">
      <v-icon
        v-for="(i, k) in slides"
        :style=" [i === slides[carouselPosition] ? {'font-size': '9px'} : {'color': ZameriaAsh, 'font-size': '9px'}] "
        :key="k"
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
        "man.jpg",
        "woman.jpg",
        "girl.png",
        "toodler.jpg",
        "baby.jpg"
      ],
      carouselPosition: 0,
      ZameriaAsh: "#E2E2E2",
      ZameriaLightRed: "#FF554D"
    };
  }
};
</script>

<style>

.carousel-circles{
  margin-top: -5px;
  margin-bottom: -3px
}

</style>
