<template>
  <div class="container-fluid">
    <div class="row flex-nowrap">
      <div class="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
        <div
          class="d-flex flex-column flex-shrink-0 p-3 text-bg-dark min-vh-100"
          style="width: 280px"
        >
          <a
            href="/"
            class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
          >
            <img
              src="@/assets/image/logo.png"
              alt=""
              style="width: 80px"
              class="me-3"
            />
            <span class="fs-4">Username</span>
          </a>
          <hr />
          <ul class="nav nav-pills flex-column mb-auto">
            <li class="nav-item">
              <router-link
                to="/upload-image"
                class="nav-link d-flex align-items-center"
                aria-current="page"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  width="16"
                  height="16"
                  class="me-3"
                >
                  <path
                    fill="#fff"
                    d="M0 96C0 60.7 28.7 32 64 32H448c35.3 0 64 28.7 64
                  64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM323.8
                  202.5c-4.5-6.6-11.9-10.5-19.8-10.5s-15.4 3.9-19.8 10.5l-87
                  127.6L170.7 297c-4.6-5.7-11.5-9-18.7-9s-14.2 3.3-18.7 9l-64
                  80c-5.8 7.2-6.9 17.1-2.9 25.4s12.4 13.6 21.6 13.6h96
                  32H424c8.9 0 17.1-4.9
                  21.2-12.8s3.6-17.4-1.4-24.7l-120-176zM112 192a48 48 0 1 0 0-96
                  48 48 0 1 0 0 96z"
                  />
                </svg>
                Media
              </router-link>
            </li>
            <li class="mb-1 nav-item">
              <button
                class="nav-link text-white w-100 d-flex align-items-center text-start"
                data-bs-toggle="collapse"
                data-bs-target="#home-collapse"
                aria-expanded="true"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  width="16"
                  height="16"
                  class="me-3"
                >
                  <!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                  <path
                    fill="#fff"
                    d="M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"
                  />
                </svg>
                Project Image
              </button>
              <div class="collapse show ms-5" id="home-collapse" style="">
                <ul
                  class="btn-toggle-nav list-unstyled fw-normal pb-1 ps -3 small"
                >
                  <li>
                    <router-link
                      to="/admin/project/general"
                      class="nav-link text-white text-decoration-none rounded"
                      >General</router-link
                    >
                  </li>
                  <li>
                    <router-link
                      to="/test"
                      class="nav-link text-white text-decoration-none rounded"
                      >Beauty & FMCG</router-link
                    >
                  </li>
                  <li>
                    <router-link
                      to="/test"
                      class="nav-link text-white text-decoration-none rounded"
                      >F&B</router-link
                    >
                  </li>
                  <li>
                    <router-link
                      to="/test"
                      class="nav-link text-white text-decoration-none rounded"
                      >Key visual</router-link
                    >
                  </li>
                  <li>
                    <router-link
                      to="/test"
                      class="nav-link text-white text-decoration-none rounded"
                      >Branding</router-link
                    >
                  </li>
                  <li>
                    <router-link
                      to="/test"
                      class="nav-link text-white text-decoration-none rounded"
                      >Motion & Illustration</router-link
                    >
                  </li>
                </ul>
              </div>
            </li>
          </ul>
          <hr />
          <div class="dropdown">
            <a
              href="#"
              class="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <img
                src="https://github.com/mdo.png"
                alt=""
                width="32"
                height="32"
                class="rounded-circle me-2"
              />
              <strong>mdo</strong>
            </a>
            <ul class="dropdown-menu dropdown-menu-dark text-small shadow">
              <li><a class="dropdown-item" href="#">New project...</a></li>
              <li><a class="dropdown-item" href="#">Settings</a></li>
              <li><a class="dropdown-item" href="#">Profile</a></li>
              <li><hr class="dropdown-divider" /></li>
              <li><a class="dropdown-item" href="#">Sign out</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="col py-3">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.nav-link.router-link-active {
  color: var(--bs-nav-pills-link-active-color);
  background-color: var(--bs-nav-pills-link-active-bg);
}
</style>
