<template>
  <div class="address-book">
    <v-app-bar color="white" id="cus-nav-bar">
      <v-icon @click="$router.back()" style="font-size: 33px">mdi-chevron-left</v-icon>
      <v-toolbar-title style="font-size: 18px" class="mx-2">Addresses</v-toolbar-title>
    </v-app-bar>

    <div style="margin-bottom: 55vh" class="mt-3 pt-4 mx-2">
      <v-card>
        <v-card-title>Zion Olulowo</v-card-title>
        <v-card-subtitle>
          <p class="mb-0 pb-0">{{ address }}</p>
          <p class="mt-2 pt-0 pb-0 mb-0">{{ number }}</p>
        </v-card-subtitle>
        <p class="mt-0 pt-0 mx-4" style="color: green; font-size: 14px">Default Address</p>
        <v-divider></v-divider>
        <v-card-actions class="ok">
          <span aria-disabled="true" class="ZameriaAsh--text">Make default</span>
          <v-spacer></v-spacer>
          <v-btn icon to="/account/edit-address">
            <v-icon>mdi-pencil</v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
    </div>
    <div align="right" class="mb-2">
      <v-btn color="ZameriaAsh" to="/account/create-address" fab class="fab-icon">
        <v-icon>mdi-plus</v-icon>
      </v-btn>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'nonavbar',
  data() {
    return {
      address: "4, adio street new garage Gbagada Gbagada-New Garage, Lagos",
      number: "+234 9023384757",
      default: true
    };
  }
};
</script>

<style>
.oo {
  background-color: rgb(192, 179, 179);
}

.fab-icon {
  box-shadow: 0px 0px 0px 0px black;
  position: fixed;
  margin: 10px;
  bottom: 20px;
  right: 0px;
}
</style>