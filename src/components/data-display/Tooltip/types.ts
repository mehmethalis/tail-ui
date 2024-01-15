import { Color, Size } from '@/types'
import { ReactNode } from 'react'

type TooltipProps = {
  /**
   * Tooltip bileşenin render edileceği react node'u temsil eden proptur.
   */
  children: ReactNode
  /**
   * Tooltip bileşini rengini temsil eden proptur.
   *  @default primary
   */
  color?: Color
  /**
   * Tooltip bileşeni class namelerini temsil eden proptur.
   */
  className?: string
  /**
   * Tooltip bileşenin içeriğini temsil eden proptur.
   */
  text?: ReactNode
  /**
   * Tooltip bileşenin nerede render edileceğini temsil eden proptur.
   * @default top
   */
  position?: 'top' | 'bottom' | 'right' | 'left'
  /**
   * Tooltip bileşeni id değerini temsil eden proptur.
   */
  id?: string
  /**
   * Tooltip boyutunu temsil eden proptur.
   * @default md
   */
  size?: Size
}

export { TooltipProps }
