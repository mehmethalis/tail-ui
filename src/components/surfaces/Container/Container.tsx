import { cva } from 'class-variance-authority'
import { ContainerProps } from './types'
import { cn } from '@/lib/utils'

const containerClasses = cva(
  'max-w-sm p-4 bg-white border border-gray-200 rounded-md shadow-sm dark:bg-gray-800 dark:border-gray-700',
  {
    variants: {},
  },
)
export const Container = (props: ContainerProps) => {
  const { id, children, className, ...rest } = props

  return (
    <div
      className={cn(containerClasses({ className }))}
      id={id}
      {...rest}
    >
      {children}
    </div>
  )
}
