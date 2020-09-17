<template>
  <div class="about" style="margin-bottom: 70px">
    <NavBar></NavBar>
     <div class="mt-5 mx-3">
       <div v-html="about"></div>
     </div>
  </div>
</template>

<script>

import NavBar from "@/components/navbar.vue";
import About from "@/assets/docs/agreements/about.txt"

export default {
  components: {
    NavBar
  },
  data(){
    return{
      about : About
    }
  }
};
</script>

<style>

.about p{
  font-size: 14px;
}

.about h3{
  margin-bottom: 10px;
  margin-top: 30px;
}

</style>