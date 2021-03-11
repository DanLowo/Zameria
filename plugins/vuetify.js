import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
Vue.use(Vuetify)

export default ctx => {
  const vuetify = new Vuetify({
    theme: {
        dark: false,
        themes: {
          light: {
            ZameriaRed: "#FF0000",
            ZameriaLightRed: "#D9182B",
            ZameriaOrange: "#FF870C",
            ZameriaBrown: "#DAB777",
            ZameriaDividerGray: "#E4E6E7",
            ZameriaOffWhite: "#F5F7F9",
            ZameriaLightGray: '#A8ACB1',
            ZameriaAsh: "#E2E2E2",
            ZameriaBlue: "#2196f3",
            ZameriaAsh2: "#f7f7f7",
            ZameriaBlack: "#3E4151"
          }
        }
      }
  })

  ctx.app.vuetify = vuetify
  ctx.$vuetify = vuetify.framework
}
