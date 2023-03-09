<template>
  <div class="container mt-5">
    <vue-dropzone
      ref="imgDropzone"
      id="imgDropzone"
      :options="dropzoneOptions"
      @vdropzone-complete="afterComplete"
    ></vue-dropzone>

    <div v-if="images.length > 0" class="row mt-4 box-image">
      <div
        v-for="(image, index) in images"
        :key="index"
        class="col-6 col-lg-2 mb-4 item-image"
      >
        <img
          :src="image.src"
          alt=""
          style="width: 100%; height: 185px; object-fit: cover"
        />
        <span class="btn-delete" @click="showModal(image.id)"
          ><i class="fa-regular fa-trash-can"></i
        ></span>
      </div>
    </div>
    <b-modal v-model="modalShow" ref="my-modal" hide-footer title="Delete">
      <div class="d-block text-center">
        <h3>Are you sure you want to delete it?</h3>
      </div>
      <div class="d-flex justify-content-end align-items-center">
        <b-button variant="outline-danger" block @click="modalShow = false"
          >Close</b-button
        >
        <b-button
          class="ms-3"
          variant="outline-warning"
          block
          @click="deleteImage(idItemImage)"
          >Delete</b-button
        >
      </div>
    </b-modal>
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
  deleteDoc,
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
      idItemImage: "",
      valueOption: null,
      modalShow: false,
      dropzoneOptions: {
        url: "https://httpbin.org/post",
        thumbnailWidth: 250,
        thumbnailHeight: 250,
        maxFilesize: 2,
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
        this.images.push({ src: doc.data().myUrl, id: doc.id });
      });
    },
    // Delete all the images
    async deleteImage(docId) {
      const db = getFirestore();
      console.log(docId);

      const docRef = doc(db, "images", docId);
      await deleteDoc(docRef)
        .then(() => {
          this.modalShow = false;
          console.log("Xóa tài liệu thành công");
          this.$toast.open({
            message: "Delete image is success",
            type: "success",
            // all of other options may go here
          });
          // Xóa tài liệu khỏi danh sách
          this.images = this.images.filter((image) => image.id !== docId);
        })
        .catch((error) => {
          this.$toast.open({
            message: "Error deleting image.",
            type: "error",
            // all of other options may go here
          });
          console.error("Lỗi khi xóa tài liệu: ", error);
        });
    },
    showModal(docId) {
      this.modalShow = true;
      this.idItemImage = docId;
    },
  },
};
</script>
<style scoped>
.box-image {
  max-height: 717px;
  overflow: auto;
}
.item-image {
  position: relative;
}
.item-image .btn-delete {
  position: absolute;
  top: 0;
  right: 8px;
  width: 30px;
  height: 30px;
  line-height: 30px;
  font-size: 16px;
  text-align: center;
  background-color: #fff;
  border-radius: 50%;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
  color: #ff3232;
}
.img-div {
  display: flex;
  margin: 25px;
}

img {
  max-width: 250px;
  margin: 15px auto;
}
</style>
