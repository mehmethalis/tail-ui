import { Color, Size } from '@/types'
import { ReactNode } from 'react'

type ChipProps = {
  /**
   * Chip bileşinin contentinde render edilir.
   */
  children?: ReactNode
  /**
   * Chip bileşini rengini temsil eden proptur.
   *  @default primary
   */
  color?: Color
  /**
   * Chip bileşeni class namelerini temsil eden proptur.
   */
  className?: string
  /**
   * Chip bileşeni sonunda render edilir.
   */
  endDecarator?: ReactNode
  /**
   * Chip bileşenine tıklanıldığında yönlendirilecek adresi temsil eden proptur.
   */
  href?: string
  /**
   * Render edilecek chip bileşeni varyantını temsil eden proptur.
   * @default plain
   */
  variant?: 'plain' | 'pill' | 'bordered'
  /**
   * Chip bileşeni id değerini temsil eden proptur.
   */
  id?: string
  /**
   * Chip bileşeni boyutunu temsil eden proptur.
   * @default md
   */
  size?: Size
  /**
   * Chip bileşeni başında render edilir.
   */
  startDecarator?: ReactNode
  /**
   * Chip bileşeni link target değerini temsil eden proptur.
   * @default _self
   */
  target?: '_blank' | '_self'
}
export { ChipProps }
