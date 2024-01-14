import { cn } from '@/lib/utils'
import { ChipProps } from './types'
import { cva } from 'class-variance-authority'
import { useMemo } from 'react'

const chipClasses = cva('font-medium me-2 px-2.5 py-0.5 rounded', {
  variants: {
    variant: {
      plain: 'rounded',
      pill: 'rounded-full',
      bordered: 'border',
    },
    size: {
      sm: 'text-xs',
      md: 'text-sm',
      lg: 'text-lg',
    },
    color: {
      primary: 'bg-sky-100 text-sky-800 dark:bg-sky-900 dark:text-sky-300 border-sky-400',
      secondary:
        'bg-neutral-100 text-neutral-800 dark:bg-neutral-900 dark:text-neutral-300 border-neutral-400',
      danger: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300 border-red-400',
      success: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300 border-green-400',
      warning:
        'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300 border-yellow-400',
    },

    hasLink: {
      true: 'transition ease-in-out duration-300',
      false: '',
    },
  },
  compoundVariants: [
    {
      color: 'primary',
      hasLink: true,
      className: 'hover:bg-sky-200 ',
    },
    {
      color: 'secondary',
      hasLink: true,
      className: 'hover:bg-neutral-200 ',
    },
    {
      color: 'danger',
      hasLink: true,
      className: 'hover:bg-red-200 ',
    },
    {
      color: 'success',
      hasLink: true,
      className: 'hover:bg-green-200 ',
    },
    {
      color: 'warning',
      hasLink: true,
      className: 'hover:bg-yellow-200 ',
    },
  ],
})
export const Chip = (props: ChipProps) => {
  const {
    children,
    className,
    color = 'primary',
    href,
    size = 'md',
    target = '_self',
    variant = 'plain',
    startDecarator,
    endDecarator,
    ...rest
  } = props

  const content = useMemo(
    () => (
      <>
        {startDecarator}
        {children}
        {endDecarator}
      </>
    ),
    [startDecarator, endDecarator, children],
  )

  if (href)
    return (
      <a
        className={cn(
          chipClasses({
            color,
            size,
            variant,
            hasLink: !!href,
          }),
        )}
        href={href}
        target={target}
        {...rest}
      >
        {content}
      </a>
    )
  return (
    <span
      className={cn(
        chipClasses({
          color,
          size,
          variant,
          className,
        }),
      )}
      {...rest}
    >
      {content}
    </span>
  )
}
