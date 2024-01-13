import { Color, Size } from '@/types'
import { ReactNode } from 'react'

type BadgeProps = {
  /**
   * Badge bileşenin render edileceği react node'u temsil eden proptur.
   */
  children: ReactNode
  /**
   * Badge bileşeni class namelerini temsil eden proptur.
   */
  className?: string
  /**
   * Badge bileşenin contentinde render edilir.
   */
  content: ReactNode
  /**
   * Badge bileşenin rengini temsil eden proptur.
   * @default primary
   */
  color?: Color
  /**
   * Badge bileşeni id değerini temsil eden proptur.
   */
  id?: string
  /**
   * Badge bileşenin pozisyonunu temsil eden proptur.
   * @default top-right
   */
  position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left'
  /**
   * Badge bileşenin boyutunu temsil eden proptur.
   * @default md
   */
  size?: Size
}
export { BadgeProps }
