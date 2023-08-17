import {createApp} from 'vue'
import App from './App.vue'

// 引入 ui 全部，不推荐，最好按需引用
import naive from 'naive-ui'
import 'vfonts/Lato.css'
import 'vfonts/FiraCode.css'

const app = createApp(App)
app.use(naive)
app.mount('#app')