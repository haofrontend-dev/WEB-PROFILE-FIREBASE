<template>
  <div>
    <nav class="nav-links d-none d-lg-block container p-0">
      <ul class="nav-menu">
        <li class="nav-item">
          <router-link to="/projects" class="nav-item__link"
            >General</router-link
          >
        </li>
        <li class="nav-item">
          <router-link to="/projects/beauty" class="nav-item__link"
            >Beauty & FMCG</router-link
          >
        </li>
        <li class="nav-item">
          <router-link to="/projects/f&b" class="nav-item__link"
            >F&B</router-link
          >
        </li>
        <li class="nav-item">
          <router-link to="/projects/key-visual" class="nav-item__link"
            >Key visual</router-link
          >
        </li>
        <li class="nav-item">
          <router-link to="/projects/branding" class="nav-item__link"
            >Branding</router-link
          >
        </li>
        <li class="nav-item">
          <router-link to="/projects/motion-ai" class="nav-item__link"
            >Motion & Illustration</router-link
          >
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.nav-links {
  background-color: #def6ff;
  height: 56px;
  display: flex;
  align-items: center;
  border-radius: 16px;
}
.nav-links ul {
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
  gap: 8px;
  height: 100%;
}
.nav-links ul li {
  height: inherit;
}
.nav-links ul li .nav-item__link {
  display: inline-flex;
  justify-content: center;
  align-items: center;

  height: inherit;
  font-weight: 600;
  padding: 0 30px;
  font-size: 16px;
  border-radius: 16px;
  text-decoration: none;
  color: #033333;
}
ul li .nav-item__link.router-link-exact-active.router-link-active {
  background-color: #6b9cff;
  color: white;
}

@media screen and (max-width: 1250px) {
  .nav-links ul li .nav-item__link {
    padding: 0 18px;
  }
}
</style>
