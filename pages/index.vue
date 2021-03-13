<template>
  <div class="home" style="margin-bottom: 85px">
    <Navbar />
    <div class="mt-1 bar"></div>

    <!-- <div class="section-title ZameriaBrown mb-2" align="center">
      <nuxt-link id="link" to="/search/NEW-SALES"
        >SHOP NEW SALES >>></nuxt-link
      >
    </div> -->

    <div class="carousel-section">
      <Carousel circle="true"></Carousel>
    </div>

    <div class="section-title ZameriaBrown" align="center">
      <nuxt-link id="link" to="/search/NEW-ARRIVALS"
        >SHOP OUR NEW ARRIVALS >>></nuxt-link
      >
    </div>

    <div class="special-deals mt-11">
      <ProductGrid
        head="true"
        header="Special Deals"
        slide="true"
        :images="imageList"
      ></ProductGrid>
    </div>

    <div class="shop-by-departments mx-2 mt-9" id="shop">
      <h3 align="center" class="mb-3">SHOP BY DEPARTMENTS</h3>
      <v-row dense>
        <v-col v-for="(i, k) in departments" cols="4" :key="k" sm="4" md="4" lg="4">

          <v-img  :src="require(`@/assets/images/${i.src}`)" @click="$router.push({name:'search-value', params:{value:`${i.name}`, department: 'department'}})" class="dept-img" aspect-ratio="1"></v-img>
          <p align="center" class="nowrap-text pt-1">{{i.name}}</p>

        </v-col>
      </v-row>
    </div>

    <div class="image-section mt-2">
    <v-img
    style="border: 1px solid #e2e2e2"
    :src="require(`@/assets/images/fashion3.jpg`)"
    alt="32"
    height="220"
    ></v-img>
    <div class="mx-2 mt-3" align="center">
    <h4>Women's Self-Care: Yoga & Recovery</h4>
    <p class="mt-1 mb-1" style="font-size: 14px">
      Comfy essentials to help you relax and recharge
    </p>
    <nuxt-link to="/" style="font-size: 14px" class="black--text">
      <b>SHOP WOMEN SELF-CARE</b>
    </nuxt-link>
    </div>
    </div>

    <div class="popular-items mt-11">
      <ProductGrid
        head="true"
        header="Popular Items"
        slide="true"
        :images="imageList"
      ></ProductGrid>
      <br />
    </div>

    <div class="recommended-for-you mt-7">
      <ProductGrid
        head="true"
        header="Recommended for you"
        slide="true"
        :images="imageList"
      ></ProductGrid>
    </div>

        <div class="image-section">
      <v-img
        style="border: 1px solid #e2e2e2"
        :src="require(`@/assets/images/fashion1.jpg`)"
        alt="32"
        height="220"
      ></v-img>
      <div class="mx-2 mt-3" align="center">
        <h4>Women's Self-Care: Yoga & Recovery</h4>
        <p class="mt-1 mb-1" style="font-size: 14px">
          Comfy essentials to help you relax and recharge
        </p>
        <nuxt-link to="/" style="font-size: 14px" class="black--text">
          <b>SHOP WOMEN SELF-CARE</b>
        </nuxt-link>
      </div>
    </div>

    <!-- <div class="trending-brands mt-13 mx-2">
      <main-brands></main-brands>
    </div> -->

    <div class="image-section mt-13">
  <v-img
    style="border: 1px solid #e2e2e2"
    :src="require(`@/assets/images/fashion2.jpg`)"
    alt="32"
    height="220"
  ></v-img>
  <div class="mx-2 mt-3" align="center">
    <h4>Women's Self-Care: Yoga & Recovery</h4>
    <p class="mt-1 mb-1" style="font-size: 14px">
      Comfy essentials to help you relax and recharge
    </p>
    <nuxt-link to="/" style="font-size: 14px" class="black--text">
      <b>SHOP WOMEN SELF-CARE</b>
    </nuxt-link>
  </div>
</div>

<div class="image-section mt-13">
  <v-img
    style="border: 1px solid #e2e2e2"
    :src="require(`@/assets/images/fashion.jpg`)"
    alt="32"
    height="220"
  ></v-img>
  <div class="mx-2 mt-3" align="center">
    <h4>Women's Self-Care: Yoga & Recovery</h4>
    <p class="mt-1 mb-1" style="font-size: 14px">
      Comfy essentials to help you relax and recharge
    </p>
    <nuxt-link to="/" style="font-size: 14px" class="black--text">
      <b>SHOP WOMEN SELF-CARE</b>
    </nuxt-link>
  </div>
</div>

    <div class="popular-items mt-11">
      <ProductGrid
        head="true"
        header="Trending products"
        slide="true"
        :images="imageList"
      ></ProductGrid>
      <br />
    </div>

    <div class="you-might-also-like mt-14">
      <ProductGrid
        head="true"
        header="You might also like"
        slide="true"
        :images="imageList"
      ></ProductGrid>
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
    Carousel,
  },
  data() {
    return {
      emailSubscription: "",
      departmentObj: DepartmentObj,
      departments: [
        {
          name: "Women",
          src: "woman.jpg"
        },
        {
          name: "Men",
          src: "man.jpg"
        },
        {
          name: "Girls",
          src: "girl.png"
        },
        {
          name: "Boys",
          src: "boy.jpg"
        },
        {
          name: "Toddler",
          src: "toodler.jpg"
        },
        {
          name: "Baby",
          src: "baby.jpg"
        }
      ],
      imageList: ["shoe.jpeg", "shoe2.jpg", "watch.jpg", 'shoes.webp', "shoe.jpeg", "shoe2.jpg",'watch.jpg', 'shoes3.jpg']
    };
  },
  methods: {
    subscribe() {
      alert(this.emailSubscription);
    },
  },
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

//slide

.grid-img-slide {
  border: 1px solid $ZameriaAsh;
  height: 163.66px;
  width: 116.95px;
  // height: 150px;
}

.slide-products {
  overflow-x: auto;
  overflow-y: hidden;
  white-space: nowrap;
}
.slide-products::-webkit-scrollbar {
  display: none;
}
</style>
