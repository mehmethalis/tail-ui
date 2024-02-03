import { GridProps } from './types'

export const Grid = (props: GridProps) => {
  const { className, ...rest } = props
  return <div {...rest}>hello grid</div>
}
