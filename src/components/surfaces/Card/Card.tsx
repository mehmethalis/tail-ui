import { cva } from 'class-variance-authority'

import { CardProps } from './types'

const cardClasses = cva(
  'max-w-sm p-4 bg-white border border-gray-200 rounded-md shadow-sm dark:bg-gray-800 dark:border-gray-700',
  {
    variants: {},
  },
)
export const Card = (props: CardProps) => {
  const { id, children, className, ...rest } = props
  return (
    <div
      className={cardClasses({ className })}
      id={id}
      {...rest}
    >
      {children}
    </div>
  )
}
