<template>
  <component :is="layout">
    <router-view class="content" />
  </component>
</template>
<script>
import { PUBLIC_LAYOUT } from "@/constants";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./config/filsebase";
export default {
  computed: {
    layout() {
      return (this.$route.meta.layout || PUBLIC_LAYOUT) + "-layout";
    },
  },
  async mounted() {
    const querySnapshot = await getDocs(collection(db, "image"));
    const data = querySnapshot.docs.map((doc) => {
      return { ...doc.data(), id: doc.id };
    });
    console.log(data);
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
