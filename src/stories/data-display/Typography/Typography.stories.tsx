import { Typography } from '@/components'
import { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Data Display/Typography',
  component: Typography,
  tags: ['autodocs'],
} as Meta<typeof Typography>

type Story = StoryObj<typeof Typography>

export const Default: Story = {
  args: { id: 'tail-typography', variant: 'h1' },
  render: (args) => <Typography {...args}>{'Typography'}</Typography>,
}
