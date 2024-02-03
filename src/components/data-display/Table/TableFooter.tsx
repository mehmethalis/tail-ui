import { ReactNode } from 'react'

type TableFooterProps = {
  footer: ReactNode
}
export const TableFooter = (props: TableFooterProps) => {
  const { footer } = props
  return (
    <div className="px-6 py-4">
      <tfoot>{footer}</tfoot>
    </div>
  )
}
