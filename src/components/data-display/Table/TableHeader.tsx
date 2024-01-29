export const TableHeader = () => {
  return (
    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      <tr>
        <th
          className="px-6 py-3"
          scope="col"
        >
          Product name
        </th>
        <th
          className="px-6 py-3"
          scope="col"
        >
          Color
        </th>
        <th
          className="px-6 py-3"
          scope="col"
        >
          Category
        </th>
        <th
          className="px-6 py-3"
          scope="col"
        >
          Price
        </th>
      </tr>
    </thead>
  )
}
