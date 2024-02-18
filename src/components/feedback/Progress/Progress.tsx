import { ProgressProps } from './types'

export const Progress = (props: ProgressProps) => {
  const { ...rest } = props
  return (
    <div
      {...rest}
      className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700"
    >
      <div
        className="bg-sky-500 h-2.5 rounded-full"
        style={{ width: '50%' }}
      />
    </div>
  )
}
