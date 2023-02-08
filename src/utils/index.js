import Vue, { defineAsyncComponent } from "vue";
export function registerGlobalComponent() {
  Vue.component(
    "default-layout",
    defineAsyncComponent(() => import("@/layouts/DefaultLayout"))
  );
  Vue.component(
    "auth-layout",
    defineAsyncComponent(() => import("@/layouts/AuthLayout"))
  );
  Vue.component(
    "admin-layout",
    defineAsyncComponent(() => import("@/layouts/AdminLayout"))
  );
}
