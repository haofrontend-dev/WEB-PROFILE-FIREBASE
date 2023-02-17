<template>
  <div class="home">
    <slick-slider :options="optionBanner">
      <div class="banner">
        <img src="@/assets/image/slider.png" alt="" />
      </div>
      <div class="banner">
        <img src="@/assets/image/slider.png" alt="" />
      </div>
      <div class="banner">
        <img src="@/assets/image/slider.png" alt="" />
      </div>
    </slick-slider>
    <div :style="{ backgroundImage: `url(${bgSkill})` }">
      <div class="bg-white">
        <div class="container pt-5">
          <div class="row">
            <div class="col col-lg-5 image-about">
              <img src="@/assets/image/image-about.png" alt="" />
            </div>
            <div class="col col-lg-7 about-me">
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
      <div class="section-skill mb-5 py-5">
        <div class="container">
          <div class="section-skill">
            <div class="mt-5 section-gp">
              <h2 class="text-white fw-bold text-center mt-3">
                Graphic designs
              </h2>
              <div class="mt-5">
                <slick-slider :options="optionsGP">
                  <div>
                    <img src="@/assets/image/ai-1.jpg" alt="" width="100%" />
                  </div>
                  <div>
                    <img src="@/assets/image/ai-2.jpg" alt="" width="100%" />
                  </div>
                  <div>
                    <img src="@/assets/image/ai-3.jpg" alt="" width="100%" />
                  </div>
                  <div>
                    <img src="@/assets/image/ai-3.jpg" alt="" width="100%" />
                  </div>
                </slick-slider>
              </div>
            </div>
            <div class="mt-5 section-ai">
              <h2 class="text-white fw-bold text-center mt-3">Illustrations</h2>
              <div class="mt-5">
                <slick-slider :options="optionsGP">
                  <div>
                    <img src="@/assets/image/ai-1.jpg" alt="" width="100%" />
                  </div>
                  <div>
                    <img src="@/assets/image/ai-2.jpg" alt="" width="100%" />
                  </div>
                  <div>
                    <img src="@/assets/image/ai-3.jpg" alt="" width="100%" />
                  </div>
                  <div>
                    <img src="@/assets/image/ai-3.jpg" alt="" width="100%" />
                  </div>
                </slick-slider>
              </div>
            </div>
            <div class="mt-5 section-mg">
              <h2 class="text-white fw-bold text-center mt-3">
                Motion graphics
              </h2>
              <div class="mt-5">
                <slick-slider :options="optionsGP">
                  <div>
                    <img src="@/assets/image/ai-1.jpg" alt="" width="100%" />
                  </div>
                  <div>
                    <img src="@/assets/image/ai-2.jpg" alt="" width="100%" />
                  </div>
                  <div>
                    <img src="@/assets/image/ai-3.jpg" alt="" width="100%" />
                  </div>
                  <div>
                    <img src="@/assets/image/ai-3.jpg" alt="" width="100%" />
                  </div>
                </slick-slider>
              </div>
              <div class="send-mail">
                <div class="row px-5">
                  <div class="col-lg-5 mb-3 mb-lg-0">
                    <span class="text-white"
                      >For work please send email to</span
                    >
                  </div>
                  <div class="col-lg-7">
                    <div class="d-flex align-items-center gap-3">
                      <input
                        type="text"
                        placeholder="linhchi.nt.158@gmail.com"
                      />
                      <button>Send</button>
                    </div>
                  </div>
                </div>
              </div>
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
        autoplay: true,
        autoplaySpeed: 2000,
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
              slidesToShow: 2,
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
      optionBanner: {
        dots: false,
        infinite: true,
        speed: 500,
        cssEase: "linear",
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
      },
    };
  },
};
</script>
<style scoped>
.banner img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.home {
  background-repeat: no-repeat;
  background-size: cover;
  padding: 0 0 90px;
}
.image-about img {
  width: 360px;
  margin-bottom: -65px;
}
@media screen and (max-width: 992px) {
  .image-about img {
    margin-bottom: 0;
  }
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

.send-mail {
  background-color: #2a4dbe;
  padding: 40px;
  border-radius: 24px;
  margin-bottom: -138px;
}
.send-mail span {
  font-size: 20px;
  font-weight: 600;
}
.send-mail input {
  width: 100%;
  padding: 8px 6px;
  outline: none;
  background-color: #aee5ff;
  color: #033333;
  transition: all 0.2s;
  border: none;
  border-radius: 8px;
}
.send-mail input::placeholder {
  font-weight: bold;
  opacity: 0.5;
  color: #033333;
}
.send-mail input:focus {
  outline: none;
  background-color: #f9f9f9;
}
.send-mail button {
  border: none;
  outline: none;
  padding: 8px;
  border-radius: 8px;
  color: #033333;
  transition: all 0.2s;
}
.send-mail button:hover {
  background-color: #033333;
  color: white;
}
</style>
