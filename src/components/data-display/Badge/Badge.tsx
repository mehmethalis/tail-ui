import { cva } from 'class-variance-authority'
import { BadgeProps } from './types'
import { cn } from '@/lib/utils'

const badgeClasses = cva(
  'absolute inline-flex items-center rounded-md px-2 py-1  ring-inset font-medium w-max max-w-28',
  {
    variants: {
      position: {
        'top-right': '-top-2 left-9',
        'top-left': '-top-2 right-9',
        'bottom-left': '-bottom-2 right-9',
        'bottom-right': '-bottom-2 left-9',
      },
      color: {
        primary: 'bg-sky-50 text-sky-700 ring-sky-700/10',
        secondary: 'bg-neutral-50 text-neutral-700 ring-neutral-700/10',
        danger: 'bg-pink-50 text-pink-700 ring-pink-700/10',
        success: 'bg-green-50 text-green-700 ring-green-700/10',
        warning: 'bg-yellow-50 text-yellow-700 ring-yellow-700/10',
      },
      size: {
        sm: 'text-xs  ring-1',
        md: 'text-md ring-2',
        lg: 'text-xl ring-4',
      },
    },
  },
)

export const Badge = (props: BadgeProps) => {
  const {
    children,
    className,
    color = 'primary',
    content,
    position = 'top-right',
    size = 'md',
    ...rest
  } = props
  return (
    <div className="relative ">
      {children}
      <span
        className={cn(badgeClasses({ position, color, size, className }))}
        {...rest}
      >
        {content}
      </span>
    </div>
  )
}
