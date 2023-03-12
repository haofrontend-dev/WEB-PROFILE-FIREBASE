<template>
  <div
    v-if="imagesGallery"
    class="modal fade"
    :id="id"
    tabindex="-1"
    :aria-labelledby="id"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-xl">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" :id="id">Media</h1>
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
                  :class="selectedImages.includes(index) ? 'image-select' : ''"
                  @click="toggleActiveClassImages(index, image.src)"
                >
                  <img
                    :src="image.src"
                    alt=""
                    style="
                      width: 100%;
                      height: 100%;
                      max-height: 135px;
                      object-fit: cover;
                      margin: 0;
                    "
                  />
                  <button
                    v-if="selectedImages.includes(index)"
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
            <div class="col-12 col-lg-4">
              <button
                class="btn btn-primary mt-4"
                @click="saveImages"
                data-bs-dismiss="modal"
              >
                Save Images
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div
    v-else
    class="modal fade"
    :id="id"
    tabindex="-1"
    :aria-labelledby="id"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-xl">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" :id="id">Media</h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-12 col-lg-12">
              <div v-if="images.length > 0" class="row mt-4">
                <div
                  v-for="(image, index) in images"
                  :key="index"
                  class="col-12 col-lg-2 mb-4 cursor-pointer p-2 position-relative"
                  :class="selectItem === index ? 'image-select' : ''"
                  @click="toggleActiveClass(index, image.src)"
                  data-bs-dismiss="modal"
                >
                  <img
                    :src="image.src"
                    alt=""
                    style="
                      width: 100%;
                      height: 100%;
                      max-height: 135px;
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
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      require: true,
    },
    images: {
      type: Array,
      require: true,
    },

    imagesGallery: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      selectItem: null,
      active: false,
      selectedImages: [],
      selectedUrlImages: [],
    };
  },
  computed: {},
  methods: {
    toggleActiveClass(index, src) {
      this.selectItem = index;
      this.active = !this.active;
      this.$emit("get-url-img", src);
    },
    toggleActiveClassImages(index, src) {
      if (this.imagesGallery) {
        if (this.selectedImages.includes(index)) {
          this.selectedImages.splice(this.selectedImages.indexOf(index), 1);
          this.selectedUrlImages.splice(
            this.selectedUrlImages.indexOf(index),
            1
          );
        } else {
          this.selectedImages.push(index);
          this.selectedUrlImages.push({ src, index });
        }
      }
    },
    saveImages() {
      this.$emit("save-images", this.selectedUrlImages);
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
.card-link {
  text-decoration: underline;
  font-size: 12px;
}
</style>
