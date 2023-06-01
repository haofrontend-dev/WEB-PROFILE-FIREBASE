<template>
  <div>
    <div class="py-2 px-2">
      <div class="list-btn">
        <nav-profile></nav-profile>
      </div>
      <nav
        style="--bs-breadcrumb-divider: '>'"
        aria-label="breadcrumb"
        class="container d-block d-lg-none"
      >
        <ol class="breadcrumb fw-bold">
          <li class="breadcrumb-item">
            <router-link to="#" class="text-decoration-none"
              >Projects</router-link
            >
          </li>
          <li class="breadcrumb-item active" aria-current="page">General</li>
        </ol>
      </nav>
      <div class="container project-card project-card">
        <div v-if="Images.length" class="row gx-3">
          <div
            v-for="(image, index) in Images"
            :key="index"
            class="col-6 col-lg-4 mb-2"
            @click="showPopupImage(image.imagesGallery)"
          >
            <div class="card" style="width: 100%; border-radius: 15px">
              <img
                v-if="image.urlActack || image.urlActack.urlImage"
                :src="
                  image.urlActack.urlImage
                    ? image.urlActack.urlImage
                    : image.urlActack
                "
                class="card-img-top"
                :class="{
                  'card-image-top_main': image.urlActack.urlImageHover,
                }"
                :alt="image.alt"
                ref="imageCard"
              />
              <img
                v-if="image.urlActack && image.urlActack.urlImageHover"
                :src="image.urlActack.urlImageHover"
                class="card-img-top card-img-top__hover"
                :alt="image.alt"
                ref="imageCard"
              />
              <div class="card-body py-2">
                <p class="text-uppercase">{{ image.namePr }}</p>
                <p>{{ formaDate(image.year) }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div v-if="isPopup" class="popup-image">
        <span @click="isPopup = false">&times;</span>
        <div v-if="imagesPopup.length > 0" class="row popup-image-container">
          <div
            v-for="(item, index) in imagesPopup"
            :key="index"
            class="col-12 mb-4"
          >
            <div>
              <img :src="item.src" alt="" ref="imagePopup" />
            </div>
          </div>
        </div>
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
      imagesPopup: [],
      listCardImages: [],
      options: {
        year: "numeric",
        month: "long",
        day: "numeric",
      },
    };
  },
  mounted() {
    this.getDataImages();
  },
  methods: {
    showPopupImage(imageArr) {
      this.isPopup = true;
      this.imagesPopup = imageArr;
    },
    async getDataImages() {
      const db = getFirestore();

      const querySnapshot = await getDocs(collection(db, "db_projects"));
      querySnapshot.forEach((doc) => {
        this.listCardImages.push(doc.data());
      });

      console.log(this.listCardImages);
    },
    formaDate(date) {
      const newDate = new Date(date);
      if (date) {
        const dateFormat = newDate.toLocaleDateString("en-US", this.options);
        return dateFormat;
      } else {
        return "";
      }
    },
  },
  computed: {
    Images() {
      return this.listCardImages
        .filter(
          (image) => image.typePr === "general" && image.isActive === true
        )
        .reverse();
    },
  },
};
</script>
<style scoped>
p {
  margin: 0;
}
.card-body {
  padding: 8px;
}
.card {
  border: none;
  transition: all 0.2s;
}
.card:hover {
  transform: translateY(-4px);
  cursor: pointer;
  box-shadow: 0 1rem 3rem rgb(0 0 0 / 18%);
}
</style>
