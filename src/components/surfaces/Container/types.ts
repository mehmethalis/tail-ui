import { ReactNode } from 'react'

type ContainerProps = {
  /**
   * Container bileşini contentinde render edilir.
   */
  children?: ReactNode
  /**
   * Container bileşini class namelerini temsil eden proptur.
   */
  className?: string
  /**
   * Container bileşeni id değerini temsil eden proptur.
   */
  id?: string
}
export { ContainerProps }
