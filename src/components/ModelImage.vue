<template>
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-xl">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Media</h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-12 col-lg-8">
              <div v-if="images.length > 0" class="row mt-4">
                <div
                  v-for="(image, index) in images"
                  :key="index"
                  class="col-12 col-lg-2 mb-4 cursor-pointer p-2 position-relative"
                  :class="selectItem === index ? 'image-select' : ''"
                  @click="toggleActiveClass(index)"
                >
                  <img
                    :src="image.src"
                    alt=""
                    style="
                      width: 100%;
                      height: 100%;
                      object-fit: cover;
                      margin: 0;
                    "
                  />
                  <button
                    v-if="selectItem === index"
                    type="button"
                    class="check-btn"
                    tabindex="0"
                  >
                    <b-icon icon="check-square" aria-hidden="true"></b-icon>
                  </button>
                </div>
              </div>
              <div v-else>No images</div>
            </div>
            <div v-if="srcActtacImage" class="col-12 col-lg-4">
              <div class="attach p-4 text-end">
                <h3 class="attach-title">ATTACHMENT DETAILS</h3>
                <div class="attach-info text-end">
                  <div class="attach-image">
                    <img :src="srcActtacImage" alt="" />
                  </div>
                </div>
                <div class="mb-3">
                  <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label"
                      >Title Image</label
                    >
                    <input
                      v-model="nameProject"
                      type="text"
                      class="form-control"
                      id="exampleFormControlInput1"
                      placeholder="Name Card"
                    />
                  </div>
                  <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label"
                      >Alt Image</label
                    >
                    <textarea
                      v-model="altImage"
                      class="form-control"
                      size="sm"
                      id="exampleFormControlTextarea1"
                      rows="2"
                    ></textarea>
                  </div>
                  <div class="mb-3">
                    <label for="" class="form-label">Select Project</label>
                    <select
                      v-model="valueSelect"
                      class="form-select"
                      aria-label="Default select example"
                    >
                      <option
                        v-for="option in selectOptions"
                        :key="option.title"
                        :value="option.value"
                      >
                        {{ option.title }}
                      </option>
                    </select>
                  </div>
                  <button
                    class="btn btn-primary"
                    @click="uploadImageProject(srcActtacImage)"
                  >
                    Select
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getFirestore, collection, doc, setDoc } from "firebase/firestore";
export default {
  props: {
    images: {
      type: Array,
      require: true,
    },
    models: {
      type: String,
      require: true,
    },
  },
  data() {
    return {
      nameProject: "",
      altImage: "",
      valueSelect: "general",
      selectItem: null,
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
  computed: {
    srcActtacImage() {
      return this.selectItem || this.selectItem === 0
        ? this.images[this.selectItem].src
        : "";
    },
  },
  methods: {
    toggleActiveClass(index) {
      this.selectItem = index;
      console.log(this.selectItem);
    },
    uploadImageProject(urlImg) {
      try {
        const db = getFirestore();
        const myCollection = collection(db, this.models);
        const myDocument = doc(myCollection);
        const myData = {
          myUrl: urlImg,
          atl: this.altImage,
          typePr: this.valueSelect,
          namePr: this.nameProject,
          isActive: true,
        };

        setDoc(myDocument, myData);
        this.$toast.open({
          message: "Upload is success",
          type: "success",
          // all of other options may go here
        });
        this.altImage = "";
        this.nameProject = "";
        this.valueSelect = "";
      } catch (error) {
        console.log(error);
        this.$toast.open({
          message: "Something went wrong!",
          type: "error",
          // all of other options may go here
        });
      }
    },
  },
};
</script>

<style scoped>
.modal-dialog.modal-xl {
  min-width: 90%;
}
.modal-body .image-select {
  box-shadow: inset 0 0 0 3px #fff, inset 0 0 0 7px #2271b1;
}
.check-btn {
  height: 24px;
  width: 24px;
  padding: 0;
  border: 0;
  position: absolute;
  z-index: 10;
  top: 0;
  right: 0;
  outline: 0;
  cursor: pointer;
  background-color: #2271b1;
  color: #fff;
}

.attach-title {
  font-weight: 600;
  text-transform: uppercase;
  font-size: 12px;
  color: #646970;
}
.attach-image {
  max-width: 120px;
  max-height: 120px;
  margin-top: 5px;
  margin-right: 10px;
  margin-left: auto;
  margin-bottom: 5px;
}
.attach-image img {
  width: 100%;
  height: 100%;
  margin: 0;
}
</style>
