<template>
  <div>
    <header>
      <router-link to="/"
        ><img class="logo" src="@/assets/image/logo.png" alt=""
      /></router-link>
    </header>
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/blog">Blog</router-link>
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
  text-align: center;
  padding: 4px 0;
  background-image: linear-gradient(to right, #aee5ff, #6b9cff);
}
.logo {
  height: 100%;
}
nav {
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
