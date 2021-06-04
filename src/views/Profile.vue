<template>
  <div class="container md text-center justify-content-center">
    

    <div class="card text-center" style="width: 18rem;">
  <img :src="imageDefault" class="card-img-top" alt="...">
  <div class="card-body">
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>

    <div>
      <span class="home__date--member">
        <!-- Member since: {{ userDB.date | moment("dddd, MMMM Do YYYY") }} -->
        Member since: {{ userDB.date | moment("dddd, MMMM Do YYYY, h:mm:ss a") }}
      </span>
    </div>
    <div class="py-2 formdata--div">

      <form @submit.prevent="uploadImage">
        <div class="form-group formdata--div">
          <b-form-file
            placeholder="Choose a file or drop it here..."
            drop-placeholder="Drop file here..."
            @change="onFileUpload"
          ></b-form-file>
          <div class="mt-3">Selected file: {{ image ? image.name : "" }}</div>
        </div>

        <b-button pill class="btn-block" type="submit">Upload</b-button>
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
    }
  },
  computed: {
    ...mapState(["userDB"]),
    // getDate() {
    //   return this.userDB.date | moment("dddd, MMMM Do YYYY, h:mm:ss a");
    // },
  },
  methods: {
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
img {
  display: flex;
  text-align: center;
  align-items: center;
}


p,
table,
form,
button {
  color: #b8dbd9;
  font-weight: 800;
}
form,
.form-group .formdata--div {
  background-color: #76949f;
  color: #b8dbd9;
  font-weight: 800;
}
/* b-form-file {
  background-color: white;
  color: #b8dbd9;
  font-weight: 800;
} */
</style>