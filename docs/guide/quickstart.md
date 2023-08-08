# 快速开始

本节将介绍如何在项目中使用 ylkj-ui。

## 用法

安装
npm install ylkj-ui
npm install element-plus
说明：本组库依赖 element-plus,three,需要安装及引用他们

```

import ylkjUi from 'ylkj-ui'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
const app = createApp(App)

app.use(ylkjUi).use(ElementPlus)
app.mount('#app')

```
