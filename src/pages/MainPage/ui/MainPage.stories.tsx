import type { Meta, StoryObj } from '@storybook/react';
import { StoreDecorator, ThemeDecorator } from 'shared/config/storybook';
import { Theme } from 'app/providers/ThemeProvider';
import MainPage from './MainPage';

type Story = StoryObj<typeof MainPage>;

const meta: Meta<typeof MainPage> = {
  title: 'pages/MainPage',
  component: MainPage,
};

export default meta;

export const Default: Story = {
  decorators: [StoreDecorator()],
};

export const Dark: Story = {
  decorators: [StoreDecorator(), ThemeDecorator(Theme.DARK)],
};

export const Purple: Story = {
  decorators: [StoreDecorator(), ThemeDecorator(Theme.PURPLE)],
};
