import { cva } from 'class-variance-authority'
import { SkeletonProps } from './types'
import { cn } from '@/lib/utils'
import { Icon } from '@/lib'
const skeletonClasses = cva('h-2.5 bg-gray-200 rounded-full dark:bg-gray-700  mb-4', {
  variants: {
    size: {
      sm: 'h-2.5',
      md: 'h-3.5',
      lg: 'h-5',
    },
    variant: {
      image: 'flex items-center justify-center mb-4 bg-gray-300 rounded dark:bg-gray-700',
      plain: '',
    },
  },
  compoundVariants: [
    {
      size: 'sm',
      variant: 'image',
      className: 'h-28 ',
    },
    {
      size: 'md',
      variant: 'image',
      className: 'h-44 ',
    },
    {
      size: 'lg',
      variant: 'image',
      className: 'h-60 ',
    },
  ],
})
export const Skeleton = (props: SkeletonProps) => {
  const { variant = 'plain', width = 45, size = 'md', className, ...rest } = props

  return (
    <div
      {...rest}
      className="animate-pulse"
      role="status"
      style={{ width: `${width}%` }}
    >
      {variant === 'plain' && (
        <div className={cn(skeletonClasses({ className, size, variant }), `w-${width}`)} />
      )}
      {variant === 'image' && (
        <div className={cn(skeletonClasses({ className, size, variant }), `w-${width} `)}>
          <Icon
            className="text-gray-200 dark:text-gray-600"
            name="file-image"
            size="lg"
          />
        </div>
      )}
    </div>
  )
}
