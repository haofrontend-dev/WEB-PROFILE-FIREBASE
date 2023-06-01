<template>
  <div>
    <h3 class="text-center my-4">Add new project</h3>
    <div class="row">
      <div class="col-12 col-lg-8">
        <div class="attach p-4">
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
              <label for="exampleFormControlInput1" class="form-label"
                >Date</label
              >
              <input
                v-model="dateProject"
                type="date"
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
          </div>
        </div>
      </div>
      <div class="col-12 col-lg-4 pt-5">
        <div class="card mb-4">
          <div class="card-title">
            <h5>Project image</h5>
          </div>
          <div class="attach-info text-end">
            <div v-if="urlImage" class="attach-image">
              <img
                :src="urlImage"
                alt=""
                style="
                  width: 100%;
                  height: 100%;
                  max-height: 120px;
                  object-fit: cover;
                  margin: 0;
                "
              />
            </div>
            <div class="card-body text-start">
              <a
                v-if="!urlImage"
                class="card-link text-primary"
                data-bs-toggle="modal"
                data-bs-target="#modalImage"
                >Set project Image</a
              >
              <a v-else class="card-link text-danger" @click="urlImage = ''"
                >Remove project Image</a
              >
            </div>
          </div>
          <div class="attach-info text-end">
            <div v-if="urlImageHover" class="attach-image">
              <img
                :src="urlImageHover"
                alt=""
                style="
                  width: 100%;
                  height: 100%;
                  max-height: 120px;
                  object-fit: cover;
                  margin: 0;
                "
              />
            </div>
            <div class="card-body text-start">
              <a
                v-if="!urlImageHover"
                class="card-link text-primary"
                data-bs-toggle="modal"
                data-bs-target="#modalImageHover"
                >Set project Image Hover</a
              >
              <a
                v-else
                class="card-link text-danger"
                @click="urlImageHover = ''"
                >Remove project Image Hover</a
              >
            </div>
          </div>
          <div class="card-footer">
            <i class="fa-solid fa-circle-info"></i>
            <span
              >Upload JPEG files that are 1000 x 1000 pixels or larger (max. 40
              MB).</span
            >
          </div>
        </div>
        <div class="card mb-4">
          <div class="card-title">
            <h5>Project gallery</h5>
          </div>
          <div class="attach-info text-end">
            <div v-if="urlImagesGallery.length > 0" class="row w-100 px-2">
              <div
                v-for="(itemImage, index) in urlImagesGallery"
                :key="index"
                class="col-4 p-2 item-image"
              >
                <img
                  :src="itemImage.src"
                  class="card-img-top"
                  alt="..."
                  style="
                    width: 100%;
                    height: 100%;
                    max-height: 120px;
                    object-fit: cover;
                    margin: 0px;
                  "
                />
                <span class="btn-delete" @click="removeImageGallery(index)"
                  ><i class="fa-regular fa-trash-can"></i
                ></span>
              </div>
            </div>
            <div class="card-body text-start">
              <a
                class="card-link text-primary"
                data-bs-toggle="modal"
                data-bs-target="#modalImagesGallery"
                @click="imagesGallery = true"
                >Add images project gallery</a
              >
            </div>
          </div>
          <div class="card-footer">
            <i class="fa-solid fa-circle-info"></i>
            <span
              >Upload JPEG files that are 1000 x 1000 pixels or larger (max. 40
              MB).</span
            >
          </div>
        </div>
      </div>
      <div class="d-flex justify-end">
        <button class="btn btn-primary" @click="saveImageProject()">
          Save project
        </button>
      </div>
    </div>

    <model-list-image
      id="modalImagesGallery"
      :images="images"
      @get-url-img="getUrrImage"
      @save-images="setImagesGallery"
      :images-gallery="imagesGallery"
    />
    <model-list-image
      id="modalImage"
      :images="images"
      @get-url-img="getUrrImage"
    />
    <model-list-image
      id="modalImageHover"
      :images="images"
      @get-url-img="getUrrImageHover"
    />
  </div>
</template>

<script>
import {
  getFirestore,
  collection,
  doc,
  getDocs,
  getDoc,
  updateDoc,
} from "firebase/firestore";
import ModelListImage from "@/components/ModelListImage.vue";
export default {
  components: {
    ModelListImage,
  },
  data() {
    return {
      idProject: "",
      nameProject: "",
      dateProject: "",
      altImage: "",
      valueSelect: "general",
      selectItem: null,
      description: "",
      images: [],
      valueOption: null,
      urlImage: null,
      urlImageHover: null,
      imagesGallery: false,
      urlImagesGallery: [],
      dataImage: null,
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
  computed: {
    srcActtacImage() {
      return this.selectItem || this.selectItem === 0
        ? this.images[this.selectItem].src
        : "";
    },
  },
  mounted() {
    this.getImages();
    const id = this.$route.params.id;
    this.idProject = id;
    this.getImagProject(this.idProject);
  },
  methods: {
    getUrrImage(e) {
      this.urlImage = e;
    },
    getUrrImageHover(e) {
      this.urlImageHover = e;
    },
    setImagesGallery(urlImages) {
      this.urlImagesGallery = urlImages;
    },
    removeImage(index) {
      this.images.splice(index, 1);
    },
    removeImageGallery(index) {
      this.urlImagesGallery.splice(index, 1);
    },
    async getImages() {
      const db = getFirestore();
      const myCollection = collection(db, "images");
      const querySnapshot = await getDocs(myCollection);

      querySnapshot.forEach((doc) => {
        this.images.push({ src: doc.data().myUrl });
      });
    },
    async getImagProject(id) {
      const db = getFirestore();
      const docRef = doc(db, "db_projects", id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        this.dataImage = docSnap.data();
        this.nameProject = this.dataImage.namePr;
        this.altImage = this.dataImage.atl;
        this.valueSelect = this.dataImage.typePr;
        this.urlImage = this.dataImage.urlActack.urlImage
          ? this.dataImage.urlActack.urlImage
          : this.dataImage.urlActack;
        this.urlImageHover = this.dataImage.urlActack.urlImageHover
          ? this.dataImage.urlActack.urlImageHover
          : "";
        this.dateProject = this.dataImage.year;
        this.urlImagesGallery = this.dataImage.imagesGallery;
      } else {
        console.log("No such document!");
      }
      console.log(this.urlImageHover);
    },
    async saveImageProject() {
      try {
        const db = getFirestore();
        const docRef = doc(db, "db_projects", this.idProject);
        await updateDoc(docRef, {
          urlActack: {
            urlImage: this.urlImage,
            urlImageHover: this.urlImageHover,
          },
          typePr: this.valueSelect,
          namePr: this.nameProject,
          year: this.dateProject,
          imagesGallery: this.urlImagesGallery,
          isActive: true,
        });
        this.$toast.open({
          message: "Edit is success",
          type: "success",
          // all of other options may go here
        });
        this.$router.push({ path: "/admin/project" });
        this.altImage = "";
        this.nameProject = "";
        this.valueSelect = "";
        this.urlImage = "";
        this.urlImagesGallery = [];
        this.dateProject = "";
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
.card-title {
  padding: 8px 16px;
  border-bottom: 1px solid #8f8f8f;
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
.card-footer {
  font-size: 12px;
  color: #a1a1a1;
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
</style>
