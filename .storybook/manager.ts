import { addons } from '@storybook/manager-api'
import storybookTheme from './storybook-theme'

addons.setConfig({
  theme: storybookTheme,
  sidebar: {
    showRoots: true,
    collapsedRoots: ['inputs', 'feedback', 'layout', 'navigation', 'surfaces'],
  },
})
