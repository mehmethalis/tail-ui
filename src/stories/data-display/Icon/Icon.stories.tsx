import type { Meta, StoryObj } from '@storybook/react'
import { Icon } from '@/components/data-display/Icon'

export default {
  title: 'Data Display/Icon',
  component: Icon,
  tags: ['autodocs'],
} as Meta<typeof Icon>

type Story = StoryObj<typeof Icon>

export const Default: Story = {
  args: {},
  render: (args) => (
    <Icon
      name="user"
      {...args}
    />
  ),
}

export const Variant: Story = {
  args: {},
  render: (args) => (
    <>
      <Icon
        className="mx-2"
        name="user"
        {...args}
      />

      <Icon
        className="mx-2"
        name="user"
        variant="regular"
        {...args}
      />
    </>
  ),
}

export const IconColor: Story = {
  args: { disableFixed: false },
  render: (args) => (
    <>
      <Icon
        className="mx-2"
        color="danger"
        name="user"
        {...args}
      />
      <Icon
        className="mx-2"
        color="primary"
        name="user"
        {...args}
      />
      <Icon
        className="mx-2"
        color="secondary"
        name="user"
        {...args}
      />
      <Icon
        className="mx-2"
        color="success"
        name="user"
        {...args}
      />
      <Icon
        className="mx-2"
        color="warning"
        name="user"
        {...args}
      />
    </>
  ),
}

export const IconSize: Story = {
  args: { disableFixed: false },
  render: (args) => (
    <>
      <Icon
        className="mx-2"
        name="user"
        size="sm"
        {...args}
      />
      <Icon
        className="mx-2"
        name="user"
        size="md"
        {...args}
      />
      <Icon
        className="mx-2"
        name="user"
        size="lg"
        {...args}
      />
    </>
  ),
}

export const Transform: Story = {
  args: { disableFixed: false },
  render: (args) => (
    <>
      <Icon
        className="mx-2"
        name="arrow-right"
        rotation={180}
        {...args}
      />
      <Icon
        className="mx-2"
        flip="vertical"
        name="arrow-up-from-bracket"
        {...args}
      />
      <Icon
        className="mx-2"
        name="arrow-right"
        rotation={270}
        {...args}
      />
    </>
  ),
}

export const Animation: Story = {
  args: { disableFixed: false },
  render: (args) => (
    <>
      <Icon
        animation="beat"
        className="mx-2"
        color="danger"
        name="heart"
        {...args}
      />
      <Icon
        animation="beat-fade"
        className="mx-2"
        name="magnifying-glass"
        {...args}
      />
      <Icon
        animation="bounce"
        className="mx-2"
        name="bell"
        {...args}
      />
      <Icon
        animation="fade"
        className="mx-2"
        name="bell"
        {...args}
      />
      <Icon
        animation="flip"
        className="mx-2"
        color="danger"
        name="bell"
        {...args}
      />
      <Icon
        animation="shake"
        className="mx-2"
        color="success"
        name="bell"
        {...args}
      />
      <Icon
        animation="spin"
        className="mx-2"
        color="warning"
        name="circle-notch"
        {...args}
      />
      <Icon
        animation="spin-reverse"
        className="mx-2"
        color={'secondary'}
        name="spinner"
        {...args}
      />
    </>
  ),
}
