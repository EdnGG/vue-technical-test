<template>
    <div class="row mt-5">
      <div class="col-md-6">
    <h1>Pokemon API</h1>
      <Cards />
    </div>
    <div class="col-md-6">
      <h1>Details</h1>
      <Details />
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
// @ is an alias to /src
import Cards from '../components/Cards.vue'
import Details from '../components/Details.vue'

export default {
  name: 'Home',
  components: {
    Cards,
    Details
  },
  created(){
    console.log('Created')
    this.getInfo()
  },
  methods: {
    ...mapActions(['getPokemons']),
    getInfo(){

      this.getPokemons()
    }
  }
}
</script>
