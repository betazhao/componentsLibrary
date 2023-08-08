# ylkj-ui

#### 介绍

1、组件库的开发
monorepo 单一代码库
最后一位版本加 1
npm version patch

中间一位版本号加 1
npm version minor

第一位版本号加 1
npm version major

#### 软件架构

软件架构说明

#### 安装教程

pnpm run start:verdaccio

1.  pnpm create vite
2.  pnpm install element-plus
3.  pnpm install --registry http://localhost:4873/
4.  pnpm install ylkj-ui --registry http://localhost:4873/

#### 使用说明

1.  ...
    import ElementPlus from 'element-plus'
    import 'element-plus/dist/index.css'
    import ylkjUi from 'ylkj-ui'

createApp(App)
.use(ElementPlus)
.use(ylkjUi)
.mount('#app')

2.  <ylkj-foo msg="测试组件库"></ylkj-foo>

3.  xxxx

#### 参与贡献

1.  Fork 本仓库
2.  新建 Feat_xxx 分支
3.  提交代码
4.  新建 Pull Request

#### 特技
