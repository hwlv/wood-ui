import React, { memo, useState, useEffect, useCallback } from "react"
import { ColumnType, ColumnsType } from "./types"
import { getUUid } from "../../utils/help"
import Cell from "./Cell"
import clsx from "clsx"
import { getStickyColumnStyle } from "./utils"

interface Props<RecordType> {
  columns: ColumnsType<RecordType>
  dataSource?: readonly RecordType[]
}

function Row<RecordType>(props: Props<RecordType>) {
  const { columns, dataSource } = props

  // return columns?.map((col: ColumnType<RecordType>, columnIndex) => {
  return columns?.map((col: any, columnIndex) => {
    const dataIndex = `${col.dataIndex}`
    return (
      <tr key={dataIndex}>
        <th
          className={clsx("wd-th", { "wd-fixed": col.fixed })}
          style={{ ...getStickyColumnStyle(col, 0) }}
        >
          {col.title as string}
        </th>
        {dataSource?.map((rowData: any, rowIndex) => (
          <td className="wd-table-cell" key={getUUid()}>
            {/* {col.render
              ? col.render(rowData[dataIndex], rowData, rowIndex)
              : rowData[dataIndex]} */}
            <Cell column={col} record={rowData} rowIndex={rowIndex} />
          </td>
        ))}
      </tr>
    )
  })
}
export default React.memo(Row) as <DataItem>(
  props: Props<DataItem>,
) => React.ReactElement
