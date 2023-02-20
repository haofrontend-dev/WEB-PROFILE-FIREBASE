<template>
  <div>
    <div class="py-2 px-2">
      <div class="list-btn">
        <nav-profile></nav-profile>
      </div>
      <div class="container mt-5">
        <div v-if="Images.length" class="row">
          <div
            v-for="(image, index) in Images"
            :key="index"
            class="col-12 col-lg-4"
            @click="showPopupImage(image.myUrl)"
          >
            <div class="card shadow-lg" style="width: 100%">
              <img
                :src="image.myUrl"
                class="card-img-top"
                :alt="image.alt"
                ref="imageCard"
              />
              <div class="card-body">
                <p class="">{{ image.namePr }}</p>
                <p>2022</p>
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
import { getFirestore, collection, getDocs } from "firebase/firestore";

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
      listCardImages: [],
    };
  },
  mounted() {
    this.getDataImages();
  },
  methods: {
    showPopupImage(src) {
      this.isPopup = true;
      this.imagePopup = src;
    },
    async getDataImages() {
      const db = getFirestore();

      const querySnapshot = await getDocs(collection(db, "db_projects"));
      querySnapshot.forEach((doc) => {
        this.listCardImages.push(doc.data());
        console.log(doc);
      });
      console.log(this.listCardImages);
    },
  },
  computed: {
    Images() {
      return this.listCardImages.filter((image) => image.typePr === "f&b");
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
