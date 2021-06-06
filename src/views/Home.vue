<template>
<div style="width: 100%" class="container">
    <div class="row mt-5">
      <div class="col-md-6">
    <h1>Pokemon API</h1>
      <p>{{imagenPockeUrl}}</p>
      <Cards :getPokemons="pokemons" @imagenPockemon="imagenPockeUrl = $event" />
    </div>
    <div class="col-md-6">
      <h1>Details</h1>
      <Details />
    </div>
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
  data() {
    return {
      pokes: this.pokemons,
      imagenPockeUrl: ''
    }
  },
  created(){
    console.log('getInfo')
    this.getInfo()
  },
  computed:{
    ...mapState(['pokemons'])
  },
  methods: {
    ...mapActions(['getPokemons']),
    getInfo(){
      this.getPokemons()
    },
    setPokemons(){
      return this.pokemons
    }
  }
}
</script>
