<template>
  <div class="item" style="margin-bottom: 120px">
    <main-navbar></main-navbar>
    <div class="mt-2">
      <div class="wishlist-icon">
        <v-btn color="white" @click="colorIcon = 'red' " fab small>
          <v-icon size="30" :color="colorIcon">mdi-heart-outline</v-icon>
        </v-btn>
      </div>
      <main-carousel circle="true"></main-carousel>
    </div>
    <div class="my-2 mx-3 mt-5">
      <h3>Adidas Men's Front Original Trefoil Street Graphic Front Pocket</h3>
      <p class="mt-1 mr-2 mb-2" style="font-size: 14px">FAST SHIPPING & DELIVERY and EASY RETURNS</p>
      <span style="font-size: 13px">
        <b>Seller:</b>
        <nuxt-link to="/store/Toffytesam" style="text-decoration: none;">{{'Toffytesam'}}</nuxt-link>
      </span>
      <h2 class="price-and-shipping mt-2">
        N12,000
        <!-- <sub style="font-size: 13px" class="font-weight-regular">+N500 shipping</sub> -->
      </h2>
      <p style="font-size: 14px" class="discount mt-1">
        List price
        <del class="grey--text">N20,000</del>
        <span class="ZameriaRed--text font-weight-bold">Save 50%</span>
      </p>
      <p style="font-size: 12px" id="alert">
        Est. Delivery :
        <span class="font-weight-bold">Wed, Nov 4 - Wed, Dec 9</span>
      </p>

      <main-alert v-show="selectError" type="error" :message="selectErrorMessage"></main-alert>

      <div class="choice mb-5">
        <div class="color">
          <p class="normal-p mb-1">
            Color:
            <span class="ml-1" style="font-size: 12px" v-for="i in colors" :key="i">{{i}},</span>
          </p>
          <div
            style="display: inline"
            v-for="color in colors"
            :key="color"
            @click="selectedColor = color"
          >
            <span
              class="color-box-container"
              v-if="selectedColor === color"
              style="margin-right: 10px"
            >
              <span class="color-box" :style="{backgroundColor : color }"></span>
            </span>
            <span v-else style="margin-right: 10px">
              <span class="color-box" :style="{backgroundColor : color }"></span>
            </span>
          </div>
        </div>

        <div class="size mt-6">
          <p class="normal-p mb-1">Size</p>
          <div class="size-box" v-for="size in sizes" :key="size" @click="selectedSize = size">
            <span v-if="selectedSize === size" class="size-box-selected">{{size}}</span>
            <span v-else>{{size}}</span>
          </div>
        </div>

        <div class="quantity mt-7">
          <p class="mb-1 normal-p">Quantity:</p>
          <v-btn-toggle>
            <v-btn
              height="30"
              width="7"
              :disabled="disable"
              @click="orderNumber -= 1"
              color="black"
            >
              <v-icon color="white">mdi-minus</v-icon>
            </v-btn>

            <v-btn height="30" width="7" class="white black--text">{{ orderNumber }}</v-btn>

            <v-btn height="30" width="3" @click="orderNumber += 1" color="black">
              <v-icon color="white">mdi-plus</v-icon>
            </v-btn>
          </v-btn-toggle>
        </div>
      </div>
    </div>

    <v-divider></v-divider>
    <div class="estimated-shipping mx-3 mt-4">
      <p class="normal-p font-weight-bold mb-1">Estimated Shipping Fee & Services</p>
      <p
        style="font-size: 12px"
        class="font-weight-light"
      >Enter location details to check the shipping fee</p>
      <form>
        <v-select
          style="margin-top: -10px"
          dense
          class="select-field"
          outlined
          :items="['Nigeria']"
          disabled
          color="ZameriaAsh"
          placeholder="Nigeria"
        ></v-select>
        <v-select
          style="margin-top: -10px"
          dense
          class="select-field"
          outlined
          v-model="state"
          :items="states"
          color="ZameriaAsh"
          placeholder="Select State"
        ></v-select>
        <v-select
          style="margin-top: -10px; height: 40px"
          dense
          class="select-field mb-0 pb-0"
          outlined
          v-model="city"
          :items="cities"
          color="ZameriaAsh"
          placeholder="Select City / LGA"
        ></v-select>

        <div style="display: flex" class="mr-3 mt-1">
          <span style="flex-grow: 1; display: inline">
            <v-btn
              style="font-size: 11px"
              small
              text
              color="ZameriaBlue"
              class="mt-0 mx-0 pa-0 text-capitalize small-text"
            >
              <span>Check Shipping Fee:</span>
            </v-btn>
          </span>
          <span class="small-text mt-1"></span>
        </div>
      </form>
    </div>

    <div class="ZameriaAsh2 px-4 py-5 mt-3" align="center">
      <v-btn
        class="my-2 ZameriaRed--text"
        depressed
        height="40"
        outlined
        dark
        tile
        @click="addToCart"
        style="border: 0.5px solid grey; width: 47%"
      >Add to cart</v-btn>
      <v-btn
        class="my-2"
        depressed
        height="40"
        style="width: 47%"
        tile
        @click="buyNow"
        color="ZameriaRed"
        dark
      >Buy it Now</v-btn>
    </div>

    <div class="arrco mt-4 mb-8">
      <v-expansion-panels flat accordion>
        <v-expansion-panel v-for="item in accordion" :key="item.header">
          <v-expansion-panel-header class="px-3">
            <b>{{item.header}}</b>
          </v-expansion-panel-header>
          <v-expansion-panel-content v-if="item.header === 'Product reviews' ">
            <main-comments></main-comments>
          </v-expansion-panel-content>
          <v-expansion-panel-content v-if="item.header === 'Shipping and return policies' ">
            <p class="mb-2 mt-0" style="font-size: 14px">
              <nuxt-link
                to="/faqs#Shipping & Delivery"
                style="text-decoration: none"
              >Shipping & Delivery</nuxt-link>
            </p>
            <p class="mt-0 mb-0" style="font-size: 14px">
              <nuxt-link to="/faqs#Returns & Refund" style="text-decoration: none">Return and Refund</nuxt-link>
            </p>
          </v-expansion-panel-content>
          <v-expansion-panel-content v-else>{{item.content}}</v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </div>

    <div>
      <main-product-grid head="true" header="Similar Products" slide="true" :images="imageList"></main-product-grid>
      <main-product-grid
        class="mt-8"
        head="true"
        header="Recommended Products"
        slide="true"
        :images="imageList"
      ></main-product-grid>
    </div>
  </div>
