import { cva } from 'class-variance-authority'
import { AlertProps } from './types'
import { cn } from '@/lib/utils'

const alertClasses = cva('p-4 mb-4 rounded-md', {
  variants: {
    size: {
      sm: 'text-xs',
      md: 'text-md',
      lg: 'text-lg',
    },
    color: {
      primary: 'bg-sky-100 text-sky-700',
      secondary: 'bg-neutral-100 text-neutral-700',
      danger: 'bg-red-100 text-red-700',
      success: 'bg-green-100 text-green-700',
      warning: 'bg-yellow-100 text-yellow-700',
    },
    disableBordered: {
      true: '',
      false: 'border',
    },
  },
  compoundVariants: [
    {
      color: 'primary',
      disableBordered: false,
      className: 'border-sky-300  ',
    },
    {
      color: 'secondary',
      disableBordered: false,
      className: 'border-neutral-300  ',
    },
    {
      color: 'danger',
      disableBordered: false,
      className: 'border-red-300',
    },
    {
      color: 'success',
      disableBordered: false,
      className: 'border-green-300',
    },
    {
      color: 'warning',
      disableBordered: false,
      className: 'border-yellow-300 ',
    },
  ],
})
export const Alert = (props: AlertProps) => {
  const {
    color = 'primary',
    size = 'md',
    children,
    disableBordered = true,
    className,
    ...rest
  } = props
  return (
    <div
      {...rest}
      className={cn(alertClasses({ color, size, className, disableBordered }))}
      role="alert"
    >
      {children}
    </div>
  )
}
