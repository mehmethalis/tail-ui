import { TableFooter } from './TableFooter'
import { TableHeader } from './TableHeader'
import { TableProps } from './types'

export const Table = (props: TableProps) => {
  const { ...rest } = props
  return (
    <div
      className="relative overflow-x-auto"
      {...rest}
    >
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <TableHeader />
        <tbody>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              scope="row"
            >
              Apple MacBook Pro 17
            </th>
            <td className="px-6 py-4">Silver</td>
            <td className="px-6 py-4">Laptop</td>
            <td className="px-6 py-4">$2999</td>
          </tr>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              scope="row"
            >
              Microsoft Surface Pro
            </th>
            <td className="px-6 py-4">White</td>
            <td className="px-6 py-4">Laptop PC</td>
            <td className="px-6 py-4">$1999</td>
          </tr>
          <tr className="bg-white dark:bg-gray-800">
            <th
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              scope="row"
            >
              Magic Mouse 2
            </th>
            <td className="px-6 py-4">Black</td>
            <td className="px-6 py-4">Accessories</td>
            <td className="px-6 py-4">$99</td>
          </tr>
        </tbody>
        <TableFooter />
      </table>
    </div>
  )
}
