import Zhw from './src/zhw'
import { App } from 'vue'

Zhw.install = (app: App): void => {
  // 注册组件
  app.component(Zhw.name, Zhw)
}

export default Zhw
