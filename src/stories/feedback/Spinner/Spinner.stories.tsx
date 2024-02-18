import { Spinner } from '@/components'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Feedback/Spinner',
  component: Spinner,
  tags: ['autodocs'],
} as Meta<typeof Spinner>

type Story = StoryObj<typeof Spinner>

export const Default: Story = {
  args: {},
  render: (args) => <Spinner {...args} />,
}
