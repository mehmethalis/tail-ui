import { Size } from '../../../types'

type AvatarShape = 'circular' | 'square'
type AvatarProps = {
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

export { AvatarProps, AvatarShape }
