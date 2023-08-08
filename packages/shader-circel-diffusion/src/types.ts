import { ExtractPropTypes } from 'vue'

export const shaderCircelDiffusionProps = {
  options: {
    type: Object
  }
} as const

export type ShaderCircelDiffusionProps = ExtractPropTypes<typeof shaderCircelDiffusionProps>
