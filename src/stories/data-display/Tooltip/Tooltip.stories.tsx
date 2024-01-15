import type { Meta, StoryObj } from '@storybook/react'
import { Tooltip } from '@/components/data-display/Tooltip'

export default {
  title: 'Data Display/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
} as Meta<typeof Tooltip>

type Story = StoryObj<typeof Tooltip>

export const Default: Story = {
  args: {},
  render: (args) => (
    <div className="flex justify-center">
      <Tooltip
        {...args}
        text={'Content alanı'}
      >
        <div>hello</div>
      </Tooltip>
    </div>
  ),
}
