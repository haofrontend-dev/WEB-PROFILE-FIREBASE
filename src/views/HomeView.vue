<template>
  <div class="home">
    <div class="banner">
      <img src="@/assets/image/banner.png" alt="" />
    </div>
    <div class="content" :style="{ backgroundImage: `url(${bgSkill})` }">
      <div class="bg-white">
        <div class="container pt-5">
          <div class="row">
            <div class="col-5 image-about">
              <img src="@/assets/image/image-about.png" alt="" />
            </div>
            <div class="col-7 about-me">
              <div>
                <h2 class="text-header">About me</h2>
                <p class="pe-5">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                  aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                  nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                  aliquip ex ea commodo consequat. Duis
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="section-skill">
        <div class="container">
          <div class="section-skill">
            <h2 class="text-white fw-bold text-center mt-3">Graphic designs</h2>
            <div class="mt-5">
              <slick-slider :options="optionsGP">
                <div>
                  <img src="@/assets/image/gp-1.png" alt="" width="100%" />
                </div>
                <div>
                  <img src="@/assets/image/gp-2.png" alt="" width="100%" />
                </div>
                <div>
                  <img src="@/assets/image/gp-3.png" alt="" width="100%" />
                </div>
                <div>
                  <img src="@/assets/image/gp-3.png" alt="" width="100%" />
                </div>
              </slick-slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import bgSkill from "@/assets/image/bg-skill.png";
export default {
  name: "HomeView",
  data() {
    return {
      imageBanner: "'image/banner.png'",
      bgSkill,
      optionsGP: {
        centerMode: true,
        centerPadding: "",
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        infinite: true,
        prevArrow:
          "<button type='button' class='slick-prev pull-left'></button>",
        nextArrow:
          "<button type='button' class='slick-next pull-right'></button>",
        responsive: [
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: "40px",
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 480,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: "40px",
              slidesToShow: 1,
            },
          },
        ],
      },
    };
  },
};
</script>
<style scoped>
.banner img {
  width: 100%;
}
.content {
  background-repeat: no-repeat;
  background-size: cover;
}
.image-about img {
  width: 360px;
}
.about-me p {
  text-align: justify;
}
.about-me .text-header {
  color: #6b9cff;
}
.about-me p {
  color: #033333;
}

.cl {
  height: 200px;
  padding: 10px;
}
</style>
