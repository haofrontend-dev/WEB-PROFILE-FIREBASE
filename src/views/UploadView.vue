<template>
  <div class="container mt-5">
    <vue-dropzone
      ref="imgDropzone"
      id="imgDropzone"
      :options="dropzoneOptions"
      @vdropzone-complete="afterComplete"
    ></vue-dropzone>

    <div v-if="images.length > 0" class="row mt-4">
      <div
        v-for="(image, index) in images"
        :key="index"
        class="col-6 col-lg-2 mb-4"
      >
        <img
          :src="image.src"
          alt=""
          style="width: 100%; height: 185px; object-fit: cover"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import {
  getFirestore,
  collection,
  doc,
  setDoc,
  getDocs,
} from "firebase/firestore";

import "firebase/storage";
import vue2Dropzone from "vue2-dropzone";
import "vue2-dropzone/dist/vue2Dropzone.min.css";
let uuid = require("uuid");

export default {
  components: {
    vueDropzone: vue2Dropzone,
  },
  data() {
    return {
      description: "",
      images: [],
      valueOption: null,
      dropzoneOptions: {
        url: "https://httpbin.org/post",
        thumbnailWidth: 250,
        thumbnailHeight: 250,
        maxFilesize: 0.5,
        addRemoveLinks: false,
        acceptedFiles: ".jpg, jpeg, .png, .mp4",
      },
      files: [],
      show: true,
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    async afterComplete(file) {
      try {
        const imageName = uuid.v1();
        var metaData = {
          contentType: "image/png, video/mp4",
        };
        const storageRef = getStorage();

        const db = getFirestore();
        const myCollection = collection(db, "images");
        const myDocument = doc(myCollection);
        const imageRef = await ref(storageRef, `images/${imageName}.png`);
        let downloadURL = "";
        await uploadBytes(imageRef, file, metaData);

        await getDownloadURL(imageRef).then(function (url) {
          downloadURL = url;
        });
        const myData = {
          myUrl: downloadURL,
        };
        setDoc(myDocument, myData);
        this.images.push({ src: downloadURL });
        this.$refs.imgDropzone.removeFile(file);
      } catch (error) {
        console.log(error);
      }
    },
    uploadFiles() {
      const input = this.$refs.fileInput;
      const files = input.files;
      for (let i = 0; i < files.length; i++) {
        const file = files[i];

        const reader = new FileReader();
        reader.onload = (e) => {
          this.images.push(e.target.result);
        };
        reader.readAsDataURL(file);
      }
    },
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
  margin: 15px auto;
}
</style>
