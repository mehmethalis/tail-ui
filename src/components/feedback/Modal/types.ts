import { Color, Size } from '@/types'

type ModalProps = {
  /**
   * Modal bileşini class namelerini temsil eden proptur.
   */
  className?: string
  /**
   * Modal bileşini rengini temsil eden proptur.
   *  @default primary
   */
  color?: Color
  /**
   * Modal bileşini boyutunu temsil eden proptur.
   *  @default md
   */
  size?: Size
  /**
   * Modal görünürlüğünü temsil eden proptur.
   */
  isOpen?: boolean
  /**
   * Modal kapatıldığında tetiklenen callbacktir.
   */
  onClose?: () => void
  /**
   * Modal bileşeni id değerini temsil eden proptur.
   */
  id?: string
}
export { ModalProps }
