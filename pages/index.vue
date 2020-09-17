<template>
  <div class="home" style="margin-bottom: 85px">
    <Navbar />
    <div class="mt-3 bar"></div>
    <div>
      <Carousel circle="true"></Carousel>
    </div>

    <div class="section-title ZameriaBrown" align="center">
      <nuxt-link id="link" to="/search/NEW-ARRIVALS">SHOP OUR NEW ARRIVALS >>></nuxt-link>
    </div>

    <div class="special-deals mt-11">
      <ProductGrid head="true" header="Special Deals" slide="true" image="watch.jpg"></ProductGrid>
    </div>

    <div class="shop-by-departments mx-2 mt-9" id="shop">
      <h3 align="center" class="mb-3">SHOP BY DEPARTMENTS</h3>
      <v-row dense>
        <v-col v-for="i in departments" cols="4" :key="i" sm="4" md="4" lg="4">
          <v-img class="dept-img" aspect-ratio="1"></v-img>
          <p align="center" class="nowrap-text pt-1">{{i}}</p>
        </v-col>
      </v-row>
    </div>

    <div class="popular-items mt-11">
      <ProductGrid head="true" header="Popular Items" slide="true" image="watch.jpg"></ProductGrid>
      <br />
    </div>

    <div class="recommended-for-you mt-7">
      <ProductGrid head="true" header="Recommended for you" slide="true" image="watch.jpg"></ProductGrid>
    </div>

    <div class="trending-brands mt-10 mx-2">
      <main-brands></main-brands>
    </div>

    <div class="image-section mt-10" v-for="i in 3" :key="i">
      <main-image-section></main-image-section>
    </div>

    <!-- <div class="section-title mt-11 ZameriaOrange" align="center">
      <nuxt-link id="link" to="/search/NEW-TRENDS">SHOP NEW TRENDS >>></nuxt-link>
    </div>-->

    <div class="you-might-also-like mt-14">
      <ProductGrid head="true" header="You might also like" slide="true" image="shoes.jpg"></ProductGrid>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/navbar";
import ProductGrid from "@/components/productGrid";
import DepartmentObj from "@/assets/docs/department.json";
import Carousel from "@/components/carousel";

export default {
  components: {
    ProductGrid,
    Navbar,
    Carousel
  },
  data() {
    return {
      emailSubscription: "",
      departmentObj: DepartmentObj,
      departments: ["Women", "Men", "Girls", "Boy", "Toddler", "Baby"]
    };
  },
  methods: {
    subscribe() {
      alert(this.emailSubscription);
    }
  }
};
</script>

<style lang="scss">
@import "~/scss/custom.scss";

.input-field {
  border-radius: 0px;
}

::placeholder {
  color: $ZameriaGrey;
  padding-left: 7px;
  font-size: 13px;
}

// .custom-search-btn {
//   border: 1px solid grey;
//   padding: 7px;
//   width: 83vw;
//   height: 37px;
//   padding-right: 0px;
//   padding-left: 0px;
// }

// .custom-btn {
//   border: 1px solid grey;
//   padding: 2px;
//   width: 65%;
//   height: 33px;
//   padding-right: 0px;
//   padding-left: 0px;
// }

.department-img {
  border-radius: 50%;
}

.dept-img {
  border: 1px solid $ZameriaAsh;
}

.section-title {
  padding: 17px;
  color: white;
  font-size: 22px;
  font-family: "Zameria Bold Italic";
}
</style>
