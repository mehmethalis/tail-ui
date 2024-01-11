import { Color as AvatarColor, Size as AvatarSize } from '@/types'
import { Avatar } from '@/components'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Data Display/Avatar',
  component: Avatar,
  tags: ['autodocs'],
} as Meta<typeof Avatar>

type Story = StoryObj<typeof Avatar>

export const Default: Story = {
  args: {
    src: 'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  render: (args) => (
    <>
      <Avatar {...args} />
      <Avatar
        {...args}
        className="mx-2"
      >
        <span className="font-medium text-gray-600 dark:text-gray-300">JL</span>
      </Avatar>
    </>
  ),
}

export const Children: Story = {
  args: {},
  render: (args) => (
    <>
      <Avatar {...args}>
        <span className="font-medium text-gray-600 dark:text-gray-300">JL</span>
      </Avatar>
      <Avatar
        {...args}
        className="mx-1"
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.5}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Avatar>
    </>
  ),
}

export const Color: Story = {
  args: {},
  render: (args) => {
    const colors: AvatarColor[] = ['primary', 'secondary', 'success', 'warning', 'danger']

    return (
      <>
        {colors.map((item) => (
          <Avatar
            {...args}
            className={'mx-1'}
            color={item}
            key={item}
          >
            <span className="font-medium text-gray-600 dark:text-gray-300">MH</span>
          </Avatar>
        ))}
      </>
    )
  },
}

export const Size: Story = {
  args: {},
  render: (args) => {
    const sizes: AvatarSize[] = ['sm', 'md', 'lg']
    return (
      <>
        {sizes.map((item) => (
          <Avatar
            {...args}
            className={'mx-1'}
            key={item}
            size={item}
          >
            <span className="font-medium text-gray-600 dark:text-gray-300">MH</span>
          </Avatar>
        ))}
      </>
    )
  },
}
