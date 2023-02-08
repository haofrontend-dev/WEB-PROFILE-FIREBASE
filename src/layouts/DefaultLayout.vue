<template>
  <div>
    <header-main />
    <main>
      <slot></slot>
    </main>
    <footer-main />
  </div>
</template>

<script>
import HeaderMain from "@/components/HeaderMain.vue";
import FooterMain from "@/components/FooterMain.vue";
export default {
  components: {
    HeaderMain,
    FooterMain,
  },
};
</script>

<style scoped></style>
