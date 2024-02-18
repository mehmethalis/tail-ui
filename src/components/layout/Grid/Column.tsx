import { ColumnProps } from './types'

export const Col = (props: ColumnProps) => {
  const { children, ...rest } = props

  return <div {...rest}>{children}</div>
}
