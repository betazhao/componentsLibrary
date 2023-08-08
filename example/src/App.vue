<template>
  <!-- <div class="site">
    <h1>组件库测试站点 ylkj-ui</h1>
    <p>
      测试站点主要用于开发过程中测试组件，即在开发过程中由业务驱动组件开发。
    </p>
    <ylkj-foo :msg="msg"></ylkj-foo>
    <ylkj-zhw></ylkj-zhw>
  </div> -->
  <!-- <ylkj-rowspan
    :headerdata="headerdata"
    :tabledata="tabledata"
    :nochildIndex="0"
    :mergecell="[0]"
    :tablebtn="tablebtn"
    :isBtnName="true"
    @handleOption="handleOption"
  ></ylkj-rowspan> -->
  <!-- <div id="canvas" ref="canvas" style="height: 300px;width:1000px;border:1px solid red">
</div> -->
<div style="width:900px; height:900px; border: 1px solid red;">
  <ylkj-shader-circel-diffusion :options="options" ></ylkj-shader-circel-diffusion>
</div>

</template>
<script setup lang="ts">
import { ref } from 'vue'
const options = ref({
  url: "/models/gltf/Xbot.glb",
})
// options.value = {
//   url: "/models/gltf/Xbot.glb",
//   domBody: document.querySelector('#canvas')
// }

// import { ref } from "vue";
// const msg = ref("hello word");
// const headerdata = [
//   {
//     prop: "function_type",
//     label: "建筑类别",
//   },
//   {
//     prop: "basically_intact",
//     label: "基本完好",
//   },
//   {
//     prop: "minor_damage",
//     label: "轻微破坏",
//   },
//   {
//     prop: "middle_damage",
//     label: "中等破坏",
//   },
//   {
//     prop: "serious_damage",
//     label: "严重破坏",
//   },
//   {
//     prop: "full_damage",
//     label: "完全破坏",
//   },
// ];
// const tabledata = [
//   {
//     basically_intact: "0",
//     full_damage: "180",
//     function_type: "多户住宅",
//     id: "833",
//     middle_damage: "30",
//     minor_damage: "2",
//     serious_damage: "90",
//   },
//   {
//     basically_intact: "0",
//     full_damage: "240",
//     function_type: "单户住宅",
//     id: "834",
//     middle_damage: "30",
//     minor_damage: "5",
//     serious_damage: "120",
//   },
//   {
//     basically_intact: "0",
//     full_damage: "240",
//     function_type: "集体宿舍",
//     id: "835",
//     middle_damage: "30",
//     minor_damage: "5",
//     serious_damage: "120",
//   },
//   {
//     basically_intact: "0",
//     full_damage: "240",
//     function_type: "行政办公",
//     id: "836",
//     middle_damage: "30",
//     minor_damage: "10",
//     serious_damage: "120",
//   },
//   {
//     basically_intact: "0",
//     full_damage: "360",
//     function_type: "医疗卫生",
//     id: "837",
//     middle_damage: "45",
//     minor_damage: "10",
//     serious_damage: "180",
//   },
//   {
//     basically_intact: "0",
//     full_damage: "160",
//     function_type: "交通站点",
//     id: "838",
//     middle_damage: "20",
//     minor_damage: "2",
//     serious_damage: "80",
//   },
//   {
//     basically_intact: "0",
//     full_damage: "240",
//     function_type: "科教建筑",
//     id: "839",
//     middle_damage: "30",
//     minor_damage: "5",
//     serious_damage: "120",
//   },
//   {
//     basically_intact: "0",
//     full_damage: "240",
//     function_type: "文娱建筑",
//     id: "840",
//     middle_damage: "30",
//     minor_damage: "10",
//     serious_damage: "120",
//   },
//   {
//     basically_intact: "0",
//     full_damage: "180",
//     function_type: "纪念建筑",
//     id: "841",
//     middle_damage: "30",
//     minor_damage: "5",
//     serious_damage: "90",
//   },
//   {
//     basically_intact: "0",
//     full_damage: "180",
//     function_type: "购物中心",
//     id: "842",
//     middle_damage: "30",
//     minor_damage: "5",
//     serious_damage: "90",
//   },
//   {
//     basically_intact: "0",
//     full_damage: "240",
//     function_type: "商业服务",
//     id: "843",
//     middle_damage: "30",
//     minor_damage: "10",
//     serious_damage: "120",
//   },
//   {
//     basically_intact: "0",
//     full_damage: "180",
//     function_type: "商业办公",
//     id: "844",
//     middle_damage: "30",
//     minor_damage: "5",
//     serious_damage: "90",
//   },
//   {
//     basically_intact: "0",
//     full_damage: "240",
//     function_type: "生产建筑",
//     id: "845",
//     middle_damage: "30",
//     minor_damage: "5",
//     serious_damage: "120",
//   },
//   {
//     basically_intact: "0",
//     full_damage: "240",
//     function_type: "物流建筑",
//     id: "846",
//     middle_damage: "30",
//     minor_damage: "5",
//     serious_damage: "120",
//   },
//   {
//     basically_intact: "0",
//     full_damage: "240",
//     function_type: "仓储建筑",
//     id: "847",
//     middle_damage: "30",
//     minor_damage: "10",
//     serious_damage: "120",
//   },
//   {
//     basically_intact: "0",
//     full_damage: "240",
//     function_type: "其他建筑",
//     id: "848",
//     middle_damage: "30",
//     minor_damage: "10",
//     serious_damage: "120",
//   },
// ];

