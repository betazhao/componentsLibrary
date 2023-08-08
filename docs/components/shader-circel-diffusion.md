
# ShaderCircelDiffusion

## 基本使用

<preview path="../demos/shader-circel-diffusion/shader-circel-diffusion-1.vue" title="基本使用" description=" "></preview>

## 组件 API

### Attributes 属性

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|  ----  | ----  | ----  | ----  | ----  |
| options | 模型及模型控制 | {} | 否 | 除模型url外都有默认值 |


### options 属性

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|  ----  | ----  | ----  | ----  | ----  |
| url | 模型地址 | string | 否 | 无 |
| sceneBg | 场景背景色 | 十六进制颜色值 | 是 | 0x000000 |
| width | 模型区域宽度留白 | number | 否 | 0 |
| height | 模型区域高度留白 | number | 否 | 0 |
| cameraPos | 摄像机位置 | number[] | 否 | [15.217, 15, 30.537] |
| planeGeo | 平面缓存几何体 | number[] | 否 | [20, 20] |
| directLight | 平行光参数 | number[] | 否 | [0xffffff, 0.13] |
| directLightPos | 平行光位置 | number[] | 否 |  [14.561, 27.182, -32.543] |
| directLightCastShadow |  | boolean | 否 | true |
| directLightShadow | 平行光参数 | {} | 否 | {mapSize: { width: 256,height: 256},camera:{ near: 0.5, far: 500,left: -50, right: 50 } } |
| ambientLight | 环境光 | [] | 否 | [0xffffff, 0.5] |
| ambientLightPos | 环境光位置 | number[] | 否 | [-20, 60, 20] |
| hemisphereLight | 半球光 | [] | 否 | [0xffffff, 0x000000, 0.35] |
| hemisphereLightPos | 半球光位置 | number[] | 否 | [0, 10, -10] |
| shadowMapEnabled | 是否阴影 | boolean | 否 | true |

| controls | 轨道控制器参数 | {} | 否 | {minDistance: 0, maxDistance: 60, maxPolarAngle: 1.470796375, minPolarAngle: 0, enablePan: false } |

| loadImg | 图片 | string[] | 否 | [ './textures/cube/pisa/posx.png', './textures/cube/pisa/negx.png', './textures/cube/pisa/posy.png', './textures/cube/pisa/negy.png',  './textures/cube/pisa/posz.png', './textures/cube/pisa/negz.png'] |


### Methods 方法

| 方法名 | 说明 | 参数 | 返回值 |
|  ----  | ----  | ----  | ----  |
|  |  |  |  |

### Events 事件

| 事件名 | 说明 | 参数 | 返回值 |
|  ----  | ----  | ----  | ----  |
|  |  |  |  |

### Slots 插槽

| 插槽名 | 说明 | 参数 |
|  ----  | ----  | ----  |
|  |  |  |
