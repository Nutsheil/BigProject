import type { Preview } from '@storybook/react';
import { StyleDecorator, ThemeDecorator, RouterDecorator, StoreDecorator } from '../../src/shared/config/storybook';
import { Theme } from '../../src/app/providers/ThemeProvider';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    layout: 'fullscreen',
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [StyleDecorator, ThemeDecorator(Theme.LIGHT), RouterDecorator],
};

export default preview;
