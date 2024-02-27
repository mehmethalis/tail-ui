import { Color, Size } from '@/types'
import { ReactNode } from 'react'

type ProgressProps = {
  /**
   * Progress bileşinin contentinde render edilir.
   */
  children?: ReactNode
  /**
   * Progress bileşini class namelerini temsil eden proptur.
   */
  className?: string
  /**
   * Progress bileşini rengini temsil eden proptur.
   *  @default primary
   */
  color?: Color
  /**
   * Eğer false geçilir ise, Progress bileşinine border ekler.
   *  @default true
   */
  disableBordered?: boolean
  /**
   * Progress bileşini boyutunu temsil eden proptur.
   *  @default md
   */
  size?: Size
  /**
   * Progress bileşeni id değerini temsil eden proptur.
   */
  id?: string
}
export { ProgressProps }
