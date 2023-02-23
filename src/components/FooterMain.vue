<template>
  <div class="footer mt-5">
    <div class="container">
      <div class="row">
        <div class="col-6 col-lg-3 mb-3 logo">
          <router-link to="/">
            <img src="@/assets/image/logo.png" alt="" />
          </router-link>
          <p class="mt-5 h5 text-white">All rights reserved 2023</p>
        </div>
        <div class="col-6 col-lg-3 service">
          <div>
            <span class="text-white fw-bold h5">Services</span>
            <ul>
              <li>Graphic Design</li>
              <li>Motion Graphic</li>
              <li>Illustration</li>
              <li>Graphic Design</li>
              <li>Graphic Design</li>
            </ul>
          </div>
        </div>
        <div class="col-6 col-lg-3 service contact">
          <div>
            <div>
              <span class="text-white fw-bold h5">Contact</span>
              <ul>
                <li>T: +84911354264</li>
                <li>E: linhchi.nt.158@gmail.com</li>
              </ul>
            </div>
            <div>
              <img src="@/assets/image/SVG/svg-fb.svg" alt="" />
              <img src="@/assets/image/SVG/svg-linked.svg" alt="" />
              <img src="@/assets/image/SVG/svg-in.svg" alt="" />
            </div>
          </div>
        </div>
        <div class="col-6 col-lg-3 service follow">
          <div>
            <span class="text-white fw-bold h5">Follow me</span>
            <ul>
              <li>Facebook</li>
              <li>Instagram</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.footer {
  background-image: linear-gradient(to right, #6b9cff, #aee5ff);
  padding: 90px 0;
}
.service ul {
  padding: 0;
  list-style: none;
  margin-top: 16px;
  color: #fff;
}
.service ul li {
  padding: 4px;
}
.service img {
  width: 35px;
  margin-right: 12px;
}

@media screen and (max-width: 978px) {
  .footer .logo {
    order: 3;
  }
  .footer .service {
    order: 1;
  }
  .footer .follow {
    order: 4;
  }
}
</style>
