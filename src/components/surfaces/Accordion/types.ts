import { ReactNode } from 'react'

type AccordionProps = {
  /**
   * Accordion bileşini contentinde render edilir.
   */
  children?: ReactNode
  /**
   * Accordion bileşini class namelerini temsil eden proptur.
   */
  className?: string
  /**
   * Accordion bileşeni id değerini temsil eden proptur.
   */
  id?: string
  /**
   * @default []
   * {
   * id*:string
   * title:string
   * body:ReactNode
   * startEdornment?: ReactNode
   * }
   * Accordion da render edilecek itemları temsil eden propdur.
   */
  items: AccordionItem[]
}

type AccordionItem = {
  id?: string
  title: string
  body: ReactNode
  startEdornment?: ReactNode
}
export { AccordionProps, AccordionItem }
