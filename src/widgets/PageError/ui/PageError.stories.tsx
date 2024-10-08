import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook';
import { Theme } from 'app/providers/ThemeProvider';
import { PageError } from './PageError';

type Story = StoryObj<typeof PageError>;

const meta: Meta<typeof PageError> = {
  title: 'widgets/PageError',
  component: PageError,
};

export default meta;

export const Default: Story = {};

export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const Purple: Story = {
  decorators: [ThemeDecorator(Theme.PURPLE)],
};
