<template>
  <div id="app">
    <header-main />
    <router-view class="content" />
    <footer-main />
  </div>
</template>
<script>
import HeaderMain from "@/components/HeaderMain.vue";
import FooterMain from "./components/FooterMain.vue";
export default {
  components: {
    HeaderMain,
    FooterMain,
  },
};
</script>
<style scoped>
@media screen and (max-width: 992px) {
  .content {
    margin-top: 80px;
  }
}
</style>
