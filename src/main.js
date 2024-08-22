import { createApp } from 'vue'
import App from './App.vue'
import './assets/tailwind.css'
import router from './router'
import { createPinia } from 'pinia'

import Loader from './components/Loader.vue';


const app = createApp(App);
const pinia = createPinia()
app.use(pinia);
app.use(router);
app.mount('#app');
app.component('Loader', Loader);
