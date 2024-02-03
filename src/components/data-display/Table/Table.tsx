import { cva } from 'class-variance-authority'
import { TableFooter } from './TableFooter'
import { TableHeader } from './TableHeader'
import { TableProps } from './types'
import { cn } from '@/lib/utils'

const tableRowClasses = cva(' border-b dark:border-gray-700', {
  variants: {
    disableStriped: {
      true: 'bg-white',
      false: 'odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800',
    },
  },
})

export const Table = (props: TableProps) => {
  const {
    columnClassName,
    columns = [],
    disableStriped = true,
    footer,
    rowClassName,
    rows = [],
    className,
    title,
    description,
    ...rest
  } = props
  return (
    <div
      className="relative overflow-x-auto"
      {...rest}
    >
      <table
        className={
          'w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 ' + className
        }
      >
        {(title || description) && (
          <caption className="p-5 text-lg font-semibold text-left rtl:text-right text-gray-900 bg-white dark:text-white dark:bg-gray-800">
            {title}
            {description && (
              <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
                {description}
              </p>
            )}
          </caption>
        )}

        <TableHeader
          columnClassName={columnClassName}
          columns={columns}
        />
        <tbody>
          {rows.map((row, idx) => (
            <tr
              className={cn(tableRowClasses({ disableStriped, className: rowClassName }))}
              key={idx}
            >
              {Object.keys(row).map((key, idx) => (
                <td
                  className="px-6 py-4"
                  key={idx}
                >
                  {row[key] as never}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
        <TableFooter footer={footer} />
      </table>
    </div>
  )
}
