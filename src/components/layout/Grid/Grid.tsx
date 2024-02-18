import React from 'react'
import { GridProps } from './types'
import { cva } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const colVariants = Array.from({ length: 12 }, (_, idx) => ({ [idx + 1]: `grid-cols-${idx + 1}` }))
const gapVariants = Array.from({ length: 12 }, (_, idx) => ({ [idx + 1]: `gap-${idx + 1}` }))

const gridClasses = cva('grid', {
  variants: {
    cols: colVariants.reduce((prev, current) => ({ ...prev, ...current })),
    gap: gapVariants.reduce((prev, current) => ({ ...prev, ...current })),
  },
})
export const Grid = (props: GridProps) => {
  const { className, cols, children, gap = 1, ...rest } = props

  return (
    <div
      className={cn(gridClasses({ cols, gap, className }))}
      {...rest}
    >
      {children}
    </div>
  )
}
