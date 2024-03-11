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
  render: (args) => {
    const [open, setOpen] = useState(false)

    const Footer = () => (
      <button
        className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900  bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-sky-500   dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
        data-modal-hide="default-modal"
        type="button"
      >
        Decline
      </button>
    )
    return (
      <>
        <button
          className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900  bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-sky-500   dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          onClick={() => setOpen((prev) => !prev)}
          type="button"
        >
          Open
        </button>
        <br />
        <Modal
          {...args}
          footer={<Footer />}
          isOpen={open}
          onClose={() => setOpen(false)}
          title={'Terms of business'}
        >
          <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio praesentium
            reiciendis, incidunt sit animi veniam tempore excepturi inventore vitae culpa
            consectetur recusandae molestias a maiores cupiditate minima officiis esse quas?
          </p>
          <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum ipsa corporis
            laboriosam, aliquam, illo beatae tempora veniam, debitis earum quasi dicta nostrum
            eligendi laudantium ad? Inventore laborum praesentium voluptates quos!
          </p>
        </Modal>
      </>
    )
  },
}
