<template>
  <div class="container">
    <!-- <p>ppp:  {{imgUrl}}</p> -->
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
            <button class="btn btn-dark">Get Pockemons</button>
            <button class="btn btn-dark">Next Pockemons</button>
            <button class="btn btn-dark" >Prev Pockemons</button>
        </div>
        </div>
</template>

<script>
export default {
  name: 'Cards',
  prop: {
    getDetails: {
      type: Function,
      default: null
    }
  },
  props: ['getPokemons'],
  data(){
    return {
      imgUrl : ''
    }
  }, 
  methods: {
    // handleClick (){
    //   this.$emit('onClick')
    // },
    getDetails(item){
      console.log('trigging details button')
      console.log('item', item)
      this.imgUrl = item.url
      console.log('imgUrl: ', this.imgUrl)
      this.$emit('imagenPockemon', this.imgUrl)
    }
  },
  beforeUpdate(){
    this.$emit('imagenPockemon', this.imgUrl)
  }

};
</script>

<style>

</style>
