<template>
  <div class="sub-header">
    <div style="flex-grow: 1">
      <v-menu offset-y>
        <template v-slot:activator="{on, attrs}">
          <v-btn dense text color="white" tile v-on="on" v-bind="attrs">
            Customer Service
            <v-icon>mdi-chevron-down</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item>
            <v-list-item-title>
              <nuxt-link to="/contact-us" style="color: black; text-decoration: none">Contact Info</nuxt-link>
            </v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>
              <nuxt-link to="/faqs" style="color: black; text-decoration: none">FAQs</nuxt-link>
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </div>
    <div class="mt-1 mr-3">
        <a href="tel:+23458987450" style="color: white; text-decoration: none"> <b>(+234) 58-987-450</b>  </a>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.sub-header{
    background-color: black;
    color: white;
    display: flex;
}
</style>