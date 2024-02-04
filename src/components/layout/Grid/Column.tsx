import { ColumnProps } from './types'

export const Col = (props: ColumnProps) => {
  const { colSpan = 1, children, className, ...rest } = props

  return (
    <div
      className={`col-span-${colSpan} ${className}`}
      {...rest}
    >
      {children}
    </div>
  )
}
