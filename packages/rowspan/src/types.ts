import { ExtractPropTypes } from 'vue'

export const rowspanProps = {
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
  mergecell: {
    type: Array,
    default: () => [],
  },
  mergecell1: {
    type: Array,
    default: () => [],
  },
  width: {
    type: Array,
    default: () => []
  },
  mergeRows: {
    type: Array,
    default: () => [],
  },
  loading: {
    type: Boolean,
    default: false
  },
  isBtnName: {
    type: Boolean,
    default: false
  }
} as const

export type RowspanProps = ExtractPropTypes<typeof rowspanProps>
