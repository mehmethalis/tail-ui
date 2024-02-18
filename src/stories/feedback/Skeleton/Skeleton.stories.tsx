import { Skeleton } from '@/components'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Feedback/Skeleton',
  component: Skeleton,
  tags: ['autodocs'],
} as Meta<typeof Skeleton>

type Story = StoryObj<typeof Skeleton>

export const Default: Story = {
  args: {},
  render: (args) => <Skeleton {...args} />,
}
