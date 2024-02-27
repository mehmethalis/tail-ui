import { Color, Size } from '@/types'
import { ReactNode } from 'react'

type AlertProps = {
  /**
   * Alert bileşinin contentinde render edilir.
   */
  children?: ReactNode
  /**
   * Alert bileşini class namelerini temsil eden proptur.
   */
  className?: string
  /**
   * Alert bileşini rengini temsil eden proptur.
   *  @default primary
   */
  color?: Color
  /**
   * Eğer false geçilir ise, Alert bileşinine border ekler.
   *  @default true
   */
  disableBordered?: boolean
  /**
   * Alert bileşini boyutunu temsil eden proptur.
   *  @default md
   */
  size?: Size
  /**
   * Alert bileşeni id değerini temsil eden proptur.
   */
  id?: string
}
export { AlertProps }
