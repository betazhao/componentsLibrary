<template>
  <ylkj-foo
    :headerdata="headerdata"
    :tabledata="tabledata"
    :loading="false"
    :nochildIndex="0"
    :mergecell="[0]"
  ></ylkj-foo>
</template>

<script lang="ts" setup>

const tabledata = [
  {
    "0.1g": {
      available_rate: "1.1",
    },
    "0.2g": {
      available_rate: "1.2",
    },
    "0.3g": {
      available_rate: "1.3",
    },
    construct_name: "建筑1",
    construct_num: "1",
    function_type: "1",
    structure_type: "设防砌体",
  },
  {
    "0.1g": {
      available_rate: "1.1",
    },
    "0.2g": {
      available_rate: "1.2",
    },
    "0.3g": {
      available_rate: "1.3",
    },
    construct_name: "建筑1",
    construct_num: "1",
    function_type: "1",
    structure_type: "设防砌体",
  },
  {
    "0.1g": {
      available_rate: "1.1",
    },
    "0.2g": {
      available_rate: "1.2",
    },
    "0.3g": {
      available_rate: "1.3",
    },
    construct_name: "建筑1",
    construct_num: "1",
    function_type: "1",
    structure_type: "基本使用",
  },
  {
    "0.1g": {
      available_rate: "1.1",
    },
    "0.2g": {
      available_rate: "1.2",
    },
    "0.3g": {
      available_rate: "1.3",
    },
    construct_name: "建筑1",
    construct_num: "1",
    function_type: "1",
    structure_type: "基本使用",
  },
];
const headerdata = [
  {
    prop: "construct_num",
    label: "建筑编号",
  },
  {
    prop: "construct_name",
    label: "建筑名称",
  },
  {
    prop: "function_type",
    label: "功能类型",
  },
  {
    prop: "structure_type",
    label: "结构类型",
  },
  {
    children: [
      {
        prop: "available_rate",
        label: "可用概率",
      },
    ],
    prop: "0.1g",
    label: "0.1g",
  },
  {
    children: [
      {
        prop: "available_rate",
        label: "可用概率",
      },
    ],
    prop: "0.2g",
    label: "0.2g",
  },
  {
    children: [
      {
        prop: "available_rate",
        label: "可用概率",
      },
    ],
    prop: "0.3g",
    label: "0.3g",
  },
];

// const tabledata= [
//             {
//                 "0.1g": {
//                     "basically_intact": "0.3333",
//                     "full_damage": "0",
//                     "middle_damage": "0",
//                     "minor_damage": "0",
//                     "serious_damage": "0"
//                 },
//                 "0.2g": {
//                     "basically_intact": "0.3333",
//                     "full_damage": "0",
//                     "middle_damage": "0",
//                     "minor_damage": "0",
//                     "serious_damage": "0"
//                 },
//                 "0.3g": {
//                     "basically_intact": "0.3333",
//                     "full_damage": "0",
//                     "middle_damage": "0",
//                     "minor_damage": "0",
//                     "serious_damage": "0"
//                 },
//                 "structure_type": "未设防砌体"
//             },
//             {
//                 "0.1g": {
//                     "basically_intact": "0.3333",
//                     "full_damage": "0",
//                     "middle_damage": "0",
//                     "minor_damage": "0",
//                     "serious_damage": "0"
//                 },
//                 "0.2g": {
//                     "basically_intact": "0.3333",
//                     "full_damage": "0",
//                     "middle_damage": "0",
//                     "minor_damage": "0",
//                     "serious_damage": "0"
//                 },
//                 "0.3g": {
//                     "basically_intact": "0.3333",
//                     "full_damage": "0",
//                     "middle_damage": "0",
//                     "minor_damage": "0",
//                     "serious_damage": "0"
//                 },
//                 "structure_type": "框剪结构"
//             },
//             {
//                 "0.1g": {
//                     "basically_intact": "0.3333",
//                     "full_damage": "0",
//                     "middle_damage": "0",
//                     "minor_damage": "0",
//                     "serious_damage": "0"
//                 },
//                 "0.2g": {
//                     "basically_intact": "0.3333",
//                     "full_damage": "0",
//                     "middle_damage": "0",
//                     "minor_damage": "0",
//                     "serious_damage": "0"
//                 },
//                 "0.3g": {
//                     "basically_intact": "0.3333",
//                     "full_damage": "0",
//                     "middle_damage": "0",
//                     "minor_damage": "0",
//                     "serious_damage": "0"
//                 },
//                 "structure_type": "框架结构"
//             },
//             {
//                 "0.1g": {
//                     "basically_intact": "0.3333",
//                     "full_damage": "0",
//                     "middle_damage": "0",
//                     "minor_damage": "0",
//                     "serious_damage": "0"
//                 },
//                 "0.2g": {
//                     "basically_intact": "0.3333",
//                     "full_damage": "0",
//                     "middle_damage": "0",
//                     "minor_damage": "0",
//                     "serious_damage": "0"
//                 },
//                 "0.3g": {
//                     "basically_intact": "0.3333",
//                     "full_damage": "0",
//                     "middle_damage": "0",
//                     "minor_damage": "0",
//                     "serious_damage": "0"
//                 },
//                 "structure_type": "设防砌体"
//             }
//         ]
//         const headerdata = [
//             {
//                 "prop": "structure_type",
//                 "label": "结构类型"
//             },
//             {
//                 "children": [
//                     {
//                         "prop": "basically_intact",
//                         "label": "基本完好"
//                     },
//                     {
//                         "prop": "minor_damage",
//                         "label": "轻微损坏"
//                     },
//                     {
//                         "prop": "middle_damage",
//                         "label": "中等损坏"
//                     },
//                     {
//                         "prop": "serious_damage",
//                         "label": "严重损坏"
//                     },
//                     {
//                         "prop": "full_damage",
//                         "label": "完全损坏"
//                     }
//                 ],
//                 "prop": "0.1g",
//                 "label": "0.1g"
//             },
//             {
//                 "children": [
//                     {
//                         "prop": "basically_intact",
//                         "label": "基本完好"
//                     },
//                     {
//                         "prop": "minor_damage",
//                         "label": "轻微损坏"
//                     },
//                     {
//                         "prop": "middle_damage",
//                         "label": "中等损坏"
//                     },
//                     {
//                         "prop": "serious_damage",
//                         "label": "严重损坏"
//                     },
//                     {
//                         "prop": "full_damage",
//                         "label": "完全损坏"
//                     }
//                 ],
//                 "prop": "0.2g",
//                 "label": "0.2g"
//             },
//             {
//                 "children": [
//                     {
//                         "prop": "basically_intact",
//                         "label": "基本完好"
//                     },
//                     {
//                         "prop": "minor_damage",
//                         "label": "轻微损坏"
//                     },
//                     {
//                         "prop": "middle_damage",
//                         "label": "中等损坏"
//                     },
//                     {
//                         "prop": "serious_damage",
//                         "label": "严重损坏"
//                     },
//                     {
//                         "prop": "full_damage",
//                         "label": "完全损坏"
//                     }
//                 ],
//                 "prop": "0.3g",
//                 "label": "0.3g"
//             }
//         ]






</script>
