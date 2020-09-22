<template>
  <div class="new-address" style="margin-bottom: 80px">
    <v-app-bar color="white" id="cus-nav-bar">
      <v-icon @click="$router.back()" style="font-size: 33px">mdi-chevron-left</v-icon>
      <v-toolbar-title style="font-size: 18px" class="mx-2">Account Details</v-toolbar-title>
    </v-app-bar>

    <div class="mx-4 mt-5">
      <v-form>
        <v-text-field label="First Name" color="ZameriaLightRed" v-model="firstName"></v-text-field>

        <v-text-field label="Last Name" color="ZameriaLightRed" v-model="lastName"></v-text-field>

        <v-text-field label="Email" type="email" color="ZameriaLightRed" v-model="email"></v-text-field>

        <v-text-field
          prefix="+234"
          color="ZameriaLightRed"
          class="number"
          v-model="number"
          label="Phone Number"
        ></v-text-field>

        <v-select
          :items="['Male', 'Female', 'Other']"
          placeholder="Select gender"
          v-model="gender"
          color="ZameriaLightRed"
          label="Gender (optioinal)"
        ></v-select>

        <v-menu
          ref="menu"
          v-model="menu"
          :close-on-content-click="false"
          transition="scale-transition"
          offset-y
          max-width="290px"
          min-width="290px"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              v-model="dateFormatted"
              label="Birthday (optional)"
              hint="MM/DD/YYYY format"
              persistent-hint
              v-bind="attrs"
              @blur="date = parseDate(dateFormatted)"
              append-icon="calendar-blank"
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker v-model="date" no-title @input="menu1 = false"></v-date-picker>
        </v-menu>

        <v-btn
          type="submit"
          class="mt-5"
          height="43"
          depressed
          dark
          block
          tile
          color="black"
        >Save</v-btn>
      </v-form>
    </div>
  </div>
</template>

<script>
import StateJson from "@/assets/docs/states.json";
import LgaJson from "@/assets/docs/lgas.json";

export default {
  layout: "nonavbar",
  data() {
    return {
      firstName: "",
      lastName: "",
      email: "",
      number: "",
      gender: "",
      date: "",
      menu: false,
      date: new Date().toISOString().substr(0, 10),
      dateFormatted: this.formatDate(new Date().toISOString().substr(0, 10))
    };
  },
  computed: {
    computedDateFormatted() {
      return this.formatDate(this.date);
    }
  },

  watch: {
    date(val) {
      this.dateFormatted = this.formatDate(this.date);
    }
  },

  methods: {
    formatDate(date) {
      if (!date) return null;

      const [year, month, day] = date.split("-");
      return `${month}/${day}/${year}`;
    },
    parseDate(date) {
      if (!date) return null;

      const [month, day, year] = date.split("/");
      return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
    }
  }
};
</script>

<style>
</style>