<template>
  <component :is="layout">
    <router-view class="content" />
  </component>
</template>
<script>
import { PUBLIC_LAYOUT } from "@/constants";
export default {
  computed: {
    layout() {
      return (this.$route.meta.layout || PUBLIC_LAYOUT) + "-layout";
    },
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
