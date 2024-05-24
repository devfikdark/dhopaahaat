import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: "#2979FF",
        secondary: "#FFA800",
        accent: "#F67015",
        error: "#b71c1c",
        tertiary: "#1D60E1",
      },
    },
  },
});
