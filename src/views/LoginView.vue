<template>
  <div class="container py-5">
    <div class="p-5 shadow bg-body rounded content-register">
      <h2 class="title text-center">Login</h2>
      <b-form @submit.stop.prevent="onSubmit">
        <b-form-group
          id="example-input-group-1"
          label="Name"
          label-for="example-input-1"
          class="mb-2"
        >
          <b-form-input
            id="example-input-1"
            name="example-input-1"
            v-model="$v.form.name.$model"
            :state="validateState('name')"
            aria-describedby="input-1-live-feedback"
          ></b-form-input>

          <b-form-invalid-feedback id="input-1-live-feedback"
            >This is a required field and must be at least 3
            characters.</b-form-invalid-feedback
          >
        </b-form-group>
        <b-form-group
          id="example-input-group-1"
          label="Password"
          label-for="example-input-1"
          class="mb-2"
        >
          <b-form-input
            id="example-input-1"
            name="example-input-1"
            v-model="$v.form.password.$model"
            :state="validateState('password')"
            aria-describedby="input-1-live-feedback"
          ></b-form-input>

          <b-form-invalid-feedback id="input-1-live-feedback"
            >This is a required field and must be at least 8
            characters.</b-form-invalid-feedback
          >
        </b-form-group>
        <b-button type="submit" variant="primary">Login</b-button>
      </b-form>
    </div>
  </div>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, minLength } from "vuelidate/lib/validators";

export default {
  mixins: [validationMixin],
  data() {
    return {
      form: {
        name: null,
        food: null,
      },
    };
  },
  validations: {
    form: {
      password: {
        required,
        minLength: minLength(8),
      },
      name: {
        required,
        minLength: minLength(3),
      },
    },
  },
  methods: {
    validateState(name) {
      const { $dirty, $error } = this.$v.form[name];
      return $dirty ? !$error : null;
    },
    resetForm() {
      this.form = {
        name: null,
        password: null,
        email: null,
      };

      this.$nextTick(() => {
        this.$v.$reset();
      });
    },
    onSubmit() {
      this.$v.form.$touch();
      if (this.$v.form.$anyError) {
        return;
      }

      alert("Form submitted!");
    },
  },
};
</script>
<style scoped>
.content-register {
  width: 50%;
  margin: 0 auto;
}

.title {
  color: #6b9cff;
}
.form-input {
  margin-bottom: 8px;
}
.btn-submit {
  color: #fff;
}
@media screen and (max-width: 992px) {
  .content-register {
    width: 100%;
  }
}
</style>
