import {createApp} from 'vue';
import { router } from "./router";
import App from './App.vue';
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import PrimeVue from 'primevue/config';
import Chip from 'primevue/chip';

import 'primevue/resources/themes/bootstrap4-light-purple/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css'

const app = createApp(App);

app.use(PrimeVue);
app.use(router);


app.component('p-chip', Chip);

app.mount('#app');