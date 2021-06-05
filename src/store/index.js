import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

import router from '../router'

// Decodificar JWT
// import decode from 'jwt-decode'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: '',
    userDB: {},
    pokemons: []
  },
  mutations: {
    getAllPokemons(state, payload) {
      state.pokemons = payload.pokemons
    },
    obtenerUsuario(state, payload) {
      state.token = payload.token
      state.userDB = payload.userDB
    },
    actualizarImagenUsuario(state, payload) {
      console.log('Payload de actualizarImagenUsuario: ', payload)
      state.userDB = payload
    }
  },
  actions: {
    getPokemons({commit}, payload) {
      console.log('actions from  vuex')
      const fetchData = async () => {
        const res = await fetch('https://pokeapi.co/api/v2/pokemon/1/')
        // .then(response => response.json())
        const data = await res.json()
          // .then(data => console.log(data));
        console.log('hey', data)
      }
      fetchData()
      commit('getAllPokemons', payload)
    },
    updateImageUsuario({ commit }, payload) {
      // localStorage.setItem('token', payload)
      console.log('Payload de updateImageUsuarios: ', payload)
      commit('actualizarImagenUsuario', payload)
    },
    guardarUsuario({ commit }, payload) {
      localStorage.setItem('token', payload.token)
      // console.log('Payload de guardarUsuarios: ', payload)
      commit('obtenerUsuario', payload)
    },
    // Esra accion no necesita el payload porque va a remover el token y el commit
    // va a ser nulo
    closeSesion({ commit }) {
      commit('obtenerUsuario', '')
      localStorage.removeItem('token')
      router.push({name: 'Login'})
    },
    leerToken({commit}) {
      const token = localStorage.getItem('token')
      if (token) {
        //commit('obtenerUsuario' ,token)
      } else {
        //commit('obtenerUsuario' , '')
      }
    }
  },
  modules: {
  },
  getters: {
    isActive: state => !!state.token
  },
  plugins: [createPersistedState()]
})
