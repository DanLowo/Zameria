<template>
  <div class="privacy-policy" style="margin-bottom: 70px">
    <NavBar></NavBar>
    <div class="mt-5 mx-3">
      <div v-html="privacy">

      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/navbar.vue";
import Privacy from "@/assets/docs/agreements/privacy.txt"

export default {
  components: {
    NavBar
  },
  data(){
    return{
      privacy: Privacy
    }
  }
};
</script>

<style>

.privacy-policy p{
  font-size: 14px;
}

.privacy-policy h3{
  margin-bottom: 10px;
  margin-top: 30px;
}

</style>