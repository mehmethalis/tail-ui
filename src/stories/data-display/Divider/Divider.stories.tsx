import { Divider, Icon } from '@/components'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Data Display/Divider',
  component: Divider,
  tags: ['autodocs'],
} as Meta<typeof Divider>

type Story = StoryObj<typeof Divider>
const Text = () => (
  <p className="font-thin">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor ipsam animi temporibus quisquam
    porro eveniet reiciendis fuga possimus, nisi quod. Necessitatibus mollitia beatae iste, enim
    consectetur velit? Nobis, vel alias.
  </p>
)
export const Default: Story = {
  args: {},
  render: (args) => (
    <div
      className="mx-auto"
      style={{ width: 500 }}
    >
      <Text />
      <Divider {...args} />
      <Text />
    </div>
  ),
}

export const Trimmed: Story = {
  args: {},
  render: (args) => (
    <div
      className="mx-auto"
      style={{ width: 500 }}
    >
      <Text />
      <Divider
        {...args}
        disableTrimmed={false}
      />
      <Text />
    </div>
  ),
}

export const WithContent: Story = {
  args: {},
  render: (args) => (
    <div
      className="mx-auto"
      style={{ width: 500 }}
    >
      <Text />
      <Divider {...args}>
        <Icon name="quote-left" />
      </Divider>
      <Text />
      <Divider
        {...args}
        align="start"
      >
        Start
      </Divider>
      <Text />
      <Divider {...args}>Center</Divider>
      <Text />
      <Divider
        {...args}
        align="end"
      >
        End
      </Divider>
      <Text />
    </div>
  ),
}

export const Direction: Story = {
  args: {},
  render: (args) => (
    <div
      className="flex justify-around  mx-auto gap-4"
      style={{ width: 1000 }}
    >
      <Text />
      <Divider
        {...args}
        direction="vertical"
      >
        <Icon name="quote-left" />
      </Divider>
      <Text />
      <Divider
        {...args}
        direction="vertical"
      >
        Center
      </Divider>
      <Text />
      <Divider
        {...args}
        align="end"
        direction="vertical"
      >
        <Icon
          color="secondary"
          name="pen"
          size="sm"
        />
      </Divider>
    </div>
  ),
}
