
# Rowspan 表格自由合并

## 基本使用

<preview path="../demos/rowspan/rowspan-1.vue" title="基本使用" description="表格自由合并 "></preview>

## 组件 API

### Attributes 属性

| 参数 | 说明 | <div style="width:50px">类型</div> | <div style="width:50px">可选值</div> | <div style="width:50px">默认值</div> |
|  :--:  | :--:  | :--:  | :--:  | :--:  |
| tabledata | 渲染表格数据 | 数组 | 否 | 空 |
| headerdata | 表格表头数据，数据必须有rowspan字段 | 数组 | 否 | 空 |
| mergecell | 哪些列进行行合并，行合并为数据中rowspan字段值 | 数组 | 是 | 空 |
| mergecell1 | 哪些列进行行合并，行合并为数据中rowspan1字段值 | 数组 | 是 | 空 |
| tablebtn | 操作按钮数据[{icon:'',name:''}]，数组为空或不传，不显示操作列 | 数组 | 是 | 空 |
| isBtnName | 操作按钮是否显示文字（name字段），true显示，false不显示，默认false | 数组 | 是 | 空 |



### Methods 方法

| 方法名 | 说明 | 参数 | 返回值 |
|  ----  | ----  | ----  | ----  |
| handleOption | 点击表格操作传出值 | 第一个参数，点击的按钮序号，从0开始，第二个参数，点击的行数据 | index:number, row:any |

### Events 事件

| 事件名 | 说明 | 参数 | 返回值 |
|  ----  | ----  | ----  | ----  |
|  |  |  |  |

### Slots 插槽

| 插槽名 | 说明 | 参数 |
|  ----  | ----  | ----  |
|  |  |  |



行合并两种，mergecell   mergecell1
