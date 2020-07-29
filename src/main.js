import Vue from 'vue'
import App from './App.vue'
import bootstrap from 'bootstrap/dist/css/bootstrap.css';
import store from './store';
import VueRouter from 'vue-router';
import { routes } from './routes';

Vue.use(VueRouter);
const router = new VueRouter({
  mode: 'history',
  routes
})

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
