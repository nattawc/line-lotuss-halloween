import { createApp } from "vue";

import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueTheMask from "vue-the-mask";
import VueSweetalert2 from "vue-sweetalert2";
import Vue3Geolocation from "vue3-geolocation";

import "sweetalert2/dist/sweetalert2.min.css";

import "./assets/css/tailwind.css";
import "./assets/css/font-lotusssmarthl/font-lotusssmarthl.css";
import "./assets/css/custom-swal.css";
import "./assets/css/custom.css";

const app = createApp(App);

const swalOptions = {
  confirmButtonColor: "#41b882",
  cancelButtonColor: "#ff7674",
};

app.use(VueSweetalert2, swalOptions);
app.use(VueTheMask);
app.use(Vue3Geolocation);
app.use(store);
app.use(router);
app.mount("#app");
