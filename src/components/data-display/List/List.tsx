import { cloneElement } from 'react'
import { ListItemProps, ListProps } from './types'
import { cva } from 'class-variance-authority'
import { cn } from '@/lib/utils'
import { ListItem } from './ListItem'
import { ListContext } from './ListContext'

const listClasses = cva('h-min bg-white border border-gray-200 rounded-md', {
  variants: {
    size: {
      sm: 'text-xs',
      md: 'text-sm',
      lg: 'text-lg',
    },
    color: {
      primary: 'border-gray-200',
      secondary: 'border-neutral-200',
      danger: 'border-red-200 ',
      success: 'border-green-200 ',
      warning: 'border-yellow-200 ',
    },
  },
})

export const List = (props: ListProps) => {
  const { children, className, color = 'primary', size = 'md', ...rest } = props

  return (
    <ListContext.Provider value={{ color, size }}>
      <ul
        className={cn(listClasses({ className, color, size }))}
        {...rest}
      >
        {Array.isArray(children) &&
          children.map((element, idx) =>
            cloneElement(element, {
              isLastElement: children.length - 1 === idx,
              idx,
            } as Partial<ListItemProps>),
          )}
        {!Array.isArray(children) && children}
      </ul>
    </ListContext.Provider>
  )
}

List.Item = ListItem
