<template>
  <div  style="width: 40%" class="container justify-content-center mt-4">
    <h1>Register</h1>
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      dismissSecs: 5,
      dismissCountDown: 0,
      message: {
        color: "",
        text: "",
      },
      user: {
        name: '',
        email: '',
        pass: '',
      },
    };
  },
  methods: {
    // welcome (){
    //   this.message.text = `Welcome ${this.user.name}, now please login`
    //   this.message.color = 'danger'
    //   this.showAlert()
    // },
    countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown;
    },
    showAlert() {
      this.dismissCountDown = this.dismissSecs;
    },
    signUp() {
      this.axios
        .post('/signup', this.user)
        .then((res) => {

          // console.log('Inside of "RES" object: ', res);
          // this.message.text = `Welcome ${this.user.name}, now please login`
          // this.message.color = 'danger'
          // this.showAlert()

          this.$router.push({ name: "Login" });
        })
        .catch((e) => {

          // console.log(e.response.data.message)
            this.message.text = e.response.data.message
            this.message.color = 'danger'
            this.showAlert()
        });
    },
  },
};
</script>

<style>
</style>