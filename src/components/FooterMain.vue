<template>
  <div class="footer">
    <div class="container">
      <div class="row footer-content">
        <div class="col-5 col-lg-3 mb-3 logo">
          <router-link to="/">
            <img src="@/assets/image/logo.png" alt="" class="w-75" />
          </router-link>
          <p class="text-white d-none d-lg-block">All rights reserved 2023</p>
        </div>
        <div class="col-5 col-lg-3 mb-3 service">
          <div class="ps-4">
            <span class="text-white fw-bold h5">Services</span>
            <ul>
              <li>Graphic Design</li>
              <li>Motion Graphic</li>
              <li>Illustration</li>
            </ul>
          </div>
        </div>
        <div class="col-7 col-lg-4 mb-3 service contact">
          <div>
            <div>
              <span class="text-white fw-bold h5">Contact</span>
              <ul>
                <li>T:<span class="ms-2">+84911354264</span></li>
                <li>E:<span class="ms-2">linhchi.nt.158@gmail.com</span></li>
              </ul>
            </div>
            <div>
              <a
                href="https://www.facebook.com/ngdanglinhchi/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="@/assets/image/SVG/svg-fb.svg" alt=""
              /></a>

              <a
                href="https://www.linkedin.com/in/linh-chi-nguyen-a373bb1a6/"
                target="_blank"
                rel="noopener noreferrer"
                ><img src="@/assets/image/SVG/svg-linked.svg" alt=""
              /></a>

              <a
                href="https://www.instagram.com/thebeige.studio/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="@/assets/image/SVG/svg-in.svg" alt=""
              /></a>
            </div>
          </div>
        </div>
        <div class="col-7 col-lg-2 mb-3 service follow">
          <div>
            <span class="text-white fw-bold h5">Follow me</span>
            <ul>
              <li>
                <a
                  href="https://www.facebook.com/ngdanglinhchi/"
                  target="_blank"
                  rel="noopener noreferrer"
                  >Facebook</a
                >
              </li>
              <li>
                <a
                  href="https://www.instagram.com/thebeige.studio/"
                  target="_blank"
                  rel="noopener noreferrer"
                  >Instagram</a
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
      <p class="mt-3 h5 text-white d-block d-lg-none text-footer">
        All rights reserved 2023
      </p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.footer {
  background-image: linear-gradient(to right, #6b9cff, #aee5ff);
  padding: 120px 0 90px;
}
.footer-content {
  padding: 0 40px;
}

.logo p {
  margin-top: 26px;
  padding-top: 8px;
  border-top: 2px solid white;
}
.service ul {
  padding: 0;
  list-style: none;
  margin-top: 16px;
  color: #fff;
}
.service ul li a {
  color: #fff;
}
.service ul li a:hover {
  color: #6b9cff;
}
.service ul li {
  padding: 4px 0;
}
.service img {
  width: 35px;
  margin-right: 12px;
}
.contact li:nth-child(2) {
  word-wrap: break-word;
}

.text-footer {
  padding: 16px 0;
  border-top: 2px solid white;
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
  .footer-content {
    padding: 0;
  }
}
@media screen and (max-width: 480px) {
  .footer-content ul li {
    font-size: 13px;
  }
}
</style>
