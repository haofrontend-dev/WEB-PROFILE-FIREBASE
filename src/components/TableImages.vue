<template>
  <table class="table">
    <thead>
      <tr>
        <th v-for="(column, index) in columns" :key="index" scope="col">
          {{ column.title }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(data, index) in allData" :key="index">
        <td scope="row">{{ index + 1 }}</td>
        <td><img :src="data.myUrl" alt="" style="width: 80px" /></td>
        <td>{{ data.namePr }}</td>
        <td>{{ data.atl }}</td>
        <td>
          <div class="form-check form-switch">
            <input
              v-model="data.isActive"
              class="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              disabled
            />
          </div>
        </td>
        <td>
          <div class="form-check form-switch">
            <span class="btn-delete" @click="deleteImage(data.id)"
              ><i class="fa-regular fa-trash-can"></i
            ></span>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import {
  getFirestore,
  collection,
  getDocs,
  deleteDoc,
  doc,
} from "firebase/firestore";

export default {
  props: {
    columns: {
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
      counter: 1,
      allData: [],
    };
  },
  mounted() {
    this.getDatas();
  },
  methods: {
    async getDatas() {
      const db = getFirestore();

      const querySnapshot = await getDocs(collection(db, this.models));
      querySnapshot.forEach((doc) => {
        this.allData.push({ ...doc.data(), id: doc.id });
        console.log(this.allData);
      });
    },
    async deleteImage(docId) {
      const db = getFirestore();

      const docRef = doc(db, this.models, docId);

      await deleteDoc(docRef)
        .then(() => {
          console.log("Xóa tài liệu thành công");
          this.$toast.open({
            message: "Delete image is success",
            type: "success",
            // all of other options may go here
          });
          // Xóa tài liệu khỏi danh sách
          this.allData = this.allData.filter((data) => data.id !== docId);
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
  },
};
</script>

<style scoped>
.btn-delete {
  display: block;
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
