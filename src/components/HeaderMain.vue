<template>
  <div>
    <header class="text-lg-center fixed-top">
      <div
        class="navbar navbar-expand-lg d-lg-block justify-content-between h-100"
      >
        <b-navbar-brand to="/" class="d-inline-block h-100 ms-4"
          ><img class="logo" src="@/assets/image/logo.png" alt=""
        /></b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      </div>
    </header>
    <nav class="d-none d-lg-block">
      <router-link to="/">Home</router-link>
      <router-link to="/profile">Profile</router-link>
      <router-link to="/projects">Projects</router-link>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
header {
  width: 100%;
  height: 80px;
  padding: 4px 0;
  background-image: linear-gradient(to right, #aee5ff, #6b9cff);
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
</style>
