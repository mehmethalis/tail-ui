import { Preview, ReactRenderer } from '@storybook/react'
import { withThemeByDataAttribute } from '@storybook/addon-themes'
import '../src/styles/index.css'

const preview: Preview = {
  decorators: [
    withThemeByDataAttribute<ReactRenderer>({
      themes: {
        light: 'light',
        dark: 'dark',
      },
      defaultTheme: 'light',
      attributeName: 'theme-mode',
    }),
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
}

export default preview
