import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router';
import VueSelect from "vue-select";
import 'vue-select/dist/vue-select.css';
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";


const app = createApp(App)
    .component("v-select", VueSelect)
    .component("VueDatePicker", VueDatePicker)
    .use(router, createPinia())
    .use(Toast)
    .mount('#app');