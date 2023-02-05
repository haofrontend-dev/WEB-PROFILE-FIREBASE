<template>
  <div>
    <div class="container py-5">
      <div class="list-btn">
        <ul class="d-flex align-items-cente gap-2">
          <li>
            <a href="#" class="btn btn-outline-primary">Key Visuals</a>
          </li>
          <li><a href="#" class="btn btn-outline-primary">FMCG</a></li>
          <li><a href="#" class="btn btn-outline-primary">General</a></li>
          <li><a href="#" class="btn btn-outline-primary">Education</a></li>
        </ul>
        <ul class="d-flex align-items-cente gap-2">
          <li>
            <router-link to="/projects/f&b" class="btn btn-outline-primary"
              >F&B</router-link
            >
          </li>
          <li><a href="#" class="btn btn-outline-primary">Real Estates</a></li>
          <li><a href="#" class="btn btn-outline-primary">Fashion</a></li>
          <li>
            <a href="#" class="btn btn-outline-primary">Motion Graphic</a>
          </li>
        </ul>
      </div>
      <div class="projects mt-5">
        <div class="section-kv">
          <h2 class="fw-bold mt-3">Key Visuals</h2>
          <div class="mt-2">
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
        <div class="section-fmcg">
          <h2 class="fw-bold mt-3">FMCG</h2>
          <div class="mt-2">
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
        <div class="section-general">
          <h2 class="fw-bold mt-3">General</h2>
          <div class="mt-2">
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
        <div class="section-education">
          <h2 class="fw-bold mt-3">Education</h2>
          <div class="mt-2">
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
        <div class="section-cosmetics">
          <h2 class="fw-bold mt-3">Cosmetics</h2>
          <div class="mt-2">
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
        <div class="section-fb">
          <h2 class="fw-bold mt-3">F&B</h2>
          <div class="mt-2">
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
</style>
