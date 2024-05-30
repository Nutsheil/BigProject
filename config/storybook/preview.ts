import type { Preview } from '@storybook/react';
import { StyleDecorator, ThemeDecorator, RouterDecorator } from '../../src/shared/config/storybook';
import { Theme } from '../../src/app/provider/ThemeProvider';

const preview: Preview = {
  parameters: {
    layout: 'fullscreen',
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    StyleDecorator,
    ThemeDecorator(Theme.LIGHT),
    RouterDecorator,
  ],
};

export default preview;
