import { cn } from '@/lib/utils'
import { IconProps } from './types'
import { cva } from 'class-variance-authority'
import { CSSProperties } from 'react'

const iconClasses = cva('', {
  variants: {
    family: {
      classic: '',
      sharp: 'fa-sharp',
    },
    variant: {
      solid: 'fa-solid',
      regular: 'fa-regular',
      light: 'fa-light',
      thin: 'fa-thin',
      duotone: 'fa-duotone',
    },
    size: {
      sm: 'text-lg',
      md: 'text-2xl',
      lg: 'text-4xl',
    },
    color: {
      primary: 'text-sky-500',
      secondary: 'text-neutral-500',
      danger: 'text-red-500',
      success: 'text-green-500',
      warning: 'text-yellow-500',
    },
    animation: {
      'beat-fade': 'fa-beat-fade',
      'spin-reverse': 'fa-spin fa-spin-reverse',
      beat: 'fa-beat',
      bounce: 'fa-bounce',
      fade: 'fa-fade',
      flip: 'fa-flip',
      shake: 'fa-shake',
      spin: 'fa-spin',
    },
    disableFixed: {
      true: '',
      false: 'fa-fw',
    },
    flip: {
      horizontal: 'fa-flip-horizontal',
      vertical: 'fa-flip-vertical',
    },
    rotation: { 30: 'rotate-30', 90: 'rotate-90', 180: 'rotate-180', 270: 'rotate-270' },
  },
})
export const Icon = (props: IconProps) => {
  const {
    animation,
    className,
    color = 'primary',
    disableFixed = true,
    duration = 1300,
    family = 'classic',
    flip,
    name,
    rotation,
    size = 'md',
    variant = 'solid',
  } = props

  return (
    <i
      className={`fa-${name} ${cn(
        iconClasses({
          animation,
          className,
          color,
          disableFixed,
          family,
          flip,
          rotation,
          size,
          variant,
        }),
      )}`}
      style={{ '--fa-animation-duration': `${duration}ms` } as CSSProperties}
    />
  )
}
