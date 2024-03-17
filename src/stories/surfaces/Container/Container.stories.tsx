import { Container } from '@/components'

import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Surfaces/Container',
  component: Container,
  tags: ['autodocs'],
} as Meta<typeof Container>

type Story = StoryObj<typeof Container>

export const Default: Story = {
  args: {},
  render: (args) => (
    <Container
      {...args}
      className="aspect-[4/3]"
    >
      <h5 className="my-2 mt-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </h5>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
        Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse
        chronological order.
      </p>
    </Container>
  ),
}
