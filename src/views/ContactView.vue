<template>
  <div class="container">
    <div class="py-5">
      <h1 class="text-center">Contact me</h1>
      <div class="mt-5">
        <form action="" class="form-wrap mx-auto">
          <div>
            <b-form-input
              v-model="email"
              placeholder="Your email here..."
              class="input-text"
            ></b-form-input>
          </div>
          <div class="mt-4">
            <b-form-input
              v-model="phone"
              placeholder="Your phone number..."
              class="input-text"
            ></b-form-input>
          </div>
          <div class="mt-4">
            <b-form-textarea
              v-model="message"
              id="textarea-rows"
              class="input-text"
              placeholder="Tall textarea"
              rows="8"
            ></b-form-textarea>
          </div>
          <div class="d-grid">
            <b-button variant="info" class="mt-4 btn-send">Send</b-button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      email: "",
      phone: "",
      message: "",
    };
  },

  methods: {},
};
</script>
<style scoped>
h1 {
  color: #6b9cff;
}
.input-text {
  border: 1px solid #6b9cff;
}
.btn-send {
  color: #fff;
}
.form-wrap {
  width: 70%;
}
@media screen and (max-width: 978px) {
  .form-wrap {
    width: 100%;
  }
}
</style>
