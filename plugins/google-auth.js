import Vue from 'vue'
import GAuth from 'vue-google-oauth2'

const gauthOption = {
  clientId: process.env.GOOGLE_OAUTH_CLIENT_ID,
  scope: 'profile email',
  prompt: 'select_account',
  immediate: false
}
Vue.use(GAuth, gauthOption)