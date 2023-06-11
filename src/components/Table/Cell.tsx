import React, { memo, useState, useEffect, useCallback } from "react"
import { ColumnType } from "./types"

export interface CellProps<RecordType = unknown> {
  column: ColumnType<RecordType>
  record: RecordType
  rowIndex: number
}

function Cell<RecordType>(props: CellProps<RecordType>): React.ReactElement {
  const { column, record, rowIndex } = props
  const { dataIndex } = column
  const text = record[dataIndex as keyof typeof record]

  const value = column.render ? column.render(text, record, rowIndex) : text

  return <>{value as React.ReactNode}</>
}

export default React.memo(Cell)
