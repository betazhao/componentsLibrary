import { App } from 'vue'
import Foo from '@ylkj-ui/foo'
import Zhw from '@ylkj-ui/zhw'
import Rowspan from '@ylkj-ui/rowspan'
import ShaderCircelDiffusion from '@ylkj-ui/shader-circel-diffusion'
// import component end
import '../scss/index.scss'

const components = [
  Foo,
  Zhw,
  Rowspan,
  ShaderCircelDiffusion
] // components

// 全局动态添加组件
const install = (app: App): void => {
  components.forEach(component => {
    app.component(component.name, component)
  })
}

export default {
  install
}
