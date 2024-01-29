import type { Meta, StoryObj } from '@storybook/react'
import { Table } from '@/components/data-display/Table'

export default {
  title: 'Data Display/Table',
  component: Table,
  tags: ['autodocs'],
} as Meta<typeof Table>

type Story = StoryObj<typeof Table>

export const Default: Story = {
  args: {},
  render: (args) => (
    <div
      className="text-center "
      style={{ width: 600 }}
    >
      🚧 in building 🚧
      <br />
      <Table {...args} />
    </div>
  ),
}
