import { ReactNode } from 'react'

type ModalProps = {
  /**
   * Modal bileşini class namelerini temsil eden proptur.
   */
  className?: string
  /**
   * Modal bileşini contentinde render edilir.
   */
  children?: ReactNode
  /**
   * Modal bileşini footer alanında render edilir.
   */
  footer?: ReactNode
  /**
   * Eğer true verilir ise, modal bileşini close butonu gizlenir.
   *  @default false
   */
  disableClose?: boolean
  /**
   * Eğer true verilir ise, modal bileşini backdrop tıklandığında gizlenir.
   *  @default false
   */
  disableBackdropClick?: boolean
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
  /**
   * Modal bileşeni başlık değerini temsil eden proptur.
   */
  title?: ReactNode
}
export { ModalProps }
