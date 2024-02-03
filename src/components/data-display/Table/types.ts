import { ReactNode } from 'react'

type Column = {
  /**
   * Table coumn adını temsil eder.
   */
  title?: string
}
type TableProps = {
  /**
   * Table columnlarını temsil eder.
   */
  columns: Column[]
  /**
   * Table column class namelerini temsil eder.
   */
  columnClassName?: string
  /**
   * Table class namelerini temsil eder.
   */
  className?: string
  /**
   * Table bileşeni rowlarını striped olarak render eder.
   * @default true
   */
  disableStriped?: boolean
  /**
   * Eğer react node verilir ise, table altnda render edilir.
   */
  footer?: ReactNode
  /**
   * Table row değerlerini temsil eder.
   */
  rows: Record<string, unknown>[]
  /**
   * Table title değerini temsil eder.
   */
  title?: string
  /**
   * Table açıklama değerini temsil eder.
   */
  description?: string
  /**
   * Table row class namelerini temsil eder.
   */
  rowClassName?: string
  /**
   * Table bileşeni id değerini temsil eden proptur.
   */
  id?: string
}
export { TableProps, Column }
