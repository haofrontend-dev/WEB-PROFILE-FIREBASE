<template>
  <div class="container-fluid">
    <div class="row flex-nowrap">
      <div class="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
        <div
          class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100"
        >
          <router-link
            to="/"
            class="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none"
          >
            <span class="fs-5 d-none d-sm-inline">Menu</span>
          </router-link>
          <ul
            class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
            id="menu"
          >
            <li class="nav-item">
              <router-link to="/" class="nav-link align-middle px-0">
                <span class="ms-1 d-none d-sm-inline">Home</span>
              </router-link>
            </li>
            <li>
              <router-link
                to="/upload-image"
                data-bs-toggle="collapse"
                class="nav-link px-0 align-middle"
              >
                <span class="ms-1 d-none d-sm-inline">Upload Image</span>
              </router-link>
            </li>
          </ul>
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

<style scoped></style>
