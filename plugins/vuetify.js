import Vue from 'vue'
import Vuetify from 'vuetify'
Vue.use(Vuetify)

export default ctx => {
  const vuetify = new Vuetify({
    theme: {
        dark: false,
        themes: {
          light: {
            ZameriaRed: "#FF0000",
            ZameriaLightRed: "#FF554D",
            ZameriaOrange: "#FF870C",
            ZameriaBrown: "#DAB777",
            ZameriaGrey: "#282828",
            ZameriaAsh: "#E2E2E2",
            ZameriaBlue: "#89D0E2",
            ZameriaAsh2: "#f7f7f7"
          }
        }
      }
  })

  ctx.app.vuetify = vuetify
  ctx.$vuetify = vuetify.framework
}