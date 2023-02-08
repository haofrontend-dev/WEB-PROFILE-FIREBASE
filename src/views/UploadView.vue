<template>
  <div class="container-upload">
    <div class="wrapper-upload">
      <h1>Upload Image</h1>
      <form action="">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-cloud-upload-fill"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M8 0a5.53 5.53 0 0 0-3.594 1.342c-.766.66-1.321 1.52-1.464 2.383C1.266 4.095 0 5.555 0 7.318 0 9.366 1.708 11 3.781 11H7.5V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11h4.188C14.502 11 16 9.57 16 7.773c0-1.636-1.242-2.969-2.834-3.194C12.923 1.999 10.69 0 8 0zm-.5 14.5V11h1v3.5a.5.5 0 0 1-1 0z"
          />
        </svg>
        <p>Browse File to Upload</p>
      </form>
      <div class="progrees-area">
        <div class="wrapper">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-file-earmark-bar-graph-fill"
            viewBox="0 0 16 16"
          >
            <path
              d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0zM9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1zm.5 10v-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm-2.5.5a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-1zm-3 0a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-1z"
            />
          </svg>
          <div class="content">
            <div class="details">
              <span class="name">image_01.png</span>
              <span class="percent">50%</span>
            </div>
            <div class="process-bar">
              <div class="process"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="uploaded-area">
        <div class="wrapper">
          <div class="content">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-file-earmark-bar-graph-fill"
              viewBox="0 0 16 16"
            >
              <path
                d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0zM9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1zm.5 10v-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm-2.5.5a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-1zm-3 0a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-1z"
              />
            </svg>
            <div class="details">
              <span class="name">image_01.png</span>
              <span class="size">70 KB</span>
            </div>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-check-lg"
            viewBox="0 0 16 16"
          >
            <path
              d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"
            />
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.container-upload {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #6990f2;
}
.wrapper-upload {
  width: 430px;
  padding: 30px;
  background-color: #fff;
  border-radius: 5px;
}
.wrapper-upload h1 {
  color: #6990f2;
  font-size: 27px;
  text-align: center;
}
.wrapper-upload form {
  height: 167px;
  margin: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border: 2px dashed #6990f2;
}
form :where(svg, p) {
  color: #6990f2;
}
form svg {
  font-size: 50px;
}
form p {
  font-size: 15px;
}

.wrapper {
  background-color: #e9f0ff;
  margin-bottom: 10px;
  padding: 15px 20px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.wrapper svg {
  color: #6990f2;
}
.wrapper .details span {
  font-style: 14px;
}
.progrees-area .wrapper .content {
  width: 100%;
  margin-left: 15px;
}

.progrees-area .details {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
