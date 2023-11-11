require("dotenv").config();

export default {
  server: {
    host: "0.0.0.0",
    port: 5009
  },
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: "universal",
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: "server",
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      },
      {
        name: "theme-color",
        content: "#ffffff"
      }
    ],
    script: [
       {
        src: "https://unpkg.com/@simplewebauthn/browser/dist/bundle/index.umd.min.js"
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href:
          "https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
      },
      {
        rel: "stylesheet",
        href: "https://cdn.jsdelivr.net/npm/vuetify@2.x/dist/vuetify.min.css"
      },

      { rel: "stylesheet", href: "/app.css" }
    ]
  },

  auth: {
    strategies: {
      local: {
        token: {
          type: "Token"
        },
        user: {
          autoFetch: false
        },
        endpoints: {
          login: { url: "/accounts/login/", method: "post", propertyName: "token" },
          user: false
        },
        // tokenType: "Token"
      },
      google: {
        client_id: process.env.GOOGLE_OAUTH_CLIENT_ID || "",
        redirect_uri: process.env.OAUTH_REDIRECT_URL || ""
      },
      facebook: {
        client_id: process.env.FACEBOOK_OAUTH_CLIENT_ID || "",
        userinfo_endpoint: process.env.FACEBOOK_USER_INFO_ENDPOINT || "",
        scope: ["public_profile", "email", "user_birthday"]
      }
    },
    localstorage: {
      user_token: "auth"
    }
  },
  /*
   ** Global CSS
   */
  css: ["@/assets/css/app.css"],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: ["@/plugins/vuetify.js", {src: "@/plugins/firebase.js", ssr:false}],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: [
    {
      path: "~/components/",
      prefix: "main"
    }
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    "@nuxtjs/dotenv",
    "@nuxtjs/google-analytics",
    "@nuxtjs/vuetify"
  ],

  googleAnalytics: {
    id: process.env.GOOGLE_ANALYTICS_ID || ""
  },
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    "@nuxtjs/axios",
    "@nuxtjs/pwa",
    "@nuxtjs/auth-next",
    // Doc: https://github.com/nuxt-community/style-resources-module
    "@nuxtjs/style-resources"
  ],

  /*
   ** Style resources
   */
  styleResources: {
    scss: "./scss/*.scss"
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    baseURL: "https://9110-190-2-155-230.ngrok-free.app/api/", //"https://zameria.com:5008/api/",
    proxyHeaders: false,
    credentials: false
  },
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {
    // transplie: ["@nuxtjs/auth-next"],
    extend(config, ctx) {
      config.module.rules.push({
        enforce: "pre",
        test: /\.txt$/,
        loader: "raw-loader",
        exclude: /(node_modules)/
      });
      config.module.rules.push({
        enforce: "pre",
        test: /\.tsx?$/,
        loader: "ts-loader",
        exclude: /(node_modules)/
      });
    }
  }
};
