<template>
  <div class="home">
    <div style="background-color: #c43122" class="d-none d-lg-block">
      <div
        v-for="(image, index) in imagesSlider"
        :key="index"
        class="banner container p-0"
      >
        <img style="border-radius: 0px" :src="image.myUrl" alt="" />
      </div>
    </div>
    <div
      style="background-color: #c43122"
      class="d-block d-lg-none mt-lg-4 banner-mobile"
    >
      <div class="banner container p-0">
        <img
          style="border-radius: 0px"
          src="@/assets/image/banner-mobile.png"
          alt=""
        />
      </div>
    </div>
    <div
      :style="{
        backgroundImage: `url(${bgSkill})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }"
    >
      <div class="bg-white pb-4">
        <div class="container pt-5">
          <div class="row about-wrap">
            <div class="co-12 col-lg-5 image-about">
              <img src="@/assets/image/image-about.png" alt="" class="w-100" />
            </div>
            <div class="col-12 col-lg-7 about-me">
              <div
                class="h-100 d-flex flex-column align-items-center justify-content-center"
              >
                <h2 class="text-header text-center text-justify">About me</h2>
                <p>
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
      <div class="pt-5">
        <div class="container">
          <div class="section-skill">
            <div class="mt-5 section-gp">
              <h2 class="text-white fw-bold text-center mt-3">
                Graphic designs
              </h2>
              <div class="mt-5">
                <div class="row">
                  <div
                    v-for="(image, index) in imagesGpDesign"
                    :key="index"
                    class="col-6 col-lg-4 mb-4"
                  >
                    <div>
                      <img :src="image.myUrl" :alt="image.alt" width="100%" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="mt-5 section-ai">
              <h2 class="text-white fw-bold text-center mt-3">Illustrations</h2>
              <div class="mt-5">
                <slick-slider
                  v-if="imagesAi.length > 0"
                  :options="optionsGP"
                  class=""
                >
                  <div v-for="(image, index) in imagesAi" :key="index">
                    <img :src="image.myUrl" :alt="image.atl" class="w-100" />
                  </div>
                </slick-slider>
              </div>
            </div>
          </div>
          <div class="send-mail">
            <div class="row">
              <div class="col-lg-4 mb-3 mb-lg-0">
                <span class="text-white">For work please send email to</span>
              </div>
              <div class="col-lg-8">
                <div class="d-flex align-items-center gap-3">
                  <input type="text" placeholder="linhchi.nt.158@gmail.com" />
                  <button class="btn-send">Send</button>
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
import { getFirestore, collection, getDocs } from "firebase/firestore";
export default {
  name: "HomeView",
  data() {
    return {
      imageBanner: "'image/banner.png'",
      bgSkill,
      listCardImages: [],
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
          "<button type='button' class='slick-prev pull-left'><i class='fa-solid fa-arrow-left'></i></button>",
        nextArrow:
          "<button type='button' class='slick-next pull-right'><i class='fa-solid fa-arrow-right'></i></button>",
        responsive: [
          {
            breakpoint: 929,
            settings: {
              arrows: false,
              centerMode: true,
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 768,
            settings: {
              arrows: false,

              slidesToShow: 2,
            },
          },
          {
            breakpoint: 480,
            settings: {
              arrows: false,

              slidesToShow: 2,
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
  mounted() {
    this.getDataImages();
  },
  methods: {
    async getDataImages() {
      const db = getFirestore();

      const querySnapshot = await getDocs(collection(db, "db_homepage"));
      querySnapshot.forEach((doc) => {
        this.listCardImages.push(doc.data());
      });
    },
  },
  computed: {
    imagesSlider() {
      return this.listCardImages
        .filter((image) => image.typePr === "slider" && image.isActive === true)
        .reverse()
        .slice(0, 1);
    },
    imagesGpDesign() {
      return this.listCardImages
        .filter(
          (image) => image.typePr === "gp-design" && image.isActive === true
        )
        .reverse()
        .slice(0, 6);
    },
    imagesAi() {
      return this.listCardImages
        .filter(
          (image) => image.typePr === "Illustrations" && image.isActive === true
        )
        .reverse()
        .slice(0, 5);
    },
  },
};
</script>
<style scoped>
.banner {
}
.banner img {
  width: 100%;
  height: 410px;
  object-fit: cover;
}
.banner-mobile .banner img {
  height: 100%;
}
.home {
  background-repeat: no-repeat;
  background-size: cover;
}

.image-about img {
  width: 360px;
  margin-bottom: -65px;
}
.section-gp img,
.section-ai img {
  max-height: 230px;
  min-height: 230px;
  object-fit: cover;
  transition: all 0.5s;
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

.section-skill {
  padding-bottom: 112px;
}
.send-mail {
  background-color: #2a4dbe;
  padding: 40px;
  border-radius: 24px;
  margin-bottom: -52px;
  z-index: 10;
  position: relative;
}
.send-mail span {
  font-size: 16px;
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
  padding: 8px 26px;
  border-radius: 8px;
  color: #033333;
  transition: all 0.2s;
}
.send-mail button:hover {
  background-color: #033333;
  color: white;
}

img {
  border-radius: 15px;
}
.section-ai .slick-slide {
  overflow: hidden;
}
.section-gp img:hover {
  transform: scale(1.08);
}

.section-ai .slick-slide:hover img {
  transform: scale(1.08);
}

@media screen and (min-width: 1920px) {
  .section-gp img,
  .section-ai img {
    max-height: 290px;
    min-height: 290px;
    object-fit: cover;
    transition: all 0.5s;
  }
}
@media screen and (min-width: 1250px) and (max-width: 1439px) {
  .section-gp img,
  .section-ai img {
    max-height: 185px;
    min-height: 185px;
    object-fit: cover;
    transition: all 0.5s;
  }
}
@media screen and (min-width: 769px) and (max-width: 992px) {
  .banner img {
    height: 432px;
    object-fit: cover;
  }
  .image-about img {
    margin-bottom: 0;
  }

  .section-gp img,
  .section-ai img {
    max-height: 265px;
    height: 100%;
    min-height: 265px;
  }
  .about-wrap,
  .section-skill {
    padding-right: 0;
    padding-left: 0;
  }
  .section-skill {
    padding-bottom: 80px;
  }
  .send-mail {
    background-color: #2a4dbe;
    padding: 20px;
    border-radius: 24px;
    margin-bottom: -52px;
  }
}
@media screen and (min-width: 481px) and (max-width: 768px) {
  .image-about img {
    margin-bottom: 0;
  }
  .section-gp img {
    max-height: 240px;
    height: 240px;
    min-height: 240px;
  }

  .send-mail {
    padding: 20px;
  }
}
@media screen and (max-width: 480px) {
  .image-about img {
    margin-bottom: 0;
  }
  .section-skill {
    padding-bottom: 56px;
  }
  .section-gp img {
    max-height: 140px;
    height: 100%;
    min-height: 140px;
  }
  .section-ai img {
    max-height: 130px;
    min-height: 130px;
    object-fit: cover;
    transition: all 0.5s;
  }
  .send-mail {
    padding: 20px;
  }
}
</style>
