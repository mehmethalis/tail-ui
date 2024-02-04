import { Grid, Col } from '@/components'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Layout/Grid',
  component: Grid,
  tags: ['autodocs'],
} as Meta<typeof Grid>

type Story = StoryObj<typeof Grid>

export const Default: Story = {
  args: {},
  render: (args) => (
    <Grid
      cols={3}
      gap={4}
      {...args}
    >
      <Col className="bg-black text-white">Mehmet</Col>
      <Col
        className="bg-sky-500 text-white"
        colSpan={3}
      >
        Halis
      </Col>
    </Grid>
  ),
}
