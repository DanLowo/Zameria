<template>
  <div class="profile">
    <Navbar></Navbar>
    <h5 class="py-3 px-3 mt-1 ZameriaAsh font-weight-light" align="center">
      <nuxt-link to="/faqs#Returns & Refund" class="ZameriaGrey--text">Return & Refund Policies</nuxt-link>
    </h5>
    <div class="mt-7 mx-4" style="margin-bottom: 120px">
      <form @click.prevent="submit">
        <label for="name"> <b> Name </b> </label>
        <br />
        <input class="zameria-light-form" placeholder="Fullname" type="text" id="name" />
        <br />
        <label for="email"> <b> Email </b> </label>
        <br />
        <input class="zameria-light-form" placeholder="Email Address" type="text" id="email" />
        <br />
        <label for="number"> <b> Phone Number </b> </label>
        <br />
        <input class="zameria-light-form" placeholder="Phone Number" type="text" id="number" />
      </form>

    </div>
  </div>
</template>

<script>
import Navbar from "@/components/navbar";

export default {
  components: {
    Navbar
  },

  data() {
    return{
      states: ["Abia", "Adamawa", "Akwa Ibom", "Anambra", "Bauchi", "Baye"]  
    }
  },
  methods: {
    async submit() {
    }
  }
};
</script>

<style>
</style>