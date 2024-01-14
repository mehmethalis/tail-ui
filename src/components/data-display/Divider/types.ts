import { ReactNode } from 'react'

type DividerProps = {
  /**
   * Divider bileşeni üzerinde nerede render edileceğini temsil eden proptur.
   * @default center
   */
  align?: 'center' | 'start' | 'end'
  /**
   * Divider bileşeni id değerini temsil eden proptur.
   */
  id?: string
  /**
   * Divider bileşeninde render edilir.
   */
  children?: ReactNode
  /**
   * Divider bileşeni yönünü temsil eden proptur.
   * @default horizontal
   */
  direction?: 'horizontal' | 'vertical'
  /**
   * Eğer false verilir ise, divider yarı oranda kısaltılır.
   * @default true
   */
  disableTrimmed?: boolean
}
export { DividerProps }
