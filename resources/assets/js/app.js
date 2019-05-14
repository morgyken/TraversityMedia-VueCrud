
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

import Vue from 'vue';
import VueSweetalert2 from 'vue-sweetalert2';
 
const options = {
  confirmButtonColor: '#41b882',
  cancelButtonColor: '#ff7674'
}
 
Vue.use(VueSweetalert2, options)

Vue.component('navbar', 
	require('./components/Navbar.vue'));
Vue.component('articles', 
	require('./components/Articles.vue'));



const app = new Vue({
    el: '#app'
});
