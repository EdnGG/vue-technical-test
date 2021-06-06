<template>
  <div class="card mt-4 text-center">
      <div class="card-body" >
        <img v-if='imagenPockemon' :src="imagenPockemon.sprites.front_default ? imagenPockemon.sprites.front_default : 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png'" class="img-fluid" alt='imagenPockemon.name' />
        <div class="card-title text-uppercase">{{imagenPockemon.name}}</div>
        <p class="card-text">Weigth: {{imagenPockemon.weight ? imagenPockemon.weight : ''}}  |  Height: {{imagenPockemon.height ? imagenPockemon.height : ''}}</p>
      </div>
    </div>
</template>

<script>
export default {
  name:'Details',
  props: ['imagenPockemon'],
  data() {
    return {
      isDataExist:  true,
      details: null,
      defaultImage : 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png'
    }
  },
  methods: {
  },
}
</script>

<style>
</style>