import Vue from "vue";

import { createApp } from 'vue'
import router from './router'
import store from './store'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.js"

createApp(App).use(store).use(router).mount('#app')
Vue.use(BootstrapVue)
