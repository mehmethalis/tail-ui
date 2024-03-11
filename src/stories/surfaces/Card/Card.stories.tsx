import { Card } from '@/components'

import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Surfaces/Card',
  component: Card,
  tags: ['autodocs'],
} as Meta<typeof Card>

type Story = StoryObj<typeof Card>

export const Default: Story = {
  args: {},
  render: (args) => (
    <Card
      {...args}
      className="aspect-[4/3]"
    >
      <img
        alt=""
        className="rounded-t-md object-cover h-48 w-96"
        src="https://images.unsplash.com/photo-1564407727371-3eece6c58961?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <h5 className="my-2 mt-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </h5>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
        Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse
        chronological order.
      </p>
    </Card>
  ),
}
