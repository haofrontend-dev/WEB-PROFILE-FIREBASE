<template>
  <div>
    <div class="py-2 px-2">
      <div class="list-btn">
        <nav-profile></nav-profile>
      </div>
      <div class="container mt-5">
        <div class="row">
          <div
            v-for="image in listCardImages"
            :key="image.name"
            class="col col-lg-4"
            @click="showPopupImage(image.src)"
          >
            <div class="card shadow-lg" style="width: 100%">
              <img
                :src="image.src"
                class="card-img-top"
                alt="..."
                ref="imageCard"
              />
              <div class="card-body">
                <p class="">{{ image.name }}</p>
                <p>{{ image.year }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div v-if="isPopup" class="popup-image">
        <span @click="isPopup = false">&times;</span>
        <img :src="imagePopup" alt="" ref="imagePopup" />
      </div>
    </div>
  </div>
</template>
<script>
import NavProfile from "@/components/NavProfile.vue";
export default {
  name: "HomeView",
  components: {
    NavProfile,
  },
  data() {
    return {
      isPopup: false,
      imagePopup: "",
      listCardImages: [
        {
          src: require("@/assets/image/general/castrol.png"),
          name: "Castrol",
          year: "2022",
        },
        {
          src: require("@/assets/image/general/crypto.png"),
          name: "Castrol",
          year: "2022",
        },
        {
          src: require("@/assets/image/general/brighton.png"),
          name: "Castrol",
          year: "2022",
        },
      ],
    };
  },
  methods: {
    showPopupImage(src) {
      this.isPopup = true;
      this.imagePopup = src;
    },
  },
};
</script>
<style scoped>
p {
  margin: 0;
}
.card {
  border: none;
  transition: all 0.2s;
}
.card:hover {
  transform: translateY(-4px);
  cursor: pointer;
}
.card-img-top {
  height: 380px;
  object-fit: cover;
}
.popup-image {
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.9);
  height: 100%;
  width: 100%;
  z-index: 100;
}
.popup-image span {
  position: absolute;
  top: 0;
  right: 10px;
  font-size: 40px;
  font-weight: bolder;
  color: #fff;
  cursor: pointer;
  z-index: 100;
}
.popup-image img {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 5px;
  width: 750px;
  object-fit: cover;
}
@media screen and (max-width: 768px) {
  .popup-image img {
    width: 95%;
  }
}
</style>
