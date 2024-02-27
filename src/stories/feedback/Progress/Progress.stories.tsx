import { Progress } from '@/components'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Feedback/Progress',
  component: Progress,
  tags: ['autodocs'],
} as Meta<typeof Progress>

type Story = StoryObj<typeof Progress>

export const Default: Story = {
  args: { width: 35, color: 'secondary' },
  render: (args) => <Progress {...args} />,
}
