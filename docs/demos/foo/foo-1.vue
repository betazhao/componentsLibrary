<template>
  <ylkj-foo
    :headerdata="headerdata"
    :tabledata="tabledata"
    :loading="false"
    :nochildIndex="0"
    :mergecell="[]"
  ></ylkj-foo>
</template>

<script lang="ts" setup>

const headerdata = [
  {
    prop: "function_type",
    label: "建筑类别",
  },
  {
    prop: "basically_intact",
    label: "基本完好",
  },
  {
    prop: "minor_damage",
    label: "轻微破坏",
  },
  {
    prop: "middle_damage",
    label: "中等破坏",
  },
  {
    prop: "serious_damage",
    label: "严重破坏",
  },
  {
    prop: "full_damage",
    label: "完全破坏",
  },
];
const tabledata = [
  {
    basically_intact: "0",
    full_damage: "180",
    function_type: "多户住宅",
    id: "833",
    middle_damage: "30",
    minor_damage: "2",
    serious_damage: "90",
  },
  {
    basically_intact: "0",
    full_damage: "240",
    function_type: "单户住宅",
    id: "834",
    middle_damage: "30",
    minor_damage: "5",
    serious_damage: "120",
  },
  {
    basically_intact: "0",
    full_damage: "240",
    function_type: "集体宿舍",
    id: "835",
    middle_damage: "30",
    minor_damage: "5",
    serious_damage: "120",
  },
  {
    basically_intact: "0",
    full_damage: "240",
    function_type: "行政办公",
    id: "836",
    middle_damage: "30",
    minor_damage: "10",
    serious_damage: "120",
  }
];
</script>

