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

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyAPG5KbnxLr5Jh3kEWb5EzIvjJvcjO_IcY",
  authDomain: "test-b99d9.firebaseapp.com",
  projectId: "test-b99d9",
  storageBucket: "test-b99d9.appspot.com",
  messagingSenderId: "556640825709",
  appId: "1:556640825709:web:631c7e6421a539a386ea64",
  measurementId: "G-RLC1PXH83C",
};
// Initialize Firebase

getAnalytics(initializeApp(firebaseConfig));
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
