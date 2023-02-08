<template>
  <div class="container">
    <div class="py-5">
      <h1 class="text-center">About me</h1>
      <div class="mt-5">
        <form action="" class="w-50 mx-auto">
          <div>
            <b-form-input
              placeholder="Your email here..."
              class="input-text"
            ></b-form-input>
          </div>
          <div class="mt-4">
            <b-form-input
              placeholder="Your phone number..."
              class="input-text"
            ></b-form-input>
          </div>
          <div class="mt-4">
            <b-form-textarea
              id="textarea-rows"
              class="input-text"
              placeholder="Tall textarea"
              rows="8"
            ></b-form-textarea>
          </div>
          <b-button variant="info" class="mt-4 btn-send">Send</b-button>
        </form>
      </div>
    </div>
  </div>
</template>
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
</style>
