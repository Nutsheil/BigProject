import type { Meta, StoryObj } from '@storybook/react';
import { StoreDecorator, ThemeDecorator } from 'shared/config/storybook';
import { Theme } from 'app/providers/ThemeProvider';
import AboutPage from './AboutPage';

type Story = StoryObj<typeof AboutPage>;

const meta: Meta<typeof AboutPage> = {
  title: 'pages/AboutPage',
  component: AboutPage,
};

export default meta;

export const Light: Story = {
  decorators: [StoreDecorator()],
};

export const Dark: Story = {
  decorators: [StoreDecorator(), ThemeDecorator(Theme.DARK)],
};
