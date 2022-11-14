import { createApp } from 'vue'
import App from './App.vue'

let app = createApp(App)

fetch("/config.json")
    .then(response => response.json())
    .then(json => {

        app.config.globalProperties.config = json;
        app.mount('#app');
    })
