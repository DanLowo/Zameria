<template>
  <div class="px-4 pt-8 pb-5 footer">
    <p>
      <nuxt-link to="/about" class="black--text nav-link">About</nuxt-link>
    </p>
    <p>
      <nuxt-link to="/faqs" class="black--text nav-link">FAQs</nuxt-link>
    </p>
    <p>
      <nuxt-link to="/agreements/contact-us" class="black--text nav-link">Help & Contact</nuxt-link>
    </p>
    <p>
      <nuxt-link to="/" class="black--text nav-link">Download our App</nuxt-link>
    </p>
    <p>
      <nuxt-link to="/auth/login" class="black--text nav-link">Sign in / Register</nuxt-link>
    </p>

    <v-divider class="ZameriaDividerGray mt-10"></v-divider>
    <div style="display: flex" class="black--text pt-2 pb-2">
      <a class="nav-link" href="https://wa.me/2348058987450">
        <v-icon class="mr-4" color="black">mdi-whatsapp</v-icon>
      </a>
      <a class="nav-link" href="https://www.instagram.com/zameriahq">
        <v-icon class="mr-4" color="black">mdi-instagram</v-icon>
      </a>
      <a class="nav-link" href="https://facebook.com/zameriaHQ">
        <v-icon class="mr-4" color="black">mdi-facebook</v-icon>
      </a>
      <a class="nav-link" href="https://www.linkedin.com/company/zameria">
        <v-icon class="mr-4" color="black">mdi-linkedin</v-icon>
      </a>
      <a class="nav-link" href="https://twitter.com/zameriahq">
        <v-icon class="mr-4" color="black">mdi-twitter</v-icon>
      </a>
    </div>
    <v-divider class="ZameriaDividerGray"></v-divider>

    <div align="center" class="pt-6 black--text">
      <p style="font-size: 13px;" class="mb-1">Copyright 2020 ZAMERIA. All right reserved</p>
      <p>
        <span class="mr-3" style="font-size: 11px">
          <nuxt-link to="/agreements/terms-of-use" class="black--text">Terms of use</nuxt-link>
        </span>
        <span class="mr-3" style="font-size: 11px">
          <nuxt-link to="/contact-us" class="black--text">Contact us</nuxt-link>
        </span>
        <span class="mr-3" style="font-size: 11px">
          <nuxt-link to="/agreements/privacy-policy" class="black--text">Privacy Policy</nuxt-link>
        </span> <br>
        <span class="mr-3" style="font-size: 11px">
          <nuxt-link to="/" class="black--text">Sell an item</nuxt-link>
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

.footer p{
  font-size: 15px;
}
</style>