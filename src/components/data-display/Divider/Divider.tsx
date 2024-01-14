import { cva } from 'class-variance-authority'
import { DividerProps } from './types'
import { cn } from '@/lib/utils'

const dividerClasses = cva('bg-gray-200 border-0 dark:bg-gray-700   ', {
  variants: {
    direction: {
      horizontal: 'w-full h-px my-8',
      vertical: '-ml-0.5 w-0.5 h-full',
    },
    disableTrimmed: {
      true: '',
      false: 'w-80 mx-auto',
    },
  },
})
const childrenClasses = cva('absolute px-3 bg-white  dark:bg-gray-900', {
  variants: {
    align: {
      start: '',
      end: '',
      center: '',
    },
    direction: {
      horizontal: '',
      vertical: '',
    },
  },
  compoundVariants: [
    { align: 'center', direction: 'vertical', className: '-translate-y-1/2' },
    { align: 'center', direction: 'horizontal', className: '-translate-x-1/2 left-1/2' },
    { align: 'start', direction: 'vertical', className: '-translate-y-16' },
    { align: 'start', direction: 'horizontal', className: '-translate-x-36' },
    { align: 'end', direction: 'vertical', className: 'translate-y-16' },
    { align: 'end', direction: 'horizontal', className: 'translate-x-36' },
  ],
})
export const Divider = (props: DividerProps) => {
  const {
    direction = 'horizontal',
    align = 'center',
    children,
    disableTrimmed = true,
    ...rest
  } = props

  if (children) {
    return (
      <div className="inline-flex items-center justify-center w-full ">
        <hr
          {...rest}
          className={cn(dividerClasses({ direction, disableTrimmed }))}
        />
        <span className={cn(childrenClasses({ align, direction }))}>{children}</span>
      </div>
    )
  }
  return (
    <hr
      {...rest}
      className={cn(dividerClasses({ direction, disableTrimmed }))}
    />
  )
}
