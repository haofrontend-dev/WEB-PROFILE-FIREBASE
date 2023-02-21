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
      </tr>
    </tbody>
  </table>
</template>

<script>
import { getFirestore, collection, getDocs } from "firebase/firestore";

export default {
  props: {
    columns: {
      type: Array,
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

      const querySnapshot = await getDocs(collection(db, "db_projects"));
      querySnapshot.forEach((doc) => {
        this.allData.push(doc.data());
      });
    },
  },
};
</script>

<style scoped></style>
