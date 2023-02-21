<template>
  <div>
    <header-main />
    <main>
      <slot></slot>
    </main>
    <footer-main />
    <div v-if="isShowBtnUp" class="btn-up">
      <button @click="scrollToTop" type="button" class="btn">
        <b-icon-arrow-up></b-icon-arrow-up>
      </button>
    </div>
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
  data() {
    return {
      isShowBtnUp: false,
    };
  },
  beforeMount() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      // Any code to be executed when the window is scrolled
      if (window.scrollY >= 260) {
        this.isShowBtnUp = true;
      } else {
        this.isShowBtnUp = false;
      }
    },
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
  },
};
</script>

<style scoped>
.btn-up {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.6);
  position: fixed;
  right: 16px;
  bottom: 16px;
}
.btn-up button {
  outline: none;
  border: none;
}
</style>
