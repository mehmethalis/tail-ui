import { Color as AvatarColor, Size as AvatarSize } from '@/types'
import { Avatar, AvatarGroup, Icon } from '@/components'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Data Display/Avatar',
  component: Avatar,
  tags: ['autodocs'],
} as Meta<typeof Avatar>

type Story = StoryObj<typeof Avatar>

export const Default: Story = {
  args: {},
  render: (args) => (
    <>
      <Avatar
        {...args}
        className="mx-2"
      >
        <span className="font-medium text-gray-600 dark:text-gray-300">TW</span>
      </Avatar>
      <Avatar
        {...args}
        className="mx-2"
        shape={'square'}
      >
        <span className="font-medium text-gray-600 dark:text-gray-300">TW</span>
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
        <Icon
          color="secondary"
          name="user-plus"
          size="sm"
        />
      </Avatar>
    </>
  ),
}

export const AvatarsWithGroup: Story = {
  args: { disabledBorder: false, color: 'danger' },
  render: (args) => (
    <>
      <h5>Horizontal</h5>
      <AvatarGroup>
        <Avatar {...args}>
          <h4>LM</h4>
        </Avatar>
        <Avatar {...args}>
          <h4>LM</h4>
        </Avatar>
        <Avatar {...args}>
          <h4>LM</h4>
        </Avatar>
        <Avatar {...args}>
          <h4>LM</h4>
        </Avatar>
        <Avatar {...args}>
          <h4>LM</h4>
        </Avatar>
        <Avatar
          {...args}
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        />
      </AvatarGroup>
      <h5 className="mt-4">Vertical</h5>
      <AvatarGroup direction="vertical">
        <Avatar {...args}>
          <h4>LM</h4>
        </Avatar>
        <Avatar {...args}>
          <h4>LM</h4>
        </Avatar>
        <Avatar {...args}>
          <h4>LM</h4>
        </Avatar>
        <Avatar {...args}>
          <h4>LM</h4>
        </Avatar>
        <Avatar {...args}>
          <h4>LM</h4>
        </Avatar>
        <Avatar
          {...args}
          disabledBorder={false}
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        />
      </AvatarGroup>
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
