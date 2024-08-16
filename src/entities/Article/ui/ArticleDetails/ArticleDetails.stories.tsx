import type { Meta, StoryObj } from '@storybook/react';
import { StoreDecorator, ThemeDecorator } from 'shared/config/storybook';
import { Theme } from 'app/providers/ThemeProvider';
import { testArticle } from '../../model/const/testArticle';
import { ArticleDetails } from './ArticleDetails';

type Story = StoryObj<typeof ArticleDetails>;

const meta: Meta<typeof ArticleDetails> = {
  title: 'entities/Article/ArticleDetails',
  component: ArticleDetails,
};

export default meta;

export const Light: Story = {
  decorators: [StoreDecorator({ articleDetails: { data: testArticle } })],
};

export const Dark: Story = {
  decorators: [StoreDecorator({ articleDetails: { data: testArticle } }), ThemeDecorator(Theme.DARK)],
};

export const Purple: Story = {
  decorators: [StoreDecorator({ articleDetails: { data: testArticle } }), ThemeDecorator(Theme.PURPLE)],
};

export const LoadingLight: Story = {
  decorators: [StoreDecorator({ articleDetails: { isLoading: true } })],
};

export const LoadingDark: Story = {
  decorators: [StoreDecorator({ articleDetails: { isLoading: true } }), ThemeDecorator(Theme.DARK)],
};

export const LoadingPurple: Story = {
  decorators: [StoreDecorator({ articleDetails: { isLoading: true } }), ThemeDecorator(Theme.PURPLE)],
};

export const ErrorLight: Story = {
  decorators: [StoreDecorator({ articleDetails: { error: 'Error' } })],
};

export const ErrorDark: Story = {
  decorators: [StoreDecorator({ articleDetails: { error: 'Error' } }), ThemeDecorator(Theme.DARK)],
};

export const ErrorPurple: Story = {
  decorators: [StoreDecorator({ articleDetails: { error: 'Error' } }), ThemeDecorator(Theme.PURPLE)],
};
