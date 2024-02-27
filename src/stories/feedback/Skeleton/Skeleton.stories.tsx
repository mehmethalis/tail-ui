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
  render: (args) => (
    <div>
      <Skeleton {...args} />
      <Skeleton width={60} />
      <Skeleton width={70} />
      <Skeleton width={70} />
      <Skeleton width={50} />
    </div>
  ),
}

export const ImageSkeleton: Story = {
  args: { variant: 'image' },
  render: (args) => (
    <div>
      <Skeleton
        variant="image"
        width={20}
        {...args}
      />
    </div>
  ),
}
