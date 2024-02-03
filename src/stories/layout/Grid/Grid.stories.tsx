import { Grid } from '@/components'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Layout/Grid',
  component: Grid,
  tags: ['autodocs'],
} as Meta<typeof Grid>

type Story = StoryObj<typeof Grid>

export const Default: Story = {
  args: {},
  render: (args) => <Grid {...args} />,
}
