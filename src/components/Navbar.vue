<template>
<div>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <router-link class="navbar-brand" v-if='isActive' to="/home">Pockemons</router-link>
    <router-link class="navbar-brand" v-if='isActive' to="/profile">Profile</router-link>
    <router-link class="navbar-brand" v-if='!isActive' to="/">Login</router-link>
    <router-link class="navbar-brand" v-if='!isActive' to="/signup">Register</router-link>
    <!-- <GoogleLogin :params="params" :logoutButton=true>Logout</GoogleLogin> -->

    <a class="navbar-brand" v-if='isActive' @click='closeSesion()'>Log Out</a>
    
  </nav>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from "vuex";
// import GoogleLogin from 'vue-google-login';


export default {
  methods: {
    ...mapActions(["closeSesion",]),
  },
  computed: {
    ...mapGetters(["isActive"]),
    ...mapState(["userDB"]),
  },
};
</script>

<style>
</style>
