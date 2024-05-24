import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Default from "./layouts/Default.vue";
import Blank from "./layouts/Blank.vue";
import vuetify from "./plugins/vuetify";
import VueApexCharts from "vue-apexcharts";
import "./utils/api-gateway";

import "./main.scss";

Vue.config.productionTip = false;
Vue.use(VueApexCharts);
Vue.component("apexchart", VueApexCharts);
Vue.component("default-layout", Default);
Vue.component("blank-layout", Blank);

// code to go to specific section of a page on link click

// Vue.prototype.$scrollTop = function(section) {
//   var element = document.getElementById(section);
//   var top = element.offsetTop;
//   window.scrollTo(0, top);
// };

new Vue({
  router,
  vuetify,
  store,
  render: (h) => h(App),
}).$mount("#app");
