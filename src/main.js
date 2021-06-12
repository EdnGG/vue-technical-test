import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import BootstrapVue from 'bootstrap-vue';
import App from './App.vue';
import router from './router';
import store from './store';

// import dotenv from 'dotenv'
// import dotenvExpand from 'dotenv-expand'

// let myEnv = dotenv.config()
// dotenvExpand(myEnv)

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.use(require('vue-moment'));
Vue.use(VueAxios, axios);

// Agregamos la URL base de la API
// axios.defaults.baseURL = process.env.VUE_APP_KEY_LOCAL;

axios.defaults.baseUrl = 'http://localhost:5000'
// Mongo Atlas
// axios.defaults.baseURL = PROCESS.ENV.VUE_APP_KEY_CLOUD
Vue.use(BootstrapVue);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
