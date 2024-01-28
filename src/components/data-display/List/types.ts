import { Color, Size } from '@/types'
import { MouseEvent, ReactElement, ReactNode } from 'react'

type ListProps = {
  /**
   * List bileşenin render edileceği react elementini temsil eden proptur.
   */
  children?: ReactElement<ListItemProps>[] | ReactElement<ListItemProps>
  /**
   * List bileşini rengini temsil eden proptur.
   *  @default primary
   */
  color?: Color
  /**
   * List bileşeni class namelerini temsil eden proptur.
   */
  className?: string
  /**
   * List boyutunu temsil eden proptur.
   * @default md
   */
  size?: Size
  /**
   * List bileşeni id değerini temsil eden proptur.
   */
  id?: string
}
type ListItemProps = {
  /**
   * ListItem bileşenin render edileceği react node'u temsil eden proptur.
   */
  children?: ReactNode
  /**
   * ListItem bileşeni class namelerini temsil eden proptur.
   */
  className?: string
  /**
   * ListItem bileşenin sonunda render edilir.
   */
  endAdornment?: ReactNode
  /**
   * ListItem bileşeni id değerini temsil eden proptur.
   */
  id?: string
  /**
   * ListItem bileşenin başında render edilir.
   */
  startAdornment?: ReactNode
  /**
   * ListItem bileşenine tıklanıldığında tetiklenen fonksiyondur.
   */
  onClick?: (index: number, e: MouseEvent<HTMLElement>) => void
  /**
   * Listedeki her elementin benzersiz bir "key" değeri olmalıdır.
   */
  key: string
}
export { ListProps, ListItemProps }
