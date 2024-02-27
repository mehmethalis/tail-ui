import { Color, Size } from '@/types'

type SpinnerProps = {
  /**
   * Spinner bileşini class namelerini temsil eden proptur.
   */
  className?: string
  /**
   * Spinner bileşini rengini temsil eden proptur.
   *  @default primary
   */
  color?: Color
  /**
   * Spinner bileşini boyutunu temsil eden proptur.
   *  @default md
   */
  size?: Size
  /**
   * Spinner bileşeni id değerini temsil eden proptur.
   */
  id?: string
}
export { SpinnerProps }
