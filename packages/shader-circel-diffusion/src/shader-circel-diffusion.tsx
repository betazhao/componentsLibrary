import { defineComponent, ref, onMounted } from 'vue';
import { shaderCircelDiffusionProps } from './types'
import * as THREE from 'three';
import { testLog } from '@ylkj-ui/utils'
// import { GUI } from './jsm/libs/dat.gui.module.js';

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
// import { Lut } from './jsm/math/Lut.js';
// import { ArrowHelper } from '../src/helpers/ArrowHelper.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
// import * as mt from './js/materials.js';

import './shader_circel_diffusion.css'
const NAME = 'ylkj-shader-circel-diffusion'

export default defineComponent({
  name: NAME,
  props: shaderCircelDiffusionProps,
  setup (props, context) {
    console.log(props, context, 'THREE, OrbitControls, GLTFLoader', THREE, OrbitControls, GLTFLoader)
    testLog('opop')
    let options = {
      url: "", // 模型url
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
    options = Object.assign({}, options, props.options)
    const dom = ref()
    // let container;
    let perpCamera: { position: { set: (arg0: number, arg1: number, arg2: number) => void; }; aspect: number; updateProjectionMatrix: () => void; }, renderer: { autoClear: boolean; setPixelRatio: (arg0: number) => void; setSize: (arg0: number, arg1: number) => void; shadowMapEnabled: boolean; domElement: any; render: (arg0: any, arg1: any) => void; };

    let mesh: { material: { side: any; uniforms: { iTime: { value: any; }; }; }; rotation: { x: number; }; };
    let scene: { background: any; add: (arg0: any) => void; };
    // let perfov = 60;
    // let params;
    // let path, format;
    // let cubeCamera;
    let clock: { getElapsedTime: () => any; };
    // let mixerlist = [];
    // let all_jigui = [];
    // let all_animation = [];
    let pointerdownTime: number, pointerupTime
    let uniforms;
    onMounted(() => {
      console.log('dom=====================', dom.value, dom.value.offsetWidth)
      init()
    })

    // console.log(mesh)
    // animate()
    function init () {
      scene = new THREE.Scene();
      scene.background = new THREE.Color(options.sceneBg);
      // scene.fog = new THREE.FogExp2( 0xefd1b5, 0.0025 );

      const width = dom.value.offsetWidth - options.width;
      const height = dom.value.offsetHeight - options.height;
      perpCamera = new THREE.PerspectiveCamera(60, width / height, 1, 100000); // max10
      // window.perpCamera=perpCamera;

      perpCamera.position.set(options.cameraPos[0], options.cameraPos[1], options.cameraPos[2]);
      // perpCamera.up.set(0, 1, 0);         //相机以哪个方向为上方
      // perpCamera.lookAt(0, 100, 0);
      scene.add(perpCamera);

      loadGltf()

      // var pointLight = new THREE.PointLight(0xffffff);//点光源
      // pointLight.position.set(20, 30, 20);
      // pointLight.castShadow = true;    // 让光源产生阴影效果
      // scene.add(pointLight);
      clock = new THREE.Clock()

      const geometry = new THREE.PlaneGeometry(...options.planeGeo);

      uniforms = {
        iTime: {
          value: 0
        },
      };

      const material = new THREE.ShaderMaterial({
        uniforms,
        vertexShader: `varying vec3 vPosition;
        varying vec2 vUv;
        void main() {
          vUv = uv;
          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
          gl_Position = projectionMatrix * mvPosition;
        }`,
        fragmentShader: `uniform float iTime;
        varying vec2 vUv;

            vec3 hsb2rgb(in vec3 c)
            {
                vec3 rgb = clamp(abs(mod(c.x*6.0+vec3(0.0,4.0,2.0),6.0)-3.0)-1.0,0.0,1.0 );
                rgb = rgb*rgb*(3.0-2.0*rgb);
                return c.z * mix( vec3(1.0), rgb, c.y);
            }
            void main(void) {
                // float time = iTime*1.;
                vec2 uv = (vUv - 0.5) * 4.0;
                float r = length(uv) * 0.9;
                vec3 color = hsb2rgb(vec3(0.6, .8, .5));;

                float a = pow(r, 2.0);
                float b = sin(r * 0.8 - 1.6);
                float c = sin(r - 0.010);
                float s = sin(a - iTime * 3.0 + b) * c;

                color *= abs(1.0 / (s * 10.8)) - 0.01;

                if (color.r < .9 && color.g < .9 && color.b < .9) {
                  gl_FragColor = vec4(color, 0.);
                }
                else{
                  gl_FragColor = vec4(color, 1.);
                }

            }`,
        depthWrite: false,
        transparent: true,
      });

      mesh = new THREE.Mesh(geometry, material);
      mesh.material.side = THREE.DoubleSide;
      // const mesh = new THREE.Mesh(geometry, mt.A_M);
      scene.add(mesh);
      mesh.rotation.x = -Math.PI / 2;
      // const mesh = new THREE.Mesh(new THREE.TorusBufferGeometry(size, 0.3, 30, 30), material);
      // mesh.rotation.x = 0.3;
      // scene.add(mesh);
      const directionalLight = new THREE.DirectionalLight(...options.directLight);
      directionalLight.position.set(...options.directLightPos)
      directionalLight.castShadow = options.directLightCastShadow;
      scene.add(directionalLight);
      for (const key in options.directLightShadow) {
        if (Object.getPrototypeOf(options.directLightShadow[key as keyof typeof options.directLightShadow]) !== Object.prototype) {
          directionalLight.shadow[key] = options.directLightShadow[key as keyof typeof options.directLightShadow]
          continue
        }
        for (const m in (options.directLightShadow[key as keyof typeof options.directLightShadow] as Object)) {
          directionalLight.shadow[key][m] = (options.directLightShadow[key as keyof typeof options.directLightShadow] as {[key:string]:any})[m]
        }
      }
      // directionalLight.shadow.mapSize.width = 256; // default
      // directionalLight.shadow.mapSize.height = 256; // default
      // directionalLight.shadow.camera.near = 0.5; // default
      // directionalLight.shadow.camera.far = 500; // default
      // directionalLight.shadow.camera.left = -50;
      // directionalLight.shadow.camera.right = 50;

      const light = new THREE.AmbientLight(...options.ambientLight);
      light.position.set(...options.ambientLightPos);
      scene.add(light);
      const hemiLight = new THREE.HemisphereLight(...options.ambientLightPos);
      // hemiLight.color.setHSL(0.6, .8, 1);
      hemiLight.position.set(...options.hemisphereLightPos);
      scene.add(hemiLight);
      // var light = new THREE.AmbientLight(0xffffff,0.5);
      // //light.position.set(-20, -60, 20);
      // scene.add(light);
      // const pointLight = new THREE.PointLight( 0xffffff, 0.5 );
      // perpCamera.add( pointLight );

      renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.autoClear = false;
      renderer.setPixelRatio(options.devicePixelRatio);
      renderer.setSize(width, height);
      renderer.shadowMapEnabled = options.shadowMapEnabled; // 告诉渲染器需要阴影

      // (document.body as HTMLElement).appendChild(renderer.domElement);

      (dom.value as HTMLElement).appendChild(renderer.domElement);

      options.domEvent.addEventListener('resize', onWindowResize);
      // 监听窗口鼠标单击事件
      options.domEvent.addEventListener('pointerdown', (event) => {
        pointerdownTime = Date.now();
        // document.querySelector('.shpname').style.display = 'none'
      }, false);
      options.domEvent.addEventListener('pointerup', (event) => {
        // console.log(event.button)
        pointerupTime = Date.now();
        // console.log('----------============',pointerupTime - pointerdownTime)
        if (event.button === 0 && pointerupTime - pointerdownTime < 200) {
          // choose(event)
        }
      })

      const controls = new OrbitControls(perpCamera, renderer.domElement);
      controls.addEventListener('change', render);
      for (const key in options.controls) {
        controls[key] = options.controls[key as keyof typeof options.controls]
      }
      // controls.minDistance = 0;
      // controls.maxDistance = 60;
      // controls.maxPolarAngle = 1.470796375;
      // controls.minPolarAngle = 0;
      // controls.enablePan = false;

      // path = '/textures/cube/pisa/'
      // format = '.png';
      // new THREE.CubeTextureLoader().load([
      //   path + 'posx' + format, path + 'negx' + format,
      //   path + 'posy' + format, path + 'negy' + format,
      //   path + 'posz' + format, path + 'negz' + format
      // ]);

      new THREE.CubeTextureLoader().load(options.loadImg);
    }

    function loadGltf (this: any) {
      // const that = this
      // 加载模型
      const loader = new GLTFLoader()
      loader.load(options.url, function (gltf: { scene: { traverse: (arg0: (object: any) => void) => void; }; }) {
        // window.gltf = gltf
        gltf.scene.traverse((object: { isMesh: any; material: { side: any; }; }) => {
          if (object.isMesh) {
            object.material.side = THREE.DoubleSide;
          }
        })
        scene.add(gltf.scene)
        animate();
      })
    }

    function onWindowResize () {
      renderer.setSize(dom.value.offsetWidth, dom.value.offsetHeight);
      perpCamera.aspect = dom.value.offsetWidth / dom.value.offsetHeight;
      perpCamera.updateProjectionMatrix();
    }

    function render () {
      renderer.render(scene, perpCamera);
    }
    function animate () {
      requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime()
      mesh.material.uniforms.iTime.value = elapsedTime
      render();
    };

    return () => (
      <div class={NAME} ref={dom} ></div>
    )
  }
})
