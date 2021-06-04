<template>
  <div class="container">
    <h1>Login</h1>
    <form @submit.prevent="login">
      <input
        type="email"
        placeholder="email"
        class="form-control my-2"
        v-model="user.email"
      />
      <input
        type="text"
        placeholder="password"
        class="form-control my-2"
        v-model="user.pass"
      />
      <b-button class="btn-block my-4" type="submit">Log in</b-button>
    </form>
    <div v-if="message != ''">
      <p>{{ message }}</p>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  data() {
    return {
      user: {
        email: '',
        pass: '',
      },
      message: '',
    };
  },
  methods: {
    ...mapActions(["guardarUsuario"]),
    login() {
      // console.log(this.usuario);
      this.axios
        .post("/login", this.user)
        .then((res) => {
          // console.log(res.data);
          const data = res.data;
          console.log("res.data: ", res.data);
          console.log("Data: ", res);
          this.guardarUsuario(data);
          this.$router.push({ name: "Home" });
        })
        .catch((e) => {
          console.log(e.response);
          this.mensaje = e.response;
        });
    },
  },
};
</script>

<style>
</style>