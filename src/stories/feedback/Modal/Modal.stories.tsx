import { Modal } from '@/components'
import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'

export default {
  title: 'Feedback/Modal',
  component: Modal,
  tags: ['autodocs'],
} as Meta<typeof Modal>

type Story = StoryObj<typeof Modal>

export const Default: Story = {
  args: {},
  render: () => {
    const [open, setOpen] = useState(false)
    return (
      <>
        <button onClick={() => setOpen((prev) => !prev)}>Open</button>
        <br />
        <small>🚧 building.... </small>
        <Modal
          isOpen={open}
          onClose={() => setOpen(false)}
        />
      </>
    )
  },
}
