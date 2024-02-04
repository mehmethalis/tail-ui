import { GridProps } from './types'

export const Grid = (props: GridProps) => {
  const { className = '', cols, children, gap = 4, ...rest } = props

  return (
    <div
      className={`grid grid-cols-${cols} gap-${gap} ${className}`}
      {...rest}
    >
      {children}
    </div>
  )
}
