<template>
  <!-- <div class="home mt-5"> -->
    <div class="row mt-5">
      <div class="col-md-6">
    <h1>Pokemon API</h1>
    <Cards />
  <!-- </div> -->
    </div>
    <div class="col-md-6">
        <h1>Details</h1>
       <Details />

      </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Cards from '../components/Cards.vue'
import Details from '../components/Details.vue'

export default {
  name: 'Home',
  components: {
    Cards,
    Details
  }
}
</script>
