import { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook';
import { Theme } from 'app/provider/ThemeProvider';
import MainPage from './MainPage';

type Story = StoryObj<typeof MainPage>;

const meta: Meta<typeof MainPage> = {
  title: 'pages/MainPage',
  component: MainPage,
};

export default meta;

export const Light: Story = {};

export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
};
