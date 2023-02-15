<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-12 col-lg-6 wrap">
        <h1 class="mb-4">Upload Image Section</h1>
        <form @submit="onSubmit($event, images)">
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label"
              >Description:
            </label>
            <input
              v-model="description"
              type="text"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label"
              >Options Image:</label
            >
            <select
              v-model="valueOption"
              class="form-select"
              id="inputGroupSelect01"
            >
              <option
                v-for="option in options"
                :key="option.value"
                :value="option.value"
              >
                {{ option.text }}
              </option>
            </select>
          </div>
          <div class="mb-3">
            <input
              class="form-control"
              type="file"
              id="formFile"
              multiple
              ref="fileInput"
              @change="uploadFiles"
            />
          </div>
          <button type="submit" class="btn btn-primary">Upload</button>
        </form>
      </div>
      <div class="col-12 col-lg-6 p-5">
        <div class="shadow-sm preview-img">
          <div v-if="images.length > 0" class="row">
            <div
              v-for="(image, index) in images"
              :key="index"
              class="col-12 col-md-6 col-lg-4 mb-4"
            >
              <div class="p-4 w-100 h-100 position-relative">
                <img :src="image" alt="Image" class="w-100 h-100" />
                <span
                  class="btn-close position-absolute top-0 end-0"
                  @click="removeImage"
                >
                  <b-icon style="color: #7952b3"></b-icon>
                </span>
              </div>
            </div>
          </div>
          <div v-else class="p-4">
            <p class="fs-4">No files found</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getStorage, ref, uploadBytes } from "firebase/storage";
import "firebase/storage";
let uuid = require("uuid");
export default {
  data() {
    return {
      description: "",
      images: [],
      valueOption: null,
      options: [
        { value: null, text: "Please select an option" },
        { value: "keyV", text: "Key Visuals" },
        { value: "fmcg", text: "FMCG" },
        { value: "general", text: "General" },
        { value: "d", text: "Education" },
        { value: "education", text: "Education" },
        { value: "fb", text: "F&B" },
        { value: "realEs", text: "Real Estates" },
        { value: "fashion", text: "Fashion" },
        { value: "motionGrap", text: "Motion Graphic" },
      ],
      files: [],
      show: true,
    };
  },
  methods: {
    async onSubmit(event) {
      event.preventDefault();
      try {
        const imageName = uuid.v1();
        const input = this.$refs.fileInput;
        const files = input.files[0];
        console.log(files);
        var metaData = {
          contentType: "video/mp4",
          valueOption: this.valueOption,
        };
        const storageRef = getStorage();
        const imageRef = ref(storageRef, `image/${imageName}.mp4`);
        uploadBytes(imageRef, files, metaData);
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
.wrap {
  border-radius: 24px;
  padding: 30px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}
.btn-close {
  cursor: pointer;
}
.preview-img img {
  object-fit: cover;
}
</style>
