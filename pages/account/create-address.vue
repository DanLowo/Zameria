<template>
  <div class="new-address" style="margin-bottom: 80px">
    <v-app-bar color="white" id="cus-nav-bar">
        <v-icon @click="$router.back()" style="font-size: 33px">mdi-chevron-left</v-icon>
      <v-toolbar-title style="font-size: 18px" class="mx-2">New Address</v-toolbar-title>
    </v-app-bar>

    <div class="mx-4 mt-5">
      <v-form>
        <v-text-field label="First Name" color="ZameriaLightRed" v-model="firstName"></v-text-field>

        <v-text-field label="Last Name" color="ZameriaLightRed" v-model="lastName"></v-text-field>

        <v-text-field prefix="+234" color="ZameriaLightRed" class="number" label="Phone Number"></v-text-field>

         <v-text-field prefix="+234" color="ZameriaLightRed" class="number" label="Additional Phone Number"></v-text-field>

        <v-text-field label="Address (optional)" color="ZameriaLightRed" v-model="address"></v-text-field>

        <v-text-field label="Additional Information" color="ZameriaLightRed" v-model="additionalInformation"></v-text-field>

        <v-select :items="states" v-model="state" color="ZameriaLightRed" label="State"></v-select>

        <v-select :items="cities" v-model="city" color="ZameriaLightRed" label="City"></v-select>

        <v-checkbox label="Set as default address" class="okkk"></v-checkbox>

        <v-btn type="submit" class="mt-5" height="40" depressed dark block tile color="ZameriaRed"> Save </v-btn>
      </v-form>
    </div>
  </div>
</template>

<script>

import StateJson from "@/assets/docs/states.json";
import LgaJson from "@/assets/docs/lgas.json";

export default {
  data() {
    return {
      firstName: "",
      lastName: "",
      address: "",
      additionalInformation: "",
      state: "",
      city: "",
      states: [],
      cities: []
    };
  },

  watch: {
    state: async function(newValue) {
      let state = this.state
      let cities = []
      LgaJson.map(lgas => {
        if(lgas.state === state)
        cities = lgas['lgas']
      })
      this.cities = cities;
    }
  },

  async asyncData({ $axios, store }) {
    let stateArr = [];
    StateJson.map(state => {
      stateArr.push(state.name);
    });
    this.states = stateArr;
  }
};
</script>

<style>
</style>