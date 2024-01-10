import { Avatar } from '../../../components'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Data Display/Avatar',
  component: Avatar,
  tags: ['autodocs'],
} as Meta<typeof Avatar>

type Story = StoryObj<typeof Avatar>

export const Default: Story = {
  args: {},
  render: (args) => <Avatar {...args} />,
}
