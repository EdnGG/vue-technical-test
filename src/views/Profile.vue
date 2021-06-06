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
    <p class="card-text">Active: {{userDB.activo}}</p>
    <!-- <p class="card-text">{{userDB}}</p> -->
  </div>
</div>
</div>

    <div class="mb-4">
      <span class="home__date--member">
        Member since: {{ userDB.date | moment("dddd, MMMM Do YYYY, h:mm:ss a") }}
      </span>
    </div>

    <div class="mb-4">
      <button 
      @click="showCommits()"
      class="btn btn-lg btn-dark">
        Show Commit History
      </button>
      <!-- mostrar cuando es falso -->
      <ul v-if="!showCommitsHistory" v>
        <li>jhjhj</li>
        <li>jhjhj</li>
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
      showCommitsHistory: true
    }
  },
  computed: {
    ...mapState(["userDB"]),
    // getDate() {
    //   return this.userDB.date | moment("dddd, MMMM Do YYYY, h:mm:ss a");
    // },
  },
  methods: {
    showCommits(){
      console.log('this: ', this.showCommitsHistory)
      this.showCommitsHistory = false
      console.log('this 2: ', this.showCommitsHistory)
      if(!this.showCommitsHistory){
        this.showCommitsHistory
        console.log('this 3: ', this.showCommitsHistory)
      } else {
        this.showCommitsHistory = true
      cconsole.log('this 4 : ', this.showCommitsHistory)
      }
      this.showCommitsHistory = true
      console.log('this 5 : ', this.showCommitsHistory)
    },
    ...mapActions(["guardarUsuario", "updateImageUsuario"]),
    uploadImage() {
      let formData = new FormData();
      formData.append("image", this.image);
      console.log("form-data: ", formData);
      this.axios
        .put(`/upload/${this.userDB._id}`, formData, {
          headers: { "Content-Type": "multipart/form-data" },
        })
        .then((res) => {
          console.log("res.data: ", res.data);
          console.log("usuarioDB ya con la imagen: ", res.data.userDB);
          this.updateImageUsuario(res.data.userDB);
        })
        .catch((e) => {
          console.log("Error: ", e.response.data.err.message);
          this.message = e.response.data.err.message;
        });
    },
    onFileUpload(event) {
      this.image = event.target.files[0];
      console.log("contenido de this.image", this.image);
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
  color: #b8dbd9;
  font-weight: 800;
}

.form-group .formdata--div {
  background-color: #76949f;
  color: #b8dbd9;
  font-weight: 800;
}
ul{
  style-display: none;
}
</style>