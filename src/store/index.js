import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: '',
    userDB: {},
    pokemons: []
  },
  mutations: {
    getAllPokemons(state, payload) {
      state.pokemons = payload
    },
    obtenerUsuario(state, payload) {
      state.token = payload.token
      state.userDB = payload.userDB
    },
    actualizarImagenUsuario(state, payload) {
      state.userDB = payload
    }
  },
  actions: {
    async getPokemons({ commit }) {
      const res = await fetch('https://pokeapi.co/api/v2/pokemon?offset=0&limit=10')
      const data = await res.json()
      commit('getAllPokemons', data)
    },
    updateImageUsuario({ commit }, payload) {
      commit('actualizarImagenUsuario', payload)
    },
    guardarUsuario({ commit }, payload) {
      localStorage.setItem('token', payload.token)
      commit('obtenerUsuario', payload)
    },
    // Esta accion no necesita el payload porque va a remover el token y el commit va a ser nulo
  
    closeSesion({ commit }) {
      commit('obtenerUsuario', '')
      localStorage.removeItem('token')
      router.push({name: 'Login'})
    },
  },
  modules: {
  },
  getters: {
    isActive: state => !!state.token
  },
  plugins: [createPersistedState()]
})
