<template>
  <div class="container mt-5">
    <div class="wrap-image--loader">
      <div class="placehoder p-4 text-center">No file Selected</div>
      <div class="mt-2">
        <button
          type="button"
          class="btn btn-outline-primary btn-lg"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          Select
        </button>
      </div>
    </div>
    <model-image :images="images" />
  </div>
</template>

<script>
import { getFirestore, collection, getDocs } from "firebase/firestore";
import ModelImage from "@/components/ModelImage.vue";
export default {
  components: {
    ModelImage,
  },
  data() {
    return {
      description: "",
      images: [],
      valueOption: null,
      files: [],
      show: true,
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    removeImage(index) {
      this.images.splice(index, 1);
    },
    async getData() {
      const db = getFirestore();
      const myCollection = collection(db, "images");
      const querySnapshot = await getDocs(myCollection);

      querySnapshot.forEach((doc) => {
        this.images.push({ src: doc.data().myUrl });
      });
    },
  },
};
</script>
<style scoped>
.img-div {
  display: flex;
  margin: 25px;
}

img {
  max-width: 250px;
  margin: 15px;
}
.wrap-image--loader .placehoder {
  position: relative;
  cursor: default;
  border: 1px dashed #c3c4c7;
  line-height: 1.6;
  font-size: 20px;
  font-weight: 600;
}
</style>
