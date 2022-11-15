import Vue from "vue";
import Vuetify from "vuetify/lib/framework";
import colors from "@/assets/colors.json";

Vue.use(Vuetify);

export default new Vuetify({
  rtl: false,
  theme: {
    dark: false,
    themes: {
      dark: colors.colors.dark,
      light: colors.colors.light,
    },
  },
  treeShake: true,
});
