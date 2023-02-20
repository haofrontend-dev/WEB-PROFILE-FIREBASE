import Vue from "vue";
import App from "./App.vue";
import router from "./router";
// Import Bootstrap and BootstrapVue CSS files (order is important)
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";

import Slick from "vue-slick";
import "slick-carousel/slick/slick.css";
import { registerGlobalComponent } from "./utils";
import "@/assets/css/global.css";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

// Import Bootstrap and BootstrapVue CSS files (order is important)
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import { getAnalytics } from "firebase/analytics";
import { appData } from "@/config/filsebase";
// Initialize Firebase

getAnalytics(appData);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

Vue.config.productionTip = false;
Vue.component("slick-slider", Slick);

const app = new Vue({
  router,
  render: (h) => h(App),
});
registerGlobalComponent(app);
app.$mount("#app");
