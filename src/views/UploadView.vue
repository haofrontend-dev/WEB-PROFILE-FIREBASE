<template>
  <div class="container mt-5">
    <vue-dropzone
      ref="imgDropzone"
      id="imgDropzone"
      :options="dropzoneOptions"
      @vdropzone-complete="afterComplete"
    ></vue-dropzone>

    <div v-if="images.length > 0">
      <div v-for="(image, index) in images" :key="index">
        <img :src="image.src" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { getDatabase, ref as dbRef, set } from "firebase/database";

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

  methods: {
    async afterComplete(file) {
      try {
        const imageName = uuid.v1();
        var metaData = {
          contentType: "image/png, video/mp4",
        };
        const storageRef = getStorage();
        const database = getDatabase();

        const imageRef = await ref(storageRef, `images/${imageName}.png`);
        const fileRef = dbRef(database, "images");

        let downloadURL = "";
        await uploadBytes(imageRef, file, metaData);

        await getDownloadURL(imageRef).then(function (url) {
          downloadURL = url;
        });
        set(fileRef, {
          url: downloadURL,
        });
        this.images.push({ src: downloadURL });
        this.$refs.imgDropzone.removeFile(file);
      } catch (error) {
        console.log(error);
      }
    },
    uploadFiles() {
      const input = this.$refs.fileInput;
      const files = input.files;
      const form = {
        description: this.description,
        valueOption: this.valueOption,
        files,
      };
      console.log(form);
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
</style>
