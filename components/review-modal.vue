<template>
  <div class="review-modal">
    <v-card class="pl-4 pr-4 py-3 mx-0 my-0">
      <div class="mb-1" align="center">
        <h3 class="mb-1 font-weight-light">Review</h3>
        <v-rating v-model="rating"></v-rating>
      </div>
      <div class="mb-3 mt-2" v-show="showReview">
        <form @submit.prevent="review">
          <textarea
            rows="4"
            id="comment"
            class="zameria-light-form"
            placeholder="Write a review"
            v-model="comment"
          ></textarea>
          <v-btn type="submit" block color="ZameriaRed" dark>Review</v-btn>
        </form>
      </div>
      <div align="right">
        <v-btn text color="ZameriaBlue" @click="reviewModal">Close</v-btn>
      </div>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "review-modal",
  data() {
    return {
      rating: 0,
      comment: "",
      showReview: false
    };
  },
  watch: {
    rating: function() {
      this.showReview = true;
    }
  },
  methods: {
    reviewModal() {
      this.rating = 0;
      this.comment = "";
      this.$store.commit("actionss/setReviewModal", "set");
    },
    review() {}
  }
};
</script>

<style>
</style>