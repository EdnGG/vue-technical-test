<template>
  <div style="width: 40%" class="container justify-content-center mt-4">
    <h1>Login</h1>
    <b-alert
      :show="dismissCountDown"
      dismissible
      :variant="message.color"
      @dismissed="dismissCountDown = 0"
      @dismiss-count-down="countDownChanged"
    >
      {{ message.text }}
    </b-alert>
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

    <!-- <div>
      <GoogleLogin :params="params" :renderParams="renderParams" :onSuccess="onSuccess" :onFailure="onFailure"></GoogleLogin>
    </div> -->
  </div>
</template>

<script>
import { mapActions } from 'vuex';
// import GoogleLogin from 'vue-google-login'
export default {
  data() {
    return {
      // params: {
      //   client_id: process.env.VUE_APP_KEY_GOOGLE_CLIENT_ID
      // },
      dismissSecs: 5,
      dismissCountDown: 0,
      message: {
        color: "",
        text: "",
      },
      // renderParams: {
      //   width: 250,
      //   height: 50,
      //   longtitle: true
      // },
      // googleUser: {
      //   name: '',
      //   email: '',
      //   imgUrl: '',
      //   id_token: ''
      // },
      user: {
        email: '',
        pass: '',
      },
      // id_token : ''
    };
  },
  // components: {
  //   GoogleLogin
  // },
  methods: {
    ...mapActions(["guardarUsuario"]),
    countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown;
    },
    showAlert() {
      this.dismissCountDown = this.dismissSecs;
    },
    // onFailure(onFailure){
    //   console.log('Autentication failure', onFailure)
    // },
    // onSuccess(googleUser){
    //   console.log('google sign in: ',googleUser);

    //   // This only gets the user information: id, name, imageUrl and email
    //   // console.log('1er console: ', googleUser.getBasicProfile());
    
    //   this.id_token = googleUser.getAuthResponse().id_token;
    //   // const data = JSON.stringify(id_token)
    //   // console.log('id token :', JSON.stringify(googleUser.getAuthResponse().id_token))
    //   // console.log('Data: ', data)

    //   this.axios
    //     .post("/google", googleUser.getAuthResponse().id_token)
    //     .then((res) => {
    //       const data = res.data;
    //       const data2 = res.data.json()
    //       console.log("res.data: ", data);
    //       console.log('data 2: ', data2)
    //       console.log("Data: ", res);
    //       this.guardarUsuario(data);
    //       this.$router.push({ name: "Home" });
    //     })
    //     .catch((e) => {
    //       console.log(e.response);
    //       this.mensaje = e.response;
    //     });
    // },
    login() {
      this.axios
        .post("/login", this.user)
        .then((res) => {
          const data = res.data;
          console.log("res.data: ", res.data);
          console.log("Data: ", res);
          this.guardarUsuario(data);
          this.$router.push({ name: "Home" });
        })
        .catch((e) => {
          this.message.text = e.response.data.message;
          this.message.color = 'danger'
          this.showAlert()
        });
    },
  },
};
</script>

<style>
</style>