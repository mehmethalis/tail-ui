import type { Meta, StoryObj } from '@storybook/react'
import { Column, Table } from '@/components/data-display/Table'

export default {
  title: 'Data Display/Table',
  component: Table,
  tags: ['autodocs'],
} as Meta<typeof Table>

type Story = StoryObj<typeof Table>

const columns: Column[] = [
  { title: 'Ürün' },
  { title: 'Renk' },
  { title: 'Kategori' },
  { title: 'Fiyat' },
]

const rows = [
  { product: ' Mac', color: 'Black', category: 'Tech', price: 10 },
  { product: ' Phone', color: 'Silver', category: 'Tech', price: 100 },
  { product: ' Earbuds', color: 'White', category: 'Tech', price: 200.2 },
  { product: ' Speaker', color: 'White', category: 'Tech', price: 300 },
]
export const Default: Story = {
  args: {},
  render: (args) => (
    <div
      className="text-center "
      style={{ width: 600 }}
    >
      <br />
      <Table
        columns={columns}
        description="Browse a list of Flowbite products designed to help you work and play, stay organized, get answers, keep in touch, grow your business, and more."
        rows={rows}
        title="Our products "
        {...args}
      />
    </div>
  ),
}
export const StripedRows: Story = {
  args: {},
  render: (args) => (
    <div
      className="text-center "
      style={{ width: 600 }}
    >
      <br />
      <Table
        columns={columns}
        disableStriped={false}
        rows={rows}
        {...args}
      />
    </div>
  ),
}
const overFlowCols = [
  { title: 'Ürün' },
  { title: 'Renk' },
  { title: 'Kategori' },
  { title: 'Fiyat' },
  { title: 'Other1' },
  { title: 'Other2' },
  { title: 'Other3' },
  { title: 'Other4' },
]
const overflowRows = [
  {
    product: ' Mac',
    color: 'Black',
    category: 'Tech',
    price: 10,
    Other1: '0',
    other2: 'Nan',
    other3: 'Nan',
    other4: 'Nan',
  },
  {
    product: ' Mac',
    color: 'Black',
    category: 'Tech',
    price: 10,
    Other1: '0',
    other2: 'Nan',
    other3: 'Nan',
    other4: 'Nan',
  },
  {
    product: ' Mac',
    color: 'Black',
    category: 'Tech',
    price: 10,
    Other1: '0',
    other2: 'Nan',
    other3: 'Nan',
    other4: 'Nan',
  },
  {
    product: ' Mac',
    color: 'Black',
    category: 'Tech',
    price: 10,
    Other1: '0',
    other2: 'Nan',
    other3: 'Nan',
    other4: 'Nan',
  },
]
export const OverflowScroll: Story = {
  args: {},
  render: (args) => (
    <div
      className="text-center "
      style={{ width: 600 }}
    >
      <br />
      <Table
        columns={overFlowCols}
        disableStriped={false}
        rows={overflowRows}
        {...args}
      />
    </div>
  ),
}
