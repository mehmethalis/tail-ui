import { Accordion, AccordionItem, Icon } from '@/components'

import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Surfaces/Accordion',
  component: Accordion,
  tags: ['autodocs'],
} as Meta<typeof Accordion>

type Story = StoryObj<typeof Accordion>

const items: AccordionItem[] = [
  {
    id: 'item-1',
    title: 'What is Tail UI?',
    body: (
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto dicta accusamus
        perferendis error ut laborum ab asperiores quae illo neque numquam ex, possimus esse dolore
        temporibus, voluptates quam nemo quia.
      </p>
    ),
    startEdornment: (
      <Icon
        color="secondary"
        name="circle-info"
        size="sm"
      />
    ),
  },
  {
    id: 'item-2',
    title: 'Is there a Figma file available?',
    body: (
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto dicta accusamus
        perferendis error ut laborum ab asperiores quae illo neque numquam ex, possimus esse dolore
        temporibus, voluptates quam nemo quia.
      </p>
    ),
    startEdornment: '',
  },
  {
    id: 'item-3',
    title: 'What are the differences between Tail UI and Tailwind UI?',
    body: (
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto dicta accusamus
        perferendis error ut laborum ab asperiores quae illo neque numquam ex, possimus esse dolore
        temporibus, voluptates quam nemo quia.
      </p>
    ),
    startEdornment: '',
  },
]
export const Default: Story = {
  args: { items },
  render: (args) => <Accordion {...args} />,
}
