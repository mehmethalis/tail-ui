import { createElement } from 'react'
import { TypographyProps } from './types'
import { cva } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const typographyClasses = cva('', {
  variants: {
    variant: {
      h1: '',
      h2: '',
      h3: '',
      h4: '',
      body: '',
    },
    weight: { bold: '', normal: '', thin: '' },
    size: {
      xs: 'text-xs',
      sm: 'text-sm',
      md: 'text-md',
      lg: 'text-lg',
      xl: 'text-xl',
    },
    spacing: { tight: 'tracking-tight', normal: 'tracking-normal', wide: 'tracking-wide' },
    disableNoWrap: {
      true: '',
      false: 'text-nowra',
    },
    wordBreak: {
      normal: 'break-normal',
      all: 'break-all',
      words: 'break-words',
    },
    color: {
      primary: 'text-sky-500',
      secondary: 'text-neutral-500',
      danger: 'text-red-500',
      success: 'text-green-500',
      warning: 'text-yellow-500',
    },
  },
  compoundVariants: [
    { variant: 'h1', weight: 'bold', className: 'font-semibold' },
    { variant: 'h2', weight: 'bold', className: 'font-semibold' },
    { variant: 'h3', weight: 'bold', className: 'font-semibold' },
    { variant: 'h4', weight: 'bold', className: 'font-semibold' },
    { variant: 'body', weight: 'bold', className: 'font-semibold' },
    { variant: 'h1', weight: 'thin', className: 'font-light' },
    { variant: 'h2', weight: 'thin', className: 'font-light' },
    { variant: 'h3', weight: 'thin', className: 'font-light' },
    { variant: 'h4', weight: 'thin', className: 'font-light' },
    { variant: 'body', weight: 'thin', className: 'font-light' },
    { variant: 'h1', weight: 'normal', className: 'font-semibold' },
    { variant: 'h2', weight: 'normal', className: 'font-medium' },
    { variant: 'h3', weight: 'normal', className: 'font-normal' },
    { variant: 'h4', weight: 'normal', className: 'font-normal' },
    { variant: 'body', weight: 'normal', className: 'font-normal' },
  ],
})
export const Typography = (props: TypographyProps) => {
  const {
    children,
    className,
    color,
    disableNoWrap = true,
    id,
    size = 'md',
    spacing = 'normal',
    variant = 'body',
    weight = 'normal',
    wordBreak = 'normal',
  } = props

  return createElement(
    variant == 'body' ? 'p' : variant,
    {
      id,
      className: cn(
        typographyClasses({
          className,
          color,
          disableNoWrap,
          size,
          spacing,
          variant,
          weight,
          wordBreak,
        }),
      ),
    },
    children,
  )
}
