<template>
  <div class="container">
      <ul class="list-group mt-4">
          <li 
          v-for="(item, index) in getPokemons.results" :key="index"
          class="list-group-item text-uppercase">
              {{item.name}} 
              <button
                class="btn btn-dark btn-sm float-right"
                v-on:click="getDetails(item)"
              > Details 
              </button>
                </li>
        </ul>
        <div class="d-flex justify-content-between mt-4">
          <!-- <button 
            class="btn btn-dark"
            @click="getNextPokemons(getPokemons.next)"
          > Next
          </button> -->
        </div>
        </div>
</template>

<script>
export default {
  name: 'Cards',
  props: ['getPokemons'],
  data(){
    return {
      imgUrl : '',
      nextPokemons: []
    }
  }, 
  methods: {
     async getDetails(item){
      const res = await fetch(item.url)
      const data = await res.json()
      this.imgUrl = data
      this.$emit('imagenPockemon', this.imgUrl)
    },
    async getNextPokemons (url) {
      const res = await fetch(url)
      const data = await res.json()
      console.log(data.results)
      this.nextPokemons = data.results
    }
  },
  beforeUpdate(){
    this.$emit('imagenPockemon', this.imgUrl)
  }

};
</script>

<style>

</style>
