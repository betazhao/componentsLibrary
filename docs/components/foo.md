# Foo 基础表格组件示例
## 组件介绍

1、单表头表格
<preview path="../demos/foo/foo-1.vue" title="基本使用" description="测试使用单表头表格组件"></preview>

2、多表头（表头表格单元格行合并）
<preview path="../demos/foo/foo-2.vue" title="基本使用" description="测试使用单表头表格行合并组件"></preview>

1、单表头表格单元格行合并
2、固定每两行合并
3、列的合并数量根据参数,[0,1]表示第 0 列和第 1 列进行行合并


## 组件 API

### Attributes 属性

| 属性 | 说明 | 类型 | 可选值 | 默认值 |
|  :--:  | :--:  | :--:  | :--:  | :--:  |
| tabledata | 渲染表格数据 | 数组 | 否 | 空 |
| headerdata | 表格表头数据 | 数组 | 否 | 空 |
| mergecell | 哪些列进行行合并，行合并为2 | 数组 | 是 | 空 |

