<template>
  <div class="departments" id="dept">
    <Navbar/>
    <div class="header pl-4">
      <v-icon @click="$router.back()"  style="display: inline-flex; margin-right: 20%; margin-bottom: 5px;" large color="black">mdi-chevron-left</v-icon>
      <h3 class="font-weight-medium" align="center" style="font-size: 20px; display: inline;">
        {{ name }}
      </h3>
    </div>

    <v-list>
      <div v-for="obj in main" :key="obj.title">
        <v-list-item @click="ok">
          <v-list-item-title>{{obj.title}}</v-list-item-title>
          <v-list-item-icon>
            <v-icon color="black">mdi-chevron-right</v-icon>
          </v-list-item-icon>
        </v-list-item>
        <v-divider></v-divider>
      </div>
    </v-list>
  </div>
</template>

<script>
import Category from "@/assets/docs/category.json";
import Navbar from "@/components/navbar";

export default {
  components: {
    Navbar
  },
  data() {
    return {};
  },
  computed: {
    main() {
      let department = this.$route.params.name;
      return Category[department];
    },
    name() {
      let name = this.$route.params.name;
      let title = name.replace("-", " ");
      return title;
    }
  },
  methods: {
    ok() {}
  }
};
</script>

<style>
</style>