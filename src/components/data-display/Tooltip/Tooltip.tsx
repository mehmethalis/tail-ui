import { cva } from 'class-variance-authority'
import { TooltipProps } from './types'
import { cn } from '@/lib/utils'

const tooltiClasses = cva(
  'tooltip shadow-sm py-1 px-2 absolute rounded text-white transition ease-in-out duration-300 ',
  {
    variants: {
      position: {
        top: 'top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-11',
        bottom: 'top-1/2 left-1/2 transform -translate-x-1/2 translate-y-4',
        right: 'top-1/2 rigth-1/2 transform translate-x-12 -translate-y-1/2',
        left: 'top-1/2 right-1/2 transform -translate-x-8 -translate-y-1/2',
      },
      size: {
        sm: 'text-xs',
        md: 'text-sm',
        lg: 'text-lg',
      },
      color: {
        primary: 'bg-sky-500',
        secondary: 'bg-neutral-500',
        danger: 'bg-red-500',
        success: 'bg-green-500',
        warning: 'bg-yellow-500',
      },
    },
  },
)
export const Tooltip = (props: TooltipProps) => {
  const {
    children,
    className,
    color = 'primary',
    position = 'top',
    size = 'md',
    text,
    ...rest
  } = props

  return (
    <div className="has-tooltip relative">
      <span
        {...rest}
        className={cn(tooltiClasses({ className, position, size, color }))}
        style={{ width: 'max-content' }}
      >
        {text}
      </span>
      {children}
    </div>
  )
}
