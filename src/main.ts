import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import "./assets/tailwind.css";
import VueI18n from "vue-i18n";
Vue.use(VueI18n);

Vue.config.productionTip = false;

let lang = "";

import { defaultLocale, languages } from "@/i18n/i18n";
const stroredLang = localStorage.getItem("lang");
if (typeof stroredLang == "string") {
  lang = stroredLang;
}

const i18n = new VueI18n({
  locale: lang ? lang : defaultLocale,
  messages: languages,
});

new Vue({
  router,
  store,
  vuetify,
  i18n,
  render: (h) => h(App),
}).$mount("#app");
