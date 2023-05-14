import { ColumnType } from "./types";

export function getStickyColumnStyle<RecordType>(
    column: ColumnType<RecordType>,
    stickyPosition: number,
  ) {
    if (column.fixed) {
      return { [column['fixed'] as string]: stickyPosition } as React.CSSProperties;
    }
    return undefined;
  }