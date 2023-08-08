# ylkj-ui

#### Description

1、组件库的开发
monorepo 单一代码库

#### Software Architecture

Software architecture description

#### Installation

1.  xxxx
2.  xxxx
3.  xxxx

#### Instructions

1.  组件在 packages 中开发，运行 cnpm run dev:dev 进行查看
2.  pnpm run docs:dev 运行，查看文档
3.  xxxx

#### Contribution

1.  Fork the repository
2.  Create Feat_xxx branch
3.  Commit your code
4.  Create Pull Request

#### Gitee Feature

packages/utils/src/emitter
import mitt from 'mitt'
const Mitt = mitt
export const emitter: mitt.Emitter = new Mitt()

export default emitter

cli:pnpm run gen 创建组件
cli: - gen: 创建新组件
docs： - dev：本地开发组件库文档 - build：打包构建组件库文档 - serve：预览组件库文档打包
example： - dev:dev、dev:uat、dev:prod：本地开发 example - build:dev、build:uat、build:prod：打包构建 example - preview：预览 example 打包构建后的结果
packages/yyg-demo-ui: - build：打包构建组件库

————————————————
版权声明：本文为 CSDN 博主「程序员优雅哥」的原创文章，遵循 CC 4.0 BY-SA 版权协议，转载请附上原文出处链接及本声明。
原文链接：https://blog.csdn.net/youyacoder/article/details/128955479
v-slots={{
default: (scope: Record<'scope', string>) => {
return (
{
scope.row && item.prop && key.prop && scope.row[item.prop] && scope.row[item.prop][key.prop]?<span>{ scope.row[item.prop][key.prop] }</span>:''
}
)
},
}
}
