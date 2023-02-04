<template>
  <div class="home">
    <div class="banner" :style="{ backgroundImage: `url(${banner})` }"></div>
    <div class="container">
      <div class="row">
        <div class="col-5 image-about">
          <img src="@/assets/image/image-about.png" alt="" />
        </div>
        <div class="col-7 about-me">
          <div>
            <h2>About me</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
              tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
              consequat. Duis
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import banner from "@/assets/image/banner.png";

export default {
  name: "HomeView",
  data() {
    return {
      imageBanner: "'image/banner.png'",
      banner,
    };
  },
};
</script>
<style scoped>
.banner {
  height: 760px;
  padding: 90px 0;
  background-repeat: no-repeat;
  background-size: contain;
}
.image-about img {
  width: 360px;
  margin-top: -40px;
}
.about-me p {
  text-align: justify;
}
</style>
