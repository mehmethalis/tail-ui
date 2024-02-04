import { ReactNode } from 'react'

type GridProps = {
  id?: string
  children: ReactNode
  className?: string
  cols: number
  /**
   * @default 2
   */
  gap?: number
}

type ColumnProps = {
  children: ReactNode
  /**
   * @default 1
   */
  colSpan?: number
  className?: string
  id?: string
}

export { GridProps, ColumnProps }
