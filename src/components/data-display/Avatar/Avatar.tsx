import { cn } from '@/lib/utils'
import { cva } from 'class-variance-authority'
import { AvatarProps } from './types'

const avatarClasses = cva('overflow-hidden relative inline-flex items-center justify-center ', {
  variants: {
    shape: {
      circular: 'rounded-full',
      square: 'rounded',
    },
    size: {
      sm: 'w-5 h-5',
      md: 'w-10 h-10',
      lg: 'w-16 h-16',
    },
    disabledBorder: {
      true: '',
      false: 'ring-2 ring-white',
    },
    color: {
      primary: 'bg-sky-100',
      secondary: 'bg-neutral-100',
      danger: 'bg-red-100',
      success: 'bg-green-100',
      warning: 'bg-yellow-100',
    },
  },
})

export const Avatar = (props: AvatarProps) => {
  const {
    className,
    disabledBorder = true,
    id,
    shape = 'circular',
    size = 'md',
    src,
    children,
    color = 'primary',
    ...rest
  } = props

  if (children)
    return (
      <div className={cn(avatarClasses({ shape, size, className, disabledBorder, color }))}>
        {children}
      </div>
    )

  return (
    <img
      className={cn(avatarClasses({ shape, size, className, disabledBorder, color }))}
      id={id}
      src={src}
      {...rest}
    />
  )
}
