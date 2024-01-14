import { Chip, Icon } from '@/components'
import { Color } from '@/types'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Data Display/Chip',
  component: Chip,
  tags: ['autodocs'],
} as Meta<typeof Chip>

type Story = StoryObj<typeof Chip>

export const Default: Story = {
  args: {},
  render: (args) => {
    const colors: Color[] = ['primary', 'secondary', 'danger', 'success', 'warning']
    return (
      <>
        {colors.map((item) => (
          <Chip
            color={item}
            key={item}
            {...args}
          >
            {'Chip Component'}
          </Chip>
        ))}
      </>
    )
  },
}

export const Colors: Story = {
  args: { href: 'https://haliscicek.com' },
  render: (args) => {
    const colors: Color[] = ['primary', 'secondary', 'danger', 'success', 'warning']
    return (
      <>
        {colors.map((item) => (
          <Chip
            color={item}
            key={item}
            {...args}
          >
            {item}
          </Chip>
        ))}
      </>
    )
  },
}

export const ChipSize: Story = {
  args: {},
  render: (args) => {
    return (
      <>
        <Chip
          {...args}
          size="sm"
        >
          {'Small'}
        </Chip>
        <Chip
          {...args}
          size="md"
        >
          {'Medium'}
        </Chip>
        <Chip
          {...args}
          size="lg"
        >
          {'Large'}
        </Chip>
      </>
    )
  },
}

export const Variants: Story = {
  args: {},
  render: (args) => {
    const colors: Color[] = ['primary', 'secondary', 'danger', 'success', 'warning']
    const variants = ['plain', 'pill', 'bordered']

    return (
      <div>
        {variants.map((item) => (
          <>
            {colors.map((color) => {
              return (
                <Chip
                  color={color}
                  key={item + color}
                  variant={item as never}
                  {...args}
                >
                  {item + ' - ' + color}
                </Chip>
              )
            })}
            <br className="my-2" />
          </>
        ))}
      </div>
    )
  },
}

export const LinkChip: Story = {
  args: { href: 'https://haliscicek.com' },
  render: (args) => (
    <>
      <Chip
        {...args}
        startDecarator={
          <Icon
            className="text-sm mr-1"
            disableFixed={false}
            name={'link'}
          />
        }
        variant="bordered"
      >
        {'haliscicek.com'}
      </Chip>
      <Chip
        {...args}
        color="secondary"
        startDecarator={
          <Icon
            className="text-sm mr-1"
            color="secondary"
            disableFixed={false}
            name={'link'}
          />
        }
        target="_blank"
        variant="bordered"
      >
        {'Open new tab...'}
      </Chip>
    </>
  ),
}

export const StartEndDecarators: Story = {
  args: {},
  render: (args) => (
    <>
      <Chip
        {...args}
        startDecarator={
          <Icon
            className="text-sm mr-1"
            disableFixed={false}
            name={'tag'}
          />
        }
      >
        {'Discount'}
      </Chip>
      <Chip
        {...args}
        color="danger"
        endDecarator={
          <Icon
            className="text-sm ml-1"
            color={'danger'}
            disableFixed={false}
            name={'close'}
          />
        }
      >
        {'Most Popular'}
      </Chip>
    </>
  ),
}
