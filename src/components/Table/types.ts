export declare type DataIndex = string | number | readonly (string | number)[]
export interface CellType<RecordType> {
  key?: Key
  className?: string
  style?: React.CSSProperties
  children?: React.ReactNode
  column?: ColumnsType<RecordType>[number]
  colSpan?: number
  rowSpan?: number
  /** Only used for table header */
  hasSubColumns?: boolean
  colStart?: number
  colEnd?: number
}
export interface RenderedCell<RecordType> {
  props?: CellType<RecordType>
  children?: React.ReactNode
}
export interface RcColumnType<RecordType> extends ColumnSharedType<RecordType> {
  colSpan?: number
  dataIndex?: DataIndex
  render?: (
    value: any,
    record: RecordType,
    index: number,
  ) => React.ReactNode | RenderedCell<RecordType>
  shouldCellUpdate?: (record: RecordType, prevRecord: RecordType) => boolean
  rowSpan?: number
  width?: number | string
  onCell?: GetComponentProps<RecordType>
  /** @deprecated Please use `onCell` instead */
  onCellClick?: (record: RecordType, e: React.MouseEvent<HTMLElement>) => void
}

export interface ColumnTitleProps<RecordType> {
  /** @deprecated Please use `sorterColumns` instead. */
  // sortOrder?: SortOrder;
  // /** @deprecated Please use `sorterColumns` instead. */
  // sortColumn?: ColumnType<RecordType>;
  // sortColumns?: { column: ColumnType<RecordType>; order: SortOrder }[];
  // filters?: Record<string, FilterValue>;
}

export type ColumnTitle<RecordType> =
  | React.ReactNode
  | ((props: ColumnTitleProps<RecordType>) => React.ReactNode)

export type ColumnsType<RecordType = unknown> = (
  | ColumnGroupType<RecordType>
  | ColumnType<RecordType>
)[]

export interface ColumnType<RecordType>
  extends Omit<RcColumnType<RecordType>, "title"> {
  title?: ColumnTitle<RecordType>
  // Sorter
  // sorter?:
  //   | boolean
  //   | CompareFn<RecordType>
  //   | {
  //       compare?: CompareFn<RecordType>;
  //       /** Config multiple sorter order priority */
  //       multiple?: number;
  //     };
  // sortOrder?: SortOrder;
  // defaultSortOrder?: SortOrder;
  // sortDirections?: SortOrder[];
  // showSorterTooltip?: boolean | TooltipProps;

  // Filter
  // filtered?: boolean;
  // filters?: ColumnFilterItem[];
  // filterDropdown?: React.ReactNode | ((props: FilterDropdownProps) => React.ReactNode);
  // filterMultiple?: boolean;
  // filteredValue?: FilterValue | null;
  // defaultFilteredValue?: FilterValue | null;
  // filterIcon?: React.ReactNode | ((filtered: boolean) => React.ReactNode);
  // filterMode?: 'menu' | 'tree';
  // filterSearch?: FilterSearchType<ColumnFilterItem>;
  // onFilter?: (value: string | number | boolean, record: RecordType) => boolean;
  // filterDropdownOpen?: boolean;
  // onFilterDropdownOpenChange?: (visible: boolean) => void;
  // filterResetToDefaultFilteredValue?: boolean;

  // Responsive
  // responsive?: Breakpoint[];

  // Deprecated
  /** @deprecated Please use `filterDropdownOpen` instead */
  filterDropdownVisible?: boolean
  /** @deprecated Please use `onFilterDropdownOpenChange` instead */
  onFilterDropdownVisibleChange?: (visible: boolean) => void
}

// ================= Customized =================
export type GetComponentProps<DataType> = (
  data: DataType,
  index?: number,
) => React.HTMLAttributes<any> | React.TdHTMLAttributes<any>

export type Key = React.Key
export type FixedType = "left" | "right" | boolean
export type CellEllipsisType = { showTitle?: boolean } | boolean
export type AlignType =
  | "start"
  | "end"
  | "left"
  | "right"
  | "center"
  | "justify"
  | "match-parent"
export type RowScopeType = "row" | "rowgroup"

interface ColumnSharedType<RecordType> {
  title?: React.ReactNode
  key?: Key
  className?: string
  fixed?: FixedType
  onHeaderCell?: GetComponentProps<ColumnsType<RecordType>[number]>
  ellipsis?: CellEllipsisType
  align?: AlignType
  rowScope?: RowScopeType
}

export interface ColumnGroupType<RecordType>
  extends ColumnSharedType<RecordType> {
  children: ColumnsType<RecordType>
}

export interface TableProps<RecordType> {
  className?: string
  style?: React.CSSProperties
  children?: React.ReactNode
  dataSource?: readonly RecordType[]
  columns: ColumnsType<RecordType>
  rowKey?: string
  // first column width
  headerWidth?: string
  tableLayout?: TableLayout;
  // show out border or column border
  bordered?: boolean
  // Fixed Columns
  scroll?: { x?: number | true | string; y?: number | string }
}
export type TableLayout = "auto" | "fixed"
