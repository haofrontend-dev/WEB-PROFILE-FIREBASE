<template>
  <div>
    <header class="text-lg-center fixed-top">
      <div
        class="navbar navbar-expand-lg d-lg-block justify-content-between h-100"
      >
        <b-navbar-brand to="/" class="d-inline-block h-100 ms-4"
          ><img class="logo" src="@/assets/image/logo.png" alt=""
        /></b-navbar-brand>
        <b-navbar-toggle
          target="nav-collapse"
          @click="isOpenMenu = true"
        ></b-navbar-toggle>
      </div>
    </header>
    <nav class="d-none d-lg-block">
      <router-link to="/">Home</router-link>
      <router-link to="/profile">Profile</router-link>
      <router-link to="/projects">Projects</router-link>
      <router-link to="/contact">Contacts</router-link>
    </nav>

    <div v-if="isOpenMenu" class="nav-mobile">
      <div class="nav-content">
        <img src="@/assets/image/logo-blue.png" alt="" />
        <span class="icon-close" @click="isOpenMenu = false">&times;</span>
        <ul class="nav-list">
          <li v-for="menu in mobileMenus" :key="menu.name">
            <span
              v-if="menu.children"
              @click="menu.dropdown = !menu.dropdown"
              >{{ menu.name }}</span
            >
            <router-link v-else :to="menu.path" @click="isOpenMenu = false">{{
              menu.name
            }}</router-link>

            <div v-if="menu.dropdown" class="nav-child">
              <ul>
                <li v-for="child in menu.children" :key="child.name">
                  <router-link :to="child.path" @click="isOpenMenu = false">{{
                    child.name
                  }}</router-link>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpenMenu: false,
      mobileMenus: [
        { name: "Main Page", path: "/" },
        { name: "Profile", path: "/profile" },
        {
          name: "Projects",
          path: "/project",
          children: [
            { name: "General", path: "/projects" },
            { name: "Beauty & FMCG", path: "/projects/beauty" },
            { name: "F&B", path: "/projects/f&b" },
            { name: "Key visual", path: "/projects/key-visual" },
            { name: "Branding", path: "/projects/branding" },
            { name: "Motion & Illustration", path: "/projects/motion-ai" },
          ],
          dropdown: false,
        },
        { name: "Contact", path: "/contact" },
      ],
    };
  },
};
</script>

<style scoped>
header {
  width: 100%;
  height: 80px;
  padding: 4px 0;
  background-image: linear-gradient(to right, #aee5ff, #6b9cff);
}
.fixed-top {
  z-index: 90;
}
.logo {
  height: 100%;
}
nav {
  margin-top: 80px;
  padding: 12px 0 0;
}

nav a {
  width: 220px;
  display: inline-block;
  text-align: center;
  font-weight: bold;
  color: #033333;
  margin: 0 4px;
  padding: 12px;
  background-color: #aee5ff;
  text-decoration: none;
  transition: all 0.2s ease-in;
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
}
nav a:hover {
  background-color: #6b9cff;
  color: #fff;
}
nav a.router-link-exact-active {
  color: #fff;
  background-color: #6b9cff;
}

.nav-mobile {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.9);
  z-index: 100;
}

.nav-content .icon-close {
  position: absolute;
  top: 8px;
  left: 16px;
  color: #000;
  font-size: 34px;
  font-weight: bolder;
  cursor: pointer;
}
.nav-content img {
  position: absolute;
  top: 8px;
  left: 50%;
  transform: translateX(-50%);
}
.nav-content .nav-list {
  margin-top: 66px;
  list-style: none;
}
.nav-content .nav-list li {
  padding: 8px;
}
.nav-content .nav-list li a,
.nav-content .nav-list li span {
  text-decoration: none;
  color: #000;
  font-weight: bolder;
  cursor: pointer;
}
.nav-content .nav-list li .router-link-exact-active.router-link-active {
  color: #6b9cff;
}
</style>
