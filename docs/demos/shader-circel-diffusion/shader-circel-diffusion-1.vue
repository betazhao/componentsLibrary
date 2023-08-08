<template>
  <ylkj-shader-circel-diffusion :options="options" style="width:650px;height:650px;border:1px solid red"></ylkj-shader-circel-diffusion>
</template>

<script lang="ts" setup>
let options = {
      url: "/models/gltf/Xbot.glb", // 模型url
      sceneBg: 0x000000, // 场景背景色
      width: 0, // 默认window宽
      height: 0, // 默认window高
      cameraPos: [15.217, 15, 30.537], // 摄像机位置
      planeGeo: [20, 20], // 平面缓冲几何体
      directLight: [0xffffff, 0.13], // 平行光参数
      directLightPos: [14.561, 27.182, -32.543], // 平行光位置
      directLightCastShadow: true,
      directLightShadow: {
        mapSize: {
          width: 256,
          height: 256
        },
        camera: {
          near: 0.5,
          far: 500,
          left: -50,
          right: 50
        }
      },
      ambientLight: [0xffffff, 0.5], // 环境光
      ambientLightPos: [-20, 60, 20],
      hemisphereLight: [0xffffff, 0x000000, 0.35], // 半球光
      hemisphereLightPos: [0, 10, -10],
      devicePixelRatio: window.devicePixelRatio,
      shadowMapEnabled: true, // 告诉渲染器需要阴影
      domBody: document.body,
      domEvent: window,
      controls: { minDistance: 0, maxDistance: 60, maxPolarAngle: 1.470796375, minPolarAngle: 0, enablePan: false },
      loadImg: [
        './textures/cube/pisa/posx.png', './textures/cube/pisa/negx.png',
        './textures/cube/pisa/posy.png', './textures/cube/pisa/negy.png',
        './textures/cube/pisa/posz.png', './textures/cube/pisa/negz.png',
      ]
    }
</script>

<style scoped lang="scss">

</style>
