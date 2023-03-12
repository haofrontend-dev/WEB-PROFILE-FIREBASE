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
          New Project
        </button>
      </div>
    </div>
    <table-images :columns="columns" models="db_homepage" />
    <model-image
      :images="images"
      models="db_homepage"
      :select-options="selectOptions"
    />
  </div>
</template>

<script>
import { getFirestore, collection, getDocs } from "firebase/firestore";
import ModelImage from "@/components/ModelImage.vue";
import TableImages from "@/components/TableImages.vue";
export default {
  components: {
    ModelImage,
    TableImages,
  },
  data() {
    return {
      description: "",
      images: [],
      valueOption: null,
      columns: [
        { title: "#", type: "id" },
        { title: "Image", type: "image" },
        { title: "Name image", type: "name" },
        { title: "Alt Image", type: "alt" },
        { title: "Type", type: "type" },
        { title: "Select", type: "select" },
      ],
      selectOptions: [
        { title: "Slider", value: "slider" },
        { title: "Graphic designs", value: "gp-design" },
        { title: "Illustrations", value: "Illustrations" },
      ],
    };
  },
  mounted() {
    this.getImages();
  },
  methods: {
    removeImage(index) {
      this.images.splice(index, 1);
    },
    async getImages() {
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
