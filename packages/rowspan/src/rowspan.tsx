import { defineComponent } from 'vue'
import { rowspanProps } from './types'
import type { TableColumnCtx } from "element-plus";
import "./rowspan.less";

const NAME = 'ylkj-rowspan'

export default defineComponent({
  name: NAME,
  props: rowspanProps,
  setup(props, context) {
    console.log(props, context);
    // 表格行列参数
    interface SpanMethodProps {
      row?: any;
      column?: TableColumnCtx<any>;
      rowIndex: number;
      columnIndex: number;
    }

    const objectSpanMethod = ({ row, rowIndex, columnIndex }: SpanMethodProps) => {
      // console.log(row, column);
      // console.log('**************11111111111', columnIndex, rowIndex)
      if (props.mergecell.includes(columnIndex)) {
        if ((row as { rowspan?: number })?.rowspan) {
          return {
            rowspan: (row as { rowspan?: number }).rowspan,
            colspan: 1,
          };
        } else {
          return {
            rowspan: 0,
            colspan: 0,
          };
        }
      }
      if (props.mergecell1.includes(columnIndex)) {
        if ((row as { rowspan1?: number })?.rowspan1) {
          return {
            rowspan: (row as { rowspan1?: number }).rowspan1,
            colspan: 1,
          };
        } else {
          return {
            rowspan: 0,
            colspan: 0,
          };
        }
      }
    };

    // 设置隔行变色
    function tableRowClassName(rowIndex: number) {
      // console.log("((((((((((8************")
      if (rowIndex % 2 === 0) {
        return "tablerow1";
      } else {
        return "tablerow2";
      }
    }

    function handleTable(index:number, row:any) {
      console.log('index', index, 'row', row)
      context.emit('handleOption', index, row)
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
                    width={props.width }
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
                          formatter={(row:any, column:any, cellValue:any, index: any) => {
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
            {
              (props.tablebtn && props.tablebtn.length) ? (<el-table-column label="操作" formatter = {(row: any, column: any, cellValue: any, index: any) => {
                console.log('row99999999999999999', row, 'column', column, 'cellValue', cellValue, 'index', index)
                // return <span onclick={handleTable(indx, row)}>{row[item.prop][im.prop]}</span>
                return (<div class="cp f">
                  {
                    props.tablebtn.map((itm: any, indx: number) => {
                      return (<el-button
                        type="text"
                        class="ml8 mr8"
                        onclick={() => handleTable(indx, row)}
                      >
                        <i
                          class={"iconfont mr10 " + itm.icon}
                        />
                        { props.isBtnName ? itm.name : '' }
                      </el-button>)
                    })
                  }

                </div>)
              }}></el-table-column>) : ''
            }

          </el-table>
        </div>
      </>
    );
  },
})
