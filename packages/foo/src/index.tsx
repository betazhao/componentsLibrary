import { defineComponent } from "vue";
import { fooProps } from "./types";
import "./foo.less";
import type { TableColumnCtx } from "element-plus";

const NAME = "ylkj-foo";

export default defineComponent({
  name: NAME,
  props: fooProps,

  setup(props, context) {
    console.log(props, context);
    // const props = defineProps({
    //   tabledata: {
    //     type: Array,
    //     required: true,
    //     default: () => [],
    //   },
    //   headerdata: {
    //     type: Array as PropType<singleTabType[] | hType[]>,
    //     required: true,
    //     default: () => [],
    //   },
    //   nochildIndex: {
    //     type: Number,
    //     default: 0,
    //   },
    //   tablebtn: {
    //     type: Array as any,
    //     required: false,
    //     default: () => [],
    //   },
    //   total: {
    //     required: false,
    //     type: Number as PropType<number>,
    //     default: 0,
    //   },
    //   page: {
    //     type: Number,
    //     default: 1,
    //   },
    //   limit: {
    //     type: Number,
    //     default: 20,
    //   },
    //   pageSizes: {
    //     type: Array as PropType<number[]>,
    //     default() {
    //       return [10, 20, 50];
    //     },
    //   },
    //   caozuo: {
    //     type: Boolean,
    //     default: false,
    //   },
    //   mergecell: {
    //     type: Boolean,
    //     default: false,
    //   },
    //   mergecell2: {
    //     // 第二列单元格合并(后期优化)
    //     type: Boolean,
    //     default: false,
    //   },
    //   width: {
    //     type: Number || String,
    //   },
    //   mergeRows: {
    //     type: Array as PropType<number[]>,
    //     default: () => [],
    //   },

    //   headerw: {
    //     type: Number  || String,
    //     default: 0,
    //   },
    //   headerh: {
    //     type: String,
    //     default: "250px",
    //   },
    //   loading:{
    //       type:Boolean,
    //       default:false
    //     }
    // });

    // const {headerdata, nochildIndex } = toRefs(props);

    // const currentPage = computed<number | undefined>({
    //   get: () => newProps.page,
    //   set: (value) => {
    //     emit("update:page", value);
    //   },
    // });
    // type tableType = {
    //   rowspan: any;
    //   [x: string]: any;
    //   date: string;
    //   name: string;
    //   province: string;
    //   city: string;
    //   address: string;
    //   remark: string;
    //   // level: string,
    //   // room: number,
    //   // shoushushi: number,
    //   // bingchuang: number,
    //   // yisheng: number,
    //   // hushi: number,
    //   // mzyis: number,
    //   // fsky:number
    // };
    // 表格行列参数
    interface SpanMethodProps {
      row?: any;
      column?: TableColumnCtx<any>;
      rowIndex: number;
      columnIndex: number;
    }

    const objectSpanMethod = ({ rowIndex, columnIndex }: SpanMethodProps) => {
      // console.log(row, column);
      console.log('**************11111111111', columnIndex, rowIndex)
      if (props.mergecell.includes(columnIndex)) {
        if (rowIndex % 2 === 0) {
          return {
            rowspan: 2,
            colspan: 1
          }
        } else {
          return {
            rowspan: 0,
            colspan: 0
          }
        }
      }
      // if (props.mergecell) {
      //   console.log('**************', columnIndex, rowIndex)
      //   if (columnIndex === 0) {
      //     if (rowIndex % 2 === 0) {
      //       return {
      //         rowspan: 2,
      //         colspan: 1,
      //       };
      //     } else {
      //       return {
      //         rowspan: 0,
      //         colspan: 0,
      //       };
      //     }
      //   }
      // } else if (props.mergecell2) {
      //   if (columnIndex === 1) {
      //     if (rowIndex % 2 === 0) {
      //       return {
      //         rowspan: 2,
      //         colspan: 1,
      //       };
      //     } else {
      //       return {
      //         rowspan: 0,
      //         colspan: 0,
      //       };
      //     }
      //   }
      // }
    };

    // 设置隔行变色
    function tableRowClassName(rowIndex: number) {
      console.log("((((((((((8************")
      if (rowIndex % 2 === 0) {
        return "tablerow1";
      } else {
        return "tablerow2";
      }
    }
    return () => (
      <>
        <div class="BaseTable tablecom">
          <el-table
            v-loading={props.loading}
            data={props.tabledata}
            tooltip-effect="dark"
            row-class-name={ tableRowClassName}
            span-method={ objectSpanMethod}
            style="width: 100%; height: 100%"
            header-cell-style={() => ({ "text-align": "center" })}
            cell-style={() => ({ "text-align": "center" })}

          >
            {props.headerdata
              .slice(0, props.nochildIndex)
              .map((item: any, index: number) => {
                return (
                  <el-table-column
                    prop={item.prop}
                    label={item.label}
                    width={
                      props.headerw && index === 1
                        ? props.headerw + "px"
                        : props.headerh
                    }
                    show-overflow-tooltip
                  ></el-table-column>
                );
              })}

            {props.headerdata.slice(props.nochildIndex).map((item: any) => {
              return (
                <el-table-column
                  prop={item.prop}
                  label={item.label}
                  show-overflow-tooltip
                  width={props.width}
                >
                  {item.children &&
                    item.children.length &&
                    item.children.map((im: any) => {
                      // console.log('**************im', im, item)
                      return (
                        <el-table-column
                          prop={im.prop}
                          label={im.label}
                          show-overflow-tooltip
                          width={props.width}
                          scopedSlots={{
                            Headers() {
                              console.log('header')
                            },
                            default: (scope: any) => {
                              console.log('44444444444444444444**************scope', scope, im)
                              return scope.row && item.prop && im.prop && scope.row[item.prop] && scope.row[item.prop][im.prop] ? (<span>{scope.row[item.prop][im.prop]}</span>) : ("qqq");
                            },
                            footer() {
                              console.log('footer')
                            }

                          }}
                          formatter={(row: any) => {
                            // console.log('row', row, 'column', column, 'cellValue', cellValue, 'index', index)
                            return <span>{row[item.prop][im.prop]}</span>
                          }}
                        >
                        </el-table-column>
                      );
                    })}
                </el-table-column>
              );
            })}
          </el-table>
        </div>
      </>
    );
  },
});