</template>

<script>
import StateJson from "@/assets/docs/states.json";
import LgaJson from "@/assets/docs/lgas.json";

export default {
  async asyncData({ params }) {
    let name = params.item.replace(/-/g, " ");
  },

  async fetch() {
    let stateArr = [];
    StateJson.map(state => {
      stateArr.push(state.name);
    });
    this.states = stateArr;
  },

  methods: {
    addToCart() {
      if (this.selectedSize === "" && this.selectedColor === "") {
        this.selectError = true;
        this.selectErrorMessage = "Please select color and size";
        let el = document.getElementById("alert");
        el.scrollIntoView(true);
      } else if (this.selectedSize === "") {
        this.selectError = true;
        this.selectErrorMessage = "Please select size";
        let el = document.getElementById("alert");
        el.scrollIntoView(true);
      } else if (this.selectedColor === "") {
        this.selectError = true;
        this.selectErrorMessage = "Please select color";
        let el = document.getElementById("alert");
        el.scrollIntoView(true);
      } else {
        this.selectError = false;
        this.selectErrorMessage = "";
      }
    },
    buyNow() {
      if (this.selectedSize === "" && this.selectedColor === "") {
        this.selectError = true;
        this.selectErrorMessage = "Please select color and size";
        let el = document.getElementById("alert");
        el.scrollIntoView(true);
      } else if (this.selectedSize === "") {
        this.selectError = true;
        this.selectErrorMessage = "Please select size";
        let el = document.getElementById("alert");
        el.scrollIntoView(true);
      } else if (this.selectedColor === "") {
        this.selectError = true;
        this.selectErrorMessage = "Please select color";
        let el = document.getElementById("alert");
        el.scrollIntoView(true);
      } else {
        this.selectError = false;
        this.selectErrorMessage = "";
      }
    }
  },
  data() {
    return {
      sizes: ["S", "M", "L"],
      colors: ["black", "grey", "blue"],
      selectedSize: "",
      selectedColor: "",
      orderNumber: 1,
      colorIcon: "black",
      disable: true,
      states: [],
      cities: [],
      state: "",
      city: "",
      selectError: false,
      selectErrorMessage: "",
      accordion: [
        {
          header: "Product details",
          content: "About item"
        },
        {
          header: "Shipping and return policies",
          content: "shipping policies"
        },
        {
          header: "Product reviews"
        }
      ],
      imageList: ["shoe.jpeg", "shoe2.jpg", "watch.jpg", 'shoes.webp', "shoe.jpeg", "shoe2.jpg",'watch.jpg', 'shoes3.jpg']
    };
  },
  watch: {
    orderNumber: function(newVal) {
      if (newVal <= 1) {
        this.orderNumber = 1;
        this.disable = true;
      } else {
        this.disable = false;
      }
    },
    state: async function(newValue) {
      let state = this.state;
      let cities = [];
      LgaJson.map(lgas => {
        if (lgas.state === state) cities = lgas["lgas"];
      });
      this.cities = cities;
    }
  }
};
</script>

<style lang="scss">
@import "~/scss/custom.scss";

.normal-p {
  font-size: 15px;
  color: grey;
}

.select-field {
  border-radius: 0px;
  font-size: 12px;
}

.color-box {
  display: inline-block;
  height: 32px;
  padding: 2px;
  border-radius: 2px;
  width: 32px;
  text-align: center;
  font-size: 16px;
  line-height: 33px;
}

.color-box-container {
  height: 39px;
  display: inline-block;
  border: 1px solid black;
  border-radius: 2px;
  padding: 2px;
}

.size-box {
  display: inline-block;
  background-color: $ZameriaAsh;
  height: 37px;
  padding: 2px;
  border-radius: 2px;
  width: 37px;
  text-align: center;
  font-size: 16px;
  line-height: 33px;
  margin-right: 12px;
  font-weight: 800;
}

.wishlist-icon {
  position: absolute;
  right: 15px;
  top: 170px;
  color: white;
  z-index: 999;
}

.size-box-selected {
  display: inline-block;
  background-color: black;
  color: white;
  height: 37px;
  padding: 2px;
  border-radius: 2px;
  width: 37px;
  text-align: center;
  font-size: 16px;
  line-height: 33px;
  margin-right: 12px;
  font-weight: 800;
}
</style>
