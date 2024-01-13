import { Avatar, Badge, Icon } from '@/components'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Data Display/Badge',
  component: Badge,
  tags: ['autodocs'],
} as Meta<typeof Badge>

type Story = StoryObj<typeof Badge>

export const Default: Story = {
  args: {},
  render: (args) => (
    <Badge
      {...args}
      content={'unknown....'}
    >
      <Avatar size="lg">
        <Icon name={'user'} />
      </Avatar>
    </Badge>
  ),
}

export const Position: Story = {
  args: { color: 'danger' },
  render: (args) => (
    <div className="flex gap-x-72 ">
      <Badge
        {...args}
        content={'top-right'}
        position="top-right"
      >
        <Avatar size="lg">
          <Icon name={'user'} />
        </Avatar>
      </Badge>
      <Badge
        {...args}
        content={'top-left'}
        position="top-left"
      >
        <Avatar size="lg">
          <Icon name={'user'} />
        </Avatar>
      </Badge>
      <Badge
        {...args}
        content={'bottom-left'}
        position="bottom-left"
      >
        <Avatar size="lg">
          <Icon name={'user'} />
        </Avatar>
      </Badge>
      <Badge
        {...args}
        content={'bottom-right'}
        position="bottom-right"
      >
        <Avatar size="lg">
          <Icon name={'user'} />
        </Avatar>
      </Badge>
    </div>
  ),
}

export const Colors: Story = {
  args: {},
  render: (args) => (
    <div className="flex gap-x-72 ">
      <Badge
        {...args}
        color="primary"
        content={'primary'}
      >
        <Avatar size="lg">
          <Icon name={'user'} />
        </Avatar>
      </Badge>
      <Badge
        {...args}
        color="secondary"
        content={'secondary'}
      >
        <Avatar size="lg">
          <Icon name={'user'} />
        </Avatar>
      </Badge>
      <Badge
        {...args}
        color="danger"
        content={'danger'}
      >
        <Avatar size="lg">
          <Icon name={'user'} />
        </Avatar>
      </Badge>
      <Badge
        {...args}
        color="success"
        content={'success'}
      >
        <Avatar size="lg">
          <Icon name={'user'} />
        </Avatar>
      </Badge>
      <Badge
        {...args}
        color="warning"
        content={'warning'}
      >
        <Avatar size="lg">
          <Icon name={'user'} />
        </Avatar>
      </Badge>
    </div>
  ),
}

export const Size: Story = {
  args: { color: 'success' },
  render: (args) => (
    <div className="flex gap-x-72 ">
      <Badge
        {...args}
        content={'Small'}
        size="sm"
      >
        <Avatar size="lg">
          <Icon name={'user'} />
        </Avatar>
      </Badge>
      <Badge
        {...args}
        content={'Medium'}
        size="md"
      >
        <Avatar size="lg">
          <Icon name={'user'} />
        </Avatar>
      </Badge>
      <Badge
        {...args}
        content={'Large'}
        size="lg"
      >
        <Avatar size="lg">
          <Icon name={'user'} />
        </Avatar>
      </Badge>
    </div>
  ),
}
