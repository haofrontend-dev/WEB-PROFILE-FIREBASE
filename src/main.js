import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import { BootstrapVue, BootstrapVueIcons } from "bootstrap-vue";
// Import Bootstrap and BootstrapVue CSS files (order is important)
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import Slick from "vue-slick";
import "slick-carousel/slick/slick.css";
import { registerGlobalComponent } from "./utils";
import "@/assets/css/global.css";

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyBxWCpYWPeHHTNAg8DB7mfV0JHh0HrymMs",
  authDomain: "web-profile-377222.firebaseapp.com",
  projectId: "web-profile-377222",
  storageBucket: "web-profile-377222.appspot.com",
  messagingSenderId: "993731772591",
  appId: "1:993731772591:web:f21c9f6d3c4c07b944145a",
  measurementId: "G-35ZD782X3J",
};
// Initialize Firebase

getAnalytics(initializeApp(firebaseConfig));

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(BootstrapVueIcons);

Vue.config.productionTip = false;
Vue.component("slick-slider", Slick);

const app = new Vue({
  router,
  render: (h) => h(App),
});
registerGlobalComponent(app);
app.$mount("#app");
