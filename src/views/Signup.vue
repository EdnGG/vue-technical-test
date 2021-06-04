<template>
  <div class="container">
    <h1>Sign Up</h1>
    <form @submit.prevent="signUp">
      <input
        type="text"
        placeholder="Name"
        class="form-control my-2"
        v-model="user.name"
      />
      <input
        type="email"
        placeholder="Email"
        class="form-control my-2"
        v-model="user.email"
      />
      <input
        type="text"
        placeholder="Password"
        class="form-control my-2"
        v-model="user.pass"
      />

      <div class="py-2">
      </div>

      <b-button class="btn-block" type="submit">Sign Up</b-button>
    </form>
    <div v-if="message != ''">
      <p>{{ message }}</p>
    </div>
  </div>
</template>

<script>
// import { mapActions } from "vuex";
export default {
  data() {
    return {
      user: {
        name: '',
        email: '',
        pass: '',
      },
      message: ''
    };
  },
  methods: {
    // ...mapActions(["guardarUsuario"]),
    signUp() {
      this.axios
        // ruta del API
        .post('/signup', this.user)
        .then((res) => {
          console.log('Inside of "RES" object: ', res);
          this.$router.push({ name: "Login" });
        })
        .catch((e) => {
          console.log('Error from frontend logic', e);
          this.message = e.response.message;
        });
    },
  },
};
</script>

<style>
</style>