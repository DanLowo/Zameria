<template>
  <div class="contact-us" style="margin-bottom: 70px">
    <NavBar></NavBar>
     <div class="mt-5 mx-3">
       <div v-html="contact"></div>
     </div>
  </div>
</template>

<script>

import NavBar from "@/components/navbar.vue";
import Contact from "@/assets/docs/agreements/contact.txt"

export default {
  components: {
    NavBar
  },
  data(){
    return{
      contact : Contact
    }
  }
};
</script>

<style>

.contact-us p{
  font-size: 14px;
}

.contact-us h3{
  margin-bottom: 10px;
  margin-top: 30px;
}

</style>