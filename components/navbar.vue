<template>
  <div class="navbar">
    <main-subheader></main-subheader>
    <div>
      <div class="bor">
        <!-- Header with navigation icon, Zameria logo and Cart -->
        <div class="normal" v-if="!searchView">
          <v-app-bar flat color="white">
            <v-app-bar-nav-icon class="ZameriaBlack--text font-weight-black" @click="drawer = !drawer"></v-app-bar-nav-icon>
            <nuxt-link class="mr-3 mb-1 ml-0 pl-0" to="/">
              <v-img :src="require('@/assets/images/zameria.png')" contain height="20px" style="margin-left: -14px" width="150"></v-img>
            </nuxt-link>
            <v-spacer></v-spacer>

          <v-menu offset-y>
            <template v-slot:activator="{on, attrs}">
              <v-btn dense color="ZameriaBlack" icon tile v-on="on" v-bind="attrs" class="px-0">
                <v-icon style="font-size: 30px">mdi-account-outline</v-icon>
              </v-btn>
            </template>
            <v-list dense v-if="!$store.state.auth.loggedIn">
              <v-list-item>
                <v-list-item-title>
                  <nuxt-link to="/auth/login" style="color: black; text-decoration: none">Sign in</nuxt-link>
                </v-list-item-title>
              </v-list-item>

              <v-list-item>
                <v-list-item-title>
                  <nuxt-link to="/auth/register" style="color: black; text-decoration: none">Register</nuxt-link>
                </v-list-item-title>
              </v-list-item>
            </v-list>


            <v-list dense v-else>
              <v-list-item>
                <v-list-item-title>
                  <nuxt-link to="/account/profile" style="color: black; text-decoration: none">Profile</nuxt-link>
                </v-list-item-title>
              </v-list-item>

              <v-list-item>
                <v-list-item-title>
                  <nuxt-link to="/wishlist" style="color: black; text-decoration: none">Wishlist</nuxt-link>
                </v-list-item-title>
              </v-list-item>

              <v-list-item>
              <v-list-item-title>
                  <nuxt-link to="/orders" style="color: black; text-decoration: none">My Orders</nuxt-link>
                </v-list-item-title>
              </v-list-item>

              <v-list-item>
                <v-list-item-title>
                  <nuxt-link to="/account/address-book" style="color: black; text-decoration: none">Address Book</nuxt-link>
                </v-list-item-title>
              </v-list-item>

              <v-list-item>
                <v-list-item-title>
                  Logout
                </v-list-item-title>
              </v-list-item>

            </v-list>
          </v-menu>

            <v-icon
              class="mr-3"
              color="ZameriaBlack"
              style="font-size: 30px"
              @click="searchView = true"
            >mdi-magnify</v-icon>
            <nuxt-link to="/cart" style="text-decoration: none">
              <v-icon color="ZameriaBlack" style="font-size: 30px">mdi-cart-outline</v-icon>
            </nuxt-link>
          </v-app-bar>
        </div>

        <div class="normal" v-else>
          <v-app-bar flat color="white">
            <form class="mt-3" @submit.prevent="search">
              <input type="search" required v-model="searchText" placeholder="Search for items or products" class="custom-search" id="search" style="width: 78vw" />
              <v-btn id="search-btn" type="submit" icon> <v-icon color="black">mdi-magnify</v-icon> </v-btn>
            </form>
            <v-btn type="submit" style="font-size: 13px" text color="black" class="px-0 ml-1" @click="searchView = false">Cancel</v-btn>
          </v-app-bar>
        </div>
      </div>
    </div>

    <!-- Main Navigation Slide -->
    <div class="navigation idden-md-and-up">
      <v-navigation-drawer app v-model="drawer" width="87vw">
        <div>
          <div v-if="navHeader === 'SHOP BY DEPARTMENT' ">
            <!-- List all departments -->
            <v-list>

              <v-list-item @click="changeNavHeader('Sale', 'Department')">
                <v-list-item-title class="font-weight-bold red--text">Sale</v-list-item-title>
                <v-list-item-icon>
                  <v-icon color="ZameriaLightGray">mdi-chevron-right</v-icon>
                </v-list-item-icon>
              </v-list-item>

              <v-list-item
                v-for="obj in departmentList"
                :key="obj.title"
                @click="changeNavHeader(obj.title, 'Department')"
              >
                <v-list-item-title class="font-weight-bold">{{obj.title}}</v-list-item-title>
                <v-list-item-icon>
                  <v-icon color="ZameriaLightGray">mdi-chevron-right</v-icon>
                </v-list-item-icon>
              </v-list-item>
            </v-list>
          </div>

          <!-- List all categories inside Departments -->
          <div v-else>
            <h5 class="py-4 pl-3 ZameriaAsh" style="font-size: 20px">
              <v-icon @click="backNavHeader">mdi-chevron-left</v-icon>
              {{navHeader}}
            </h5>

            <v-list v-if="!inCategory">
              <div v-if="navHeader === 'Women' || navHeader === 'Men' ">
                <v-list-item
                  v-for="obj in category"
                  :key="obj.title"
                  @click="changeNavHeader(obj.title, 'Category')"
                >
                  <v-list-item-title v-if="obj.title === 'Maternity'">
                    <nuxt-link to="/ok" style="text-decoration: none; color: black">{{obj.title}}</nuxt-link>
                  </v-list-item-title>
                  <v-list-item-title v-else>{{obj.title}}</v-list-item-title>
                  <v-list-item-icon v-if="obj.title !== 'Maternity'">
                    <v-icon color="ZameriaLightGray">mdi-chevron-right</v-icon>
                  </v-list-item-icon>
                </v-list-item>
              </div>

              <!-- List all sub-categories inside Categories -->
              <div v-else>
                <v-list-item v-for="obj in category" :key="obj.title" @click="ok" :to="obj.url">
                  <v-list-item-title>{{obj.title}}</v-list-item-title>
                </v-list-item>
              </div>

              <!-- Removing new arrivals & Sales from new arrivals & sales (at the bottom) -->
            </v-list>

            <v-list v-else>
              <v-list-item v-for="obj in subCategories" :key="obj.title" @click="ok" :to="obj.url">
                <v-list-item-title>{{obj.title}}</v-list-item-title>
              </v-list-item>
            </v-list>
          </div>
        </div>

        <!-- Account details below nav bar -->

        <div class="mt-5">
          <div>
            <v-list>
              <v-list-item @click="ok" to="/account/profile">
                <v-list-item-title>Profile</v-list-item-title>
              </v-list-item>
              <v-list-item @click="ok" to="/wishlist">
                <v-list-item-title>Wishlist</v-list-item-title>
              </v-list-item>
              <v-list-item @click="ok" to="/account/address-book">
                <v-list-item-title>Address Book</v-list-item-title>
              </v-list-item>
              <v-list-item @click="ok" to="/orders">
                <v-list-item-title>My Orders</v-list-item-title>
              </v-list-item>
              <v-list-item @click="ok" to="/auth/change-password">
                <v-list-item-title>Change Password</v-list-item-title>
              </v-list-item>
              <v-list-item @click="ok" to="/auth/login">
                <v-list-item-title>Register / Sign in</v-list-item-title>
              </v-list-item>
            </v-list>
          </div>
        </div>

        <div class="mt-2">
          <main-footer></main-footer>
        </div>
      </v-navigation-drawer>
    </div>
  </div>
