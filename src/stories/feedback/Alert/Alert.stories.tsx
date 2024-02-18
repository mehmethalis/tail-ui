import { Alert } from '@/components'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Feedback/Alert',
  component: Alert,
  tags: ['autodocs'],
} as Meta<typeof Alert>

type Story = StoryObj<typeof Alert>

export const Default: Story = {
  args: {},
  render: (args) => <Alert {...args} />,
}
