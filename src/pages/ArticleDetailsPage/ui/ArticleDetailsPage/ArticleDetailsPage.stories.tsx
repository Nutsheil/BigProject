import type { Meta, StoryObj } from '@storybook/react';
import { StoreDecorator, ThemeDecorator } from 'shared/config/storybook';
import { Theme } from 'app/providers/ThemeProvider';
import { testArticle } from 'entities/Article/model/const/testArticle';
import ArticleDetailsPage from './ArticleDetailsPage';

type Story = StoryObj<typeof ArticleDetailsPage>;

const meta: Meta<typeof ArticleDetailsPage> = {
  title: 'pages/ArticleDetailsPage',
  component: ArticleDetailsPage,
  decorators: [StoreDecorator({ articleDetails: { data: testArticle } })],
};

export default meta;

export const Default: Story = {};

export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const Purple: Story = {
  decorators: [ThemeDecorator(Theme.PURPLE)],
};
