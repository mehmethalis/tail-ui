import type { Preview } from '@storybook/react'
import React from 'react'

const preview: Preview = {
  decorators: [
    (Story, context) => {
      window.localStorage.setItem('storybook-theme', context.globals.theme || 'light')
      return <Story />
    },
  ],
  parameters: {
    layout: 'padded',
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    options: {
      storySort: {
        order: [
          'Tail UI Library: Overview',
          'Data Display',
          'Data Grid',
          'Inputs',
          'Feedback',
          'Layout',
          'Navigation',
          'Surfaces',
          'Utils',
        ],
      },
    },
  },
  globalTypes: {
    theme: {
      name: 'Theme Mode',
      description: 'Global theme for components',
      defaultValue: 'light',
      toolbar: {
        icon: 'circlehollow',
        items: [
          { value: 'light', icon: 'circlehollow', title: 'Light' },
          { value: 'dark', icon: 'circle', title: 'Dark' },
        ],
        dynamicTitle: true,
      },
    },
  },
}

export default preview
