import React, { memo, useState, useEffect, useCallback } from "react"
import { ColumnType, ColumnsType, TableLayout, TableProps } from "./types"
import clsx from "clsx"
import { getUUid, validateValue } from "../../utils/help"
import Row from "./Row"

const EMPTY_LIST: any[] = []

function Table<RecordType>(props: TableProps<RecordType>) {
  const {
    bordered,
    headerWidth,
    dataSource = [] as RecordType[],
    columns,
    className,
    scroll,
    tableLayout,
  } = props
// 自定义状态
  // const [_columns, updateColumns] = useState(columns);


  // 缓存变量
  const baseColumns = React.useMemo(
    () => columns as ColumnsType<RecordType>,
    [],
  )
  const horizonScroll = scroll && validateValue(scroll.x)
  const fixColumn = horizonScroll && columns.some(({ fixed }) => fixed)

  // Table layout
  const mergedTableLayout = React.useMemo<TableLayout>(() => {
    if (tableLayout) {
      return tableLayout
    }
    // https://github.com/ant-design/ant-design/issues/25227
    // When scroll.x is max-content, no need to fix table layout
    // it's width should stretch out to fit content
    if (fixColumn) {
      return scroll?.x === "max-content" ? "auto" : "fixed"
    }
    return "auto"
  }, [fixColumn])

  // scroll style compute
  let scrollXStyle: React.CSSProperties = {}
  let scrollTableStyle: React.CSSProperties = {}

  if (horizonScroll) {
    scrollXStyle = { overflowX: "auto" }
    scrollTableStyle = {
      width: scroll?.x === true ? "auto" : scroll?.x,
      minWidth: "100%",
    }
  }

  const rawData: readonly RecordType[] = dataSource || EMPTY_LIST

  return (
    <div
      className={clsx(className, "wd-table-wrap", {
        "wd-table-wrap-bordered": bordered,
      })}
    >
      <div className="wd-table-container">
        <div
          className="wd-table-content"
          style={{
            ...scrollXStyle,
          }}
        >
          <table
            className="wd-table"
            style={{
              ...scrollTableStyle,
              tableLayout: mergedTableLayout,
            }}
          >
            <colgroup>
              {headerWidth ? (
                <col key={getUUid()} style={{ width: headerWidth }} />
              ) : null}
              {dataSource.map((dataItem: any) => (
                <col
                  key={dataItem.key as string}
                  style={{ width: dataItem.width || "auto" }}
                />
              ))}
            </colgroup>

            <tbody className="wd-table-tbody">
              <Row columns={baseColumns as any} dataSource={dataSource}/>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Table