</template>

<script>
import DepartmentObj from "@/assets/docs/nav.json";
import CategoryObj from "@/assets/docs/category.json";
import { mapState } from "vuex";

export default {
  name: "navbar",
  data() {
    return {
      searchText: "",
      drawer: false,
      departmentList: DepartmentObj,
      categoryObj: CategoryObj,
      navHeader: "SHOP BY DEPARTMENT",
      inCategory: false,
      oldNavHeader: "",
      navArr: [],
      count: 0,
      searchView: false
    };
  },
  watch: {
    navHeader: function(newValue, oldValue) {
      this.oldNavHeader = oldValue;
      this.navArr.push(oldValue);
      if (this.navHeader === "SHOP BY DEPARTMENT") {
        this.count = 0;
        this.navArr = [];
      }
    },
    drawer: function() {
      if (this.drawer === false) {
        this.navHeader = "SHOP BY DEPARTMENT";
        this.navArr = [];
        this.count = 0;
      }
    }
  },
  computed: {
    ...mapState("actions", ["fixedNavBar"]),
    // ...mapActions("actions", ["editSearch"]),
    category: function() {
      let cat = this.categoryObj[this.navHeader];
      return cat;
    },
    subCategories: function() {
      let sub = this.categoryObj[this.oldNavHeader];
      let getSub = [];
      sub.map(subs => {
        if (subs.title === this.navHeader) {
          getSub = subs["subCategories"];
        }
      });
      return getSub;
    }
  },
  methods: {
    search() {
      let hyphenText = this.searchText.replace(/\s/g, "-");
      // this.$store.commit("actionss/setSearch", this.searchText);
      this.$router.push(`/search/${hyphenText}`);
    },
    changeNavHeader(title, position) {
      this.navHeader = title;
      this.count += 1;
      if (position === "Department") this.inCategory = false;
      if (position === "Category") this.inCategory = true;
    },
    backNavHeader() {
      if (this.inCategory) this.inCategory = false;
      if (this.count === 1) {
        this.navHeader = "SHOP BY DEPARTMENT";
      } else {
        this.count -= 1;
        let arr = [...this.navArr];
        console.log(arr);
        let arrLength = arr.length - 1;
        console.log(arr);
        this.navHeader = arr[arrLength];
      }
    },
    ok() {}
  }
};
</script>

<style lang="scss">
@import "~/scss/custom.scss";

.v-app-bar__nav-icon .v-btn__content .v-icon {
  font-size: 30px;
}

.navbar .v-list-item__title{
  font-size: 15px;
}

.v-toolbar__content {
  padding-left: 8px;
  padding-right: 8px;
}

.bor {
  // border-bottom: 1px solid rgb(224, 221, 221);
  box-shadow: 0px 1px 2px 1px rgb(224, 221, 221);
}

</style>
