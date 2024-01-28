import type { Meta, StoryObj } from '@storybook/react'
import { List } from '@/components/data-display/List'
import { Icon } from '@/components'
import { Color, Size } from '@/types'

export default {
  title: 'Data Display/List',
  component: List,
  tags: ['autodocs'],
} as Meta<typeof List>

type Story = StoryObj<typeof List>

export const Default: Story = {
  args: { id: 'default-list' },
  render: (args) => (
    <List {...args}>
      <List.Item key="1">List Item 1</List.Item>
      <List.Item key="2">List Item 2</List.Item>
      <List.Item key="3">List Item 3</List.Item>
    </List>
  ),
}

export const Adornments: Story = {
  args: { id: 'default-list' },
  render: (args) => (
    <List
      className="w-80"
      {...args}
    >
      <List.Item
        key="1"
        startAdornment={
          <Icon
            className="mr-4"
            color="secondary"
            disableFixed={false}
            name="home"
            size="sm"
          />
        }
      >
        Home
      </List.Item>
      <List.Item
        key="2"
        startAdornment={
          <Icon
            className="mr-4"
            color="secondary"
            disableFixed={false}
            name="users"
            size="sm"
          />
        }
      >
        Customers
      </List.Item>
      <List.Item
        endAdornment={
          <Icon
            className="absolute right-4"
            color="secondary"
            disableFixed={false}
            name="chevron-right"
            size="sm"
          />
        }
        key="3"
        startAdornment={
          <Icon
            className="mr-4"
            color="secondary"
            disableFixed={false}
            name="chart-simple"
            size="sm"
          />
        }
      >
        Dashboard
      </List.Item>
    </List>
  ),
}

export const Colors: Story = {
  args: { id: 'default-list' },
  render: (args) => (
    <div className="flex justify-around">
      {(['primary', 'secondary', 'danger', 'success', 'warning'] as Color[]).map((item) => (
        <List
          {...args}
          className="w-52"
          color={item}
          key={item}
        >
          <List.Item key="1">List Item 1</List.Item>
          <List.Item key="2">List Item 2</List.Item>
          <List.Item key="3">List Item 3</List.Item>
        </List>
      ))}
    </div>
  ),
}

export const ListSize: Story = {
  args: { id: 'size-list' },
  render: (args) => (
    <div className="flex justify-around">
      {(['sm', 'md', 'lg'] as Size[]).map((item) => (
        <List
          {...args}
          className="w-52"
          key={item}
          size={item}
        >
          <List.Item key="1">List Item 1</List.Item>
          <List.Item key="2">List Item 2</List.Item>
          <List.Item key="3">List Item 3</List.Item>
        </List>
      ))}
    </div>
  ),
}

export const Clickable: Story = {
  args: { id: 'click-list' },
  render: (args) => (
    <List
      className="w-80"
      {...args}
    >
      <List.Item
        key="1"
        onClick={(idx) => alert('clicked the item -> ' + idx)}
        startAdornment={
          <Icon
            className="mr-4"
            color="secondary"
            disableFixed={false}
            name="home"
            size="sm"
          />
        }
      >
        Home
      </List.Item>
      <List.Item
        key="2"
        onClick={(idx) => alert('clicked the item -> ' + idx)}
        startAdornment={
          <Icon
            className="mr-4"
            color="secondary"
            disableFixed={false}
            name="users"
            size="sm"
          />
        }
      >
        Customers
      </List.Item>
      <List.Item
        endAdornment={
          <Icon
            className="absolute right-4"
            color="secondary"
            disableFixed={false}
            name="chevron-right"
            size="sm"
          />
        }
        key="3"
        onClick={(idx) => alert('clicked the item -> ' + idx)}
        startAdornment={
          <Icon
            className="mr-4"
            color="secondary"
            disableFixed={false}
            name="chart-simple"
            size="sm"
          />
        }
      >
        Dashboard
      </List.Item>
    </List>
  ),
}
