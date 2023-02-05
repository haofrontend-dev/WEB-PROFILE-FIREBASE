<template>
  <div>
    <div class="container py-5">
      <div class="list-btn">
        <ul class="d-flex align-items-cente gap-2">
          <li>
            <a href="" class="btn btn-outline-primary">Key Visuals</a>
          </li>
          <li><a href="" class="btn btn-outline-primary">FMCG</a></li>
          <li><a href="" class="btn btn-outline-primary">General</a></li>
          <li><a href="" class="btn btn-outline-primary">Education</a></li>
        </ul>
        <ul class="d-flex align-items-cente gap-2">
          <li>
            <router-link to="/projects/f&b" class="btn btn-outline-primary"
              >F&B</router-link
            >
          </li>
          <li><a href="" class="btn btn-outline-primary">Real Estates</a></li>
          <li><a href="" class="btn btn-outline-primary">Fashion</a></li>
          <li><a href="" class="btn btn-outline-primary">Motion Graphic</a></li>
        </ul>
      </div>
      <div class="projects-fb mt-5">
        <h2 class="text-center">F&B</h2>
        <img src="@/assets/image/f&b.jpg" alt="" class="w-100" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
};
</script>
<style scoped>
.list-btn ul {
  padding: 0;
  list-style: none;
}
.projects-fb h2 {
  color: #6b9cff;
}
</style>
