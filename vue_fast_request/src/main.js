import {createApp} from 'vue'
import App from './App.vue'
import router from './router'




import index from "./router/index";


const app = createApp(App)
app.use(index)
app.use(router)
app.mount('#app')