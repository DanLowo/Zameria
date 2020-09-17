<template>
  <div class="terms-of-use" style="margin-bottom: 70px">
    <NavBar></NavBar>
    <div class="mt-5 mx-3">
      <div v-html="terms" ></div>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/navbar.vue";
import Terms from "@/assets/docs/agreements/terms.txt"

export default {
  components: {
    NavBar
  },
  data(){
    return{
      terms : Terms
    }
  }
};
</script>

<style>

.terms-of-use p{
  font-size: 14px;
}

.terms-of-use h3{
  margin-bottom: 10px;
  margin-top: 30px;
}

</style>