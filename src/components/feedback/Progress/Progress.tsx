import { cva } from 'class-variance-authority'
import { ProgressProps } from './types'
import { cn } from '@/lib/utils'

const progressContainerClasses = cva('text-xs font-medium w-full bg-gray-200 rounded-full ', {
  variants: {
    size: {
      sm: 'h-3.5',
      md: 'h-4.5',
      lg: 'h-6',
    },
  },
})

const progressClasses = cva(
  'text-xs font-medium rounded-full text-center p-0.5 leading-none flex justify-center items-center',
  {
    variants: {
      size: {
        sm: 'h-3.5',
        md: 'h-4.5',
        lg: 'h-6',
      },
      color: {
        primary: 'bg-sky-500 text-sky-100',
        secondary: 'bg-neutral-500 text-neutral-100',
        danger: 'bg-red-500 text-red-100',
        success: 'bg-green-500 text-green-100',
        warning: 'bg-yellow-500 text-yellow-100',
      },
    },
  },
)

export const Progress = (props: ProgressProps) => {
  const { className, width = 10, disableLabel, color = 'primary', size = 'md', ...rest } = props
  return (
    <div
      {...rest}
      className={cn(progressContainerClasses({ className, size }))}
    >
      <div
        className={cn(progressClasses({ color, size }))}
        style={{ width: `${width}%` }}
      >
        {!disableLabel && `%${width}`}
      </div>
    </div>
  )
}
