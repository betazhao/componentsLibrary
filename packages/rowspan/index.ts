import Rowspan from './src/rowspan'
import { App } from 'vue'

Rowspan.install = (app: App): void => {
  // 注册组件
  app.component(Rowspan.name, Rowspan)
}

export default Rowspan
