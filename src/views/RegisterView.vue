<template>
  <div class="container py-5">
    <div class="p-5 shadow bg-body rounded content-register">
      <h2 class="title text-center">Register User</h2>
      <b-form @submit.stop.prevent="onSubmit">
        <b-form-group
          id="example-input-group-1"
          label="Username"
          label-for="example-input-1"
          class="mb-2"
        >
          <b-form-input
            id="example-input-1"
            name="example-input-1"
            v-model="$v.form.userName.$model"
            :state="validateState('userName')"
            aria-describedby="input-1-live-feedback"
          ></b-form-input>
          <b-form-invalid-feedback id="email-invalid-feedback">
            >This is a required field and must be at least 3
          </b-form-invalid-feedback>
        </b-form-group>
        <b-form-group
          id="example-input-group-2"
          label="Email"
          label-for="example-input-2"
          class="mb-2"
        >
          <b-form-input
            id="example-input-2"
            name="example-input-2"
            type="email"
            v-model="$v.form.email.$model"
            :state="validateState('email')"
            aria-describedby="input-2-live-feedback"
          ></b-form-input>
          <b-form-invalid-feedback id="email-invalid-feedback">
            Please enter a valid email address.
          </b-form-invalid-feedback>
        </b-form-group>
        <b-form-group
          id="example-input-group-3"
          label="Password"
          label-for="example-input-3"
          class="mb-2"
        >
          <b-form-input
            type="password"
            id="text-password"
            aria-describedby="password-help-block"
            v-model="$v.form.password.$model"
            :state="validateState('password')"
          ></b-form-input>

          <b-form-invalid-feedback id="input-3-live-feedback"
            >This is a required field and must be at least 6
            characters.</b-form-invalid-feedback
          >
        </b-form-group>
        <div v-if="!isPending" class="d-grid">
          <b-button block type="submit" variant="primary">Register</b-button>
        </div>
        <div v-else class="d-grid">
          <b-button block disabled type="button">Loading...</b-button>
        </div>
      </b-form>
      <div v-if="errorMessge" class="text-danger my-2">
        {{ errorMessge }}
      </div>
    </div>
  </div>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, minLength } from "vuelidate/lib/validators";
import { auth } from "@/config/filsebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import router from "@/router";
export default {
  mixins: [validationMixin],
  data() {
    return {
      form: {
        name: null,
        email: null,
        password: null,
      },
      errorMessge: null,
      isPending: false,
    };
  },
  validations: {
    form: {
      email: { required },
      userName: {
        required,
        minLength: minLength(3),
      },
      password: {
        required,
        minLength: minLength(6),
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
        userName: null,
        password: null,
        email: null,
      };

      this.$nextTick(() => {
        this.$v.$reset();
      });
    },
    async onSubmit() {
      this.$v.form.$touch();
      if (this.$v.form.$anyError) {
        return;
      }
      this.isPending = true;
      this.errorMessge = null;
      try {
        const response = await createUserWithEmailAndPassword(
          auth,
          this.form.email,
          this.form.password
        );

        if (!response) throw new Error("Could not createa new user.");

        await updateProfile(auth.currentUser, {
          displayName: this.form.userName,
        });
        router.push({ name: "admin", params: "" });
        return response;
      } catch (err) {
        if (err.code === "auth/email-already-in-use") {
          this.errorMessge = "Email already in use";
        }
        console.log(err);
      } finally {
        this.isPending = false;
        this.errorMessge = null;
      }
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
