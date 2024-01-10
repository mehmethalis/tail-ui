import { useMemo } from 'react'
import { Size } from '../../../types'
import { AvatarProps, AvatarShape } from './types'

export const Avatar = (props: AvatarProps) => {
  const { disabledBorder = true, id, shape = 'circular', size = 'md', src } = props

  const shapeClasses: Record<AvatarShape, string> = { circular: 'rounded-full', square: 'rounded' }
  const sizeClass = useMemo(() => {
    const sizes: Record<Size, string> = { sm: 'w-5 h-5', md: 'w-10 h-10', lg: 'w-16 h-16' }
    return typeof size === 'number' ? `w-${size} h-${size}` : sizes[size]
  }, [size])
  const borderClass = useMemo(
    () => (disabledBorder ? '' : 'ring-2 ring-gray-300'),
    [disabledBorder],
  )

  return (
    <img
      alt="tail-avatar"
      className={`${shapeClasses[shape]} ${sizeClass} ${borderClass}`}
      id={id}
      src={src}
    />
  )
}
