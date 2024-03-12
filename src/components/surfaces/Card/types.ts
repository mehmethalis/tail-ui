import { ReactNode } from 'react'

type CardProps = {
  /**
   * Card bileşini contentinde render edilir.
   */
  children?: ReactNode
  /**
   * Card bileşini class namelerini temsil eden proptur.
   */
  className?: string
  /**
   * Card bileşeni id değerini temsil eden proptur.
   */
  id?: string
}
export { CardProps }
