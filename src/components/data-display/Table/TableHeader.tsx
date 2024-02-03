import { Column } from './types'

type TableHeaderProps = {
  columns: Column[]
  columnClassName: string
}
export const TableHeader = (props: TableHeaderProps) => {
  const { columns, columnClassName } = props
  return (
    <thead className="text-xs text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      <tr>
        {columns.map(({ title }, idx) => (
          <th
            className={'px-6 py-3 ' + columnClassName}
            key={idx}
            scope="col"
          >
            {title}
          </th>
        ))}
      </tr>
    </thead>
  )
}
