import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import YlkjUi from '@ylkj-ui/ylkj-ui'

const env = import.meta.env

console.log('env==main', env)

const app = createApp(App)
app.use(ElementPlus).use(YlkjUi)
app.mount('#app')
