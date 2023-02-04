<template>
  <div id="app">
    <header-main />
    <router-view />
  </div>
</template>
<script>
import HeaderMain from "@/components/HeaderMain.vue";
export default {
  components: {
    HeaderMain,
  },
};
</script>
