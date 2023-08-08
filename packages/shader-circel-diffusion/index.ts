import ShaderCircelDiffusion from './src/shader-circel-diffusion'
import { App } from 'vue'

ShaderCircelDiffusion.install = (app: App): void => {
  // 注册组件
  app.component(ShaderCircelDiffusion.name, ShaderCircelDiffusion)
}

export default ShaderCircelDiffusion
