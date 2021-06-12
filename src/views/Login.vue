<template>
  <div style="width: 40%" class="container justify-content-center mt-4">
    <h1>Login</h1>
    <hr>
    <form @submit.prevent="login" class="mt-5">
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
      <b-button class="btn-block my-5" type="submit">Log in</b-button>
    </form>
    
    <div v-if="message != ''">
      <p>{{ message }}</p>
    </div>
    <hr>

    <!-- <button 
      @click="signinGoogle()"
      class="btn btn-lg btn-dark">Google
    </button>  -->

    <GoogleLogin :params="params" :renderParams="renderParams" :onSuccess="onSuccess" :onFailure="onFailure"></GoogleLogin>


    <hr>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
import GoogleLogin from 'vue-google-login';

export default {
  data() {
    return {
      params: {
        client_id: process.env.VUE_APP_KEY_GOOGLE_CLIENT_ID
      },
      renderParams: {
        width: 250,
        height: 50,
        longtitle: true
      },
      googleUser: {
        name: '',
        email: '',
        imgUrl: '',
        id_token: ''
      },
      user: {
        email: '',
        pass: '',
      },
      message: '',
    };
  },
  components: {
    GoogleLogin
  },
  methods: {
    ...mapActions(["guardarUsuario"]),
    onFailure(){
      console.log('Autentication failure')
    },
    onSuccess(googleUser){
      console.log('google sign in: ',googleUser);

      // This only gets the user information: id, name, imageUrl and email
      console.log('1er console: ', googleUser.getBasicProfile());
      this.googleUser.name = googleUser.getBasicProfile().Ve
      this.googleUser.email = googleUser.getBasicProfile().ku
      this.googleUser.imgUrl = googleUser.getBasicProfile().ZJ
      this.googleUser.id_token = googleUser.getAuthResponse().id_token;
      console.log('google user modified : ', this.googleUser)

      // let id_token = googleUser.getAuthResponse().id_token;
      // console.log('Token de Google: ' + id_token)

      this.axios
        .post("/google", googleUser.getAuthResponse().id_token)
        .then((res) => {
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
    login() {
      console.log('Login function')
      this.axios
        .post('/login', this.user)
        .then((res) => {
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