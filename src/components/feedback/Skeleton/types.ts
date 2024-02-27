import { Size } from '@/types'

type SkeletonProps = {
  /**
   * Skeleton bileşini class namelerini temsil eden proptur.
   */
  className?: string
  /**
   * Skeleton bileşeni varyantını temsil eden proptur.
   */
  variant?: 'plain' | 'image'
  /**
   * Skeleton bileşeni boyutunu temsil eden proptur.
   */
  size?: Size
  /**
   * Skeleton bileşeni id değerini temsil eden proptur.
   */
  id?: string
  /**
   * Skeleton bileşeni yüzde değerini temsil eden proptur.
   * @default 45
   */
  width?: number
}
export { SkeletonProps }
