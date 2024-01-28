import { useContext } from 'react'
import { ListItemProps } from './types'
import { cva } from 'class-variance-authority'
import { cn } from '@/lib/utils'
import { ListContext } from './ListContext'

const itemClasses = cva('relative px-4 py-2  border-gray-200', {
  variants: {
    isLastElement: {
      true: '',
      false: 'border-b',
    },
    size: {
      sm: 'text-xs ',
      md: 'text-md ',
      lg: 'text-lg ',
    },
    color: {
      primary: 'border-gray-200',
      secondary: 'border-neutral-200 text-neutral-500',
      danger: 'border-red-200 text-red-500',
      success: 'border-green-200 text-green-500',
      warning: 'border-yellow-200 text-yellow-500',
    },
    isClickable: {
      true: 'cursor-pointer transition ease-in-out duration-300',
      false: '',
    },
  },
  compoundVariants: [
    {
      color: 'primary',
      isClickable: true,
      className: 'hover:bg-gray-100 hover:text-sky-500',
    },
    {
      color: 'secondary',
      isClickable: true,
      className: 'hover:bg-neutral-100 hover:text-neutral-500',
    },
    { color: 'danger', isClickable: true, className: 'hover:bg-red-100 hover:text-red-500' },
    { color: 'success', isClickable: true, className: 'hover:bg-green-100 hover:text-green-500' },
    { color: 'warning', isClickable: true, className: 'hover:bg-yellow-100 hover:text-yellow-500' },
  ],
})

export const ListItem = (props: ListItemProps) => {
  const {
    children,
    className,
    endAdornment,
    id,
    idx,
    isLastElement,
    onClick,
    startAdornment,
    ...rest
  } = props as ListItemProps & {
    isLastElement: boolean
    idx: number
  }

  const { color, size } = useContext(ListContext)

  return (
    <li
      className={cn(itemClasses({ isLastElement, className, color, size, isClickable: !!onClick }))}
      onClick={(e) => {
        if (onClick) onClick(idx + 1, e)
      }}
      {...rest}
    >
      {startAdornment}
      {children}
      {endAdornment}
    </li>
  )
}
