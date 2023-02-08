<template>
  <div>
    <div class="container py-5">
      <div class="list-btn">
        <ul class="d-flex align-items-cente gap-2">
          <li>
            <a href="#section-kv" class="btn btn-outline-primary"
              >Key Visuals</a
            >
          </li>
          <li>
            <a href="#section-fmcg" class="btn btn-outline-primary">FMCG</a>
          </li>
          <li>
            <a href="#section-general" class="btn btn-outline-primary"
              >General</a
            >
          </li>
          <li>
            <a href="#section-education" class="btn btn-outline-primary"
              >Education</a
            >
          </li>
        </ul>
        <ul class="d-flex align-items-cente gap-2">
          <li>
            <a to="#section-cosmetics" class="btn btn-outline-primary">F&B</a>
          </li>
          <li>
            <a href="#section-fb" class="btn btn-outline-primary"
              >Real Estates</a
            >
          </li>
          <li>
            <a href="#section-fashion" class="btn btn-outline-primary"
              >Fashion</a
            >
          </li>
          <li>
            <a href="#section-graphic" class="btn btn-outline-primary"
              >Motion Graphic</a
            >
          </li>
        </ul>
      </div>
      <div class="projects mt-5">
        <div id="section-kv" class="projects-item">
          <h2 class="fw-bold mt-3">Key Visuals</h2>
          <div class="mt-2">
            <div class="row">
              <div
                v-for="item in 6"
                :key="item"
                class="col-12 col-md-6 col-lg-4 mb-4"
              >
                <div class="projects-img">
                  <img src="@/assets/image/gp-1.png" alt="" width="100%" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="section-fmcg" class="projects-item">
          <h2 class="fw-bold mt-3">FMCG</h2>
          <div class="mt-2">
            <div class="row">
              <div
                v-for="item in 9"
                :key="item"
                class="col-12 col-md-6 col-lg-4 mb-4"
              >
                <div class="projects-img">
                  <img src="@/assets/image/gp-1.png" alt="" width="100%" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="section-general" class="projects-item">
          <h2 class="fw-bold mt-3">General</h2>
          <div class="mt-2">
            <div class="row">
              <div
                v-for="item in 6"
                :key="item"
                class="col-12 col-md-6 col-lg-4 mb-4"
              >
                <div class="projects-img">
                  <img src="@/assets/image/gp-1.png" alt="" width="100%" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="section-education" class="projects-item">
          <h2 class="fw-bold mt-3">Education</h2>
          <div class="mt-2">
            <div class="row">
              <div
                v-for="item in 6"
                :key="item"
                class="col-12 col-md-6 col-lg-4 mb-4"
              >
                <div class="projects-img">
                  <img src="@/assets/image/gp-1.png" alt="" width="100%" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="section-cosmetics" class="projects-item">
          <h2 class="fw-bold mt-3">Cosmetics</h2>
          <div class="mt-2">
            <div class="row">
              <div
                v-for="item in 6"
                :key="item"
                class="col-12 col-md-6 col-lg-4 mb-4"
              >
                <div class="projects-img">
                  <img src="@/assets/image/gp-1.png" alt="" width="100%" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="section-fb" class="projects-item">
          <h2 class="fw-bold mt-3">F&B</h2>
          <div class="mt-2">
            <div class="row">
              <div
                v-for="item in 6"
                :key="item"
                class="col-12 col-md-6 col-lg-4 mb-4"
              >
                <div class="projects-img">
                  <img src="@/assets/image/gp-1.png" alt="" width="100%" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="section-real-estates" class="projects-item">
          <h2 class="fw-bold mt-3">Real Estates</h2>
          <div class="mt-2">
            <div class="row">
              <div
                v-for="item in 6"
                :key="item"
                class="col-12 col-md-6 col-lg-4 mb-4"
              >
                <div class="projects-img">
                  <img src="@/assets/image/gp-1.png" alt="" width="100%" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="section-fashion" class="projects-item">
          <h2 class="fw-bold mt-3">Fashion</h2>
          <div class="mt-2">
            <div class="row">
              <div
                v-for="item in 6"
                :key="item"
                class="col-12 col-md-6 col-lg-4 mb-4"
              >
                <div class="projects-img">
                  <img src="@/assets/image/gp-1.png" alt="" width="100%" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="section-graphic" class="projects-item">
          <h2 class="fw-bold mt-3">Motion Graphic</h2>
          <div class="mt-2">
            <div class="row">
              <div
                v-for="item in 3"
                :key="item"
                class="col-12 col-md-6 col-lg-4 mb-4"
              >
                <div class="projects-img">
                  <img src="@/assets/image/gp-1.png" alt="" width="100%" />
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
export default {
  name: "HomeView",
  data() {
    return {
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
.list-btn ul {
  padding: 0;
  list-style: none;
}
.projects h2 {
  color: #6b9cff;
}
.projects-item {
  margin-top: 80px;
}
.projects-img {
  overflow: hidden;
  border-radius: 24px;
}
.projects-img img {
  transition: all 0.3s;
}
.projects-img:hover img {
  transform: scale(1.2);
}
</style>
