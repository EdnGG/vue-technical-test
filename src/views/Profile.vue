<template>
  <div class="container">
    
    <div class="d-flex justify-content-center mt-5">
    <div class="card" style="width: 18rem;">
  <img :src="userDB.image ? userDB.image : imageDefault" 
  class="card-img-top" 
  alt="...">
  <div class="card-body">
    <p class="card-text">{{userDB.email}}</p>
    <p class="card-text">{{userDB.name}}</p>
    <p class="card-text">Active user: {{userDB.active}}</p>
  </div>
</div>
</div>

    <div class="mb-4">
      <span class="home__date--member">
        Member since: {{ userDB.date | moment("dddd, MMMM Do YYYY, h:mm:ss a") }}
      </span>
    </div>

    <div class="my-4">
      <button 
      @click="showCommitsListElement()"
      class="btn btn-lg btn-dark">
        Show Commit History
      </button>
      <!-- Show when its false -->
      <ul v-if="!showCommitsHistory" class="my-4">
        <li v-for="(repo, index) in showCommitsData" :key="index">
          <hr>
          <h5>{{repo.commit.message}}  </h5>  
          <p>Author: {{repo.commit.author.name}}</p>
          <p>Date: {{repo.commit.author.date | moment("dddd, MMMM Do YYYY, h:mm:ss a")}}</p>
        <!-- <p>{{repo}}</p> -->
        </li>
      </ul>
    </div>
    <div class="py-2 formdata--div">
      <form @submit.prevent="uploadImage">
        <div class="form-group formdata--div">
          <b-form-file
            placeholder="Choose a file or drop it here..."
            drop-placeholder="Drop file here..."
            @change="onFileUpload"
          ></b-form-file>
          <div class="mt-5">Selected file: {{ image ? image.name : "" }}</div>
        </div>

        <b-button pill class="btn-lg mt-5 mb-5" type="submit">Upload</b-button>
        <p v-if="message">Error : {{ message }}</p>
      </form>
    </div>
</div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
export default {
  data() {
    return {
      imageDefault: 'https://lenguajejs.com/javascript/logo.svg',
      image: null,
      message: null,
      showCommitsHistory: true,
      showCommitsData : [] 
    }
  },
  computed: {
    ...mapState(["userDB"]),
    
  },
  created(){
    this.gettingCommmits()
  },
  methods: {
    async gettingCommmits (){
      const res = await fetch('https://api.github.com/repos/EdnGG/vue-technical-test/commits')
      const data = await res.json()
      this.showCommitsData = data
      // console.log('Commits from this repository: ', data)
    },
    
    showCommitsListElement(){
      this.showCommitsHistory  ? this.showCommitsHistory = false : this.showCommitsHistory = true
    },
    ...mapActions(["guardarUsuario", "updateImageUsuario"]),
    uploadImage() {
      let formData = new FormData();
      formData.append("image", this.image);
      // console.log("form-data: ", formData);
      this.axios
        .put(`/upload/${this.userDB._id}`, formData, {
          headers: { "Content-Type": "multipart/form-data" },
        })
        .then((res) => {
          this.updateImageUsuario(res.data.userDB);
        })
        .catch((e) => {
          // console.log("Error: ", e.response.data.err.message);
          this.message = e.response.data.err.message;
        });
    },
    onFileUpload(event) {
      this.image = event.target.files[0];
    },
  },
};
</script>

<style scoped>
.home__date--member {
  display: flex;
  margin-left: 20px;
  padding-top: 7%;
  font-weight: bold;
}

p,
table,
form,
button {
color: hsl(246, 4%, 53%);  
font-weight: 800;
}
ul{
  list-style:none
}

.form-group .formdata--div {
  background-color: #76949f;
  color: hsl(249, 92%, 64%);
  font-weight: 800;
}
</style>