<template>
<div>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <!-- <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <form  v-if='isActive' class="form-inline my-2 my-lg-0">
        <input
          class="form-control mr-sm-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
          Search
        </button>
      </form>
    </div> -->

    <router-link class="navbar-brand" v-if='isActive' to="/home">Pockemons</router-link>
    <router-link class="navbar-brand" v-if='isActive' to="/profile">Profile</router-link>
    <router-link class="navbar-brand" v-if='!isActive' to="/">Login</router-link>
    <router-link class="navbar-brand" v-if='!isActive' to="/signup">Register</router-link>
    <a class="navbar-brand" v-if='isActive' @click='closeSesion()'>Log Out</a>
    
  </nav>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from "vuex";

export default {
  methods: {
    ...mapActions(["closeSesion", "leerToken"]),
  },
  computed: {
    ...mapGetters(["isActive"]),
    ...mapState(["userDB"]),
  },
  created() {
    this.leerToken();
  },
};
</script>

<style>
</style>
