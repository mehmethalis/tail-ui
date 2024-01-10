export const Avatar = (props: { id: string }) => {
  const { id } = props
  return (
    <h1
      className="text-3xl font-bold underline bg-red-200"
      id={id}
    >
      Hello world!
    </h1>
  )
}
