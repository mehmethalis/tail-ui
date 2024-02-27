import { Color, Size } from '@/types'

type ProgressProps = {
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
   * Eğer true geçilir ise, Progress bileşinin güncel değeri label olarak gösterilmez.
   *  @default false
   */
  disableLabel?: boolean
  /**
   * Progress bileşini boyutunu temsil eden proptur.
   *  @default md
   */
  size?: Size
  /**
   * Progress bileşeni id değerini temsil eden proptur.
   */
  id?: string
  /**
   * Progress bileşeni yüzde değerini temsil eden proptur.
   * @default 10
   */
  width?: number
}
export { ProgressProps }
