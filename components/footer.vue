<template>
  <div class="ZameriaGrey px-2 pt-8 pb-5">
    <p>
      <nuxt-link to="/about" class="white--text nav-link">About</nuxt-link>
    </p>
    <p>
      <nuxt-link to="/faqs" class="white--text nav-link">FAQs</nuxt-link>
    </p>
    <p>
      <nuxt-link to="/agreements/contact-us" class="white--text nav-link">Help & Contact</nuxt-link>
    </p>
    <p>
      <nuxt-link to="/" class="white--text nav-link">Download our App</nuxt-link>
    </p>
    <p>
      <nuxt-link to="/auth/login" class="white--text nav-link">Sign in / Register</nuxt-link>
    </p>

    <v-divider class="white mt-10"></v-divider>
    <div style="display: flex" class="white--text pt-2 pb-2">
      <span style="flex-grow: 1; font-size: 16px">Follow Us</span>
      <a class="nav-link" href="https://wa.me/2348058987450">
        <v-icon class="mr-4" color="white">mdi-whatsapp</v-icon>
      </a>
      <a class="nav-link" href="https://www.instagram.com/zameriahq">
        <v-icon class="mr-4" color="white">mdi-instagram</v-icon>
      </a>
      <a class="nav-link" href="https://facebook.com/zameriaHQ">
        <v-icon class="mr-4" color="white">mdi-facebook</v-icon>
      </a>
      <a class="nav-link" href="https://www.linkedin.com/company/zameria">
        <v-icon class="mr-4" color="white">mdi-linkedin</v-icon>
      </a>
      <a class="nav-link" href="https://twitter.com/zameriahq">
        <v-icon class="mr-4" color="white">mdi-twitter</v-icon>
      </a>
    </div>
    <v-divider class="white"></v-divider>

    <div align="center" class="pt-6 white--text">
      <p style="font-size: 13px;" class="mb-1">Copyright 2020 ZAMERIA. All right reserved</p>
      <p>
        <span class="mr-3" style="font-size: 11px">
          <nuxt-link to="/agreements/terms-of-use" class="white--text">Terms of use</nuxt-link>
        </span>
        <span class="mr-3" style="font-size: 11px">
          <nuxt-link to="/agreements/contact-us" class="white--text">Contact us</nuxt-link>
        </span>
        <span class="mr-3" style="font-size: 11px">
          <nuxt-link to="/agreements/privacy-policy" class="white--text">Privacy Policy</nuxt-link>
        </span>
        <span class="mr-3" style="font-size: 11px">
          <nuxt-link to="/" class="white--text">Sell an item</nuxt-link>
        </span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style>
.nav-link {
  text-decoration: none;
}
</style>