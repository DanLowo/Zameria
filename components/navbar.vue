<template>
  <div class="navbar">
    <div>
      <div class="bor">
        <!-- Header with navigation icon, Zameria logo and Cart -->
        <v-app-bar flat color="white">
          <v-app-bar-nav-icon class="black--text font-weight-black" @click="drawer = !drawer"></v-app-bar-nav-icon>
          <v-spacer></v-spacer>
          <nuxt-link class="mr-4" to="/">
            <v-img :src="require('@/assets/images/logo.png')" width="150"></v-img>
          </nuxt-link>
          <v-spacer></v-spacer>
          <nuxt-link to="/cart" style="text-decoration: none">
            <v-icon color="black" style="font-size: 30px">mdi-shopping-outline</v-icon>
          </nuxt-link>
        </v-app-bar>

        <!-- Search input field -->
        <div class="px-0 pb-4" align="center">
          <form method="POST" @submit.prevent="search">
            <input
              type="text"
              required
              v-model="searchText"
              style="background-color: white"
              placeholder="Search for items or products"
              class="custom-search-btn"
            />
            <v-btn
              type="submit"
              small
              depressed
              tile
              class="red white--text"
              style="margin-left: -6px; height: 44px; margin-bottom: 3px"
            >
              <v-icon>mdi-magnify</v-icon>
            </v-btn>
          </form>
        </div>
      </div>
    </div>

    <!-- Main Navigation Slide -->
    <div class="navigation idden-md-and-up">
      <v-navigation-drawer app v-model="drawer" width="288">
        <div>
          <div v-if="navHeader === 'SHOP BY DEPARTMENT' ">
            <h1 class="py-4 pl-3 ZameriaAsh" style="font-size: 18px">{{navHeader}}</h1>

            <!-- List all departments -->
            <v-list>
              <v-list-item
                v-for="obj in departmentList"
                :key="obj.title"
                @click="changeNavHeader(obj.title, 'Department')"
              >
                <v-list-item-title>{{obj.title}}</v-list-item-title>
                <v-list-item-icon>
                  <v-icon color="black">mdi-chevron-right</v-icon>
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
                    <v-icon color="black">mdi-chevron-right</v-icon>
                  </v-list-item-icon>
                </v-list-item>

                <v-list-item @click="ok">
                  <v-list-item-title>New Arrivals</v-list-item-title>
                </v-list-item>
                <v-list-item @click="ok">
                  <v-list-item-title>Sale</v-list-item-title>
                </v-list-item>
              </div>

              <!-- List all sub-categories inside Categories -->
              <div v-else>
                <v-list-item v-for="obj in category" :key="obj.title" @click="ok">
                  <v-list-item-title>{{obj.title}}</v-list-item-title>
                </v-list-item>
              </div>

              <!-- Removing new arrivals & Sales from new arrivals & sales (at the bottom) -->
            </v-list>

            <v-list v-else>
              <v-list-item v-for="obj in subCategories" :key="obj.title" @click="ok">
                <v-list-item-title>{{obj.title}}</v-list-item-title>
              </v-list-item>
            </v-list>
          </div>
        </div>

        <!-- Account details below nav bar -->

        <div>
          <h4 class="py-3 px-4 ZameriaAsh">ACCOUNT</h4>
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
              <v-list-item @click="ok">
                <v-list-item-title>My Orders</v-list-item-title>
              </v-list-item>
              <v-list-item @click="ok" to="/agreements/contact-us">
                <v-list-item-title>Help & Contact</v-list-item-title>
              </v-list-item>
              <v-list-item @click="ok" to="/faqs">
                <v-list-item-title>FAQs</v-list-item-title>
              </v-list-item>
              <v-list-item @click="ok">
                <v-list-item-title>Sell an item</v-list-item-title>
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
      count: 0
    };
  },
  watch: {
    navHeader: function(newValue, oldValue) {
      this.oldNavHeader = oldValue;
      this.navArr.push(oldValue);
      console.log(this.navArr, this.navArr.length);
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

.v-toolbar__content {
  padding-left: 8px;
  padding-right: 8px;
}

.bor {
  // border-bottom: 1px solid rgb(224, 221, 221);
  box-shadow: 0px 1px 2px 1px rgb(224, 221, 221);
}
</style>