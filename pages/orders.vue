<template>
  <div class="orders">
    <div class="mt-2">
      <nuxt-link to="/wishlist">
        <h5 class="py-3 px-3 mt-1 ZameriaAsh black--text font-weight-light" align="center">
          <u>Account / Wishlist</u>
        </h5>
      </nuxt-link>
    </div>
    <main-orders></main-orders>
  </div>
</template>

<script>
export default {
  layout: "nofooter"
};
</script>

<style>
</style>