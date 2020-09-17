<template>
  <div class="comments">
    <div>
      <v-row>
        <v-col class="mx-0 px-0" cols="6" sm="6" md="6">
          <p style="font-size: 15px" class="mb-0">Shop rating</p>
          <v-rating size="22" dense class="mx-0 px-0" color="black" v-model="rating"></v-rating>
        </v-col>
        <v-col cols="6" sm="6" md="6">
          <p style="font-size: 13px" class="mb-1">Total shop reviews</p>
          <p style="font-size: 16px">165</p>
        </v-col>
      </v-row>

      <div class="comment" v-for="i in 3" :key="i">
        <v-avatar size="40" class="mr-2" color="ZameriaAsh">M</v-avatar>
        <span style="font-size: 14px" class="mr-2">Danlowo</span>
        <span style="font-size: 14px">June 4, 2020</span>
        <p style="margin-top: -10px">
          <v-rating size="22" dense class="mx-12 px-0" color="black" v-model="ratings"></v-rating>
        </p>
        <p class="ml-12 mt-1">{{com}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "comments",
  data() {
    return {
      rating: 3,
      ratings: 5,
      com:
        "Exactly as expected. Lovely, colorful, and well put together. Jorey was so kind to make one for me with a black frame. Can't wait to put it on"
    };
  }
};
</script>

<style>
</style>