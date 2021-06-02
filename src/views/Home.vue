<template>
  <div class="home mt-5">
    <h1>Pokemon API</h1>
    <Cards />
  </div>
</template>

<script>
// @ is an alias to /src
import Cards from '../components/Cards.vue'

export default {
  name: 'Home',
  components: {
    Cards
  }
}
</script>
