<template>
  <div class="faqs" style="margin-bottom: 100px">
    <NavBar></NavBar>

    <div class="mx-3 mt-7">
      <div class="questions" v-for="category in faqsList" :key="category.id">
        <h4
          class="mb-2 font-weight-bold"
          :id="category.name"
          style="font-size: 18px"
        >{{ category.name }}</h4>
        <v-divider></v-divider>

        <div class="mt-3" v-for="faqs in category.faqs" :key="faqs.question">
          <p>
            <a
              :href="'#' + faqs.question.replace(/\s/g, '-')"
              style="text-decoration: none; font-size: 14px"
            >{{ faqs.question }}</a>
          </p>
        </div>

        <br />
      </div>

      <div class="answers mt-3" v-for="category in faqsList" :key="category.name">
        <h4 class="mb-2 font-weight-bold" style="font-size: 19px">{{ category.name }}</h4>
        <v-divider></v-divider>

        <div
          class="mt-5"
          v-for="faqs in category.faqs"
          :key="faqs.answer"
          :id="faqs.question.replace(/\s/g, '-')"
        >
          <h4 class="font-weight-bold pt-3" style="font-size: 15px">{{ faqs.question }}</h4>
          <p style="font-size: 14px" class="mt-3">{{faqs.answer}}</p>
          <v-divider></v-divider>
        </div>

        <br />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import NavBar from "@/components/navbar";

export default {
  components: {
    NavBar
  },
  computed: {
    ...mapState("actionss", ["faqsList"])
  },
  async asyncData({ $axios, store }) {
    try {
      let data = await $axios.get(
        "https://zameria.herokuapp.com/questions/faq_category"
      );
      store.commit("actionss/setFaqs", data.data);
    } catch (error) {
      console.log('')
    }
  }
};
</script>

<style>
</style>