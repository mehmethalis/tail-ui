import { Color, Size } from '@/types'
import { IconName } from '@fortawesome/fontawesome-svg-core'

type IconAnimation =
  | 'beat'
  | 'fade'
  | 'beat-fade'
  | 'bounce'
  | 'flip'
  | 'shake'
  | 'spin'
  | 'spin-reverse'

type IconProps = {
  /**
   * Render edilecek icon animasyonunu temsil eden proptur.
   */
  animation?: IconAnimation
  /**
   * Icon bileşini rengini temsil eden proptur.
   *  @default primary
   */
  color?: Color
  /**
   * Render edilecek icon animasyonu hızını ms cinsinden temsil eden proptur.
   * @default 1300
   */
  duration?: number
  /**
   * Eğer false verilir ise, render edilecek icon genişliğini sabit tutar.
   * @default true
   */
  disableFixed?: boolean
  /**
   * Icon bileşeni class namelerini temsil eden proptur.
   */
  className?: string
  /**
   * Icon bileşeni ailesini temsil eden proptur.
   * @default classic
   */
  family?: 'classic' | 'sharp'
  /**
   * Render edilecek icon yüzünü temsil eden proptur.
   */
  flip?: 'vertical' | 'horizontal'
  /**
   * Render edilecek icon açısını temsil eden proptur.
   */
  rotation?: 30 | 90 | 180 | 270
  /**
   * Icon adını temsil eden proptur.
   */
  name: IconName
  /**
   * Render edilecek icon varyantını temsil eden proptur.
   * @default solid
   */
  variant?: 'solid' | 'regular' | 'light' | 'thin' | 'duotone'
  /**
   * Icon bileşeni id değerini temsil eden proptur.
   */
  id?: string
  /**
   * Icon boyutunu temsil eden proptur.
   * @default md
   */
  size?: Size
}

export { IconProps }