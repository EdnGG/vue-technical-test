<template>
  <div class="card mt-4 text-center">
      <div class="card-body">
        <img :src='imagenPockemon' class="img-fluid" alt="" />
        <div class="card-title text-uppercase">{{imagenPockemon}}</div>
        <p class="card-text">Weigth: {pokemon.weigth}  |  Height: {pokemon.height}</p>
      </div>
    </div>
</template>

<script>
export default {
  name:'Details',
  props: ['imagenPockemon']

}
</script>

<style>

</style>