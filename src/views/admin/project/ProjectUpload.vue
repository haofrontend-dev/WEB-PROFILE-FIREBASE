<template>
  <div class="container mt-5">
    <div class="wrap-image--loader">
      <div class="placehoder p-4 text-center">No file Selected</div>
      <div class="mt-2">
        <router-link
          to="/admin/project/new"
          type="button"
          class="btn btn-outline-primary"
        >
          New Project
        </router-link>
      </div>
    </div>
    <table-images :columns="columns" models="db_projects" :edit-item="true" />
  </div>
</template>

<script>
import { getFirestore, collection, getDocs } from "firebase/firestore";
import TableImages from "@/components/TableImages.vue";
export default {
  components: {
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
        { title: "General", value: "general" },
        { title: "Key Visual", value: "key-visual" },
        { title: "Beauty", value: "beauty" },
        { title: "Branding", value: "branding" },
        { title: "F&B", value: "f&b" },
        { title: "Motion & Illustration ", value: "motionAi" },
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
