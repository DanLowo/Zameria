<template>
    <v-app>
      <Nuxt />
      <Footer></Footer>
    </v-app>
</template>

<script>

import Footer from "@/components/footer.vue"

export default {
  components: {
    Footer
  }
};
</script>
<style lang="scss">
@import "~/scss/custom.scss";
</style>
