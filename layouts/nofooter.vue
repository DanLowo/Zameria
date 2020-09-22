<template>
    <v-app>
        <main-navbar></main-navbar>
      <Nuxt />
    </v-app>
</template>

<script>


export default {
};
</script>
<style lang="scss">
@import "~/scss/custom.scss";
#search-btn {
  position: absolute;
  top: 92px;
  height: 44px;
  right: 8px;
  z-index: 1;
}
</style>
