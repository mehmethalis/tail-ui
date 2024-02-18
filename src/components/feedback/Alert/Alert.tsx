import { AlertProps } from './types'

export const Alert = (props: AlertProps) => {
  const { ...rest } = props
  return (
    <div
      {...rest}
      className="p-4 mb-4 text-sm text-yellow-700 rounded-lg bg-yellow-100 dark:bg-gray-800 dark:text-yellow-300"
      role="alert"
    >
      <span className="font-medium">Warning alert!</span> Change a few things up and try submitting
      again.
    </div>
  )
}
