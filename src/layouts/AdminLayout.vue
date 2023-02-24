<template>
  <div class="container-fluid">
    <div class="d-block d-lg-none">
      <button class="btn btn-toggle--sidebar" @click="isShowSidebar = true">
        <b-icon icon="list"></b-icon>
      </button>
    </div>
    <div class="row flex-nowrap">
      <div
        class="d-lg-block col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark sidebar-left"
        :class="isShowSidebar ? 'd-block' : 'd-none'"
        style="width: 280px"
      >
        <div
          class="d-flex flex-column flex-shrink-0 p-3 text-bg-dark min-vh-100"
        >
          <a
            href="/"
            class="d-flex align-items-center justify-content-between mb-3 mb-md-0 text-white text-decoration-none"
          >
            <img
              src="@/assets/image/logo.png"
              alt=""
              style="width: 80px"
              class="mx-auto"
            />
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
              <router-link
                class="nav-link text-white w-100 d-flex align-items-center text-start"
                to="/admin/project"
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
              </router-link>
            </li>
            <li class="mb-1 nav-item">
              <router-link
                class="nav-link text-white w-100 d-flex align-items-center text-start"
                to="/admin/home"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                  width="16"
                  height="16"
                  class="me-3"
                >
                  <!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                  <path
                    fill="#fff"
                    d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"
                  />
                </svg>
                Home Image
              </router-link>
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
              <strong v-if="user">{{ user.displayName }}</strong>
            </a>
            <ul class="dropdown-menu dropdown-menu-dark text-small shadow">
              <li>
                <router-link
                  class="dropdown-item cursor-pointer"
                  to="/admin/project"
                  >New project...</router-link
                >
              </li>
              <li>
                <router-link class="dropdown-item cursor-pointer" to="/register"
                  >Create User</router-link
                >
              </li>
              <li>
                <button class="dropdown-item" @click="logOut">Sign out</button>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="col py-3 main-content">
        <slot></slot>
      </div>
    </div>

    <div
      v-if="isShowSidebar"
      class="overlay"
      @click="isShowSidebar = false"
    ></div>
  </div>
</template>

<script>
import { auth } from "@/config/filsebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import router from "@/router";
export default {
  data() {
    return {
      dataUser: "",
      user: auth.currentUser,
      isPending: false,
      errorMessge: "",
      isShowSidebar: false,
    };
  },
  mounted() {
    this.getUser();
  },
  methods: {
    getUser() {
      onAuthStateChanged(auth, (currentUser) => {
        this.user = currentUser;
      });
      if (this.user) {
        return this.user;
      } else {
        console.log("User chưa đăng nhập");
        return;
      }
    },
    async logOut() {
      this.errorMessge = null;
      signOut(auth)
        .then(() => {
          // Sign-out successful.
          router.push({ name: "login", params: {} });
        })
        .catch((err) => {
          // An error happened.
          console.log(err);
        });
    },
  },
};
</script>

<style scoped>
.sidebar-left {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  z-index: 999;
}
.main-content {
  margin-left: 300px;
}
.nav-link.router-link-active {
  color: var(--bs-nav-pills-link-active-color);
  background-color: var(--bs-nav-pills-link-active-bg);
}
.btn-toggle--sidebar {
  font-size: 24px;
  margin-left: 16px;
  margin-top: 16px;
}
.overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 10;
}
@media screen and (max-width: 978px) {
  .main-content {
    margin-left: 0;
  }
}
</style>