// const tablebtn = [
//   {
//     name: "删除",
//     icon: ''
//   },
//   {
//     name: "编辑",
//     icon: ''
//   }
// ]

// const tabledata = [
//   {
//     "0.1g": {
//       available_rate: "1.9",
//     },
//     "0.2g": {
//       available_rate: "1.2",
//     },
//     "0.3g": {
//       available_rate: "1.3",
//     },
//     construct_name: "建筑1",
//     construct_num: "1",
//     function_type: "1",
//     structure_type: "设防砌体1",
//     rowspan: 2
//   },
//   {
//     "0.1g": {
//       available_rate: "1.1",
//     },
//     "0.2g": {
//       available_rate: "1.2",
//     },
//     "0.3g": {
//       available_rate: "1.3",
//     },
//     construct_name: "建筑2",
//     construct_num: "2",
//     function_type: "2",
//     structure_type: "设防砌体2",
//     rowspan: 0
//   },
//   {
//     "0.1g": {
//       available_rate: "1.1",
//     },
//     "0.2g": {
//       available_rate: "1.2",
//     },
//     "0.3g": {
//       available_rate: "1.3",
//     },
//     construct_name: "建筑3",
//     construct_num: "3",
//     function_type: "3",
//     structure_type: "设防砌体3",
//     rowspan: 1
//   },
//   {
//     "0.1g": {
//       available_rate: "1.1",
//     },
//     "0.2g": {
//       available_rate: "1.2",
//     },
//     "0.3g": {
//       available_rate: "1.3",
//     },
//     construct_name: "建筑4",
//     construct_num: "4",
//     function_type: "4",
//     structure_type: "设防砌体4",
//     rowspan: 1
//   },
// ];
// const headerdata = [
//   {
//     prop: "construct_num",
//     label: "建筑编号",
//   },
//   {
//     prop: "construct_name",
//     label: "建筑名称",
//   },
//   {
//     prop: "function_type",
//     label: "功能类型",
//   },
//   {
//     prop: "structure_type",
//     label: "结构类型",
//   },
//   {
//     children: [
//       {
//         prop: "available_rate",
//         label: "可用概率",
//       },
//     ],
//     prop: "0.1g",
//     label: "0.1g",
//   },
//   {
//     children: [
//       {
//         prop: "available_rate",
//         label: "可用概率",
//       },
//     ],
//     prop: "0.2g",
//     label: "0.2g",
//   },
//   {
//     children: [
//       {
//         prop: "available_rate",
//         label: "可用概率",
//       },
//     ],
//     prop: "0.3g",
//     label: "0.3g",
//   },
// ];

// const handleOption = (index:number, row:any) => {
//   console.log('99999index', index, 'row', row)
// }

</script>

<style scoped></style>
