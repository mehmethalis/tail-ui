import { createContext } from 'react'
import { Color, Size } from '@/types'

type ListContextProps = {
  color: Color
  size: Size
}
export const ListContext = createContext<ListContextProps>({ color: 'primary', size: 'md' })
