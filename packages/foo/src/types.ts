import { ExtractPropTypes } from 'vue'

export const fooProps = {
  tabledata: {
    type: Array,
    required: true,
    default: () => [],
  },
  headerdata: {
    type: Array,
    required: true,
    default: () => [],
  },
  nochildIndex: {
    type: Number,
    default: 0,
  },
  tablebtn: {
    type: Array as any,
    required: false,
    default: () => [],
  },
  total: {
    required: false,
    type: Number,
    default: 0,
  },
  page: {
    type: Number,
    default: 1,
  },
  limit: {
    type: Number,
    default: 20,
  },
  pageSizes: {
    type: Array,
    default() {
      return [10, 20, 50];
    },
  },
  caozuo: {
    type: Boolean,
    default: false,
  },
  mergecell: {
    type: Array,
    default: () => [],
  },
  mergecell2: {
    // 第二列单元格合并(后期优化)
    type: Boolean,
    default: false,
  },
  width: {
    type: Number || String,
  },
  mergeRows: {
    type: Array,
    default: () => [],
  },

  headerw: {
    type: Number || String,
    default: 0,
  },
  headerh: {
    type: String,
    default: "250px",
  },
  loading: {
    type: Boolean,
    default: false
  }
}

export type FooProps = ExtractPropTypes<typeof fooProps>
