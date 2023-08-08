<template>
  <ylkj-rowspan
    :headerdata="headerdata"
    :tabledata="tabledata"
    :loading="false"
    :nochildIndex="0"
    :mergecell="[0]"
    :tablebtn="tablebtn"
    :isBtnName="true"
    @handleOption="handleOption"
  ></ylkj-rowspan>
</template>

<script lang="ts" setup>
const tablebtn = [
  {
    name: "删除",
    icon: ''
  },
  {
    name: "编辑",
    icon: ''
  }
]

const tabledata = [
  {
    "0.1g": {
      available_rate: "1.9",
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
    structure_type: "设防砌体1",
    rowspan: 2
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
    construct_name: "建筑2",
    construct_num: "2",
    function_type: "2",
    structure_type: "设防砌体2",
    rowspan: 0
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
    construct_name: "建筑3",
    construct_num: "3",
    function_type: "3",
    structure_type: "设防砌体3",
    rowspan: 1
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
    construct_name: "建筑4",
    construct_num: "4",
    function_type: "4",
    structure_type: "设防砌体4",
    rowspan: 1
  },
];
const headerdata = [
  {
    prop: "construct_name",
    label: "建筑名称",
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
  }
];

const handleOption = (index:number, row:any) => {
  console.log('99999index', index, 'row', row)
}
</script>

<style scoped lang="scss">
</style>
