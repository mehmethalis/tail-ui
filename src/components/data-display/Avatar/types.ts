import { ElementType, ReactElement, ReactNode } from 'react'
import { Color, Size } from '../../../types'

type AvatarShape = 'circular' | 'square'
type AvatarProps = {
  /**
   * Avatar bileşini resminin alt text bilgisini temsil eden proptur.
   */
  alt?: string
  /**
   * Avatar bileşinin contentinde render edilir.
   */
  children?: ReactNode
  /**
   * Avatar bileşini class namelerini temsil eden proptur.
   */
  className?: string
  /**
   * Avatar bileşini class namelerini temsil eden proptur.
   *  @default primary
   */
  color?: Color
  /**
   * Eğer false verilir ise, avatar bileşenine border eklenir.
   * @default true
   */
  disabledBorder?: boolean
  /**
   * Avatar bileşeni id değerini temsil eden proptur.
   */
  id?: string
  /**
   * Avatar bileşenin şekilini temsil eden proptur.
   * @default circular
   */
  shape?: AvatarShape
  /**
   * Avatar bileşeni boyutunu temsil eden proptur.
   * @default  md
   */
  size?: Size
  /**
   * Avatar bileşenin contentinde render edilecek image url'ini temsil eden protur.
   */
  src?: string
}
type AvatarGroupProps = {
  /**
   * Child node olarak avatar yada birden fazla avatar alır ve gruplar.
   */
  children?: ReactElement<AvatarProps>[] | ReactElement<AvatarProps>
  /**
   * Avatar Group bileşini class namelerini temsil eden proptur.
   */
  className?: string
  /**
   * Avatar Group bileşini yönünü temsil eden proptur.
   * @default horizontal
   */
  direction?: 'vertical' | 'horizontal'
  /**
   * Avatar Group bileşeni id değerini temsil eden proptur.
   */
  id?: string
}
export { AvatarProps, AvatarShape, AvatarGroupProps }
