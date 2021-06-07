<template>
  <div  style="width: 40%" class="container justify-content-center mt-4">
    <h1>Register</h1>
    <hr>
    <form  class="mt-5" @submit.prevent="signUp">
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

      <b-button class="btn-block my-5" type="submit">Sign Up</b-button>
    </form>
    <div v-if="message != ''">
      <p>{{ message }}</p>
    </div>
  </div>
</template>

<script>
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
    signUp() {
      this.axios
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