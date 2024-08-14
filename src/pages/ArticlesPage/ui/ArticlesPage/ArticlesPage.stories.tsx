import type { Meta, StoryObj } from '@storybook/react';
import { StoreDecorator, ThemeDecorator } from 'shared/config/storybook';
import { Theme } from 'app/providers/ThemeProvider';
import ArticlesPage from './ArticlesPage';

type Story = StoryObj<typeof ArticlesPage>;

const meta: Meta<typeof ArticlesPage> = {
  title: 'pages/ArticlePage',
  component: ArticlesPage,
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
