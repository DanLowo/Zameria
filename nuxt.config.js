require("dotenv").config();

export default {
  server: {
    host: "0.0.0.0"
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
      }
    ],
    // script: [
    //    {
    //     src: "https://res.cloudinary.com/danlowo/raw/upload/v1600327487/vuetify_ktciwo.js"
    //   }
    // ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href:
          "https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
      },
      // {
      //   rel: "stylesheet",
      //   href:
      //     "https://res.cloudinary.com/danlowo/raw/upload/v1600327121/muiicons.min_f7wpzb.css"
      // },
      // {
      //   rel: "stylesheet",
      //   href: "https://res.cloudinary.com/danlowo/raw/upload/v1600327101/vuetifycss.min_ir5h6p.css"
      // },

      { rel: "stylesheet", href: "/app.css" }
    ]
  },

  auth: {
    strategies: {
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
  plugins: ["@/plugins/vuetify.js"],
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
    "@nuxtjs/auth",
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
  axios: {},
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {
    extend(config, ctx) {
      config.module.rules.push({
        enforce: "pre",
        test: /\.txt$/,
        loader: "raw-loader",
        exclude: /(node_modules)/
      });
    }
  }
};
