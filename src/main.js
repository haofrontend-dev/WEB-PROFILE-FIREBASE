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
import { appData, auth } from "@/config/filsebase";
import { onAuthStateChanged } from "firebase/auth";
import VueToast from "vue-toast-notification";
// Import one of the available themes
//import 'vue-toast-notification/dist/theme-default.css';
import "vue-toast-notification/dist/theme-sugar.css";

Vue.use(VueToast);
//Vue.$toast.open({/* options */});
let instance = Vue.$toast.open("You did it!");

// Force dismiss specific toast
instance.dismiss();
// Dismiss all opened toast immediately
Vue.$toast.clear();

let app;
onAuthStateChanged(auth, () => {
  if (!app) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    getAnalytics(appData);
    Vue.use(BootstrapVue);
    Vue.use(IconsPlugin);

    Vue.config.productionTip = false;
    Vue.component("slick-slider", Slick);

    app = new Vue({
      router,
      render: (h) => h(App),
    });
    registerGlobalComponent(app);
    app.$mount("#app");
    // ...
  }
});
// Initialize Firebase
