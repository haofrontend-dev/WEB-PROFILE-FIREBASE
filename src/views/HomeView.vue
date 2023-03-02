<template>
  <div class="home">
    <div style="background-color: #c43122">
      <slick-slider
        v-if="imagesSlider.length > 0"
        :options="optionBanner"
        class="container p-0 slider-main"
      >
        <div v-for="(image, index) in imagesSlider" :key="index" class="banner">
          <img :src="image.myUrl" alt="" />
        </div>
      </slick-slider>
    </div>
    <div
      :style="{
        backgroundImage: `url(${bgSkill})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }"
    >
      <div class="bg-white">
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
      <div class="section-skill mb-5 py-5">
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

            <div class="send-mail">
              <div class="row">
                <div class="col-lg-5 mb-3 mb-lg-0">
                  <span class="text-white">For work please send email to</span>
                </div>
                <div class="col-lg-7">
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
            breakpoint: 768,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: "40px",
              slidesToShow: 1,
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
      console.log(this.listCardImages);
    },
  },
  computed: {
    imagesSlider() {
      return this.listCardImages
        .filter((image) => image.typePr === "slider" && image.isActive === true)
        .reverse()
        .slice(0, 2);
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
.banner img {
  width: 100%;
  height: 620px;
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
.section-gp img,
.section-ai img {
  max-height: 200px;
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
  padding: 8px 16px;
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
@media screen and (max-width: 992px) {
  .banner img {
    height: 432px;
    object-fit: cover;
  }
  .image-about img {
    margin-bottom: 0;
  }
  .send-mail {
    background-color: #2a4dbe;
    padding: 20px;
    border-radius: 24px;
    margin-bottom: -138px;
  }
  .section-gp img,
  .section-ai img {
    max-height: 200px;
    height: 100%;
    min-height: 200px;
  }
  .about-wrap,
  .section-skill {
    padding: 0;
  }
}
@media screen and (max-width: 768px) {
  .section-gp img,
  .section-ai img {
    max-height: 140px;
    height: 100%;
    min-height: 140px;
  }
}
</style>
